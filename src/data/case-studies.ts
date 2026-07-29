export interface CaseStudy {
  slug: string;
  title: string;
  tagline: string;
  tags: string[];
  overview: string;
  problems: string[];
  problemSummary: string;
  solutions: string[];
  architecture: {
    description: string;
    layers: string[];
  };
  techStack: {
    category: string;
    items: string[];
  }[];
  features: {
    title: string;
    description: string;
  }[];
  contributions: string[];
  challenges: {
    title: string;
    description: string;
  }[];
  lessons: {
    title: string;
    description: string;
  }[];
}

export const caseStudies: Record<string, CaseStudy> = {
  "reports-ai": {
    slug: "reports-ai",
    title: "reports.ai",
    tagline:
      "AI-powered engineering productivity platform that reduces manual reporting effort by 90%",
    tags: ["AI-Powered", "Automation", "Productivity", "Slack + Email Bot"],
    overview:
      "reports.ai is an internal engineering productivity platform built to eliminate manual engineering reporting across Walmart Global Tech. The application automates EoR test status reports, end-of-sprint summaries, accessibility compliance reporting, deficit scorecards, and stakeholder communication — using a React 19 frontend, Spring Boot 3.4 backend, Azure Cosmos DB persistence, and AI-assisted content generation. This streamlined tool approximately 12 hours per sprint over many, simplifying documentation, serving multiple engineering teams and program managers across Walmart Fulfillment.",
    problems: [
      "Data-EoR toll status reports with risk assessments, pass/fail metrics, and PTI scores",
      "Test completion summaries with pass/fail/blocked breakdowns per environment",
      "Accessibility (a11y) compliance reports per platform",
      "Deficit/bug summaries by priority, team, and sprint",
      "Stakeholder emails with on-time links, Confluence references, and action items",
    ],
    problemSummary:
      "The process was repetitive, error-prone, inconsistent across teams, and consumed hours that could be spent on actual engineering work.",
    solutions: [
      "Generates production-ready EoR test status and compliance reports with consistent formatting",
      "Integrates multiple engineering data sources — Jira REST APIs, Confluence, accessibility scanners",
      "Auto-builds persona-based slides for Cosmos DB or turns complex when many labs off",
      "Produces pre-packaged HTML email reports using Thymeleaf server-side rendering",
      "Supports Slack integration via configurable webhooks for real-time report delivery",
      "Distributes reports to configurable TOSC/IUSC recipients via SMTP/TLS",
      "Provides send-to-email-preview before sending via dedicated preview endpoints",
    ],
    architecture: {
      description:
        "AI-Powered Report Generation Pipeline",
      layers: [
        "Engineer / Program Manager",
        "React 19 + Ant Design → Report Builder UI",
        "Express.js SSG Proxy → Spring Boot 3.4 REST Controllers",
        "AI-Report Engine → Prompt Orchestration → Caption Generation",
        "Business Services → Multi-Source Aggregators + Transformations",
        "Thymeleaf Render Engine → HTML Email Generation",
        "Embedding Index (SMTP/TLS)",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        items: ["React 19", "Ant Design 5", "React Router 7", "React Draft", "Kusto", "Vite"],
      },
      {
        category: "Backend",
        items: ["Java 21", "Spring Boot 3.4", "Thymeleaf", "Jakarta", "Maven", "Express.js"],
      },
      {
        category: "Data & AI",
        items: ["Azure Cosmos", "Jira REST Server", "AI / LLM", "REST APIs"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Kubernetes", "Playwright", "SMTP / TLS"],
      },
    ],
    features: [
      {
        title: "Daily EoR Test Status",
        description:
          "A one-click report that auto-drafts daily test status for sprint releases, showing pass, block, risk assessment metrics.",
      },
      {
        title: "Test Completion Reports",
        description:
          "End-of-sprint automated test completion reports tracking pass/fail/blocked ratios and key risk areas.",
      },
      {
        title: "Accessibility Metrics",
        description:
          "Live WCAG testing data and historical compliance trends across all platforms.",
      },
      {
        title: "Defect Analytics",
        description:
          "Aggregated defect analysis reporting for key metrics and defect aging patterns across teams.",
      },
      {
        title: "AI-Assisted Report",
        description:
          "Leverages automated LLM-powered caption/summary generation that adapts to different reporting contexts and requirements.",
      },
      {
        title: "Automated Email Distribution",
        description:
          "Blast-sends HTML or adds-on automated email distributions via SMTP with customizable recipients.",
      },
      {
        title: "Persistent Form State",
        description:
          "Form fields are Cosmos DB-backed — users can resume where they left off any time.",
      },
      {
        title: "Enterprise Authentication",
        description:
          "Full office SSO with Okta auth chain — enterprise-ready per-team permissions with role-based access control.",
      },
    ],
    contributions: [
      "Designed Spring Boot 3.4 solution with Cosmos API, Java 21 design patterns — report forge architecture",
      "Developed complete Spring Boot 3.4 modules with Java 21 + SMTP service delivery layer",
      "Integrated AI/RAG Suite for real-time context-aware LLM-driven report generation",
      "Implemented Kubernetes manifests for spec-driven multi-container deployments across environments",
      "Built React 19 auto-save as Parity — report forge, persistence, full-stack writing",
      "Migrated/refactored Cosmos DB with publish-key design for in-memory entities",
      "Automated Playwright HTML and Headscrape module report generation for screenshot service",
      "Implemented Top Veteran 2023 cert with Contrib.ai + prod and chained test suites",
      "Pioneered e2e support: test-data infused-retry and fault tolerance",
      "Co-created with Cluster observance and k8s-native CICD pipelines",
    ],
    challenges: [
      {
        title: "AI-Powered Structured Report Generation",
        description:
          "Largest sprint-of-sprints task: feed raw test engineering metrics — 800 tests, block counts, fail analysis — into AI models to produce consistent, readable reports. Used function-calling with OpenAI models to extract tables then Thymeleaf to render formatted outputs.",
      },
      {
        title: "Prompt Validation & Guardrails",
        description:
          "Had a problem: open free-form can create multi-line input in services — uncertainty payload injection through user system-line shared terms and classes. Put in services around prompt design: ROLE-ID, RESPONSE-ID, and TERRAIN-ID, generated at the service layer. Responses are validated against JSON schema before being consumed.",
      },
      {
        title: "Cross-Client HTML Email Rendering",
        description:
          "Building email templates that works across clients (Outlook 2007, 2010, Gmail, Apple Mail, YMail) is painstaking but critical. Produced table-based HTML via email-specific Thymeleaf templates with conditionals: darling content display, accessibility metrics, and data-driven elements. Built dark/true-brand principles templates, HTML inline styling with CSS, and topic links for auto active screenshots.",
      },
      {
        title: "Enterprise Security & Authentication",
        description:
          "Integrated Mart to Tire Platform MTTP via MSGraphMiddleware with Okta-ID flows. The Platform proxy/interface is multifield, session-local-management, no role-based. Main functions: Scoped JWT with claims/RBAC patterns — session for user accounts — conditional bearer OIDC with API support against multi-tenant targets. Service configuration (Luca, credential) as externalized via containerized address.",
      },
      {
        title: "Multi-Source Data Aggregation",
        description:
          "Each external integration surface is aggregated data from a REST/Graph server at SERVICE ASSEMBLY (REST), accessibility scanners, and Jira APIs. The API-level per-page/API interface to aggregate the full concurrent data across apps on Monday skip any Monday use via APIs. We had to handle upstream service failures gracefully.",
      },
      {
        title: "Automated Deployment Pipeline",
        description:
          "Complete pod-full oriented deployment with Docker and Kubernetes to Blue-Green CICD pipelines (pipelines-to CICD pall), combo unit, integration, and safety-deployment. Spring boot Scanner is under-multi cross-references to Kubernetes containerized/service probes. The build for its command fixed-builds. Enterprise-specific configuration (snapshots) via internal image from local source to production.",
      },
    ],
    lessons: [
      {
        title: "AI outputs need strict contracts, not just prompts",
        description:
          "LLMs return valid JSON/structures in-bulk. By producing JSON/JSON Schemas on all projected outputs and structured parsing with retry-on-fail, tables that key-conform always match the rendered template interface.",
      },
      {
        title: "Design for the email client, not the browser",
        description:
          "HTML email rendering is wildly inconsistent: prefer tables, Outlook, Inline/Cel, and Avoid Mso Styling. Thymeleaf templates with inline-styles, table-based layouts, and in-block CSS ensure reliable/preview output everywhere.",
      },
      {
        title: "Partition key design in Cosmos DB matters more than you think",
        description:
          "Querying HTTP 429 at the partition key-vs-indexed-id/head cross-partition queries for hot-partition data. Use items-as-data to improve horizontal batch-optimized query reads with RU/s throttling as priority for Cosmos.",
      },
      {
        title: "Enterprise SSO integration requires early planning",
        description:
          "The biggest Cosmos CORS-token-error over-custom in token-refresh-to-tng, assert-forwards, state-ful/token-ize scheme — flag optional for structured cleanup. Retrofitting SSO into a running app is significantly harder.",
      },
      {
        title: "Preview endpoints save more time than you'd expect",
        description:
          "Adding /api/v1/report/preview endpoints for real-time-view templates with first-user-data-entry fixtures along-with actively waiting — just real/full reset features via template changes.",
      },
      {
        title: "Ship incrementally, validate with users",
        description:
          "Releasing a brief report-sprint-as in first-feature → in-iteration → accumulating configuring/render after user feedback. Most XP is building the actual skills, file the test inputs for building on functional metrics.",
      },
    ],
  },
  "release-dashboard": {
    slug: "release-dashboard",
    title: "Release Dashboard Service",
    tagline:
      "An enterprise-grade engineering quality metrics platform that aggregates code quality, defect data, test performance, and accessibility data points — enabling data-driven engineering decisions",
    tags: ["Quality Signals", "Code Quality", "CI / Performance", "Automation", "Data-Driven", "Quality Strategy"],
    overview:
      "Release Dashboard Service is a full-stack internal engineering quality/productivity platform built to eliminate manual reporting/metrics gathering across a large engineering organization. The web application aggregates data from 300+ quality signals, 94 automated checks, processes 40K+ data points daily, and has been running reliably for over 1 year — using React 18, Spring Boot 3.2, Google BigQuery, and REST APIs. The platform serves multiple engineering teams by consolidating quality signals, code metrics, test performance, accessibility compliance, and incident metrics — serving 40+ engineering teams across Walmart Fulfillment.",
    problems: [
      "Engineering teams spent hours manually collecting quality metrics from multiple disconnected sources",
      "No single source of truth for code quality, test results, and performance data across all teams",
      "Accessibility (a11y) compliance tracking was done manually with inconsistent scoring across platforms",
      "Defect analysis required pulling data from Jira, Confluence, and multiple test management tools individually",
      "Release readiness decisions were based on gut feeling rather than objective, consolidated data signals",
      "Stakeholder reports in each team's own format with no standardized metrics or delivery schedule",
    ],
    problemSummary:
      "Quality visibility was fragmented across dozens of tools, making it impossible to get a unified view of release health and engineering quality at scale.",
    solutions: [
      "A centralized quality signals API that aggregates 300+ metrics from multiple engineering tools into a single platform",
      "Automated real-time data pipelines pulling from Jira, GitHub, SonarQube, accessibility scanners, and CI/CD systems",
      "Standardized quality scorecards with configurable thresholds per team and per release cycle",
      "Interactive dashboards with drill-down capabilities from org-level KPIs to individual test results",
      "Automated email/Slack distribution of quality reports on configurable schedules",
      "REST API endpoints enabling other teams to consume quality signals programmatically",
      "Historical trend analysis with BigQuery-backed analytics for quarter-over-quarter comparison",
    ],
    architecture: {
      description: "System Design — Quality Signals Pipeline",
      layers: [
        "React 18 + Ant Design → Quality Dashboard UI",
        "API Gateway → Spring Boot 3.2 REST Controllers",
        "Quality Signals Aggregation Service",
        "Data Collectors: Jira | GitHub | SonarQube | CI/CD | A11y Scanners",
        "ETL Pipeline → BigQuery Data Warehouse",
        "Notification Service → Email / Slack Distribution",
        "Scheduled Jobs → Cron-based Data Refresh",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        items: ["React 18", "Spring Boot 3.2", "Spring Data JPA", "Thymeleaf", "Luxon", "REST APIs"],
      },
      {
        category: "Backend",
        items: ["Java 21", "Spring Boot", "Google BigQuery", "Node.js", "NiFi"],
      },
      {
        category: "Data & API",
        items: ["Jira API", "GitHub API", "SonarQube API", "BigQuery", "REST"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Kubernetes", "Playwright", "SMTP/TLS", "Helm charts"],
      },
    ],
    features: [
      {
        title: "Quality Metrics Dashboard",
        description:
          "A single pane of glass for all engineering quality signals — code coverage, defect density, test pass rates, and accessibility compliance.",
      },
      {
        title: "Accessibility Analytics",
        description:
          "Live WCAG compliance data and historical accessibility trends across all platforms and teams.",
      },
      {
        title: "Automated Email/Slack Alerts",
        description:
          "Configurable notifications when quality thresholds are breached, with instant Slack alerts and detailed email reports.",
      },
      {
        title: "API Data Sync Engine",
        description:
          "Scheduled data collectors that pull metrics from Jira, GitHub, SonarQube, and CI/CD systems every hour.",
      },
      {
        title: "Team Performance Scores",
        description:
          "Composite quality scores per team with weighted metrics, historical trends, and sprint-over-sprint comparison.",
      },
      {
        title: "Incident Dashboard",
        description:
          "Real-time incident tracking with severity distribution, MTTR analysis, and on-call performance metrics.",
      },
      {
        title: "DAPI Call Analytics",
        description:
          "Downstream API call monitoring with latency percentiles, error rates, and throughput dashboards.",
      },
      {
        title: "Data Export & Reporting",
        description:
          "One-click export of quality data to CSV/Excel/PDF for stakeholder presentations and compliance audits.",
      },
      {
        title: "Dynamic Configuration",
        description:
          "Admin-configurable thresholds, team mappings, and metric weights without code deployments.",
      },
    ],
    contributions: [
      "Built REST API Spring/Boot Quality Dashboard — full-stack, end-to-end, across 300+ quality signals from multiple sources",
      "Developed job scheduling utility enabling REST API-based automated data refresh across all data collectors",
      "Designed an ML-powered severity classification model achieving 94% accuracy for automated defect prioritization",
      "Architected data pipeline with Google BigQuery — scalable analytics across 40K+ daily data points with sub-second queries",
      "Automated Playwright end-to-end tests for critical user journeys reducing regression detection time by 80%",
      "Implemented REST API security layer with OAuth2 + JWT token validation and role-based access control",
      "Built custom caching layer reducing API response times from 3s to 200ms for high-traffic dashboard endpoints",
      "Integrated Kubernetes health checks and auto-scaling policies handling 10x traffic spikes during release windows",
      "Modernized SQL Server DB2 to PostgreSQL with zero-downtime migration strategy",
      "Delivered ReSTful API documentation via Swagger/OpenAPI enabling 5 downstream teams to self-integrate",
    ],
    challenges: [
      {
        title: "Cross-Database Query Optimization",
        description:
          "The platform aggregates data from BigQuery, PostgreSQL, and external REST APIs. Achieving sub-second query responses required implementing materialized views, smart caching with Redis, and pre-computed aggregation tables that refresh on configurable schedules.",
      },
      {
        title: "Recursive Org Hierarchy Resolution",
        description:
          "Providing roll-up metrics at the VP, Director, and Manager levels required resolving recursive organizational hierarchies from HR data. Built a graph-based hierarchy resolver that pre-computes roll-up paths and invalidates on org-change events.",
      },
      {
        title: "JDK to SQL Migration with Java Dremtiles",
        description:
          "Migrated from JDK 11 to 21, altering the database strategy from flat-file storage to normalized SQL. Required careful data migration, schema versioning with Flyway, and backward-compatible API contracts during the transition period.",
      },
      {
        title: "Configurable Email/Notification Engine",
        description:
          "Built a flexible template engine supporting dynamic content blocks, team-specific branding, and conditional sections based on metric thresholds. Thymeleaf with custom dialect extensions enables non-developer configuration of report layouts.",
      },
      {
        title: "Multi-Source Data Aggregation",
        description:
          "The platform aggregates from 6+ external data sources (Jira, GitHub, SonarQube, CI/CD, accessibility scanners, incident systems). Built circuit breakers, retry policies, and fallback caches to handle upstream service failures gracefully without impacting dashboard availability.",
      },
      {
        title: "Schedule Orchestration & Reliability",
        description:
          "Managing 50+ scheduled data collection jobs with dependencies, retries, and failure alerting. Implemented a DAG-based scheduler with dead-letter queues, ensuring no data gaps even when upstream services experience extended outages.",
      },
    ],
    lessons: [
      {
        title: "Design for evolving configurations, not static data",
        description:
          "Team structures, metric definitions, and thresholds change constantly. Building a configuration-driven architecture from day one saved hundreds of hours of code changes and redeployments.",
      },
      {
        title: "Cache aggressively, invalidate precisely",
        description:
          "Dashboard performance improved 15x by implementing multi-layer caching — but stale data is worse than slow data. Event-driven cache invalidation with versioned keys ensures freshness without sacrificing speed.",
      },
      {
        title: "Start with query patterns, not data models",
        description:
          "Designing BigQuery schemas around how data would be queried (team roll-ups, time-series trends, cross-metric correlation) rather than how it's produced led to 10x simpler query logic downstream.",
      },
      {
        title: "Contract-first API design prevents integration pain",
        description:
          "Publishing OpenAPI specs before implementation allowed 5 downstream teams to develop in parallel. Breaking changes are caught at CI time via contract tests rather than in production.",
      },
      {
        title: "Monitoring the monitor is non-trivial",
        description:
          "A quality dashboard that's down or showing stale data erodes trust quickly. Built synthetic health checks that validate data freshness, not just service uptime, and alert before users notice.",
      },
      {
        title: "Incremental delivery builds stakeholder trust",
        description:
          "Shipping a single team's dashboard first, gathering feedback, then expanding to 40+ teams. Early adopters became advocates, smoothing organization-wide rollout significantly.",
      },
    ],
  },
  "qualityhub": {
    slug: "qualityhub",
    title: "QualityHub",
    tagline:
      "An enterprise-grade internal engineering quality/productivity platform that consolidates quality signals, defect tracking, accessibility compliance, and incident metrics — serving 50+ engineering teams",
    tags: ["Engineering Productivity", "Quality Metrics", "Accessibility", "Automation", "Dashboard"],
    overview:
      "QualityHub is an internal engineering quality productivity platform built to eliminate manual reporting/metrics gathering across Walmart Global Tech. The application consolidates 137 quality signals across 11 engineering domains, serving 50+ teams with 5 automated report types — using React 18, TypeScript, Node.js, D3.js for visualization, and Cosmos DB for persistence. The platform processes quality signals from multiple sources, aggregates data from Cosmos DB tables, generates visual reports and dashboards — serving as the single source of truth for engineering quality and release readiness across all Walmart Fulfillment teams.",
    problems: [
      "Engineering teams spent hours collecting test status, bug summaries, and quality metrics from multiple tools",
      "Each team had their own spreadsheet-based tracking with inconsistent metrics and no standardization",
      "No real-time visibility into accessibility compliance across iOS, Android, and Web platforms",
      "The manual process was error-prone — copy-paste errors in reports led to incorrect release decisions",
      "Stakeholder communication required manual email composition with no template consistency",
      "Quality trends were invisible — no historical data to identify patterns or regressions over time",
    ],
    problemSummary:
      "Quality data was scattered across dozens of disconnected tools with no unified view, making data-driven release decisions impossible at scale.",
    solutions: [
      "A unified dashboard consolidating 137 quality signals from Jira, Confluence, GitHub, and accessibility scanners into a single view",
      "Real-time D3.js visualizations with interactive charts for defect trends, test coverage, and compliance metrics",
      "Automated Cosmos DB-backed data pipelines refreshing metrics every 30 minutes from all connected sources",
      "Configurable alert thresholds that notify teams via Slack and email when quality gates are breached",
      "Role-based views — engineers see team metrics, managers see org roll-ups, VPs see executive summaries",
      "One-click PDF/HTML report generation for stakeholder distribution with consistent branding",
      "Historical trend analysis with quarter-over-quarter and sprint-over-sprint comparison capabilities",
    ],
    architecture: {
      description: "Omni Signals Architecture — Multi-Source Quality Aggregation",
      layers: [
        "React 18 + TypeScript + D3.js → Dashboard UI",
        "Node.js + Express → API Gateway",
        "SSO Proxy (Okta) → Authentication Layer",
        "Quality Signal Aggregation Services",
        "Data Connectors: Jira | GitHub | Confluence | A11y Scanners | CI/CD",
        "Azure Cosmos DB → Persistent Storage",
        "Scheduled Workers → Data Refresh + Alert Engine",
      ],
    },
    techStack: [
      {
        category: "Frontend",
        items: ["React 18", "TypeScript", "D3.js", "Ant Design", "Recharts", "SASS/Modules"],
      },
      {
        category: "Backend",
        items: ["Node.js", "Express", "TypeScript", "REST APIs", "GraphQL"],
      },
      {
        category: "Data & Storage",
        items: ["Azure Cosmos DB", "Redis Cache", "BigQuery", "Blob Storage"],
      },
      {
        category: "Infrastructure",
        items: ["Docker", "Kubernetes", "Azure DevOps", "Helm", "Nginx", "Prometheus"],
      },
    ],
    features: [
      {
        title: "Quality Metrics Dashboard",
        description:
          "Unified view of all engineering quality signals — test pass rates, defect density, code coverage, and accessibility scores with real-time updates.",
      },
      {
        title: "Accessibility Analytics",
        description:
          "WCAG compliance tracking across iOS, Android, and Web with historical trends, violation categories, and team-level scoring.",
      },
      {
        title: "Automated Email/Slack Alerts",
        description:
          "Configurable quality gate notifications with severity-based routing — critical issues to Slack instantly, summaries via scheduled email.",
      },
      {
        title: "API Data Sync Engine",
        description:
          "Background workers pulling data from 11 engineering data sources every 30 minutes with circuit breakers and retry logic.",
      },
      {
        title: "Team Performance Scores",
        description:
          "Composite engineering quality scores with weighted metrics, peer benchmarking, and improvement trend indicators.",
      },
      {
        title: "Incident Dashboard",
        description:
          "Real-time incident tracking with severity distribution, MTTR/MTTA metrics, and post-incident quality impact analysis.",
      },
      {
        title: "D3.js Interactive Charts",
        description:
          "Custom-built D3.js visualizations with drill-down, zoom, tooltip details, and exportable SVG charts for presentations.",
      },
      {
        title: "Dynamic Configuration",
        description:
          "Admin panel for managing team mappings, metric weights, alert thresholds, and report schedules without code changes.",
      },
    ],
    contributions: [
      "Built the Accessibility Dashboard — full-stack, real-time WCAG compliance tracking across iOS, Android, and Web platforms",
      "Developed job utility enabling REST API-driven automated data synchronization across 11 engineering data sources",
      "Designed Cosmos DB partition strategy optimizing query performance — reduced RU consumption by 60% across hot paths",
      "Architected D3.js visualization layer with reusable chart components handling 50K+ data points with smooth interactions",
      "Implemented enterprise SSO with Okta integration — token refresh, session management, and role-based access control",
      "Built custom ETL pipeline aggregating Jira, GitHub, and accessibility scanner data into normalized Cosmos DB collections",
      "Automated Playwright end-to-end tests covering critical dashboard journeys with visual regression detection",
      "Designed alert engine with configurable thresholds, rate limiting, and escalation policies for quality gate breaches",
      "Implemented Redis caching layer reducing average API response time from 2.5s to 180ms for dashboard endpoints",
      "Led migration from REST to GraphQL for complex dashboard queries — reducing over-fetching by 70%",
      "Built PDF/HTML report generation service using Puppeteer with custom branded templates for stakeholder distribution",
      "Integrated Kubernetes HPA and pod disruption budgets ensuring 99.9% uptime during peak usage periods",
    ],
    challenges: [
      {
        title: "D3.js Performance with Large Datasets",
        description:
          "Rendering 50K+ data points in interactive D3.js charts caused frame drops and memory issues. Implemented virtual scrolling for tables, canvas-based rendering for scatter plots, data decimation algorithms for time-series, and Web Workers for heavy computations — achieving 60fps even with full datasets loaded.",
      },
      {
        title: "Cosmos DB Partition Strategy",
        description:
          "Initial design with team-id as partition key caused hot partitions during sprint boundaries when all teams report simultaneously. Redesigned with composite partition keys (team-id + date-range) and implemented change-feed processors for cross-partition aggregations, reducing RU consumption by 60%.",
      },
      {
        title: "Real-time Data Freshness vs. Cost",
        description:
          "Polling 11 data sources every minute was cost-prohibitive and hit API rate limits. Implemented a tiered refresh strategy — critical metrics every 5 minutes, standard metrics every 30 minutes, historical data daily — with webhook support for instant updates when available.",
      },
      {
        title: "Enterprise SSO + Multi-Tenant Isolation",
        description:
          "Supporting 50+ teams with different permission levels required fine-grained RBAC. Built a hierarchical permission model where team leads see their team's data, directors see their org, and VPs get executive roll-ups — all from a single API with query-time filtering based on JWT claims.",
      },
      {
        title: "Cross-Browser D3.js Rendering Consistency",
        description:
          "D3.js SVG rendering varied significantly across Chrome, Safari, Firefox, and embedded Slack previews. Built a custom rendering abstraction that normalizes font metrics, color spaces, and interaction events across browsers while maintaining pixel-perfect chart output.",
      },
      {
        title: "Container Security & Compliance",
        description:
          "Enterprise deployment required passing Walmart's container security scanning, which flagged dozens of CVEs in base images. Established a hardened Node.js base image pipeline with automated weekly rebuilds, vulnerability scanning in CI, and zero-CVE policy for production containers.",
      },
    ],
    lessons: [
      {
        title: "Design for evolving configurations, not static data",
        description:
          "Team structures change quarterly, metrics get added/removed, thresholds shift. Building configuration-first with hot-reload capabilities meant zero downtime for organizational changes.",
      },
      {
        title: "D3.js custom visuals pay off, but start with charting libraries",
        description:
          "Started with Recharts for rapid prototyping, then progressively replaced with custom D3.js only where standard charts couldn't express the data. This hybrid approach saved months of development time.",
      },
      {
        title: "Partition key design in Cosmos DB matters more than indexing",
        description:
          "Spent weeks optimizing indexes when the real bottleneck was cross-partition queries from poor partition key choice. Redesigning partitions gave 10x improvement vs. 2x from index tuning.",
      },
      {
        title: "Start-based query middleware catches most performance issues",
        description:
          "Adding query timing middleware that logs slow queries (>500ms) to a dashboard caught 90% of performance regressions before users reported them. Monitor your monitors.",
      },
      {
        title: "Enterprise auth integration requires early planning",
        description:
          "Retrofitting Okta SSO into an existing app with session-based auth required touching every API route. Starting with token-based auth from day one — even with mock tokens — would have saved weeks of refactoring.",
      },
      {
        title: "Incrementally validate with power users",
        description:
          "Shipping to 3 champion teams first, iterating on their feedback for 2 sprints, then rolling out org-wide. Those champions became internal advocates who trained other teams, reducing support burden by 80%.",
      },
    ],
  },
};
