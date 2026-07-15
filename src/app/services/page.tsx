import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";

export const metadata: Metadata = { title: "Services" };

export default function ServicesPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-16 px-[5%] overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -top-[100px] -right-[80px] blur-[90px] opacity-20 pointer-events-none" />
        <div className="max-w-[760px] relative z-10">
          <SectionLabel>What We Offer</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F0F0F0] mb-6">EVERYTHING YOUR BRAND NEEDS TO WIN ONLINE</h1>
          <p className="text-[1.05rem] text-[#888] leading-[1.8] font-light max-w-[560px]">From your first social post to your most complex ad funnel — we handle it all, or just the pieces you need.</p>
        </div>
      </section>
      <Services />
      <Process />
      <section className="px-[5%] py-20 bg-grey-dark text-center">
        <h2 className="font-display text-[3rem] leading-none mb-4">NOT SURE WHAT YOU NEED?</h2>
        <p className="text-[#888] mb-8 font-light max-w-[480px] mx-auto">Book a free 30-minute strategy call and we'll map out exactly what would move the needle for your business.</p>
        <Button href="/contact">Book Free Strategy Call →</Button>
      </section>
    </>
  );
}
