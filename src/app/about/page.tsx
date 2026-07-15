import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";

export const metadata: Metadata = { title: "About Us" };

const team = [
  { initials: "VP", name: "Vikram Puraina", role: "Founder & CEO", bio: "10+ years in digital marketing. Previously led growth at two of India's fastest-scaling D2C brands.", grad: "from-violet to-[#1a0a3d]" },
  { initials: "SR", name: "Sneha Rawat", role: "Creative Director", bio: "Ex-McCann creative with a knack for campaigns that earn attention rather than buy it.", grad: "from-[#2d0a6e] to-violet" },
  { initials: "AK", name: "Aryan Khanna", role: "Head of Performance", bio: "Certified Meta & Google partner. Managed ₹25Cr+ in ad spend with consistent 6x+ ROAS.", grad: "from-[#1a0040] to-violet-light" },
  { initials: "NM", name: "Nisha Mehta", role: "Strategy Lead", bio: "Brand strategist who's launched 30+ brands. Sharp on positioning, sharper on insights.", grad: "from-[#0a001a] to-violet" },
];

const values = [
  { icon: "🎯", title: "Data First", text: "Every decision backed by numbers, not gut feelings." },
  { icon: "⚡", title: "Fast Execution", text: "Ideas go from brief to live in record time." },
  { icon: "🔗", title: "Full Funnel", text: "We cover awareness to conversion and beyond." },
  { icon: "🤝", title: "Transparent", text: "Clear reporting, honest timelines, real results." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-[140px] pb-24 px-[5%] overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -top-[120px] -right-[100px] blur-[90px] opacity-20 pointer-events-none" />
        <div className="max-w-[800px] relative z-10">
          <SectionLabel>Who We Are</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F0F0F0] mb-6">A TEAM WIRED FOR DIGITAL GROWTH</h1>
          <p className="text-[1.05rem] text-[#888] leading-[1.8] max-w-[600px] font-light">Vpuraina Media is a full-service digital marketing agency built for brands that want more than vanity metrics. We combine sharp strategy with bold creative to help businesses build audiences that actually buy.</p>
        </div>
      </section>

      {/* Values */}
      <section className="px-[5%] py-24 bg-grey-dark">
        <div className="text-center mb-14">
          <SectionLabel>What Drives Us</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#F0F0F0]">OUR CORE VALUES</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="bg-[#0A0A0A] border border-violet/25 rounded-2xl p-8 hover:border-violet/50 hover:-translate-y-1 transition-all duration-300">
              <div className="text-[1.8rem] mb-4">{v.icon}</div>
              <h3 className="font-semibold text-[0.95rem] mb-2">{v.title}</h3>
              <p className="text-[0.82rem] text-[#888] leading-[1.6]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section id="team" className="px-[5%] py-24 relative overflow-hidden">
        <div className="absolute w-[400px] h-[400px] rounded-full bg-violet -left-[100px] top-1/2 -translate-y-1/2 blur-[90px] opacity-12 pointer-events-none" />
        <div className="text-center mb-14">
          <SectionLabel>The People</SectionLabel>
          <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#F0F0F0]">MEET THE TEAM</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {team.map((t) => (
            <div key={t.name} className="bg-grey-dark border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-1.5 hover:border-violet/40 transition-all duration-300">
              <div className={`aspect-square bg-gradient-to-br ${t.grad} flex items-center justify-center`}>
                <span className="font-display text-[3rem] text-white/70">{t.initials}</span>
              </div>
              <div className="p-5">
                <div className="font-semibold text-[0.95rem] mb-0.5">{t.name}</div>
                <div className="text-[0.78rem] text-violet-light mb-3">{t.role}</div>
                <p className="text-[0.78rem] text-[#888] leading-[1.55]">{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5%] py-20 bg-grey-dark text-center">
        <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] leading-none mb-4">WORK WITH US</h2>
        <p className="text-[#888] mb-8 font-light">Ready to build something remarkable together?</p>
        <Button href="/contact">Start a Conversation →</Button>
      </section>
    </>
  );
}
