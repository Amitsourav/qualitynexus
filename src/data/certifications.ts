export const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export type Standard = { code: string; name: string };

export type Category = {
  id: string;
  icon: string;
  title: string;
  blurb: string;
  standards: Standard[];
};

export const categories: Category[] = [
  {
    id: "quality",
    icon: "check-circle",
    title: "Quality & Process",
    blurb: "Foundational management-system standards for quality, customer satisfaction, and operational consistency.",
    standards: [
      { code: "ISO 9001",      name: "Quality Management Systems" },
      { code: "ISO 9004",      name: "Quality Management — Sustained Success" },
      { code: "ISO 10002",     name: "Customer Complaint Handling" },
      { code: "ISO 10006",     name: "Quality Management in Projects" },
      { code: "ISO 13485",     name: "Medical Devices QMS" },
      { code: "ISO 17025",     name: "Testing & Calibration Laboratories" },
      { code: "ISO/TS 22163",  name: "Railway Industry QMS" },
      { code: "TL 9000",       name: "Telecom Quality Management" },
      { code: "IATF 16949",    name: "Automotive QMS" },
      { code: "AS 9100",       name: "Aerospace QMS — Manufacturers" },
      { code: "AS 9110",       name: "Aerospace QMS — Maintenance" },
      { code: "AS 9120",       name: "Aerospace QMS — Distributors" },
    ],
  },
  {
    id: "infosec",
    icon: "lock",
    title: "Information Security & Privacy",
    blurb: "Frameworks for protecting information, customer data, and digital infrastructure across cloud, on-prem, and hybrid systems.",
    standards: [
      { code: "ISO 27001",     name: "Information Security Management" },
      { code: "ISO 27017",     name: "Cloud Security Controls" },
      { code: "ISO 27018",     name: "Cloud Personal Data Protection" },
      { code: "ISO 27701",     name: "Privacy Information Management" },
      { code: "ISO 27032",     name: "Cybersecurity Guidelines" },
      { code: "ISO 27035",     name: "Information Security Incident Management" },
      { code: "ISO 27799",     name: "Healthcare Information Security" },
      { code: "ISO 28001",     name: "Supply Chain Security" },
      { code: "SOC 1",         name: "Financial Reporting Controls" },
      { code: "SOC 2",         name: "Service Organization Trust Criteria" },
      { code: "SOC 3",         name: "Public Trust Services Report" },
      { code: "PCI DSS",       name: "Payment Card Industry Data Security" },
    ],
  },
  {
    id: "environment",
    icon: "leaf",
    title: "Environmental & Sustainability",
    blurb: "Standards for environmental responsibility, carbon accounting, lifecycle assessment, and green operations.",
    standards: [
      { code: "ISO 14001",     name: "Environmental Management Systems" },
      { code: "ISO 14004",     name: "Environmental Management Guidelines" },
      { code: "ISO 14020",     name: "Environmental Labels & Declarations" },
      { code: "ISO 14040",     name: "Lifecycle Assessment — Principles" },
      { code: "ISO 14046",     name: "Water Footprint" },
      { code: "ISO 14064",     name: "Greenhouse Gas Accounting" },
      { code: "ISO 14067",     name: "Carbon Footprint of Products" },
      { code: "ISO 14090",     name: "Adaptation to Climate Change" },
      { code: "ISO 50001",     name: "Energy Management Systems" },
      { code: "ISO 26000",     name: "Social Responsibility" },
      { code: "ISO 20121",     name: "Sustainable Event Management" },
      { code: "ISO 17033",     name: "Ethical Claims & Verification" },
    ],
  },
  {
    id: "safety",
    icon: "hard-hat",
    title: "Health, Safety & Wellbeing",
    blurb: "Occupational health, safety, road safety, and psychological safety frameworks for risk-aware organizations.",
    standards: [
      { code: "ISO 45001",     name: "Occupational Health & Safety" },
      { code: "ISO 45003",     name: "Psychological Health at Work" },
      { code: "ISO 39001",     name: "Road Traffic Safety Management" },
      { code: "OHSAS 18001",   name: "Legacy OH&S — Migration to 45001" },
      { code: "ISO 22000",     name: "Food Safety Management" },
      { code: "ISO 41001",     name: "Facility Management Systems" },
    ],
  },
  {
    id: "food-medical",
    icon: "stethoscope",
    title: "Food, Pharma & Medical",
    blurb: "Sector-specific standards covering food safety, pharmaceutical practice, medical devices, and laboratory operations.",
    standards: [
      { code: "ISO 22000",     name: "Food Safety Management" },
      { code: "FSSC 22000",    name: "Food Safety Certification Scheme" },
      { code: "HACCP",         name: "Hazard Analysis & Critical Control" },
      { code: "ISO 22716",     name: "Cosmetics — Good Manufacturing Practice" },
      { code: "GMP",           name: "Good Manufacturing Practice (Pharma)" },
      { code: "GDP",           name: "Good Distribution Practice" },
      { code: "GLP",           name: "Good Laboratory Practice" },
      { code: "ISO 13485",     name: "Medical Devices QMS" },
      { code: "ISO 11135",     name: "Ethylene Oxide Sterilization" },
      { code: "ISO 11137",     name: "Radiation Sterilization" },
      { code: "ISO 17034",     name: "Reference Material Producers" },
      { code: "BRCGS",         name: "Brand Reputation Compliance" },
    ],
  },
  {
    id: "it-ai",
    icon: "cpu",
    title: "IT, AI & Software",
    blurb: "Standards for IT service management, AI governance, software quality, and digital governance frameworks.",
    standards: [
      { code: "ISO 42001",     name: "AI Management Systems" },
      { code: "ISO 38500",     name: "Corporate Governance of IT" },
      { code: "ISO 33000",     name: "Process Assessment Framework" },
      { code: "ISO/IEC 25010", name: "Software Quality Model" },
      { code: "ISO/IEC 12207", name: "Software Lifecycle Processes" },
      { code: "ISO 20000-1",   name: "IT Service Management" },
      { code: "ISO 19770",     name: "Software Asset Management" },
      { code: "ISO 24762",     name: "ICT Disaster Recovery" },
      { code: "ISO 23053",     name: "AI/ML Framework" },
      { code: "ISO 5338",      name: "AI System Lifecycle" },
    ],
  },
  {
    id: "risk-governance",
    icon: "scale",
    title: "Risk, Governance & Anti-Bribery",
    blurb: "Enterprise risk, compliance, anti-bribery, and corporate governance management systems.",
    standards: [
      { code: "ISO 31000",     name: "Risk Management Principles" },
      { code: "ISO 37001",     name: "Anti-Bribery Management" },
      { code: "ISO 37301",     name: "Compliance Management" },
      { code: "ISO 37000",     name: "Governance of Organizations" },
      { code: "ISO 19600",     name: "Compliance Management — Legacy" },
      { code: "ISO 22301",     name: "Business Continuity Management" },
      { code: "ISO 22316",     name: "Organizational Resilience" },
      { code: "ISO 31022",     name: "Legal Risk Management" },
    ],
  },
  {
    id: "energy-asset",
    icon: "battery",
    title: "Energy, Asset & Infrastructure",
    blurb: "Energy management, physical asset management, smart grid, and large-infrastructure standards.",
    standards: [
      { code: "ISO 50001",     name: "Energy Management Systems" },
      { code: "ISO 55001",     name: "Asset Management Systems" },
      { code: "ISO 19650",     name: "BIM — Information Management" },
      { code: "ISO 21500",     name: "Project Management Guidance" },
      { code: "ISO 21001",     name: "Educational Organizations Management" },
      { code: "ISO 27019",     name: "Energy Utility Information Security" },
      { code: "ISO 80001",     name: "Medical Device Network Risk" },
    ],
  },
  {
    id: "people-social",
    icon: "users",
    title: "People, HR & Social Responsibility",
    blurb: "Standards covering human-resource governance, social responsibility, and ethical sourcing.",
    standards: [
      { code: "ISO 30414",     name: "Human Capital Reporting" },
      { code: "ISO 30401",     name: "Knowledge Management Systems" },
      { code: "SA 8000",       name: "Social Accountability" },
      { code: "ISO 26000",     name: "Social Responsibility Guidance" },
      { code: "ISO 24143",     name: "Information Governance" },
      { code: "ISO 9241",      name: "Ergonomics of Human-System Interaction" },
    ],
  },
  {
    id: "automotive-aero",
    icon: "rocket",
    title: "Automotive, Aerospace & Defence",
    blurb: "Sector-specific quality and safety standards for automotive supply chains, aerospace, and defence manufacturing.",
    standards: [
      { code: "IATF 16949",    name: "Automotive QMS" },
      { code: "VDA 6.3",       name: "Process Audits — Automotive" },
      { code: "AS 9100",       name: "Aerospace QMS — Manufacturers" },
      { code: "AS 9110",       name: "Aerospace QMS — Maintenance" },
      { code: "AS 9120",       name: "Aerospace QMS — Distributors" },
      { code: "NADCAP",        name: "Aerospace Special Processes" },
      { code: "JOSCAR",        name: "Defence & Aerospace Supplier Registration" },
    ],
  },
  {
    id: "other",
    icon: "globe",
    title: "Other & Specialist",
    blurb: "Niche and emerging standards — collaborative business, translation services, and sector-specific frameworks.",
    standards: [
      { code: "ISO 44001",     name: "Collaborative Business Relationships" },
      { code: "ISO 17100",     name: "Translation Services" },
      { code: "ISO 18587",     name: "Post-Editing of Machine Translation" },
      { code: "ISO 21001",     name: "Educational Organizations" },
      { code: "ISO 37101",     name: "Sustainable Communities" },
      { code: "ISO 56002",     name: "Innovation Management" },
      { code: "ISO 30301",     name: "Records Management Systems" },
      { code: "ISO 20400",     name: "Sustainable Procurement" },
    ],
  },
];

