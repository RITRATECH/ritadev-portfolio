const contacts = [
  {
    label: "Email",
    value: "ritratech1@gmail.com",
    href: "https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox",
  },
  {
    label: "GitHub",
    value: "https://github.com/RITRATECH",
    href: "https://github.com/RITRATECH",
  },
  {
    label: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/rico-saputra-99327142a/",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-16">
          <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            Get In Touch
          </p>

          <h2 className="max-w-4xl text-4xl font-bold tracking-tight text-white md:text-7xl">
            Let&apos;s build something
            <span className="text-cyan-400"> meaningful.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-base leading-8 text-gray-400">
            Interested in working together, discussing technology, or exploring
            new opportunities? Feel free to reach out. I&apos;m always open to
            meaningful conversations and collaborations.
          </p>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="rounded-xl border border-white/10 bg-black/30 p-5 transition-all duration-300 hover:border-cyan-400/40 hover:bg-cyan-400/[0.03]"
              >
                <p className="text-xs uppercase tracking-widest text-gray-500">
                  {contact.label}
                </p>
                <p className="mt-3 text-sm font-medium text-white transition-colors hover:text-cyan-400">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>

          <div className="mt-14 border-t border-white/10 pt-8">
            <a
              href="https://wa.me/6281331470759"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-cyan-400 px-7 py-4 text-sm font-semibold text-black transition-all hover:bg-cyan-300"
            >
              Chat on WhatsApp
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
