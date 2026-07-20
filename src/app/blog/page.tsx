"use client";
import { useEffect } from "react";
import Link from "next/link";

const posts = [
  { cat: "Meta Ads", date: "June 10, 2026", title: "Why Your Meta Ad ROAS Dropped in 2026 (And What To Do)", excerpt: "iOS changes, creative fatigue, and rising CPMs — here's the playbook to recover your performance fast.", emoji: "📈", grad: "linear-gradient(135deg, #6B2FEB, #1a0040)", slug: "meta-roas-dropped-2026" },
  { cat: "Content", date: "June 2, 2026", title: "How We Use AI to 10x Our Content Output Without Losing Quality", excerpt: "Our internal process for using AI tools smartly — keeping the brand voice while shipping 3x faster.", emoji: "🤖", grad: "linear-gradient(135deg, #002040, #006080)", slug: "ai-content-output" },
  { cat: "Strategy", date: "May 22, 2026", title: "The Full-Funnel Social Strategy That Scaled a D2C Brand to ₹1Cr/Month", excerpt: "A case study breakdown: awareness → consideration → conversion, mapped to platforms and content types.", emoji: "🎯", grad: "linear-gradient(135deg, #200040, #600080)", slug: "full-funnel-d2c-strategy" },
  { cat: "SEO", date: "May 14, 2026", title: "Local SEO in India: The 2026 Playbook for Regional Brands", excerpt: "Google's local pack, regional language content, and hyper-targeted keywords — the complete guide.", emoji: "🔍", grad: "linear-gradient(135deg, #001a10, #004030)", slug: "local-seo-india-2026" },
  { cat: "Branding", date: "May 5, 2026", title: "Why Your Brand Needs a Clear Visual Identity Before Running Ads", excerpt: "Spending on ads without strong branding is like pouring water in a leaky bucket.", emoji: "🎨", grad: "linear-gradient(135deg, #1a0a00, #4a2000)", slug: "brand-identity-before-ads" },
  { cat: "Social Media", date: "April 28, 2026", title: "Instagram Reels vs YouTube Shorts in 2026: Where Should You Invest?", excerpt: "Platform-by-platform breakdown of reach, engagement, and monetisation in 2026.", emoji: "📱", grad: "linear-gradient(135deg, #0a0020, #2d0a6e)", slug: "reels-vs-shorts-2026" },
];

export default function BlogPage() {
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
        <div className="section-label">Resources</div>
        <h1 className="section-title" style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', textAlign: 'left', marginBottom: '24px' }}>
          INSIGHTS FROM THE TEAM
        </h1>
        <p className="section-sub" style={{ textAlign: 'left', maxWidth: '520px', fontSize: '1.1rem' }}>
          Strategy, tactics, and honest takes on what's working in digital marketing right now.
        </p>
      </div>

      {/* Blog Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="fade-in" style={{ background: '#0A0A0A', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '16px', overflow: 'hidden', textDecoration: 'none', display: 'block', transition: 'border-color 0.3s ease' }}>
            
            {/* Thumbnail Banner */}
            <div style={{ background: p.grad, aspectRatio: '16/9', display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: '0.7' }}>
              <span style={{ fontSize: '4rem' }}>{p.emoji}</span>
            </div>
            
            {/* Content Body */}
            <div style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                <span style={{ background: 'rgba(107,47,235,0.2)', color: '#B38CFF', fontSize: '0.7rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 10px', borderRadius: '4px' }}>
                  {p.cat}
                </span>
                <span style={{ fontSize: '0.75rem', color: '#888' }}>{p.date}</span>
              </div>
              
              <h2 style={{ fontSize: '1.15rem', fontWeight: 'bold', color: '#F0F0F0', marginBottom: '12px', lineHeight: '1.4' }}>
                {p.title}
              </h2>
              
              <p style={{ fontSize: '0.85rem', color: '#888', lineHeight: '1.6', marginBottom: '24px' }}>
                {p.excerpt}
              </p>
              
              <span style={{ fontSize: '0.85rem', color: '#B38CFF', fontWeight: 'bold' }}>Read Article →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}