export const totalStandards = categories.reduce((n, c) => n + c.standards.length, 0);

// Deduplicated list of all standards (some appear under multiple categories — e.g. ISO 13485, IATF 16949).
// Keys by slug to ensure stable static paths.
export const allStandards = (() => {
  const seen = new Map<string, { code: string; name: string; category: Category }>();
  for (const cat of categories) {
    for (const s of cat.standards) {
      const slug = slugify(s.code);
      if (!seen.has(slug)) seen.set(slug, { code: s.code, name: s.name, category: cat });
    }
  }
  return Array.from(seen.entries()).map(([slug, v]) => ({ slug, ...v }));
})();

export type CertCard = { title: string; body: string };

export type CertDetail = {
  intro: string;          // "What is X?" — 1 paragraph
  principles: string[];   // 4–6 bullets
  why: CertCard[];        // 5 cards: "Why X matters"
  benefits: CertCard[];   // 4 cards: Customers / Operations / Management / Finance
  audience: string;       // "Who can benefit?"
};

// Authored detail for the flagship standards QualityNexus most often consults on.
// Other standards fall back to a clean stub on the detail page.
export const details: Record<string, CertDetail> = {
  "iso-9001": {
    intro:
      "ISO 9001 is the world's most recognized standard for quality management systems. It defines the requirements for a process-based approach to consistently meeting customer expectations and applicable regulatory requirements — across manufacturing, services, public sector, and everything in between. Certification signals to customers and regulators that your operations are measured, controlled, and continually improving.",
    principles: [
      "Customer focus — quality is judged by what the customer experiences, not what you intended",
      "Leadership commitment — top management owns the QMS, not a quality department in isolation",
      "Process approach — interrelated activities are managed as a system, not as silos",
      "Risk-based thinking — preventive action embedded in every process, not bolted on at the end",
      "Evidence-based decision making — data, audits, and reviews drive corrective action",
      "Continual improvement — the management review cycle is not optional",
    ],
    why: [
      { title: "Tender eligibility", body: "Most large enterprise, PSU, and government contracts require ISO 9001 as a baseline — without it, you don't make the longlist." },
      { title: "Customer trust", body: "An accredited certificate is third-party proof that quality isn't a marketing claim. It survives leadership changes and staff turnover." },
      { title: "Reduced rework", body: "The clause-8 operational controls force documented procedures that catch defects early, not at delivery." },
      { title: "Regulatory alignment", body: "ISO 9001's structure (Annex SL) maps cleanly onto 14001, 45001, 27001 — making integrated management systems achievable." },
      { title: "Internal discipline", body: "Mandatory internal audits and management reviews surface issues that would otherwise live in the gap between teams." },
    ],
    benefits: [
      { title: "For customers", body: "Predictable quality, faster complaint resolution, and a documented escalation path that doesn't depend on individual heroes." },
      { title: "For operations", body: "Process documentation reduces tribal knowledge risk; corrective action records create a learning system." },
      { title: "For management", body: "Quarterly management reviews convert quality from a feeling into a dashboard with KPIs you can act on." },
      { title: "For finance", body: "Lower cost of poor quality (rework, scrap, warranty), and access to enterprise contracts that require ISO 9001 in the RFP." },
    ],
    audience:
      "ISO 9001 fits any organization — from a 10-person services firm to a 10,000-person manufacturer. It is most commonly the first management-system standard adopted, and forms the foundation other standards (14001, 45001, 13485, 27001) integrate cleanly with.",
  },
  "iso-14001": {
    intro:
      "ISO 14001 is the international standard for environmental management systems. It is not a performance standard — it does not prescribe specific emission levels — but a management standard: it requires you to identify your environmental aspects, set objectives proportionate to them, control your significant impacts, and continually improve. It is the credible answer to 'how does your company manage its environmental footprint?'",
    principles: [
      "Lifecycle perspective — consider impacts upstream of your inputs and downstream of your outputs",
      "Compliance obligations — legal and other commitments are explicitly tracked, not assumed",
      "Significant aspects — focus on what matters, not a checklist of trivial items",
      "Operational control — environmental thinking embedded in procurement, design, and operations",
      "Emergency preparedness — spills, releases, and incidents have planned response",
      "Continual improvement — reduction targets are documented, measured, and reviewed",
    ],
    why: [
      { title: "Regulatory coverage", body: "A 14001 system catches environmental compliance obligations before regulators do — and documents the response." },
      { title: "Supply-chain expectation", body: "Multinational customers and ESG-conscious enterprises increasingly require 14001 from their tier-1 suppliers." },
      { title: "ESG reporting credibility", body: "14001's structure underpins the environmental pillar of ESG disclosures — without it, claims read as marketing." },
      { title: "Operational savings", body: "Energy, water, and waste reduction objectives often pay back the certification cost within the first cycle." },
      { title: "Risk reduction", body: "Environmental incidents (spills, breaches, fines) are pre-planned for, not improvised under pressure." },
    ],
    benefits: [
      { title: "For customers", body: "A documented environmental commitment that survives audit — useful in tenders that score sustainability." },
      { title: "For operations", body: "Aspect-impact registers force teams to understand where they actually use resources, not where they assume they do." },
      { title: "For management", body: "Compliance obligation tracking is centralized — leadership sees one register, not scattered emails." },
      { title: "For finance", body: "Reduced energy, water, and waste costs; lower insurance premiums on environmental risk; cleaner regulatory filings." },
    ],
    audience:
      "ISO 14001 is relevant for any organization with measurable environmental impact — manufacturing, infrastructure, logistics, hospitality, healthcare, and increasingly services firms responding to ESG procurement criteria.",
  },
  "iso-45001": {
    intro:
      "ISO 45001 replaced OHSAS 18001 as the international standard for occupational health and safety management systems. It moves beyond hazard control into a risk-based, worker-participatory model — the safety system is not a compliance file maintained by an EHS officer, it is an operational discipline that everyone, including senior leadership, owns.",
    principles: [
      "Worker participation — non-managerial workers must be consulted in hazard identification and decision making",
      "Hazard identification and risk assessment — proactive, not reactive to incidents",
      "Legal and regulatory compliance — tracked as obligations, not assumed",
      "Operational planning and control — safety embedded in work procedures",
      "Emergency preparedness and response — drills, plans, and post-incident review",
      "Continual improvement — leading indicators (near-miss, observation) tracked alongside lagging (LTIFR, severity)",
    ],
    why: [
      { title: "Legal duty of care", body: "Regulators increasingly expect documented systems, not isolated PPE and posters. 45001 demonstrates structured compliance." },
      { title: "Workforce protection", body: "A real safety culture reduces serious incidents — and makes the difference visible to anyone walking the shop floor." },
      { title: "Insurance leverage", body: "Insurers price risk based on management system quality. Accredited 45001 certification is a measurable input." },
      { title: "Tender competitiveness", body: "PSU, infrastructure, and oil-and-gas contracts almost always require 45001 — without it, EHS scoring tanks." },
      { title: "Integrated management", body: "Annex SL alignment means 45001 layers cleanly onto 9001 and 14001 — one document set, three certificates." },
    ],
    benefits: [
      { title: "For workers", body: "A genuine voice in identifying hazards, with documented procedures for raising and resolving safety issues." },
      { title: "For operations", body: "Safer worksites, fewer disruptions, and a reduction in the kind of incidents that pause production for investigations." },
      { title: "For management", body: "Leading indicators tracked in real time — leadership sees safety performance on the same dashboard as throughput and quality." },
      { title: "For finance", body: "Lower lost-time injury costs, reduced insurance premiums, and avoidance of regulatory penalties from preventable incidents." },
    ],
    audience:
      "ISO 45001 applies wherever workers face occupational hazards — construction, manufacturing, mining, oil and gas, healthcare, logistics, and increasingly office environments responding to psychosocial risk and ergonomic concerns.",
  },
  "iso-27001": {
    intro:
      "ISO 27001 is the international standard for information security management systems. It is the framework most commonly demanded by enterprise customers, regulators, and partners as proof that an organization manages information security risk in a structured, auditable way. The 2022 revision replaced the legacy 14-domain Annex A with four themes (organizational, people, physical, technological) and 93 controls — your Statement of Applicability defines which apply to your scope.",
    principles: [
      "Risk-based — controls are selected because they treat identified risks, not because they appear on a checklist",
      "Top-down ownership — information security is a leadership topic with documented top-management commitment",
      "Asset-centric — every information asset has an owner, classification, and handling requirement",
      "Process-driven — change management, access provisioning, incident response operate as defined processes",
      "Continual improvement — internal audits, management reviews, and corrective action are mandatory",
      "Statement of Applicability — every Annex A control is either implemented, justified as not applicable, or explicitly excluded",
    ],
    why: [
      { title: "Customer procurement gates", body: "Enterprise B2B sales increasingly require ISO 27001 in the security questionnaire — many procurement teams will not whitelist a vendor without it." },
      { title: "Regulatory alignment", body: "ISO 27001 maps cleanly onto DPDP, GDPR, RBI, IRDAI, and SEBI cybersecurity expectations — one system, multiple regulator answers." },
      { title: "Data breach defence", body: "A documented incident response process, asset inventory, and access control regime materially reduce both breach probability and post-breach blast radius." },
      { title: "Supply chain credibility", body: "If your customers are 27001 certified, they need their suppliers to be too — increasingly contracted as a flow-down requirement." },
      { title: "Insurance pricing", body: "Cyber insurance underwriting now scores ISMS maturity. Accredited 27001 certification reduces premiums and broadens coverage." },
    ],
    benefits: [
      { title: "For customers", body: "Demonstrable assurance that data they share is handled under controlled, audited processes — not at the discretion of individuals." },
      { title: "For operations", body: "Fewer fire-drill responses to security incidents — a defined process replaces tribal heroics." },
      { title: "For management", body: "Risk register and SoA give leadership a real picture of security posture — not a vendor spreadsheet of hopes." },
      { title: "For finance", body: "Reduced breach exposure, lower cyber insurance premiums, and access to enterprise contracts that require 27001 as table stakes." },
    ],
    audience:
      "ISO 27001 fits any organization handling sensitive information — SaaS and IT services firms (where it is now expected), banks and NBFCs, healthcare operators, BPO/KPO providers, and increasingly any vendor that processes customer data on behalf of an enterprise client.",
  },
  "iso-13485": {
    intro:
      "ISO 13485 is the quality management system standard specific to medical devices. It is the prerequisite to CE marking under MDR (Europe), supports MDSAP submissions (US, Brazil, Japan, Australia, Canada), and is referenced in India's Medical Device Rules. Unlike ISO 9001, 13485 is regulatory-grade — every clause carries an implicit 'because patient safety' justification and the audit trail must withstand notified-body scrutiny.",
    principles: [
      "Regulatory focus — meeting applicable medical device regulations is the first-order objective, not customer satisfaction",
      "Risk management — ISO 14971 risk file is referenced at every product lifecycle stage",
      "Document control — every controlled document has revision history that must be reproducible on demand",
      "Design and development — DHF, DMR, and DHR records are not optional and must survive years of audits",
      "Supplier control — purchased components and services are evaluated against device-class risk",
      "Post-market surveillance — vigilance, complaint handling, and CAPA operate as a closed loop",
    ],
    why: [
      { title: "Market access", body: "Without 13485, you cannot CE-mark in Europe, sell into MDSAP-aligned jurisdictions, or supply most large hospital procurement systems." },
      { title: "Notified body audits", body: "13485 certification is the structured artifact your notified body audits against — without it, every regulatory submission starts from scratch." },
      { title: "Patient safety", body: "The standard's emphasis on risk and traceability is the operational discipline behind 'do no harm' in a manufactured device context." },
      { title: "Supply chain expectations", body: "OEMs and contract manufacturers now require 13485 from component suppliers — without it, you're a sub-tier risk." },
      { title: "Investment readiness", body: "Medtech investors and acquirers expect 13485 — the absence signals regulatory immaturity that depresses valuation." },
    ],
    benefits: [
      { title: "For patients", body: "Devices reach the market with documented design verification, validated production, and a vigilance loop for issues post-launch." },
      { title: "For operations", body: "Regulatory audits become routine rather than crises — DHF, DMR, DHR records are maintained as a function of normal operations." },
      { title: "For management", body: "Visibility into product risk, supplier performance, and post-market signals — all in one management review cycle." },
      { title: "For finance", body: "Faster regulatory approvals, cleaner notified-body audits, and material reduction in field action and recall exposure." },
    ],
    audience:
      "ISO 13485 is required for medical device manufacturers (Class A through D), contract manufacturers, sterilizers, and increasingly for software-as-a-medical-device (SaMD) developers. It also applies to organizations providing services that affect device quality — calibration labs, packaging, and distribution.",
  },
  "iso-22000": {
    intro:
      "ISO 22000 is the international standard for food safety management systems. It integrates HACCP principles with ISO management system structure, covering the entire food chain — from primary producers and feed manufacturers to processors, transporters, retailers, and food service. It is the credible answer to 'how do you ensure the food you handle is safe?'",
    principles: [
      "Hazard analysis — biological, chemical, and physical hazards identified at every step",
      "Critical control points — defined, monitored, and verified, with corrective action when limits are breached",
      "Prerequisite programmes — GMP, hygiene, pest control, and supplier control as the foundation",
      "Communication along the food chain — both upstream and downstream, not just within the gates",
      "Operational control — food safety embedded in production planning, not bolted on afterwards",
      "Continual improvement — hazard analysis revisited as products, processes, and supply chains change",
    ],
    why: [
      { title: "Retailer and customer expectation", body: "Modern trade, exporters, and large food service buyers increasingly require certified food safety — 22000 or its derivative FSSC 22000." },
      { title: "Regulatory readiness", body: "Aligns with FSSAI requirements in India and Codex Alimentarius internationally — auditable, defensible food safety." },
      { title: "Recall reduction", body: "A working HACCP plan combined with traceability discipline catches problems before they reach the consumer." },
      { title: "Export credibility", body: "Food exports to EU, US, and Middle East increasingly require certified food safety as a gate." },
      { title: "Brand protection", body: "One contamination incident can destroy a brand — 22000 is the structural defence." },
    ],
    benefits: [
      { title: "For consumers", body: "A documented food-safety discipline that operates whether the regulator is watching or not." },
      { title: "For operations", body: "HACCP plans force teams to map their actual process — not the version that lives on a poster in the canteen." },
      { title: "For management", body: "Traceability, supplier scoring, and incident records give leadership a real picture of food-safety posture." },
      { title: "For finance", body: "Reduced recall exposure, access to retail and export contracts, and lower insurance premiums on product liability." },
    ],
    audience:
      "ISO 22000 applies across the food chain — primary producers, feed manufacturers, processors, packagers, transporters, retailers, and food-service operators. FSSC 22000 (the GFSI-recognized scheme built on 22000 + sector-specific PRPs) is increasingly the requirement for processors selling into modern trade.",
  },
  "iso-50001": {
    intro:
      "ISO 50001 is the international standard for energy management systems. It applies to any organization that uses energy at meaningful scale and provides a structured discipline — measurement, baselines, energy performance indicators, and improvement projects — to reduce consumption and cost without compromising operations.",
    principles: [
      "Energy review — identify significant energy uses, drivers, and improvement opportunities",
      "Energy baseline — measurable starting point against which performance is tracked",
      "Energy performance indicators — quantitative metrics, normalized for production and weather",
      "Action plans — improvement projects with assigned ownership, budget, and timelines",
      "Operational control — energy thinking embedded in procurement, maintenance, and design",
      "Continual improvement — measurable reduction targets reviewed in management review",
    ],
    why: [
      { title: "Direct cost savings", body: "Energy costs are typically 5–30% of operating expense in industrial contexts — measurable reduction goes straight to margin." },
      { title: "ESG reporting alignment", body: "Scope 1 and 2 emissions reporting under BRSR, CSRD, and TCFD becomes auditable, not estimated." },
      { title: "Regulatory readiness", body: "PAT scheme (India), EU Energy Efficiency Directive, and similar regimes increasingly demand structured energy management." },
      { title: "Operational efficiency", body: "Energy data exposes inefficiency that's invisible in production data alone — leaks, idle running, oversized equipment." },
      { title: "Capex prioritization", body: "Energy reviews surface high-ROI improvement projects that compete fairly with growth capex on payback grounds." },
    ],
    benefits: [
      { title: "For customers", body: "Lower-carbon products, increasingly relevant in B2B contexts where the customer's Scope 3 includes your Scope 1 and 2." },
      { title: "For operations", body: "Energy data exposes inefficiency that production teams act on — once, in a structured improvement project, not as ongoing firefighting." },
      { title: "For management", body: "Energy performance becomes a dashboard metric reviewed alongside throughput and quality, with assigned ownership." },
      { title: "For finance", body: "Direct utility cost reduction, eligibility for energy incentives, and improved disclosures to ESG-sensitive investors." },
    ],
    audience:
      "ISO 50001 is most commonly adopted by manufacturers, infrastructure operators (power, water, transit), data centres, hospitals, hotels, and large commercial buildings. It is also a near-default expectation for organizations subject to India's PAT scheme or similar regulated energy efficiency regimes.",
  },
  "iso-17025": {
    intro:
      "ISO 17025 is the international standard for testing and calibration laboratories. Unlike ISO 9001 (which is generic), 17025 covers the technical competence of the lab itself — equipment calibration, method validation, measurement uncertainty, and the qualification of personnel performing the tests. NABL accreditation in India is granted against ISO 17025.",
    principles: [
      "Technical competence — personnel, methods, equipment, and environment all qualified for the tests performed",
      "Measurement traceability — every measurement traceable to national or international standards",
      "Measurement uncertainty — quantified for every test, not assumed",
      "Method validation — every test method verified to perform as specified before use",
      "Impartiality — laboratory free from conflicts of interest that would compromise results",
      "Quality control — internal QC, proficiency testing, and inter-laboratory comparisons run continuously",
    ],
    why: [
      { title: "Regulatory acceptance", body: "Test reports from accredited 17025 labs are accepted by regulators, courts, customs, and customers — non-accredited reports often are not." },
      { title: "NABL accreditation", body: "In India, 17025 is the standard NABL accreditation is granted against — the prerequisite to credible test reports." },
      { title: "Customer credibility", body: "Pharmaceutical, medical device, food, and infrastructure customers will only accept test results from 17025-accredited labs." },
      { title: "Method discipline", body: "Forces validated methods, calibrated equipment, and trained analysts — not 'we've always done it this way'." },
      { title: "Inter-lab comparability", body: "PT participation surfaces problems before customers do — a real-world check on day-to-day performance." },
    ],
    benefits: [
      { title: "For customers", body: "Test reports they can submit to their own regulators, customers, and certification bodies without further verification." },
      { title: "For operations", body: "Method validation, equipment calibration, and PT scoring create a measurable picture of technical performance — beyond gut feel." },
      { title: "For management", body: "Lab performance tracked with the same discipline as production — calibration due dates, PT scores, and uncertainty budgets are leadership-visible." },
      { title: "For finance", body: "Access to regulated-sector customers, faster customer audits, and a defensible position when disputed results go to arbitration." },
    ],
    audience:
      "ISO 17025 applies to any laboratory performing testing or calibration — pharmaceutical QC labs, food testing, water quality, environmental monitoring, calibration labs, mechanical and electrical testing, materials testing, and increasingly genomic and clinical laboratories under specific schemes.",
  },
};
