"use client";
import { useEffect } from "react";
import Link from "next/link";

const team = [
  { initials: "VP", name: "Vikram Puraina", role: "Founder & CEO", bio: "10+ years in digital marketing. Previously led growth at two of India's fastest-scaling D2C brands.", grad: "linear-gradient(135deg, #6B2FEB, #1a0a3d)" },
  { initials: "SR", name: "Sneha Rawat", role: "Creative Director", bio: "Ex-McCann creative with a knack for campaigns that earn attention rather than buy it.", grad: "linear-gradient(135deg, #2d0a6e, #6B2FEB)" },
  { initials: "AK", name: "Aryan Khanna", role: "Head of Performance", bio: "Certified Meta & Google partner. Managed ₹25Cr+ in ad spend with consistent 6x+ ROAS.", grad: "linear-gradient(135deg, #1a0040, #B38CFF)" },
  { initials: "NM", name: "Nisha Mehta", role: "Strategy Lead", bio: "Brand strategist who's launched 30+ brands. Sharp on positioning, sharper on insights.", grad: "linear-gradient(135deg, #0a001a, #6B2FEB)" },
];

const values = [
  { icon: "🎯", title: "Data First", text: "Every decision backed by numbers, not gut feelings." },
  { icon: "⚡", title: "Fast Execution", text: "Ideas go from brief to live in record time." },
  { icon: "🔗", title: "Full Funnel", text: "We cover awareness to conversion and beyond." },
  { icon: "🤝", title: "Transparent", text: "Clear reporting, honest timelines, real results." },
];

export default function AboutPage() {
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
    <main style={{ paddingTop: '140px', paddingBottom: '100px', minHeight: '100vh', paddingLeft: '5%', paddingRight: '5%' }}>
      <div className="orb orb-1"></div>
      
      {/* Hero Section */}
      <div className="fade-in" style={{ maxWidth: '800px', marginBottom: '100px' }}>
        <div className="section-label">Who We Are</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textAlign: 'left', marginBottom: '24px' }}>
          A TEAM WIRED FOR DIGITAL GROWTH
        </h1>
        <p className="section-sub" style={{ textAlign: 'left', maxWidth: '600px', fontSize: '1.1rem' }}>
          Vpuraina Media is a full-service digital marketing agency built for brands that want more than vanity metrics. We combine sharp strategy with bold creative to help businesses build audiences that actually buy.
        </p>
      </div>

      {/* Values Section */}
      <div style={{ marginBottom: '100px' }}>
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>What Drives Us</div>
          <h2 className="section-title">OUR CORE VALUES</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
          {values.map((v) => (
            <div key={v.title} className="service-card fade-in" style={{ padding: '30px' }}>
              <div className="service-card-glow"></div>
              <div style={{ fontSize: '2rem', marginBottom: '16px' }}>{v.icon}</div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 'bold', marginBottom: '10px', color: '#F0F0F0' }}>{v.title}</h3>
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>{v.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div id="team" style={{ marginBottom: '100px', position: 'relative' }}>
        <div className="orb orb-2" style={{ left: '-10%', top: '50%' }}></div>
        
        <div className="fade-in" style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>The People</div>
          <h2 className="section-title">MEET THE TEAM</h2>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', position: 'relative', zIndex: 10 }}>
          {team.map((t) => (
            <div key={t.name} className="fade-in" style={{ background: 'rgba(20,20,20,0.5)', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden', transition: 'transform 0.3s ease, border-color 0.3s ease' }}>
              {/* Profile Image / Gradient Placeholder */}
              <div style={{ background: t.grad, aspectRatio: '1/1', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'rgba(255,255,255,0.6)', letterSpacing: '2px' }}>{t.initials}</span>
              </div>
              
              {/* Bio Details */}
              <div style={{ padding: '24px' }}>
                <div style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#F0F0F0', marginBottom: '4px' }}>{t.name}</div>
                <div style={{ fontSize: '0.75rem', color: '#B38CFF', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '12px' }}>{t.role}</div>
                <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6' }}>{t.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mini CTA */}
      <div className="fade-in" style={{ textAlign: 'center', padding: '60px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 'bold', marginBottom: '16px', color: '#F0F0F0' }}>WORK WITH US</h2>
        <p style={{ color: '#888', marginBottom: '32px', fontSize: '1.05rem' }}>Ready to build something remarkable together?</p>
        <Link href="/contact" className="btn-primary">Start a Conversation →</Link>
      </div>

    </main>
  );
}