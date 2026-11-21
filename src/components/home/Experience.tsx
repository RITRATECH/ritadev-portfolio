const experiences = [
  {
    number: "01",
    role: "IT Infrastructure Support & Technical Trainer",
    company: "SMK Daarul Maksum",
    location: "Kebumen, Jawa Tengah",
    period: "Jul 2025 — Aug 2026",
    type: "IT Infrastructure · Training · Security",
    description:
      "Maintained network infrastructure, managed Linux and Windows servers, monitored logs, delivered technical training, and supported day-to-day IT operations.",
    responsibilities: [
      "Network administration: routing, switching, VPN, and firewall",
      "Linux & Windows Server management and log monitoring",
      "Technical training, user assistance, technical manuals, and SOP development",
      "Hardware and software troubleshooting with root cause analysis",
    ],
  },
  {
    number: "02",
    role: "Application Developer & Systems Intern",
    company: "Seven Inc. (magangjogja.com)",
    location: "Yogyakarta",
    period: "Jan 2025 — Feb 2025",
    type: "Application Development · Automation · Security",
    description:
      "Developed internal web application features, worked with relational databases, created Python-based security automation, and contributed to collaborative software development.",
    responsibilities: [
      "Developed web features using PHP Laravel and JavaScript",
      "Managed MySQL/MariaDB relational databases",
      "Created Python vulnerability scanning automation and tested REST API security",
      "Used Git for branching, merging, conflict resolution, and code reviews",
    ],
  },
  {
    number: "03",
    role: "IT Administrator & Technical Support Specialist",
    company: "SMK VIP Ma'arif NU 1",
    location: "Purworejo, Jawa Tengah",
    period: "Jul 2022 — Aug 2023",
    type: "IT Administration · Technical Support",
    description:
      "Managed IT assets, user access, routine database backups, and daily technical assistance for staff and office systems.",
    responsibilities: [
      "Managed IT inventory including PCs, laptops, printers, and network devices",
      "Configured user access authorization through UAM",
      "Performed routine database backup procedures",
      "Provided daily helpdesk support for office systems and applications",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Professional Journey
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Work <span className="text-cyan-400">Experience.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            My professional journey across IT infrastructure, application
            development, technical support, security, and technology education.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative ml-3 border-l border-cyan-400/20 md:ml-6">
          {experiences.map((experience) => (
            <article
              key={experience.number}
              className="relative pb-16 pl-8 last:pb-0 md:pl-12"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-cyan-400 ring-4 ring-cyan-400/10" />

              {/* Experience Card */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:border-cyan-400/30 md:p-8">
                {/* Top */}
                <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-sm tracking-widest text-cyan-400">
                    / {experience.number}
                  </span>

                  <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-1.5 text-xs text-cyan-400">
                    {experience.period}
                  </span>
                </div>

                {/* Role & Company */}
                <h3 className="text-xl font-semibold leading-8 text-white md:text-2xl">
                  {experience.role}
                </h3>

                <div className="mt-3 flex flex-wrap items-center gap-2 text-sm">
                  <span className="font-medium text-gray-300">
                    {experience.company}
                  </span>
                  <span className="text-gray-600">·</span>
                  <span className="text-gray-500">{experience.location}</span>
                </div>

                <p className="mt-5 text-xs font-medium uppercase tracking-wider text-cyan-400/80">
                  {experience.type}
                </p>

                {/* Description */}
                <p className="mt-5 max-w-3xl text-sm leading-7 text-gray-400 md:text-base">
                  {experience.description}
                </p>

                {/* Responsibilities */}
                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {experience.responsibilities.map((item) => (
                    <div
                      key={item}
                      className="flex gap-3 rounded-xl border border-white/5 bg-black/20 p-4"
                    >
                      <span className="mt-0.5 text-cyan-400">↗</span>
                      <p className="text-sm leading-6 text-gray-400">{item}</p>
                    </div>
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
