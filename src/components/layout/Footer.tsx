const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row md:items-center">
        {/* Brand */}
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          Ritra<span className="text-cyan-400">Dev.</span>
        </a>

        {/* Copyright */}
        <p className="text-sm text-gray-500">
          © {currentYear} Rico Saputra. All rights reserved.
        </p>

        {/* Back to Top */}
        <a
          href="#home"
          className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
