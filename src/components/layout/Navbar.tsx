"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
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
    <nav id="navbar">
      {/* Changed from <div> to <Link> to make it clickable */}
      <Link href="/" className="nav-logo" style={{ textDecoration: 'none' }}>
        <svg width="40" height="40" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="138" cy="52" r="20" fill="#6B2FEB"/>
          <circle cx="62" cy="148" r="16" fill="rgba(200,200,200,0.7)"/>
          <polygon points="50,40 50,110 110,75" fill="none" stroke="rgba(200,200,200,0.8)" strokeWidth="12" strokeLinejoin="round"/>
          <polygon points="90,90 150,125 150,55" fill="none" stroke="#6B2FEB" strokeWidth="12" strokeLinejoin="round"/>
        </svg>
        <span className="nav-brand">VPURAINA MEDIA</span>
      </Link>
      
      <ul className={`nav-links ${menuOpen ? 'flex flex-col absolute top-full left-0 w-full bg-[#0a0a0a] p-5' : ''}`}>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/services">Services</Link></li>
        <li><Link href="/portfolio">Work</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <div className="nav-cta-wrap">
        <Link href="/contact" className="nav-cta">Get Started</Link>
      </div>
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
}