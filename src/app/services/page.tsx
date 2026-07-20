"use client";
import { useEffect } from "react";
import Link from "next/link";

const servicesList = [
  { icon: "📱", name: "SOCIAL MEDIA MANAGEMENT", desc: "We build, grow, and manage your social presence across platforms so you can focus on running your business.", items: ["Content calendar & strategy", "Reel & story production", "Community management", "Monthly analytics reports"] },
  { icon: "📊", name: "PERFORMANCE MARKETING", desc: "Meta, Google, and YouTube ads managed by certified experts who obsess over ROAS and cost per acquisition.", items: ["Campaign strategy & setup", "Creative A/B testing", "Retargeting funnels", "Budget optimisation"] },
  { icon: "✏️", name: "CONTENT CREATION", desc: "Scroll-stopping visuals, copy that converts, and videos that go viral — all on-brand and on-time.", items: ["Graphic design & motion", "Copywriting & blogs", "Video production", "Photography direction"] },
  { icon: "🔍", name: "SEO & CONTENT STRATEGY", desc: "Rank higher, drive organic traffic, and become the authority in your niche with our proven SEO framework.", items: ["Technical SEO audits", "Keyword research & mapping", "Link building", "Blog & pillar content"] },
  { icon: "🌐", name: "WEB DESIGN & DEVELOPMENT", desc: "Fast, beautiful websites and landing pages that are engineered to convert — not just look good.", items: ["UI/UX design", "Conversion optimisation", "Shopify & WordPress", "Landing page builds"] },
  { icon: "🤳", name: "INFLUENCER MARKETING", desc: "We connect your brand with the right creators — from nano to mega — and handle everything end to end.", items: ["Creator discovery & vetting", "Campaign briefing", "Contract & coordination", "Performance tracking"] }
];

const processSteps = [
  { step: "01", title: "Discovery & Audit", desc: "We dive deep into your brand, current numbers, and competitors to find the hidden gaps in your market." },
  { step: "02", title: "Strategy Customization", desc: "No cookie-cutter templates. We build a customized roadmap designed specifically for your goals and budget." },
  { step: "03", title: "Flawless Execution", desc: "Our team gets to work—creating high-converting assets, launching campaigns, and publishing content." },
  { step: "04", title: "Optimize & Scale", desc: "We don't just set it and forget it. We track the data daily, tweaking and scaling what works to maximize ROI." }
];

export default function ServicesPage() {
  useEffect(() => {
    // Scroll-triggered fade-ins
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
  }, []);

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '0', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <div className="fade-in" style={{ maxWidth: '800px', marginBottom: '100px', paddingLeft: '5%', paddingRight: '5%' }}>
        <div className="orb orb-1"></div>
        <div className="section-label">What We Offer</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textAlign: 'left', marginBottom: '24px' }}>
          EVERYTHING YOUR BRAND NEEDS TO WIN ONLINE
        </h1>
        <p className="section-sub" style={{ textAlign: 'left', maxWidth: '600px', fontSize: '1.1rem' }}>
          From your first social post to your most complex ad funnel — we handle it all, or just the pieces you need.
        </p>
      </div>

      {/* Services Grid (Reused from homepage design) */}
      <div style={{ paddingLeft: '5%', paddingRight: '5%', marginBottom: '120px' }}>
        <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {servicesList.map((service, index) => (
            <div key={index} className="service-card fade-in">
              <div className="service-card-glow"></div>
              <div className="service-icon">{service.icon}</div>
              <div className="service-name">{service.name}</div>
              <div className="service-desc">{service.desc}</div>
              <ul className="service-list">
                {service.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div style={{ background: 'rgba(20,20,20,0.5)', borderTop: '1px solid rgba(255,255,255,0.06)', borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '100px 5%', marginBottom: '0' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>How We Work</div>
          <h2 className="section-title">THE GROWTH PROCESS</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', maxWidth: '1200px', margin: '0 auto' }}>
          {processSteps.map((p, i) => (
            <div key={i} className="fade-in" style={{ position: 'relative' }}>
              <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'rgba(107,47,235,0.15)', lineHeight: '1', position: 'absolute', top: '-20px', left: '-10px', zIndex: 0, fontFamily: 'var(--font-display)' }}>
                {p.step}
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#F0F0F0', marginBottom: '12px' }}>{p.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#888', lineHeight: '1.6' }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="fade-in" style={{ textAlign: 'center', padding: '100px 5%', background: '#0A0A0A' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 'bold', marginBottom: '16px', color: '#F0F0F0', fontFamily: 'var(--font-display)' }}>NOT SURE WHAT YOU NEED?</h2>
        <p style={{ color: '#888', marginBottom: '32px', fontSize: '1.05rem', maxWidth: '500px', margin: '0 auto 32px auto', lineHeight: '1.6' }}>
          Book a free 30-minute strategy call and we'll map out exactly what would move the needle for your business.
        </p>
        <Link href="/contact" className="btn-primary">Book Free Strategy Call →</Link>
      </div>

    </main>
  );
}