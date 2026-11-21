const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Development of modern, responsive, and functional websites and web applications tailored to business needs.",
    scope: [
      "Frontend Development",
      "Backend Development",
      "REST API",
      "Responsive UI",
    ],
  },
  {
    number: "02",
    title: "IT Infrastructure & Networking",
    description:
      "Setup, configuration, maintenance, and troubleshooting of network infrastructure and server environments.",
    scope: ["LAN & Wi-Fi", "Router & Switching", "MikroTik", "VPN & Firewall"],
  },
  {
    number: "03",
    title: "Cybersecurity",
    description:
      "Authorized security assessment and analysis to identify vulnerabilities and improve application and system security.",
    scope: [
      "Vulnerability Assessment",
      "API Security Testing",
      "Security Monitoring",
      "Hardening",
    ],
  },
  {
    number: "04",
    title: "IT Support & Troubleshooting",
    description:
      "Technical assistance, root cause analysis, and maintenance to ensure reliable hardware, software, and system operations.",
    scope: [
      "Hardware Support",
      "Software Troubleshooting",
      "Helpdesk",
      "IT Maintenance",
    ],
  },
  {
    number: "05",
    title: "AI & Automation",
    description:
      "Development of AI-powered assistants and automation solutions to streamline repetitive tasks and workflows.",
    scope: [
      "AI Chatbot",
      "LLM API Integration",
      "Python Automation",
      "Workflow Automation",
    ],
  },
  {
    number: "06",
    title: "Database Management",
    description:
      "Structured data management, database maintenance, and backup solutions to support application reliability.",
    scope: ["MySQL", "MariaDB", "SQL", "Database Backup"],
  },
];

export default function Services() {
  return (
    <section id="services" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            What I Can Do
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Services & <span className="text-cyan-400">Solutions.</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400">
            Technical solutions across software development, IT infrastructure,
            cybersecurity, and automation.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-cyan-400/[0.02]"
            >
              <div className="mb-8 flex items-center justify-between">
                <span className="text-sm tracking-widest text-cyan-400">
                  / {service.number}
                </span>

                <span className="text-gray-600 transition-colors group-hover:text-cyan-400">
                  ↗
                </span>
              </div>

              <h3 className="text-xl font-semibold text-white">
                {service.title}
              </h3>

              <p className="mt-4 min-h-[100px] text-sm leading-7 text-gray-400">
                {service.description}
              </p>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="mb-4 text-xs uppercase tracking-widest text-gray-500">
                  Scope of Service
                </p>

                <div className="flex flex-wrap gap-2">
                  {service.scope.map((item) => (
                    <span
                      key={item}
                      className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-gray-300 transition-colors hover:border-cyan-400/30 hover:text-cyan-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
