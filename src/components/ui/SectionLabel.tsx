export default function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[0.72rem] font-semibold tracking-[0.18em] uppercase text-violet-light mb-3">
      {children}
    </p>
  );
}
