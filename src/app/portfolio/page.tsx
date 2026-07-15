import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "Our Work" };

const projects = [
  { tag: "Social Media", label: "Fashion • Social Media", title: "Kapoor Threads — 40x Engagement Growth", emoji: "👗", grad: "from-violet to-[#1a0040]" },
  { tag: "Paid Ads", label: "D2C • Performance", title: "NutriBlend — ₹2.4Cr Revenue in 90 Days", emoji: "🥤", grad: "from-[#002020] to-[#006060]" },
  { tag: "Branding", label: "Real Estate • Brand", title: "PropVault — Complete Digital Identity", emoji: "🏠", grad: "from-[#1a1a00] to-[#404000]" },
  { tag: "Social Media", label: "EdTech • Content", title: "LearnSphere — 100K YouTube Subscribers", emoji: "📚", grad: "from-[#200020] to-[#800040]" },
  { tag: "Paid Ads", label: "F&B • Ads", title: "Crustoria — Local Chain Goes National", emoji: "🍕", grad: "from-[#001a20] to-[#004060]" },
  { tag: "Web", label: "HealthTech • Web", title: "WellNow — 3x Conversion Rate", emoji: "💊", grad: "from-[#0a0020] to-[#2d0a6e]" },
];

export default function PortfolioPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-16 px-[5%] overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -top-[100px] -right-[80px] blur-[90px] opacity-20 pointer-events-none" />
        <div className="max-w-[760px] relative z-10">
          <SectionLabel>Our Work</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F0F0F0] mb-6">CAMPAIGNS THAT MADE WAVES</h1>
          <p className="text-[1.05rem] text-[#888] leading-[1.8] font-light max-w-[520px]">Real brands, real budgets, real results. Here's a selection of work we're proud of.</p>
        </div>
      </section>
      <section className="px-[5%] py-10 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p) => (
            <div key={p.title} className="rounded-2xl overflow-hidden relative group cursor-pointer aspect-[4/3] bg-grey-mid">
              <div className={`w-full h-full bg-gradient-to-br ${p.grad} flex items-center justify-center text-[3rem] opacity-50 group-hover:opacity-70 group-hover:scale-105 transition-all duration-400`}>{p.emoji}</div>
              <div className="absolute top-3.5 left-3.5 bg-violet/90 text-white text-[0.7rem] font-semibold tracking-wider px-2.5 py-1 rounded uppercase">{p.tag}</div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/95 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <p className="text-[0.7rem] uppercase tracking-wider text-violet-light mb-1.5">{p.label}</p>
                <p className="font-display text-[1.2rem]">{p.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
