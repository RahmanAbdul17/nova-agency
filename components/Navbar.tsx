
const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Work", href: "#work" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4">
      <nav className="flex items-center gap-3 rounded-full border border-white/[0.08] bg-[#111111]/95 px-4 py-1.5 shadow-lg shadow-black/20 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#home"
          className="shrink-0 rounded-full px-4 py-2 text-lg font-bold tracking-tight text-white"
        >
          NOVA<span className="text-cyan-400">.</span>
        </a>

        {/* Navigation links */}
        <div className="flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="whitespace-nowrap rounded-full px-4 py-2 text-[13px] text-gray-400 transition-all duration-200 hover:bg-white/[0.10] hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Contact button */}
        <a
          href="#contact"
          className="ml-1 whitespace-nowrap rounded-full bg-white px-4 py-2 text-[13px] font-medium text-black transition-colors duration-200 hover:bg-gray-200"
        >
          Let&apos;s Talk ↗
        </a>
      </nav>
    </header>
  );
}
