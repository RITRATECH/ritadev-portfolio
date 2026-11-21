export default function About() {
  return (
    <section id="about" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Get to know me
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white md:text-6xl">
            About <span className="text-cyan-400">Me.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Biography */}
          <div>
            <p className="text-xl leading-9 text-gray-300">
              I&apos;m{" "}
              <span className="font-semibold text-white">Rico Saputra</span>, a
              technology enthusiast passionate about building digital products
              and understanding how technology works beneath the surface.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              My journey revolves around web development, cybersecurity
              research, and continuous learning. I enjoy transforming ideas into
              functional applications while exploring security, system
              architecture, and emerging technologies.
            </p>

            <p className="mt-6 leading-8 text-gray-400">
              I believe great technology is not only about how it looks or
              works, but also about how secure, reliable, and meaningful it is
              to the people who use it.
            </p>
          </div>

          {/* Focus Areas */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-cyan-400/30">
              <div className="mb-5 text-2xl text-cyan-400">01</div>
              <h3 className="text-lg font-semibold text-white">
                Web Development
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Building modern, responsive, and functional digital experiences
                using current web technologies.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-cyan-400/30">
              <div className="mb-5 text-2xl text-cyan-400">02</div>
              <h3 className="text-lg font-semibold text-white">
                Cybersecurity
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Learning application security, vulnerability analysis, and
                defensive practices through authorized labs and research.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-cyan-400/30">
              <div className="mb-5 text-2xl text-cyan-400">03</div>
              <h3 className="text-lg font-semibold text-white">
                Research & Learning
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Exploring technical problems, conducting research, documenting
                findings, and continuously developing new skills.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition-all duration-300 hover:border-cyan-400/30">
              <div className="mb-5 text-2xl text-cyan-400">04</div>
              <h3 className="text-lg font-semibold text-white">
                Problem Solving
              </h3>
              <p className="mt-3 text-sm leading-7 text-gray-400">
                Approaching challenges analytically and turning complex ideas
                into practical solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
