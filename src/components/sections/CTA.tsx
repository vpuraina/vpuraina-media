import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export default function CTA() {
  return (
    <section className="relative py-32 px-[5%] overflow-hidden text-center">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-violet left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 blur-[90px] opacity-25 pointer-events-none" />
      <div className="relative z-10 max-w-[700px] mx-auto">
        <div className="flex justify-center mb-3">
          <SectionLabel>Ready to Scale?</SectionLabel>
        </div>
        <h2 className="font-display text-[clamp(2.8rem,6vw,5.5rem)] leading-[0.95] text-[#F0F0F0] mb-5">LET&apos;S BUILD SOMETHING BOLD</h2>
        <p className="text-[1.05rem] text-[#888] max-w-[500px] mx-auto leading-[1.7] font-light mb-11">Drop your email and we&apos;ll reach out within 24 hours with a free strategy audit worth ₹15,000.</p>
        <div className="flex gap-3 max-w-[460px] mx-auto flex-wrap">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 min-w-[220px] bg-white/7 border border-white/12 text-[#F0F0F0] px-[18px] py-3.5 rounded-lg text-[0.9rem] outline-none focus:border-violet placeholder-[#888] transition-colors"
          />
          <Button href="/contact">Get Free Audit →</Button>
        </div>
        <p className="text-[0.75rem] text-[#888] mt-4">No spam. No commitment. Just a clear picture of your growth opportunity.</p>
      </div>
    </section>
  );
}
