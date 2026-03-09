import heroImage from "./assets/hero.webp";
import { Instagram } from "lucide-react";
import { AppStoreBadge } from "./AppStoreBadge";
import { SubstackIcon } from "./SubstackIcon";

export default function App() {
  return (
    <div className="min-h-screen bg-[#e3ffc2] flex flex-col">
      <div className="relative w-full flex-1 flex flex-col">
        <div className="relative mx-4 sm:mx-6 md:mx-8 mt-4 sm:mt-6 md:mt-8 mb-4 sm:mb-6 md:mb-8 flex-1 rounded-[20px] sm:rounded-[30px] overflow-hidden min-h-[500px] sm:min-h-[600px] md:min-h-[700px] lg:min-h-[760px]">
          <img
            src={heroImage}
            alt="Three women lying together in soft natural light"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />

          <div className="relative z-10 flex flex-col items-center px-4 sm:px-8 md:px-12 pt-8 sm:pt-10 md:pt-12">
            <p
              className="text-[#ffffff] text-center"
              style={{
                fontFamily: "'Fraunces', 'Georgia', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 200,
              }}
            >
              ooma
            </p>

            <h1
              className="mt-6 sm:mt-8 md:mt-12 text-[#e3ffc2] text-center max-w-[900px]"
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 7vw, 100px)",
                lineHeight: "0.94",
                fontWeight: 400,
              }}
            >
              Your 7-day
              <br />
              hormone forecast.
            </h1>

            <div
              className="mt-6 sm:mt-8 text-[#e3ffc2] text-center max-w-[590px]"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(13px, 1.4vw, 18px)",
                lineHeight: "1.45",
              }}
            >
              <p>
                Ooma reads where you are in your hormonal cycle and tells you
                what's coming — which days your focus will be sharp, which days
                your energy will crash, when pain or mood swings are likely to
                show up, and what to do about all of it.
              </p>
              <p className="mt-4">
                Not a period tracker. Not a fertility app. A planning tool for
                perimenopause, fibroids, endometriosis, and PCOS.
              </p>
              <p className="mt-4 font-medium">
                No account. No cloud. Your data never leaves your phone.
              </p>
            </div>

          </div>

          <div className="absolute z-10 bottom-[28px] right-[28px] flex items-center gap-3">
            <AppStoreBadge />
            <a
              href="https://www.instagram.com/oomachat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#FEB29A] hover:bg-[#fda487] transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram
                className="w-5 h-5 sm:w-6 sm:h-6 text-[#272124]"
                strokeWidth={1.8}
              />
            </a>
            <a
              href="https://substack.com/oomachat"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-[44px] h-[44px] sm:w-[52px] sm:h-[52px] rounded-full bg-[#FEB29A] hover:bg-[#fda487] transition-colors"
              aria-label="Subscribe on Substack"
            >
              <SubstackIcon className="w-5 h-5 sm:w-[22px] sm:h-[22px] text-[#272124]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
