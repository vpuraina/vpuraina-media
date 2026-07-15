import Link from "next/link";
import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
};

export default function Button({ href, onClick, variant = "primary", children, className, type = "button", disabled }: Props) {
  const base = "inline-flex items-center gap-2 font-semibold text-[0.95rem] tracking-wide rounded-lg transition-all duration-200 px-8 py-[15px] cursor-pointer";
  const variants = {
    primary: "bg-violet text-white hover:bg-violet-light hover:-translate-y-[2px] hover:shadow-[0_12px_36px_rgba(107,47,235,0.5)]",
    secondary: "bg-transparent text-[#F0F0F0] border border-white/15 hover:border-white/40 hover:bg-white/5",
    outline: "bg-transparent text-[#F0F0F0] border border-white/15 hover:bg-white/5 text-center justify-center w-full",
  };

  const classes = cn(base, variants[variant], className);

  if (href) return <Link href={href} className={classes}>{children}</Link>;
  return <button type={type} onClick={onClick} disabled={disabled} className={classes}>{children}</button>;
}
