import { cn } from "@/lib/utils";

type Props = {
  size?: number;
  className?: string;
  delay?: number;
  opacity?: number;
};

export default function Orb({ size = 500, className, opacity = 0.35 }: Props) {
  return (
    <div
      className={cn("absolute rounded-full pointer-events-none", className)}
      style={{
        width: size,
        height: size,
        background: "#6B2FEB",
        filter: "blur(90px)",
        opacity,
        animation: "pulse 6s ease-in-out infinite",
      }}
    />
  );
}
