const achievements = [
  {
    number: "01",
    type: "RESEARCH PUBLICATION",
    title: "Host-Based Digital Forensics Analysis",
    subtitle: "Tor Browser Usage Artifacts on Linux",
    description:
      "Research on host-based digital forensic analysis of Tor Browser usage artifacts on Linux, published in AICOMS.",
    highlight: "AICOMS",
    label: "Scientific Publication",
  },
  {
    number: "02",
    type: "CYBERSECURITY",
    title: "SEVIMA Security Challenge",
    subtitle: "Vulnerability Analyst",
    description:
      "Participated in security vulnerability analysis with a focus on identifying and validating findings against OWASP Top 10 categories.",
    highlight: "95%",
    label: "Validation Rate",
  },
  {
    number: "03",
    type: "WEB DEVELOPMENT",
    title: "Web Development Achievement",
    subtitle: "Practical Web Development Assessment",
    description:
      "Demonstrated web development skills through a practical assessment covering implementation and development fundamentals.",
    highlight: "97/100",
    label: "Assessment Score",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Recognition & Milestones
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            Achievements & <span className="text-cyan-400">Research.</span>
          </h2>

          <p className="mt-6 max-w-2xl leading-8 text-gray-400">
            Research, technical accomplishments, and milestones that reflect my
            journey in technology and continuous learning.
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <article
              key={achievement.number}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              {/* Glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all group-hover:bg-cyan-400/[0.08]" />

              <div className="relative">
                <div className="mb-10 flex items-center justify-between">
                  <span className="text-sm tracking-widest text-cyan-400">
                    / {achievement.number}
                  </span>

                  <span className="text-xs tracking-widest text-gray-500">
                    {achievement.type}
                  </span>
                </div>

                <h3 className="text-xl font-semibold leading-8 text-white">
                  {achievement.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-cyan-400">
                  {achievement.subtitle}
                </p>

                <p className="mt-5 min-h-[100px] text-sm leading-7 text-gray-400">
                  {achievement.description}
                </p>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-3xl font-bold tracking-tight text-white">
                    {achievement.highlight}
                  </p>

                  <p className="mt-2 text-xs uppercase tracking-widest text-gray-500">
                    {achievement.label}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
