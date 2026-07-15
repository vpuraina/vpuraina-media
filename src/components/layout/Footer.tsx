import Link from "next/link";
import Logo from "@/components/ui/Logo";

const services = ["Social Media Management", "Performance Marketing", "Content Creation", "SEO & Growth", "Web Design", "Influencer Marketing"];
const company = ["About Us", "Our Team", "Case Studies", "Blog", "Pricing", "Careers"];
const serviceLinks = ["/services", "/services", "/services", "/services", "/services", "/services"];
const companyLinks = ["/about", "/about#team", "/portfolio", "/blog", "/pricing", "/contact"];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-grey-dark border-t border-white/[0.06] px-[5%] pt-[70px] pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 mb-14">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <Logo size={36} />
            <span className="font-display text-xl tracking-widest">VPURAINA MEDIA</span>
          </div>
          <p className="text-[0.82rem] text-[#888] leading-relaxed max-w-[260px] mb-6">
            Be Simple, Be Social. Digital marketing that grows brands, builds communities, and drives real revenue.
          </p>
          <div className="flex gap-2.5">
            {["in", "𝕏", "▶", "📸"].map((icon, i) => (
              <a key={i} href="#" className="w-9 h-9 rounded-lg bg-violet/18 border border-violet/30 flex items-center justify-center text-sm hover:bg-violet transition-colors duration-200">
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white mb-5">Services</p>
          <ul className="flex flex-col gap-2.5">
            {services.map((s, i) => (
              <li key={s}>
                <Link href={serviceLinks[i]} className="text-[0.85rem] text-[#888] hover:text-violet-light transition-colors">{s}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white mb-5">Company</p>
          <ul className="flex flex-col gap-2.5">
            {company.map((c, i) => (
              <li key={c}>
                <Link href={companyLinks[i]} className="text-[0.85rem] text-[#888] hover:text-violet-light transition-colors">{c}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[0.75rem] font-bold tracking-[0.12em] uppercase text-white mb-5">Contact</p>
          <ul className="flex flex-col gap-2.5">
            <li><a href="mailto:hello@vpurainamedia.com" className="text-[0.85rem] text-[#888] hover:text-violet-light transition-colors">hello@vpurainamedia.com</a></li>
            <li><a href="tel:+919999999999" className="text-[0.85rem] text-[#888] hover:text-violet-light transition-colors">+91 99999 99999</a></li>
            <li><span className="text-[0.85rem] text-[#888]">New Delhi, India</span></li>
          </ul>
          <Link
            href="/contact"
            className="mt-6 inline-flex bg-violet text-white text-[0.82rem] font-semibold px-5 py-3 rounded-lg hover:bg-violet-light transition-colors"
          >
            Book a Free Call →
          </Link>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-3 pt-6 border-t border-white/[0.06]">
        <p className="text-[0.78rem] text-[#888]">© {year} Vpuraina Media. All rights reserved.</p>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
            <Link key={l} href="#" className="text-[0.78rem] text-[#888] hover:text-white transition-colors">{l}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
