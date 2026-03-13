import { Link } from "react-router-dom";

const links = [
  { label: "About", to: "/about" },
  { label: "Privacy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Cookie Policy", to: "/cookie-policy" },
  { label: "FAQ", to: "/faq" },
];

export function FooterLinks({ light = false }: { light?: boolean }) {
  const color = light
    ? "text-[#e3ffc2]/80 hover:text-[#e3ffc2]"
    : "text-[#272124]/60 hover:text-[#272124]";

  return (
    <nav
      className="flex flex-wrap justify-center gap-x-6 gap-y-2"
      style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "clamp(12px, 1.2vw, 14px)",
      }}
    >
      {links.map((link) => (
        <Link
          key={link.to}
          to={link.to}
          className={`${color} transition-colors`}
        >
          {link.label}
        </Link>
      ))}
      <a
        href="mailto:support@ooma.chat"
        className={`${color} transition-colors`}
      >
        Support
      </a>
    </nav>
  );
}
