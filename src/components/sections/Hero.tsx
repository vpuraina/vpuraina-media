"use client";
import Link from "next/link";
import Button from "@/components/ui/Button";

const stats = [
  { num: "250+", label: "Brands Scaled" },
  { num: "₹40Cr+", label: "Ad Spend Managed" },
  { num: "8x", label: "Avg. ROAS Delivered" },
  { num: "98%", label: "Client Retention" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center px-[5%] pt-[120px] pb-20 overflow-hidden">
      {/* Orbs */}
      <div className="absolute w-[520px] h-[520px] rounded-full bg-violet -top-[120px] -right-[100px] blur-[90px] opacity-45 animate-pulse-slow pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] rounded-full bg-violet/60 bottom-16 left-[10%] blur-[90px] opacity-40 animate-pulse-slow [animation-delay:2s] pointer-events-none" />

      <div className="max-w-[900px] relative z-10">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 bg-violet/18 border border-violet/40 rounded-full px-4 py-[6px] text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-violet-light mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-light animate-blink" />
          India&apos;s Premier Digital Growth Agency
        </div>

        <h1 className="font-display text-[clamp(3.4rem,8vw,7.5rem)] leading-[0.95] tracking-wide text-[#F0F0F0] mb-7">
          GROW <span className="text-violet-light">BOLD.</span>
          <br />STAY <span className="text-violet-light">SOCIAL.</span>
        </h1>

        <p className="text-[clamp(1rem,1.6vw,1.2rem)] text-[#888] max-w-[560px] leading-[1.7] mb-11 font-light">
          We craft digital experiences that convert browsers into buyers. Data-led strategy, creative that stops the scroll, results that scale.
        </p>

        <div className="flex gap-4 flex-wrap">
          <Button href="/contact">Start Your Journey →</Button>
          <Button href="/portfolio" variant="secondary">See Our Work</Button>
        </div>

        <div className="flex gap-12 mt-16 flex-wrap">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-[2.6rem] text-[#F0F0F0] leading-none">
                {s.num}
              </div>
              <div className="text-[0.75rem] text-[#888] tracking-widest uppercase mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
        <span className="text-[0.65rem] tracking-[0.12em] uppercase text-[#888]">Scroll</span>
        <div className="w-5 h-5 border-r-2 border-b-2 border-violet-light rotate-45" />
      </div>
    </section>
  );
}
