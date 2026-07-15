import SectionLabel from "@/components/ui/SectionLabel";

const metrics = [
  { num: "250+", label: "Brands across India & Southeast Asia" },
  { num: "8x", label: "Average return on ad spend" },
  { num: "₹40Cr", label: "Total ad budget managed" },
  { num: "98%", label: "Client retention year-over-year" },
];

const industries = ["Fashion & Apparel", "Real Estate", "EdTech", "F&B", "HealthTech", "D2C Brands"];

export default function Results() {
  return (
    <section className="px-[5%] py-24 relative overflow-hidden">
      <div className="absolute w-[600px] h-[600px] rounded-full bg-violet -right-[200px] top-1/2 -translate-y-1/2 blur-[90px] opacity-12 pointer-events-none" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        <div className="grid grid-cols-2 gap-0.5">
          {metrics.map((m, i) => (
            <div key={m.num} className={`bg-grey-dark p-10 hover:bg-violet/15 transition-colors duration-300 ${i === 0 ? "rounded-tl-2xl" : ""} ${i === 1 ? "rounded-tr-2xl" : ""} ${i === 2 ? "rounded-bl-2xl" : ""} ${i === 3 ? "rounded-br-2xl" : ""}`}>
              <div className="font-display text-[3.2rem] text-violet-light leading-none">{m.num}</div>
              <div className="text-[0.82rem] text-[#888] mt-1.5 leading-snug">{m.label}</div>
            </div>
          ))}
        </div>
        <div>
          <SectionLabel>Proven Results</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-none text-[#F0F0F0] mb-5">NUMBERS THAT SPEAK LOUDER</h2>
          <p className="text-[0.95rem] text-[#888] leading-[1.8] mb-4 font-light">We don&apos;t chase likes. We chase pipeline, revenue, and loyal communities. Every campaign we run is tied to a business outcome — and we hold ourselves accountable to it.</p>
          <p className="text-[0.95rem] text-[#888] leading-[1.8] font-light">From D2C brands reaching their first ₹1Cr month to B2B companies generating qualified leads on autopilot, our results span industries and scales.</p>
          <div className="flex flex-wrap gap-3 mt-10">
            {industries.map((ind) => (
              <span key={ind} className="bg-grey-dark border border-white/[0.07] rounded-full px-5 py-2.5 text-[0.78rem] font-medium text-[#888] tracking-wide">{ind}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
