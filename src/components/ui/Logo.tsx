export default function Logo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="138" cy="52" r="20" fill="#6B2FEB" />
      <circle cx="62" cy="148" r="16" fill="rgba(200,200,200,0.7)" />
      <polygon points="50,40 50,110 110,75" fill="none" stroke="rgba(200,200,200,0.8)" strokeWidth="12" strokeLinejoin="round" />
      <polygon points="90,90 150,125 150,55" fill="none" stroke="#6B2FEB" strokeWidth="12" strokeLinejoin="round" />
    </svg>
  );
}
