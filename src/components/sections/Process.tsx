import SectionLabel from "@/components/ui/SectionLabel";

const steps = [
  { num: "01", title: "DISCOVERY", text: "We deep-dive into your brand, audience, competitors, and goals to build a clear picture of the opportunity." },
  { num: "02", title: "STRATEGY", text: "A bespoke growth roadmap covering channels, messaging, KPIs, and creative direction — built for your business." },
  { num: "03", title: "EXECUTION", text: "Our team moves fast. Content goes live, campaigns activate, and we monitor every metric in real time." },
  { num: "04", title: "SCALE", text: "What works gets doubled down on. We iterate, optimise, and scale the channels driving real ROI." },
];

export default function Process() {
  return (
    <section className="px-[5%] py-24 bg-grey-dark">
      <div className="text-center max-w-[600px] mx-auto mb-14">
        <SectionLabel>How We Work</SectionLabel>
        <h2 className="font-display text-[clamp(2.2rem,5vw,4rem)] leading-none text-[#F0F0F0]">FROM BRIEF TO BREAKTHROUGH</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        <div className="hidden lg:block absolute top-[38px] left-[10%] right-[10%] h-px bg-gradient-to-r from-transparent via-violet to-transparent z-0" />
        {steps.map((s) => (
          <div key={s.num} className="relative z-10 text-center px-4">
            <div className="w-[76px] h-[76px] rounded-full bg-grey-mid border-2 border-violet mx-auto mb-6 flex items-center justify-center font-display text-[1.6rem] text-violet-light hover:bg-violet hover:text-white transition-all duration-300 cursor-default">
              {s.num}
            </div>
            <h3 className="font-display text-[1.2rem] mb-2.5">{s.title}</h3>
            <p className="text-[0.82rem] text-[#888] leading-[1.6]">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
