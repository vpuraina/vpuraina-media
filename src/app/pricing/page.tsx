"use client";
import { useEffect } from "react";
import Link from "next/link";

const plans = [
  {
    tier: "Starter", price: "₹25,000", per: "/mo", featured: false,
    desc: "Perfect for new brands building their digital foundation.",
    features: [
      { text: "2 Social Platforms", yes: true },
      { text: "12 Posts / Month", yes: true },
      { text: "Monthly Report", yes: true },
      { text: "Basic Ad Setup", yes: true },
      { text: "Video Production", yes: false },
      { text: "Influencer Campaigns", yes: false },
    ],
  },
  {
    tier: "Growth", price: "₹60,000", per: "/mo", featured: true,
    desc: "For scaling brands ready to dominate their category.",
    features: [
      { text: "4 Social Platforms", yes: true },
      { text: "30 Posts / Month", yes: true },
      { text: "Weekly Reports", yes: true },
      { text: "Performance Ads Mgmt", yes: true },
      { text: "Video Production (4/mo)", yes: true },
      { text: "Influencer Campaigns", yes: false },
    ],
  },
  {
    tier: "Enterprise", price: "Custom", per: " pricing", featured: false,
    desc: "Full-suite partnership for large brands and enterprises.",
    features: [
      { text: "All Platforms", yes: true },
      { text: "Unlimited Content", yes: true },
      { text: "Real-time Dashboard", yes: true },
      { text: "Full Ad Management", yes: true },
      { text: "Video Production", yes: true },
      { text: "Influencer Campaigns", yes: true },
    ],
  },
];

export default function PricingPage() {
  useEffect(() => {
    // Scroll-triggered fade-ins just like the homepage
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
    <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', paddingLeft: '5%', paddingRight: '5%' }}>
      <div className="orb orb-1"></div>
      
      {/* Header Section */}
      <div className="services-header fade-in" style={{ textAlign: 'center', marginBottom: '60px' }}>
        <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Investment</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>CLEAR PRICING, REAL RESULTS</h1>
        <p className="section-sub" style={{ margin: '0 auto', maxWidth: '660px' }}>No hidden fees. No lock-in contracts after month 3. Just results.</p>
      </div>

      {/* Pricing Grid */}
      <div className="services-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1100px', margin: '0 auto' }}>
        {plans.map((p) => (
          <div key={p.tier} className="service-card fade-in" style={{ display: 'flex', flexDirection: 'column', position: 'relative', border: p.featured ? '1px solid #6B2FEB' : '' }}>
            <div className="service-card-glow" style={{ opacity: p.featured ? 0.6 : 0.2 }}></div>
            
            {/* Featured Badge */}
            {p.featured && (
              <div style={{ position: 'absolute', top: '-14px', left: '50%', transform: 'translateX(-50%)', background: '#6B2FEB', color: 'white', fontSize: '0.72rem', fontWeight: 'bold', letterSpacing: '0.1em', padding: '4px 16px', borderRadius: '20px', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                Most Popular
              </div>
            )}

            <div className="section-label" style={{ fontSize: '0.75rem', marginBottom: '10px', color: '#6B2FEB', display: 'block' }}>{p.tier}</div>
            
            <div style={{ fontSize: '3.2rem', fontWeight: 'bold', color: '#F0F0F0', marginBottom: '15px', lineHeight: '1' }}>
              {p.price}<span style={{ fontSize: '1.2rem', color: '#888', fontWeight: 'normal' }}>{p.per}</span>
            </div>
            
            <div className="service-desc" style={{ marginBottom: '25px', color: '#888' }}>{p.desc}</div>
            
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.07)', marginBottom: '25px' }}></div>
            
            {/* Features List */}
            <ul className="service-list" style={{ flexGrow: 1, marginBottom: '30px', listStyle: 'none', padding: 0 }}>
              {p.features.map((f) => (
                <li key={f.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px', fontSize: '0.85rem', color: f.yes ? '#F0F0F0' : '#888' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '18px', height: '18px', borderRadius: '50%', fontSize: '0.65rem', background: f.yes ? '#6B2FEB' : 'rgba(107,47,235,0.3)', color: f.yes ? 'white' : '#B38CFF', flexShrink: 0 }}>
                    {f.yes ? "✓" : "—"}
                  </span>
                  {f.text}
                </li>
              ))}
            </ul>
            
            {/* Buttons mapped to your custom CSS classes */}
            <Link href="/contact" className={p.featured ? "btn-primary" : "btn-secondary"} style={{ textAlign: 'center', display: 'block', padding: '12px', width: '100%', boxSizing: 'border-box' }}>
              {p.tier === "Enterprise" ? "Talk to Us" : "Get Started"}
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}