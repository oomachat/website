import { Link } from "react-router-dom";

export function Logo({ dark = false }: { dark?: boolean }) {
  const color = dark ? "text-[#272124]" : "text-[#ffffff]";
  return (
    <Link
      to="/"
      className={`block text-center ${color}`}
      style={{
        fontFamily: "'Fraunces', 'Georgia', serif",
        fontSize: "clamp(32px, 4vw, 48px)",
        fontWeight: 200,
        textDecoration: "none",
      }}
    >
      ooma
    </Link>
  );
}
