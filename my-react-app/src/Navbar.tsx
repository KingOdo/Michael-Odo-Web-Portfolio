import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/#case-studies" },
  { label: "Services", href: "/#expertise" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-5 z-30 px-5 md:top-7 md:px-10">
      <nav
        aria-label="Main navigation"
        className="relative mx-auto flex max-w-6xl items-center justify-between rounded-xl border border-white/90 bg-[#edf6f4]/85 px-5 py-3 backdrop-blur-md"
      >
      <Link
  to="/"
  className="text-lg font-bold tracking-tight text-[#243b40]"
>
  Dr. Michael
</Link>
        <div className="hidden items-center gap-9 md:flex">
          {navigation.map((item) => (
           <Link
  key={item.label}
  to={item.href}
  className="text-sm text-[#354e54] transition-colors hover:text-[#71949c]"
>
  {item.label}
</Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-flex items-center gap-4 rounded-md border border-[#a5bec3] px-3 py-2 text-xs text-[#354e54] transition-colors hover:bg-white/60"
          >
            Contact Me
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-1 text-[#354e54] md:hidden"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div
            id="mobile-navigation"
            className="absolute inset-x-0 top-[calc(100%+12px)] flex flex-col gap-1 rounded-xl border border-white bg-[#edf6f4] p-3 shadow-lg md:hidden"
          >
            {navigation.map((item) => (
            <Link
  key={item.label}
  to={item.href}
  className="text-sm text-[#354e54] transition-colors hover:text-[#71949c]"
>
  {item.label}
</Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}