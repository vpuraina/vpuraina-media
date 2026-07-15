import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "Pricing" };

const plans = [
  {
    tier: "Starter", price: "₹25,000", per: "/mo", featured: false,
    desc: "Perfect for new brands building their digital foundation.",
    features: [
      { text: "2 Social Platforms", yes: true },
      { text: "12 Posts / Month", yes: true },
      { text: "Monthly Report", yes: true },
      { text: "Basic Ad Setup", yes: true },
      { text: "Video Production", yes: false },
      { text: "Influencer Campaigns", yes: false },
    ],
  },
  {
    tier: "Growth", price: "₹60,000", per: "/mo", featured: true,
    desc: "For scaling brands ready to dominate their category.",
    features: [
      { text: "4 Social Platforms", yes: true },
      { text: "30 Posts / Month", yes: true },
      { text: "Weekly Reports", yes: true },
      { text: "Performance Ads Mgmt", yes: true },
      { text: "Video Production (4/mo)", yes: true },
      { text: "Influencer Campaigns", yes: false },
    ],
  },
  {
    tier: "Enterprise", price: "Custom", per: " pricing", featured: false,
    desc: "Full-suite partnership for large brands and enterprises.",
    features: [
      { text: "All Platforms", yes: true },
      { text: "Unlimited Content", yes: true },
      { text: "Real-time Dashboard", yes: true },
      { text: "Full Ad Management", yes: true },
      { text: "Video Production", yes: true },
      { text: "Influencer Campaigns", yes: true },
    ],
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-16 px-[5%] overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -top-[100px] -right-[80px] blur-[90px] opacity-20 pointer-events-none" />
        <div className="text-center max-w-[660px] mx-auto relative z-10">
          <SectionLabel>Investment</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F0F0F0] mb-5">CLEAR PRICING, REAL RESULTS</h1>
          <p className="text-[1.05rem] text-[#888] leading-[1.8] font-light">No hidden fees. No lock-in contracts after month 3. Just results.</p>
        </div>
      </section>

      <section className="px-[5%] pb-28 relative overflow-hidden">
        <div className="absolute w-[450px] h-[450px] rounded-full bg-violet right-[-100px] top-1/2 -translate-y-1/2 blur-[90px] opacity-12 pointer-events-none" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10 max-w-[1100px] mx-auto">
          {plans.map((p) => (
            <div key={p.tier} className={`relative rounded-2xl p-10 border transition-all duration-300 hover:-translate-y-1.5 ${p.featured ? "border-violet bg-dark-gradient" : "bg-[#0A0A0A] border-white/[0.07]"}`}>
              {p.featured && (
                <div className="absolute -top-[14px] left-1/2 -translate-x-1/2 bg-violet text-white text-[0.72rem] font-bold tracking-wider px-4 py-1.5 rounded-full uppercase whitespace-nowrap">Most Popular</div>
              )}
              <div className="text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-violet-light mb-3">{p.tier}</div>
              <div className="font-display text-[3.2rem] text-[#F0F0F0] leading-none">{p.price}<span className="text-[1.2rem] font-body font-light text-[#888]">{p.per}</span></div>
              <p className="text-[0.82rem] text-[#888] mt-3 mb-7 leading-snug">{p.desc}</p>
              <div className="h-px bg-white/[0.07] mb-6" />
              <ul className="flex flex-col gap-3 mb-9">
                {p.features.map((f) => (
                  <li key={f.text} className={`text-[0.85rem] flex items-center gap-2.5 ${f.yes ? "text-[#F0F0F0]" : "text-[#888]"}`}>
                    <span className={`w-[18px] h-[18px] rounded-full flex items-center justify-center text-[0.65rem] flex-shrink-0 ${f.yes ? "bg-violet text-white" : "bg-violet/30 text-violet-light"}`}>
                      {f.yes ? "✓" : "—"}
                    </span>
                    {f.text}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant={p.featured ? "primary" : "outline"}>
                {p.tier === "Enterprise" ? "Talk to Us" : "Get Started"}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
