import SectionLabel from "@/components/ui/SectionLabel";

const testimonials = [
  { initials: "RK", name: "Rohit Kapoor", role: "Founder, Kapoor Threads", quote: "Vpuraina Media transformed our Instagram from 2K to 85K followers in 8 months. More importantly, our DMs are full of actual customers — not bots.", rating: 5 },
  { initials: "PS", name: "Priya Sharma", role: "CMO, NutriBlend", quote: "Our Meta ads were bleeding money before Vpuraina stepped in. Within 6 weeks, our ROAS went from 1.8x to 7.4x. I wish we'd found them sooner.", rating: 5 },
  { initials: "AM", name: "Arjun Mehta", role: "CEO, PropVault Realty", quote: "The team is fast, transparent, and genuinely invested in our success. They feel less like an agency and more like our in-house marketing team — but better.", rating: 5 },
];

export default function Testimonials() {
  return (
    <section className="px-[5%] py-24 bg-grey-dark relative overflow-hidden">
      <div className="absolute w-[350px] h-[350px] rounded-full bg-violet -left-[100px] -bottom-20 blur-[90px] opacity-15 pointer-events-none" />
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <SectionLabel>Client Love</SectionLabel>
        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-none text-[#F0F0F0]">WHAT OUR CLIENTS SAY</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl p-8 flex flex-col gap-5 hover:border-violet/40 hover:-translate-y-1 transition-all duration-300">
            <div className="flex gap-0.5 text-violet-light text-[0.9rem]">{"★".repeat(t.rating)}</div>
            <p className="text-[0.92rem] text-[#888] leading-[1.75] italic flex-1">&ldquo;{t.quote}&rdquo;</p>
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-violet-gradient flex items-center justify-center font-display text-[1.1rem] text-white flex-shrink-0">{t.initials}</div>
              <div>
                <div className="font-semibold text-[0.88rem]">{t.name}</div>
                <div className="text-[0.75rem] text-[#888]">{t.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
