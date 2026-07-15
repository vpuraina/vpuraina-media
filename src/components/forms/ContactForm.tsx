"use client";
import { useState } from "react";
import Button from "@/components/ui/Button";

type FormState = "idle" | "loading" | "success" | "error";

const services = ["Social Media Management", "Performance Marketing", "Content Creation", "SEO & Growth", "Web Design", "Influencer Marketing", "Full Package", "Not sure yet"];
const budgets = ["Under ₹25,000/mo", "₹25,000 – ₹60,000/mo", "₹60,000 – ₹1,50,000/mo", "₹1,50,000+/mo"];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", service: "", budget: "", message: "" });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
    // TODO: wire to Resend API route /api/contact
    await new Promise((r) => setTimeout(r, 1200));
    setState("success");
  };

  const inputCls = "w-full bg-white/[0.07] border border-white/12 text-[#F0F0F0] px-4 py-3.5 rounded-lg text-[0.9rem] outline-none focus:border-violet placeholder-[#888] transition-colors";
  const labelCls = "block text-[0.78rem] font-medium tracking-wide uppercase text-[#888] mb-2";

  if (state === "success") return (
    <div className="bg-violet/10 border border-violet/40 rounded-2xl p-12 text-center">
      <div className="text-[3rem] mb-4">🎉</div>
      <h3 className="font-display text-[2rem] mb-3">WE GOT YOUR MESSAGE</h3>
      <p className="text-[#888] text-[0.9rem] leading-relaxed">Expect a response within 24 hours. We&apos;re already thinking about your strategy.</p>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className={labelCls}>Full Name *</label><input required value={form.name} onChange={set("name")} placeholder="Your name" className={inputCls} /></div>
        <div><label className={labelCls}>Email *</label><input required type="email" value={form.email} onChange={set("email")} placeholder="your@email.com" className={inputCls} /></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div><label className={labelCls}>Phone</label><input type="tel" value={form.phone} onChange={set("phone")} placeholder="+91 XXXXX XXXXX" className={inputCls} /></div>
        <div><label className={labelCls}>Company</label><input value={form.company} onChange={set("company")} placeholder="Your company name" className={inputCls} /></div>
      </div>
      <div><label className={labelCls}>Service Interested In</label>
        <select value={form.service} onChange={set("service")} className={inputCls}>
          <option value="">Select a service...</option>
          {services.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </div>
      <div><label className={labelCls}>Monthly Budget</label>
        <select value={form.budget} onChange={set("budget")} className={inputCls}>
          <option value="">Select budget range...</option>
          {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>
      <div><label className={labelCls}>Tell Us About Your Goals</label>
        <textarea value={form.message} onChange={set("message")} rows={4} placeholder="What do you want to achieve? Any specific challenges?" className={`${inputCls} resize-none`} />
      </div>
      <Button type="submit" disabled={state === "loading"} className="w-full justify-center">
        {state === "loading" ? "Sending..." : "Send Message →"}
      </Button>
    </form>
  );
}
