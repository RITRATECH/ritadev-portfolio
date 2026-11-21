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
                    className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                  >
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
