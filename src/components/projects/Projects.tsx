const projects = [
  {
    number: "01",
    title: "RitraDev Portfolio",
    image: "/projects/ritadev-portfolio.png",
    category: "Web Development",
    description:
      "A personal developer portfolio showcasing projects, technical skills, research, and professional experience in web development and cybersecurity.",
    overview:
      "A personal portfolio platform designed to present technical expertise, professional experience, and development projects.",
    problem:
      "Technical skills and project experience need a structured platform to be presented professionally.",
    solution:
      "Built a responsive portfolio using Next.js, TypeScript, and Tailwind CSS.",
    result:
      "Created a centralized platform to showcase development work and technical expertise.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/RITRATECH",
  },
  {
    number: "02",
    title: "Security Research Lab",
    image: "null",
    category: "Cybersecurity",
    description:
      "A personal security research environment for learning web vulnerability analysis, testing application security, and documenting findings in authorized labs.",
    overview:
      "A personal cybersecurity research environment for studying web application security.",
    problem:
      "Web applications may contain security vulnerabilities that need to be identified and understood.",
    solution:
      "Use authorized testing environments and tools such as Burp Suite to study web vulnerabilities.",
    result:
      "A structured environment for security testing, learning, and documenting research findings.",
    tech: ["Linux", "Burp Suite", "OWASP"],
    github: "https://github.com/RITRATECH",
  },
  {
    number: "03",
    title: "Database Management",
    image: "null",
    category: "Backend Development",
    description:
      "A database-focused project exploring structured data management, authentication, access policies, and backend integration for modern applications.",
    overview:
      "A backend-focused project exploring database design and data management for modern applications.",
    problem:
      "Applications need structured and reliable data storage with appropriate access control.",
    solution:
      "Explore Supabase, PostgreSQL, authentication, and database access policies.",
    result:
      "A practical foundation for understanding database integration and backend data management.",
    tech: ["Supabase", "PostgreSQL", "REST API"],
    github: "https://github.com/RITRATECH",
  },
  {
    number: "04",
    title: "Artificial Intelligence Experiments",
    image: "null",
    category: "AI & Machine Learning",
    description:
      "An AI-focused project exploring machine learning algorithms, neural networks, and their applications in real-world scenarios.",
    overview:
      "An exploration of artificial intelligence and machine learning concepts using Python.",
    problem:
      "Understanding how machine learning algorithms can be applied to practical problems requires experimentation.",
    solution:
      "Explore machine learning algorithms, neural networks, and related Python libraries.",
    result:
      "A learning foundation for exploring AI concepts and machine learning applications.",
    tech: ["Python", "TensorFlow", "Scikit-learn"],
    github: "https://github.com/RITRATECH",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16 max-w-2xl">
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
              <div className="flex flex-col gap-8 md:flex-row md:items-center">
                {/* Project Thumbnail */}
                {project.image && (
                  <div className="group/image relative mb-8 overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition-colors duration-500 group-hover:border-cyan-400/40 md:mb-0 md:w-[45%] md:flex-shrink-0">
                    <img
                      src={project.image}
                      alt={`${project.title} preview`}
                      className="h-64 w-full object-cover transition-all duration-700 ease-out group-hover:scale-105 group-hover:brightness-110 md:h-80"
                    />
                    <div className="absolute bottom-4 left-4 rounded-full border border-white/20 bg-black/70 px-3 py-1.5 text-xs font-medium uppercase tracking-wider text-white backdrop-blur-md">
                      {project.category}
                    </div>
                  </div>
                )}
                {/* Project Info */}
                <div className="min-w-0 flex-1">
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
                  {/* Case Study - Overview */}
                  <div className="mt-8 border-t border-white/10 pt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-cyan-400">
                      Project Overview
                    </h4>

                    <p className="text-sm leading-7 text-gray-400">
                      {project.overview}
                    </p>
                  </div>
                  {/* Case Study - Problem */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-amber-400">
                      The Problem
                    </h4>

                    <p className="text-sm leading-7 text-gray-400">
                      {project.problem}
                    </p>
                  </div>
                  {/* Case Study - Solution */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-emerald-400">
                      The Solution
                    </h4>

                    <p className="text-sm leading-7 text-gray-400">
                      {project.solution}
                    </p>
                  </div>
                  {/* Case Study - Result */}
                  <div className="mt-6">
                    <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-sky-400">
                      The Result
                    </h4>

                    <p className="text-sm leading-7 text-gray-400">
                      {project.result}
                    </p>
                  </div>
                  {/* GitHub Link */}
                  <div className="mt-8 flex">
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
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
