import {
  siHtml5,
  siCss,
  siJavascript,
  siTypescript,
  siReact,
  siNextdotjs,
  siTailwindcss,
  siNodedotjs,
  siSupabase,
  siPostgresql,
  siPython,
  siLinux,
  siGit,
  siGithub,
} from "simple-icons";
const skillIcons = {
  HTML: siHtml5,
  CSS: siCss,
  JavaScript: siJavascript,
  TypeScript: siTypescript,
  React: siReact,
  "Next.js": siNextdotjs,
  "Tailwind CSS": siTailwindcss,
  "Node.js": siNodedotjs,
  Supabase: siSupabase,
  PostgreSQL: siPostgresql,
  Python: siPython,
  Linux: siLinux,
  Git: siGit,
  GitHub: siGithub,
};

const marqueeSkills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Supabase",
  "PostgreSQL",
  "Python",
  "Linux",
  "Git",
  "GitHub",
];

const skillCategories = [
  {
    title: "Frontend Development",
    number: "01",
    description: "Building modern and responsive user interfaces.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend & Database",
    number: "02",
    description: "Developing application logic and data infrastructure.",
    skills: ["Node.js", "REST API", "Supabase", "PostgreSQL", "SQL"],
  },
  {
    title: "Cybersecurity",
    number: "03",
    description: "Exploring web security and vulnerability assessment.",
    skills: ["OWASP Top 10", "Burp Suite", "Web Pentesting", "Linux", "HTTP"],
  },
  {
    title: "Tools & Workflow",
    number: "04",
    description: "Tools that support development and technical research.",
    skills: ["Git", "GitHub", "VS Code", "Terminal", "Figma"],
  },
  {
    title: "Infrastructure & Systems",
    number: "05",
    description:
      "Managing IT infrastructure, systems, and network environments.",
    skills: [
      "Linux",
      "Windows Server",
      "Networking",
      "MikroTik",
      "LAN & Wi-Fi",
      "VPN",
      "Firewall",
      "Troubleshooting",
    ],
  },
  {
    title: "AI & Automation",
    number: "06",
    description:
      "Building AI-powered tools and automating technical workflows.",
    skills: [
      "Python",
      "AI Chatbot",
      "LLM Integration",
      "AI Automation",
      "API Integration",
      "Workflow Automation",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            My Technical Arsenal
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Skills & <span className="text-cyan-400">Technologies.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            Technologies, tools, and knowledge I use to build applications,
            explore security, and solve technical challenges.
          </p>
        </div>

        {/* Animated Tech Marquee */}
        <div className="mb-12 overflow-hidden border-y border-white/10 py-5">
          <div className="animate-marquee gap-8">
            {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
              <span
                key={`${skill}-${index}`}
                className="inline-flex shrink-0 items-center gap-3 whitespace-nowrap text-sm font-medium tracking-widest text-gray-500 transition-colors hover:text-cyan-400"
              >
                {skillIcons[skill as keyof typeof skillIcons] && (
                  <svg
                    role="img"
                    aria-label={`${skill} logo`}
                    viewBox="0 0 24 24"
                    className="h-5 w-5 fill-current"
                  >
                    <path
                      d={skillIcons[skill as keyof typeof skillIcons].path}
                    />
                  </svg>
                )}

                {skill}
                <span className="ml-4 text-cyan-400">✳</span>
              </span>
            ))}
          </div>
        </div>

        {/* Skill Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <div
              key={category.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]"
            >
              <div className="mb-8 flex items-start justify-between">
                <span className="text-sm tracking-widest text-cyan-400">
                  / {category.number}
                </span>

                <span className="text-gray-600 transition-colors group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {category.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">
                {category.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                  >
                    {skillIcons[skill as keyof typeof skillIcons] && (
                      <svg
                        role="img"
                        aria-label={`${skill} logo`}
                        viewBox="0 0 24 24"
                        className="h-4 w-4 shrink-0 fill-current transition-transform duration-300 group-hover:scale-110"
                      >
                        <path
                          d={skillIcons[skill as keyof typeof skillIcons].path}
                        />
                      </svg>
                    )}

                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
