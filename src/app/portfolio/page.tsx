"use client";
import { useEffect } from "react";
import Link from "next/link";

const projects = [
  { tag: "Social Media", label: "Fashion • Social Media", title: "Kapoor Threads — 40x Engagement Growth", emoji: "👗", grad: "linear-gradient(135deg, #6B2FEB, #1a0040)" },
  { tag: "Paid Ads", label: "D2C • Performance", title: "NutriBlend — ₹2.4Cr Revenue in 90 Days", emoji: "🥤", grad: "linear-gradient(135deg, #002020, #006060)" },
  { tag: "Branding", label: "Real Estate • Brand", title: "PropVault — Complete Digital Identity", emoji: "🏠", grad: "linear-gradient(135deg, #1a1a00, #404000)" },
  { tag: "Social Media", label: "EdTech • Content", title: "LearnSphere — 100K YouTube Subscribers", emoji: "📚", grad: "linear-gradient(135deg, #200020, #800040)" },
  { tag: "Paid Ads", label: "F&B • Ads", title: "Crustoria — Local Chain Goes National", emoji: "🍕", grad: "linear-gradient(135deg, #001a20, #004060)" },
  { tag: "Web", label: "HealthTech • Web", title: "WellNow — 3x Conversion Rate", emoji: "💊", grad: "linear-gradient(135deg, #0a0020, #2d0a6e)" },
];

export default function PortfolioPage() {
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
    <main style={{ paddingTop: '140px', paddingBottom: '120px', minHeight: '100vh', paddingLeft: '5%', paddingRight: '5%' }}>
      <div className="orb orb-1"></div>
      
      {/* Hero Section */}
      <div className="fade-in" style={{ maxWidth: '800px', marginBottom: '80px' }}>
        <div className="section-label">Our Work</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textAlign: 'left', marginBottom: '24px' }}>
          CAMPAIGNS THAT MADE WAVES
        </h1>
        <p className="section-sub" style={{ textAlign: 'left', maxWidth: '520px', fontSize: '1.1rem' }}>
          Real brands, real budgets, real results. Here's a selection of work we're proud of.
        </p>
      </div>

      {/* Portfolio Grid reusing your custom CSS classes */}
      <div className="portfolio-grid">
        {projects.map((p) => (
          <div key={p.title} className="port-card fade-in">
            {/* We apply the unique gradient dynamically here */}
            <div className="port-card-inner" style={{ background: p.grad }}>
              <div className="port-icon">{p.emoji}</div>
            </div>
            <div className="port-label">{p.tag}</div>
            <div className="port-overlay">
              <div className="port-tag">{p.label}</div>
              <div className="port-title">{p.title}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Optional CTA */}
      <div className="fade-in" style={{ textAlign: 'center', marginTop: '100px', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '16px', color: '#F0F0F0' }}>READY TO SCALE?</h2>
        <p style={{ color: '#888', marginBottom: '32px', fontSize: '1.05rem' }}>Let's add your brand to this list.</p>
        <Link href="/contact" className="btn-primary">Book a Free Audit →</Link>
      </div>
    </main>
  );
}