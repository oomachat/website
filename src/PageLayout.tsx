import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { FooterLinks } from "./FooterLinks";

export function PageLayout({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#e3ffc2] flex flex-col">
      <div className="w-full max-w-[780px] mx-auto px-6 sm:px-10 pt-8 sm:pt-12 pb-16">
        <Logo dark />

        <h1
          className="mt-10 sm:mt-14 text-[#272124]"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(28px, 5vw, 48px)",
            lineHeight: "1.1",
            fontWeight: 400,
          }}
        >
          {title}
        </h1>

        <div
          className="mt-8 text-[#272124]/85"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(15px, 1.4vw, 17px)",
            lineHeight: "1.7",
          }}
        >
          {children}
        </div>

        <div className="mt-16 pt-8 border-t border-[#272124]/10">
          <FooterLinks />
        </div>
      </div>
    </div>
  );
}
