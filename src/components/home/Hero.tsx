import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-20"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[140px]" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            <span className="text-xs font-medium tracking-widest text-cyan-400">
              AVAILABLE FOR OPPORTUNITIES
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl lg:text-8xl">
            Building digital
            <br />
            <span className="text-cyan-400">experiences.</span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            Hi, I&apos;m{" "}
            <span className="font-medium text-white">Rico Saputra</span>. A
            developer and security enthusiast focused on building modern web
            applications, exploring cybersecurity, and solving real-world
            problems through technology.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3.5 font-semibold text-black transition-all duration-300 hover:bg-cyan-300"
            >
              Explore My Work ↗
            </Link>

            <Link
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:text-cyan-400"
            >
              Contact Me
            </Link>
          </div>

          {/* Stats */}
          <div className="mt-16 flex flex-wrap gap-12 border-t border-white/10 pt-8">
            <div>
              <p className="text-3xl font-bold text-white">
                Web<span className="text-cyan-400">Dev</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">Development</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                Cyber<span className="text-cyan-400">Sec</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">Security Research</p>
            </div>

            <div>
              <p className="text-3xl font-bold text-white">
                Full<span className="text-cyan-400">Stack</span>
              </p>
              <p className="mt-2 text-sm text-gray-500">Modern Technology</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
