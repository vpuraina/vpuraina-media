import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vpuraina Media — Be Simple, Be Social",
  description: "India's performance-driven digital marketing agency.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* We removed the Next.js Tailwind classes here so your custom CSS can take over */}
      <body>
        {children}
      </body>
    </html>
  );
}