/**
 * Notion CMS integration.
 *
 * Fetches blog posts from a Notion database at build time and converts
 * them to HTML for static site generation.
 *
 * Required env vars (set in Vercel project settings):
 *   NOTION_TOKEN        — integration secret (starts with "ntn_" or "secret_")
 *   NOTION_DATABASE_ID  — 32-char database id (with or without dashes)
 *
 * Expected Notion database schema (column types):
 *   Title             — Title       (post title)
 *   Slug              — Text        (URL slug; lowercase, hyphenated)
 *   Status            — Select      (Draft / Published — only "Published" is built)
 *   Excerpt           — Text        (short description for listing + meta)
 *   Cover             — Files       (header image — optional)
 *   SEO Title         — Text        (optional override for <title>)
 *   SEO Description   — Text        (optional override for meta description)
 *   Tags              — Multi-select (categories)
 *   Author            — Text        (author name)
 *   Published Date    — Date        (date published)
 */
import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";
import { marked } from "marked";

const NOTION_TOKEN       = import.meta.env.NOTION_TOKEN ?? process.env.NOTION_TOKEN ?? "";
const NOTION_DATABASE_ID = import.meta.env.NOTION_DATABASE_ID ?? process.env.NOTION_DATABASE_ID ?? "";

export const notionConfigured = Boolean(NOTION_TOKEN && NOTION_DATABASE_ID);

const notion = notionConfigured ? new Client({ auth: NOTION_TOKEN }) : null;
const n2m    = notion ? new NotionToMarkdown({ notionClient: notion }) : null;

marked.setOptions({ gfm: true, breaks: false });

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  seoTitle: string;
  seoDescription: string;
  coverUrl: string | null;
  tags: string[];
  author: string;
  publishedDate: string;        // ISO date string
  publishedDateFormatted: string;
};

export type BlogPostWithBody = BlogPost & { html: string };

// ---------- helpers ----------
function readTitle(prop: any): string {
  if (!prop || prop.type !== "title") return "";
  return prop.title.map((t: any) => t.plain_text).join("");
}
function readRichText(prop: any): string {
  if (!prop) return "";
  const arr = prop.type === "rich_text" ? prop.rich_text : prop.type === "title" ? prop.title : [];
  return arr.map((t: any) => t.plain_text).join("");
}
function readSelect(prop: any): string {
  return prop?.select?.name ?? "";
}
function readMultiSelect(prop: any): string[] {
  return prop?.multi_select?.map((s: any) => s.name) ?? [];
}
function readDate(prop: any): string {
  return prop?.date?.start ?? "";
}
function readCoverUrl(prop: any, pageCover: any): string | null {
  // Prefer the explicit "Cover" Files property; fall back to the page-level cover.
  if (prop?.type === "files" && prop.files?.length) {
    const f = prop.files[0];
    return f.type === "external" ? f.external.url : f.type === "file" ? f.file.url : null;
  }
  if (pageCover) {
    return pageCover.type === "external" ? pageCover.external.url : pageCover.type === "file" ? pageCover.file.url : null;
  }
  return null;
}
function formatDate(iso: string): string {
  if (!iso) return "";
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
  } catch { return iso; }
}
function pageToPost(page: any): BlogPost {
  const props = page.properties ?? {};
  const title = readTitle(props.Title) || readTitle(props.Name);
  const slug  = readRichText(props.Slug).trim().toLowerCase().replace(/[^a-z0-9-]+/g, "-").replace(/^-|-$/g, "");
  const excerpt = readRichText(props.Excerpt);
  const seoTitle = readRichText(props["SEO Title"]) || title;
  const seoDescription = readRichText(props["SEO Description"]) || excerpt;
  const coverUrl = readCoverUrl(props.Cover, page.cover);
  const tags = readMultiSelect(props.Tags);
  const author = readRichText(props.Author) || "QualityNexus";
  const publishedDate = readDate(props["Published Date"]) || page.created_time?.slice(0, 10) || "";
  return {
    id: page.id,
    slug: slug || page.id,
    title,
    excerpt,
    seoTitle,
    seoDescription,
    coverUrl,
    tags,
    author,
    publishedDate,
    publishedDateFormatted: formatDate(publishedDate),
  };
}

// ---------- public API ----------
export async function getAllPosts(): Promise<BlogPost[]> {
  if (!notion) return [];
  try {
    const response = await notion.databases.query({
      database_id: NOTION_DATABASE_ID,
      filter: {
        property: "Status",
        select: { equals: "Published" },
      },
      sorts: [{ property: "Published Date", direction: "descending" }],
      page_size: 100,
    });
    return response.results.map(pageToPost).filter((p) => p.title && p.slug);
  } catch (err) {
    console.error("[notion] getAllPosts failed:", err instanceof Error ? err.message : err);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPostWithBody | null> {
  if (!notion || !n2m) return null;
  const posts = await getAllPosts();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return null;
  try {
    const mdBlocks = await n2m.pageToMarkdown(post.id);
    const md = n2m.toMarkdownString(mdBlocks).parent ?? "";
    const html = await marked.parse(md);
    return { ...post, html };
  } catch (err) {
    console.error(`[notion] getPostBySlug(${slug}) failed:`, err instanceof Error ? err.message : err);
    return null;
  }
}
