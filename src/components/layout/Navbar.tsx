"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/ui/Logo";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Work" },
  { href: "/pricing", label: "Pricing" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMobileOpen(false), [pathname]);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-[5%] flex items-center justify-between h-[72px] border-b border-white/[0.06] transition-all duration-300",
        scrolled ? "bg-[#0A0A0A]/97 backdrop-blur-xl" : "bg-[#0A0A0A]/85 backdrop-blur-md"
      )}
    >
      <Link href="/" className="flex items-center gap-3">
        <Logo size={38} />
        <span className="font-display text-xl tracking-widest text-[#F0F0F0]">VPURAINA MEDIA</span>
      </Link>

      {/* Desktop links */}
      <ul className="hidden lg:flex items-center gap-9 list-none">
        {navLinks.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className={cn(
                "text-[0.82rem] font-medium tracking-widest uppercase transition-colors duration-200",
                pathname === l.href ? "text-[#F0F0F0]" : "text-[#888] hover:text-[#F0F0F0]"
              )}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="hidden lg:block">
        <Link
          href="/contact"
          className="bg-violet text-white px-6 py-[10px] rounded-md text-[0.85rem] font-semibold tracking-wide hover:bg-violet-light transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_36px_rgba(107,47,235,0.5)]"
        >
          Get Started
        </Link>
      </div>

      {/* Mobile toggle */}
      <button
        className="lg:hidden text-[#F0F0F0] p-1"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-[#0A0A0A]/98 backdrop-blur-xl border-b border-white/[0.06] px-[5%] py-6 flex flex-col gap-5 lg:hidden">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium uppercase tracking-widest text-[#888] hover:text-white transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="bg-violet text-white text-center py-3 rounded-md font-semibold text-sm mt-2"
          >
            Get Started
          </Link>
        </div>
      )}
    </nav>
  );
}
