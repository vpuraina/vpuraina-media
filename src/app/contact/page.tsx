import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import ContactForm from "@/components/forms/ContactForm";

export const metadata: Metadata = { title: "Contact Us" };

const info = [
  { icon: "📧", label: "Email", value: "hello@vpurainamedia.com", href: "mailto:hello@vpurainamedia.com" },
  { icon: "📞", label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
  { icon: "📍", label: "Location", value: "New Delhi, India", href: "#" },
  { icon: "⏰", label: "Response Time", value: "Within 24 hours", href: null },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-16 px-[5%] overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -top-[100px] -right-[80px] blur-[90px] opacity-20 pointer-events-none" />
        <div className="max-w-[700px] relative z-10">
          <SectionLabel>Get In Touch</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F0F0F0] mb-6">LET&apos;S TALK ABOUT YOUR GROWTH</h1>
          <p className="text-[1.05rem] text-[#888] leading-[1.8] font-light">Book a free 30-minute strategy call or drop us a message. We respond to every inquiry within 24 hours.</p>
        </div>
      </section>

      <section className="px-[5%] pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-[1100px]">
          <ContactForm />
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {info.map((i) => (
                <div key={i.label} className="bg-grey-dark border border-white/[0.06] rounded-2xl p-6">
                  <div className="text-[1.4rem] mb-3">{i.icon}</div>
                  <div className="text-[0.72rem] font-semibold tracking-wider uppercase text-[#888] mb-1">{i.label}</div>
                  {i.href ? (
                    <a href={i.href} className="text-[0.9rem] font-medium text-[#F0F0F0] hover:text-violet-light transition-colors">{i.value}</a>
                  ) : (
                    <span className="text-[0.9rem] font-medium text-[#F0F0F0]">{i.value}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="bg-violet/10 border border-violet/30 rounded-2xl p-6">
              <h3 className="font-semibold mb-2 text-[0.95rem]">Free Strategy Audit</h3>
              <p className="text-[0.85rem] text-[#888] leading-[1.6]">Every new inquiry gets a complimentary strategy audit worth ₹15,000 — a detailed breakdown of your current digital presence and the biggest growth opportunities.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
