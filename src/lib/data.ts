export const profile = {
  name: "Sarafathulla S",
  nameFirst: "SARAFATHULLA",
  nameLast: "S.",
  title: "Lead Frontend Engineer",
  tagline: "Building high-scale, performance-critical applications.",
  email: "saraffath@gmail.com",
  phone: "+91 90478 84230",
  location: "Palani, India",
  linkedin: "https://www.linkedin.com/in/sarafhbk",
  github: "https://github.com/sarafhbk",
  yearsOfExperience: 6,
  summary:
    "Lead Frontend Engineer with 6+ years of experience building high-scale, performance-critical and data-intensive applications used by 10K–150K+ users. Specialized in React.js, Next.js, and real-time systems, with a proven track record of owning frontend architecture, leading teams, and delivering measurable improvements in performance, conversion, and developer velocity.",
};

export const skillCategories = [
  {
    label: "Frontend Systems",
    skills: ["React.js", "Next.js", "React Native", "TypeScript"],
  },
  {
    label: "Performance Engineering",
    skills: [
      "LCP Optimization",
      "Code Splitting",
      "Caching",
      "SSR / ISR",
      "Bundle Optimization",
      "Lazy Loading",
    ],
  },
  {
    label: "Architecture",
    skills: [
      "Scalable Component Systems",
      "State Management",
      "Redux",
      "Design Systems",
    ],
  },
  {
    label: "Product Engineering",
    skills: [
      "Conversion Optimization",
      "UX Systems",
      "A/B Improvements",
      "Real-Time Systems",
      "Mapbox GL",
    ],
  },
  {
    label: "CI/CD & Deployment",
    skills: ["GitHub Actions", "Vercel", "Bitbucket Pipelines"],
  },
];

export const experiences = [
  {
    id: "frank-darling",
    period: "08/2025 — Present",
    year: "2025",
    company: "F22 Labs",
    location: "Chennai, India",
    role: "Lead Frontend Developer",
    project: "Frank Darling",
    projectType: "D2C eCommerce Platform · US Market",
    description:
      "Led frontend architecture and execution for a high-traffic Next.js platform serving ~150K+ monthly users in the US market, owning performance, quality standards, and team leadership.",
    highlights: [
      "Managed and mentored a team of 4 engineers, reducing production bugs by ~30% through strong review and quality standards.",
      "Reduced LCP from ~3.8s → ~1.9s, improving page performance by 50%+ using SSR optimization, image strategies, and aggressive code splitting.",
      "Increased conversion rate by ~18%, optimizing product pages, checkout flow, and mobile UX.",
      "Reduced bundle size by ~45% through dependency optimization and modular architecture.",
      "Built a reusable component system improving feature delivery speed by ~35%.",
      "Drove product and design decisions for revenue-critical flows using performance and user behavior insights.",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: "hirevox",
    period: "09/2023 — 08/2025",
    year: "2023",
    company: "F22 Labs",
    location: "Chennai (Remote), India",
    role: "Senior Software Engineer",
    project: "Hirevox",
    projectType: "AI Recruitment Platform",
    description:
      "Owned frontend delivery for an AI-powered recruitment platform used by 50+ companies, driving scalable candidate tracking, analytics dashboards, and automated report generation.",
    highlights: [
      "Reduced initial load time by ~40% via lazy loading, caching, and bundle optimization.",
      "Built scalable dashboards handling large datasets with smooth rendering and interactions.",
      "Designed and implemented PDF generation system processing ~10K+ reports/month.",
      "Standardized UI architecture, reducing regression issues and improving development consistency.",
    ],
    stack: ["React.js", "TypeScript", "Redux", "Jest"],
  },
  {
    id: "matson",
    period: "09/2023 — 08/2025",
    year: "2023",
    company: "F22 Labs",
    location: "Chennai (Remote), India",
    role: "Senior Software Engineer",
    project: "Matson Logistics",
    projectType: "Real-Time Web & Mobile Platform",
    description:
      "Architected real-time web and React Native applications for logistics operations, supporting fleet tracking, shift management, and trailer operations used daily by operations teams.",
    highlights: [
      "Built Mapbox GL–based polygon editing tools, reducing manual planning errors by ~25%.",
      "Optimized rendering for high-frequency updates, improving system responsiveness under load.",
      "Defined frontend architecture patterns reused across multiple internal tools.",
    ],
    stack: ["React Native", "React.js", "Mapbox GL", "TypeScript"],
  },
  {
    id: "upscale",
    period: "08/2020 — 10/2023",
    year: "2020",
    company: "F22 Labs",
    location: "Chennai (Hybrid), India",
    role: "Software Engineer",
    project: "UpScale",
    projectType: "Loan Application Platform",
    description:
      "Improved application performance by ~30% through optimized state management and API handling, supporting 10K+ active users.",
    highlights: [
      "Built CI/CD pipelines reducing deployment time by ~50%.",
      "Developed full web and mobile UI supporting 10K+ active users.",
    ],
    stack: ["React.js", "Redux", "Firebase", "CI/CD"],
  },
  {
    id: "skymd",
    period: "08/2020 — 10/2023",
    year: "2020",
    company: "F22 Labs",
    location: "Chennai (Hybrid), India",
    role: "Software Engineer",
    project: "SkyMD",
    projectType: "Telehealth Platform",
    description:
      "Built full web and mobile UI integrating payments and healthcare workflows with high reliability.",
    highlights: [
      "Improved user engagement and retention through UX and performance enhancements.",
    ],
    stack: ["React.js", "React Native", "TypeScript"],
  },
  {
    id: "hxouse",
    period: "08/2020 — 10/2023",
    year: "2020",
    company: "F22 Labs",
    location: "Chennai (Hybrid), India",
    role: "Software Engineer",
    project: "Hxouse",
    projectType: "Enterprise Chat Application",
    description:
      "Built real-time messaging interfaces with stable performance under high usage, ensuring low-latency communication through close backend collaboration.",
    highlights: [],
    stack: ["React Native", "Firebase", "TypeScript"],
  },
  {
    id: "junior",
    period: "08/2019 — 08/2020",
    year: "2019",
    company: "F22 Labs",
    location: "Chennai, India",
    role: "Junior Software Engineer",
    project: "React Native Apps",
    projectType: "Mobile Applications",
    description:
      "Built React Native applications integrating Bluetooth-based health tracking features, improving mobile performance and cross-platform responsiveness.",
    highlights: [
      "Improved mobile performance and cross-platform responsiveness.",
      "Developed booking and discovery workflows for consumer-facing applications.",
    ],
    stack: ["React Native", "JavaScript", "TypeScript"],
  },
  {
    id: "intern",
    period: "01/2019 — 07/2019",
    year: "2019",
    company: "F22 Labs",
    location: "Chennai, India",
    role: "Frontend Intern",
    project: "Frontend Internship",
    projectType: "Internship",
    description:
      "Developed reusable UI components and contributed to production features, gaining hands-on experience with scalable frontend systems.",
    highlights: [],
    stack: ["React.js", "JavaScript", "HTML5", "CSS3"],
  },
];

export const education = {
  degree: "Bachelor of Engineering in Computer Science",
  institution: "Dr. Mahalingam College of Engineering & Technology",
  location: "Pollachi, India",
  year: "2019",
};

export const languages = [
  "Tamil (Native)",
  "English (Professional)",
  "Hindi (Read & Write)",
];

export const stats = [
  { value: "6+", label: "Years of Craft" },
  { value: "150K+", label: "Monthly Users" },
  { value: "50+", label: "Companies Impacted" },
  { value: "50%+", label: "LCP Improvement" },
];
