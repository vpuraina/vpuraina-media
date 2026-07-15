import type { Metadata } from "next";
import SectionLabel from "@/components/ui/SectionLabel";
import Link from "next/link";

export const metadata: Metadata = { title: "Blog" };

const posts = [
  { cat: "Meta Ads", date: "June 10, 2026", title: "Why Your Meta Ad ROAS Dropped in 2026 (And What To Do)", excerpt: "iOS changes, creative fatigue, and rising CPMs — here's the playbook to recover your performance fast.", emoji: "📈", grad: "from-violet to-[#1a0040]", slug: "meta-roas-dropped-2026" },
  { cat: "Content", date: "June 2, 2026", title: "How We Use AI to 10x Our Content Output Without Losing Quality", excerpt: "Our internal process for using AI tools smartly — keeping the brand voice while shipping 3x faster.", emoji: "🤖", grad: "from-[#002040] to-[#006080]", slug: "ai-content-output" },
  { cat: "Strategy", date: "May 22, 2026", title: "The Full-Funnel Social Strategy That Scaled a D2C Brand to ₹1Cr/Month", excerpt: "A case study breakdown: awareness → consideration → conversion, mapped to platforms and content types.", emoji: "🎯", grad: "from-[#200040] to-[#600080]", slug: "full-funnel-d2c-strategy" },
  { cat: "SEO", date: "May 14, 2026", title: "Local SEO in India: The 2026 Playbook for Regional Brands", excerpt: "Google's local pack, regional language content, and hyper-targeted keywords — the complete guide.", emoji: "🔍", grad: "from-[#001a10] to-[#004030]", slug: "local-seo-india-2026" },
  { cat: "Branding", date: "May 5, 2026", title: "Why Your Brand Needs a Clear Visual Identity Before Running Ads", excerpt: "Spending on ads without strong branding is like pouring water in a leaky bucket.", emoji: "🎨", grad: "from-[#1a0a00] to-[#4a2000]", slug: "brand-identity-before-ads" },
  { cat: "Social Media", date: "April 28, 2026", title: "Instagram Reels vs YouTube Shorts in 2026: Where Should You Invest?", excerpt: "Platform-by-platform breakdown of reach, engagement, and monetisation in 2026.", emoji: "📱", grad: "from-[#0a0020] to-[#2d0a6e]", slug: "reels-vs-shorts-2026" },
];

export default function BlogPage() {
  return (
    <>
      <section className="relative pt-[140px] pb-16 px-[5%] overflow-hidden">
        <div className="absolute w-[500px] h-[500px] rounded-full bg-violet -top-[100px] -right-[80px] blur-[90px] opacity-20 pointer-events-none" />
        <div className="max-w-[760px] relative z-10">
          <SectionLabel>Resources</SectionLabel>
          <h1 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] text-[#F0F0F0] mb-6">INSIGHTS FROM THE TEAM</h1>
          <p className="text-[1.05rem] text-[#888] leading-[1.8] font-light max-w-[520px]">Strategy, tactics, and honest takes on what's working in digital marketing right now.</p>
        </div>
      </section>
      <section className="px-[5%] pb-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="bg-[#0A0A0A] border border-white/[0.06] rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-violet/40 transition-all duration-300 block">
              <div className="aspect-video overflow-hidden">
                <div className={`w-full h-full bg-gradient-to-br ${p.grad} flex items-center justify-center text-[2.5rem] opacity-50 hover:opacity-70 hover:scale-105 transition-all duration-400`}>{p.emoji}</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="bg-violet/20 text-violet-light text-[0.68rem] font-semibold tracking-wider uppercase px-2.5 py-1 rounded">{p.cat}</span>
                  <span className="text-[0.72rem] text-[#888]">{p.date}</span>
                </div>
                <h2 className="text-[1.05rem] font-semibold leading-snug mb-2.5 hover:text-violet-light transition-colors">{p.title}</h2>
                <p className="text-[0.82rem] text-[#888] leading-relaxed">{p.excerpt}</p>
                <span className="inline-flex items-center gap-1.5 text-[0.8rem] text-violet-light font-medium mt-4 hover:gap-3 transition-all">Read Article →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
