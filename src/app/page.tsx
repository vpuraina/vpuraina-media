"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function VpurainaMedia() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll-triggered fade-ins translated to React
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Nav background on scroll translated to React
    const handleScroll = () => {
      const nav = document.getElementById('navbar');
      if (nav) {
        nav.style.background = window.scrollY > 60 ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.85)';
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAV */}
      <nav id="navbar">
        <div className="nav-logo">
          <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="138" cy="52" r="20" fill="#6B2FEB"/>
            <circle cx="62" cy="148" r="16" fill="rgba(200,200,200,0.7)"/>
            <polygon points="50,40 50,110 110,75" fill="none" stroke="rgba(200,200,200,0.8)" strokeWidth="12" strokeLinejoin="round"/>
            <polygon points="90,90 150,125 150,55" fill="none" stroke="#6B2FEB" strokeWidth="12" strokeLinejoin="round"/>
          </svg>
          <span className="nav-brand">VPURAINA MEDIA</span>
        </div>
        <ul className={`nav-links ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#0a0a0a] p-5' : ''}`}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#services">Services</Link></li>
          <li><Link href="#portfolio">Work</Link></li>
          <li><Link href="#pricing">Pricing</Link></li>
          <li><Link href="#blog">Blog</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <div className="nav-cta-wrap">
          <Link href="#cta" className="nav-cta">Get Started</Link>
        </div>
        <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span><span></span><span></span>
        </div>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="hero-inner fade-in">
          <div className="hero-eyebrow"><span className="dot"></span>India's Premier Digital Growth Agency</div>
          <h1>GROW <span className="accent">BOLD.</span><br/>STAY <span className="accent">SOCIAL.</span></h1>
          <p className="hero-sub">We craft digital experiences that convert browsers into buyers. Data-led strategy, creative that stops the scroll, results that scale.</p>
          <div className="hero-btns">
            <Link href="#cta" className="btn-primary">Start Your Journey →</Link>
            <Link href="#portfolio" className="btn-secondary">See Our Work</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><div className="stat-num">250<span>+</span></div><div className="stat-label">Brands Scaled</div></div>
            <div className="stat-item"><div className="stat-num">₹40<span>Cr+</span></div><div className="stat-label">Ad Spend Managed</div></div>
            <div className="stat-item"><div className="stat-num">8<span>x</span></div><div className="stat-label">Avg. ROAS Delivered</div></div>
            <div className="stat-item"><div className="stat-num">98<span>%</span></div><div className="stat-label">Client Retention</div></div>
          </div>
        </div>
        <div className="hero-scroll"><span>Scroll</span><div className="scroll-arrow"></div></div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-wrap">
        <div className="marquee-track">
          <span className="marquee-item">Social Media Marketing <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">Performance Ads <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">Brand Identity <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">Content Creation <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">SEO &amp; Growth <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">Web Design <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">Video Production <span className="marquee-sep">✦</span></span>
          <span className="marquee-item">Influencer Marketing <span className="marquee-sep">✦</span></span>
        </div>
      </div>

      {/* ABOUT */}
      <section id="about">
        <div className="orb"></div>
        <div className="about-grid">
          <div className="about-visual fade-in">
            <div className="about-card">
              <div className="about-img-block">
                <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="55" cy="20" r="8" fill="#6B2FEB"/>
                  <circle cx="25" cy="60" r="6" fill="rgba(200,200,200,0.5)"/>
                  <polygon points="10,15 10,45 35,30" fill="none" stroke="rgba(200,200,200,0.7)" strokeWidth="4" strokeLinejoin="round"/>
                  <polygon points="35,35 60,50 60,20" fill="none" stroke="#6B2FEB" strokeWidth="4" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="about-tag">Est. 2019</div>
              <div className="about-card-title">VPURAINA MEDIA</div>
              <div className="about-card-text">Be Simple, Be Social — our mantra since day one. We believe the best digital marketing isn't complicated; it's clear, consistent, and creative.</div>
            </div>
          </div>
          <div className="about-text fade-in">
            <div className="section-label">Who We Are</div>
            <h2 className="section-title">A TEAM WIRED FOR DIGITAL GROWTH</h2>
            <p>Vpuraina Media is a full-service digital marketing agency built for brands that want more than vanity metrics. We combine sharp strategy with bold creative to help businesses build audiences that actually buy.</p>
            <p>From startups making their first impression to established brands breaking into new markets, we bring the same energy and precision to every project.</p>
            <div className="about-pillars">
              <div className="pillar"><div className="pillar-icon">🎯</div><div className="pillar-title">Data First</div><div className="pillar-text">Every decision backed by numbers, not gut feelings.</div></div>
              <div className="pillar"><div className="pillar-icon">⚡</div><div className="pillar-title">Fast Execution</div><div className="pillar-text">Ideas go from brief to live in record time.</div></div>
              <div className="pillar"><div className="pillar-icon">🔗</div><div className="pillar-title">Full Funnel</div><div className="pillar-text">We cover awareness to conversion and beyond.</div></div>
              <div className="pillar"><div className="pillar-icon">🤝</div><div className="pillar-title">Transparent</div><div className="pillar-text">Clear reporting, honest timelines, real results.</div></div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services">
        <div className="orb orb-s1"></div>
        <div className="services-header fade-in">
          <div>
            <div className="section-label">What We Do</div>
            <h2 className="section-title">SERVICES BUILT TO SCALE</h2>
          </div>
          <p className="section-sub">Every service is designed to work alone — or together as a growth engine for your brand.</p>
        </div>
        <div className="services-grid">
          {[
            { icon: "📱", name: "SOCIAL MEDIA MANAGEMENT", desc: "We build, grow, and manage your social presence across platforms so you can focus on running your business.", items: ["Content calendar & strategy", "Reel & story production", "Community management", "Monthly analytics reports"] },
            { icon: "📊", name: "PERFORMANCE MARKETING", desc: "Meta, Google, and YouTube ads managed by certified experts who obsess over ROAS and cost per acquisition.", items: ["Campaign strategy & setup", "Creative A/B testing", "Retargeting funnels", "Budget optimisation"] },
            { icon: "✏️", name: "CONTENT CREATION", desc: "Scroll-stopping visuals, copy that converts, and videos that go viral — all on-brand and on-time.", items: ["Graphic design & motion", "Copywriting & blogs", "Video production", "Photography direction"] },
            { icon: "🔍", name: "SEO & CONTENT STRATEGY", desc: "Rank higher, drive organic traffic, and become the authority in your niche with our proven SEO framework.", items: ["Technical SEO audits", "Keyword research & mapping", "Link building", "Blog & pillar content"] },
            { icon: "🌐", name: "WEB DESIGN & DEVELOPMENT", desc: "Fast, beautiful websites and landing pages that are engineered to convert — not just look good.", items: ["UI/UX design", "Conversion optimisation", "Shopify & WordPress", "Landing page builds"] },
            { icon: "🤳", name: "INFLUENCER MARKETING", desc: "We connect your brand with the right creators — from nano to mega — and handle everything end to end.", items: ["Creator discovery & vetting", "Campaign briefing", "Contract & coordination", "Performance tracking"] }
          ].map((service, index) => (
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
      </section>

      {/* PORTFOLIO */}
      <section id="portfolio">
        <div className="fade-in" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}>
          <div>
            <div className="section-label">Our Work</div>
            <h2 className="section-title">CAMPAIGNS THAT MADE WAVES</h2>
          </div>
          <Link href="#cta" className="btn-secondary" style={{ fontSize: '.85rem', padding: '12px 22px', flexShrink: 0 }}>View All Projects</Link>
        </div>
        <div className="portfolio-filter fade-in">
          {["All", "Social Media", "Paid Ads", "Branding", "Web"].map((filter) => (
            <button 
              key={filter}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="portfolio-grid">
          <div className="port-card fade-in">
            <div className="port-card-inner"><div className="port-icon">👗</div></div>
            <div className="port-label">Social Media</div>
            <div className="port-overlay"><div className="port-tag">Fashion • Social Media</div><div className="port-title">Kapoor Threads — 40x Engagement Growth</div></div>
          </div>
          <div className="port-card fade-in">
            <div className="port-card-inner"><div className="port-icon">🥤</div></div>
            <div className="port-label">Paid Ads</div>
            <div className="port-overlay"><div className="port-tag">D2C • Performance</div><div className="port-title">NutriBlend — ₹2.4Cr Revenue in 90 Days</div></div>
          </div>
          <div className="port-card fade-in">
            <div className="port-card-inner"><div className="port-icon">🏠</div></div>
            <div className="port-label">Branding</div>
            <div className="port-overlay"><div className="port-tag">Real Estate • Brand</div><div className="port-title">PropVault — Complete Digital Identity</div></div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta">
        <div className="orb orb1"></div>
        <div className="cta-inner fade-in">
          <div className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>Ready to Scale?</div>
          <h2 className="cta-title">LET'S BUILD SOMETHING BOLD</h2>
          <p className="cta-sub">Drop your email and we'll reach out within 24 hours with a free strategy audit worth ₹15,000.</p>
          <div className="cta-form">
            <input className="cta-input" type="email" placeholder="your@email.com" />
            <Link href="mailto:hello@vpurainamedia.com" className="btn-primary">Get Free Audit →</Link>
          </div>
          <p style={{ fontSize: '.75rem', color: 'var(--grey)', marginTop: '16px' }}>No spam. No commitment. Just a clear picture of your growth opportunity.</p>
        </div>
      </section>
      
      {/* FOOTER */}
      <footer id="contact">
        <div className="footer-bottom">
          <div className="footer-copy">© 2026 Vpuraina Media. All rights reserved.</div>
        </div>
      </footer>
    </>
  );
}