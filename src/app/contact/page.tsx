"use client";
import { useEffect } from "react";
import Link from "next/link";

const info = [
  { icon: "📧", label: "Email", value: "hello@vpurainamedia.com", href: "mailto:hello@vpurainamedia.com" },
  { icon: "📞", label: "Phone", value: "+91 99999 99999", href: "tel:+919999999999" },
  { icon: "📍", label: "Location", value: "New Delhi, India", href: null },
  { icon: "⏰", label: "Response Time", value: "Within 24 hours", href: null },
];

export default function ContactPage() {
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

  // Shared input styling
  const inputStyle = {
    width: '100%',
    padding: '16px',
    background: 'rgba(255,255,255,0.02)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '8px',
    color: '#F0F0F0',
    fontSize: '0.9rem',
    fontFamily: 'inherit',
    outline: 'none',
    boxSizing: 'border-box' as const,
    marginBottom: '20px',
  };

  return (
    <main style={{ paddingTop: '140px', paddingBottom: '120px', minHeight: '100vh', paddingLeft: '5%', paddingRight: '5%' }}>
      <div className="orb orb-1"></div>
      
      {/* Hero Section */}
      <div className="fade-in" style={{ maxWidth: '700px', marginBottom: '80px' }}>
        <div className="section-label">Get In Touch</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textAlign: 'left', marginBottom: '24px' }}>
          LET'S TALK ABOUT YOUR GROWTH
        </h1>
        <p className="section-sub" style={{ textAlign: 'left', fontSize: '1.1rem' }}>
          Book a free 30-minute strategy call or drop us a message. We respond to every inquiry within 24 hours.
        </p>
      </div>

      {/* Contact Content: Form on left, Info on right */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Left Side: Contact Form */}
        <div className="fade-in" style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '40px' }}>
          <form onSubmit={(e) => e.preventDefault()}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0 20px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Name</label>
                <input type="text" placeholder="John Doe" style={inputStyle} required />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Email</label>
                <input type="email" placeholder="john@company.com" style={inputStyle} required />
              </div>
            </div>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>Company / Brand</label>
              <input type="text" placeholder="Your Brand Name" style={inputStyle} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.8rem', color: '#888', marginBottom: '8px' }}>How can we help?</label>
              <textarea placeholder="Tell us about your goals..." style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }} required></textarea>
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', border: 'none', cursor: 'pointer', padding: '16px', fontSize: '0.95rem' }}>
              Send Message →
            </button>
          </form>
        </div>

        {/* Right Side: Info & Audit Box */}
        <div className="fade-in">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px', marginBottom: '32px' }}>
            {info.map((i) => (
              <div key={i.label} style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px' }}>
                <div style={{ fontSize: '1.6rem', marginBottom: '12px' }}>{i.icon}</div>
                <div style={{ fontSize: '0.72rem', fontWeight: 'bold', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#888', marginBottom: '6px' }}>{i.label}</div>
                {i.href ? (
                  <a href={i.href} style={{ fontSize: '0.9rem', fontWeight: '500', color: '#F0F0F0', textDecoration: 'none' }}>{i.value}</a>
                ) : (
                  <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#F0F0F0' }}>{i.value}</span>
                )}
              </div>
            ))}
          </div>

          <div style={{ background: 'rgba(107,47,235,0.1)', border: '1px solid rgba(107,47,235,0.3)', borderRadius: '16px', padding: '30px' }}>
            <h3 style={{ fontWeight: 'bold', fontSize: '1rem', color: '#F0F0F0', marginBottom: '12px' }}>Free Strategy Audit</h3>
            <p style={{ fontSize: '0.9rem', color: '#B38CFF', lineHeight: '1.6', margin: 0 }}>
              Every new inquiry gets a complimentary strategy audit worth ₹15,000 — a detailed breakdown of your current digital presence and the biggest growth opportunities.
            </p>
          </div>
        </div>
        
      </div>
    </main>
  );
}