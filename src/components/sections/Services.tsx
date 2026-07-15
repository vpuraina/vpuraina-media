import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

const services = [
  { icon: "📱", name: "Social Media Management", desc: "We build, grow, and manage your presence across platforms so you can focus on running your business.", features: ["Content calendar & strategy", "Reel & story production", "Community management", "Monthly analytics reports"] },
  { icon: "📊", name: "Performance Marketing", desc: "Meta, Google, and YouTube ads managed by certified experts who obsess over ROAS and cost per acquisition.", features: ["Campaign strategy & setup", "Creative A/B testing", "Retargeting funnels", "Budget optimisation"] },
  { icon: "✏️", name: "Content Creation", desc: "Scroll-stopping visuals, copy that converts, and videos that go viral — all on-brand and on-time.", features: ["Graphic design & motion", "Copywriting & blogs", "Video production", "Photography direction"] },
  { icon: "🔍", name: "SEO & Content Strategy", desc: "Rank higher, drive organic traffic, and become the authority in your niche with our proven SEO framework.", features: ["Technical SEO audits", "Keyword research & mapping", "Link building", "Blog & pillar content"] },
  { icon: "🌐", name: "Web Design & Development", desc: "Fast, beautiful websites and landing pages that are engineered to convert — not just look good.", features: ["UI/UX design", "Conversion optimisation", "Shopify & WordPress", "Landing page builds"] },
  { icon: "🤳", name: "Influencer Marketing", desc: "We connect your brand with the right creators — from nano to mega — and handle everything end to end.", features: ["Creator discovery & vetting", "Campaign briefing", "Contract & coordination", "Performance tracking"] },
];

export default function Services() {
  return (
    <section id="services" className="px-[5%] py-24 relative overflow-hidden">
      <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -left-[150px] top-0 blur-[90px] opacity-15 pointer-events-none" />
      <div className="flex justify-between items-end flex-wrap gap-6 mb-14 relative z-10">
        <div>
          <SectionLabel>What We Do</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-none text-[#F0F0F0]">SERVICES BUILT TO SCALE</h2>
        </div>
        <p className="text-[#888] max-w-[480px] leading-[1.7] font-light text-[0.95rem]">Every service is designed to work alone — or together as a growth engine for your brand.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {services.map((s) => (
          <div key={s.name} className="bg-grey-dark border border-white/[0.06] rounded-2xl p-9 relative overflow-hidden group hover:-translate-y-1.5 hover:border-violet/50 hover:shadow-[0_20px_60px_rgba(107,47,235,0.2)] transition-all duration-300">
            <div className="absolute w-[120px] h-[120px] rounded-full bg-violet blur-[60px] opacity-0 group-hover:opacity-30 -bottom-10 -right-10 transition-opacity duration-300 pointer-events-none" />
            <div className="w-13 h-13 bg-violet/20 rounded-xl flex items-center justify-center text-2xl mb-6 group-hover:bg-violet transition-colors duration-300">{s.icon}</div>
            <h3 className="font-display text-[1.55rem] tracking-wide mb-3">{s.name}</h3>
            <p className="text-[0.88rem] text-[#888] leading-[1.7] mb-6">{s.desc}</p>
            <ul className="flex flex-col gap-1.5">
              {s.features.map((f) => (
                <li key={f} className="text-[0.8rem] text-[#888] flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-violet-light flex-shrink-0" />{f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
