const items = ["Social Media Marketing", "Performance Ads", "Brand Identity", "Content Creation", "SEO & Growth", "Web Design", "Video Production", "Influencer Marketing"];

export default function Marquee() {
  const doubled = [...items, ...items];
  return (
    <div className="bg-violet py-3.5 overflow-hidden whitespace-nowrap">
      <div className="inline-flex animate-marquee">
        {doubled.map((item, i) => (
          <span key={i} className="font-display text-base tracking-[0.15em] px-10 text-white/85">
            {item} <span className="text-white/40 px-1">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
