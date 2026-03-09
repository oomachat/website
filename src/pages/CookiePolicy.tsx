import { PageLayout } from "../PageLayout";

export function CookiePolicyPage() {
  return (
    <PageLayout title="Cookie Policy">
      <p className="font-medium text-[#272124]">
        Effective date: March 2026
      </p>

      <p className="mt-5">
        This website (ooma.chat) is a simple static site. We keep it that way on
        purpose.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Cookies we use
      </h2>
      <p className="mt-4">
        None. This website does not set any cookies — no analytics cookies, no
        tracking cookies, no advertising cookies, and no functional cookies.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Third-party services
      </h2>
      <p className="mt-4">
        This site is hosted on Cloudflare Pages. Cloudflare may use technical
        cookies for security purposes (such as bot detection). These are
        governed by Cloudflare's privacy policy and are not set by us.
      </p>
      <p className="mt-4">
        We load Google Fonts for typography. Google may log font requests in
        accordance with their privacy policy, but no cookies are set by this
        integration.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Local storage
      </h2>
      <p className="mt-4">
        This website does not use browser local storage, session storage, or
        IndexedDB.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        The Ooma app
      </h2>
      <p className="mt-4">
        The Ooma iOS app stores data locally on your device only and does not
        use cookies. For details on how the app handles your data, see
        our{" "}
        <a href="/privacy" className="underline hover:no-underline">
          Privacy Policy
        </a>
        .
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Changes to this policy
      </h2>
      <p className="mt-4">
        If we ever add cookies or analytics to this website, we will update this
        page and add appropriate consent mechanisms.
      </p>
    </PageLayout>
  );
}
