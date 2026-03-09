import heroImage from "./assets/hero.png";
import { Instagram } from "lucide-react";
import { AppStoreBadge } from "./AppStoreBadge";

export default function App() {
  return (
    <div className="min-h-screen bg-[#e3ffc2] flex flex-col">
      <div className="relative w-full flex-1 flex flex-col">
        <div className="relative mx-4 sm:mx-6 md:mx-8 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 flex-1 rounded-[20px] sm:rounded-[30px] overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[760px]">
          <img
            src={heroImage}
            alt="Women supporting each other"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12">
            <p
              className="text-white text-center"
              style={{
                fontFamily: "'Fraunces', 'Georgia', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
              }}
            >
              ooma
            </p>

            <h1
              className="mt-6 sm:mt-8 md:mt-12 text-[#e3ffc2] text-center max-w-[900px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(40px, 7vw, 100px)",
                lineHeight: "0.94",
                fontWeight: 400,
              }}
            >
              The home of
              <br />
              healing for women
              <br />
              with painful periods.
            </h1>

            <p
              className="mt-6 sm:mt-8 text-[#e3ffc2] text-center max-w-[590px]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(14px, 1.5vw, 20px)",
                lineHeight: "1.35",
              }}
            >
              Find support and compassion from your peers. Get expert advice
              from medical experts and people who share your pain.
            </p>

            <div className="mt-8 sm:mt-10">
              <AppStoreBadge />
            </div>
          </div>

          <a
            href="https://www.instagram.com/cookiecurry"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute z-10 bottom-[28px] left-[28px] flex items-center justify-center w-[60px] h-[60px] rounded-full bg-[#FEB29A] hover:bg-[#fda487] transition-colors"
          >
            <Instagram className="w-6 h-6 text-[#272124]" strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </div>
  );
}
