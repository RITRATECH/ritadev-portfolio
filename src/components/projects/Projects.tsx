const projects = [
  {
    number: "01",
    title: "RitraDev Portfolio",
    category: "Web Development",
    description:
      "A personal developer portfolio showcasing projects, technical skills, research, and professional experience in web development and cybersecurity.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/RITRATECH",
  },
  {
    number: "02",
    title: "Security Research Lab",
    category: "Cybersecurity",
    description:
      "A personal security research environment for learning web vulnerability analysis, testing application security, and documenting findings in authorized labs.",
    tech: ["Linux", "Burp Suite", "OWASP"],
    github: "https://github.com/RITRATECH",
  },
  {
    number: "03",
    title: "Database Management",
    category: "Backend Development",
    description:
      "A database-focused project exploring structured data management, authentication, access policies, and backend integration for modern applications.",
    tech: ["Supabase", "PostgreSQL", "REST API"],
    github: "https://github.com/RITRATECH",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Selected Works
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
              Featured <span className="text-cyan-400">Projects.</span>
            </h2>
          </div>

          <p className="max-w-md leading-7 text-gray-400">
            Some projects, experiments, and technical explorations I&apos;ve
            been working on.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-6">
          {projects.map((project) => (
            <article
              key={project.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-cyan-400/30 md:p-10"
            >
              <div className="flex flex-col justify-between gap-8 md:flex-row">
                {/* Project Info */}
                <div className="max-w-2xl">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="text-sm tracking-widest text-cyan-400">
                      / {project.number}
                    </span>

                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-cyan-400 md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 md:text-base">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* GitHub Link */}
                <div className="flex shrink-0 items-end">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 rounded-full border border-white/10 px-5 py-3 text-sm font-medium text-white transition-all hover:border-cyan-400/40 hover:text-cyan-400"
                  >
                    View GitHub
                    <span className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
