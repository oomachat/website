import { PageLayout } from "../PageLayout";

export function AboutPage() {
  return (
    <PageLayout title="About Ooma">
      <p>Hi, I'm Kristy, the founder of Ooma.</p>

      <p className="mt-5">
        I've had endometriosis since my teens — multiple surgeries, both laser
        ablation and excision. I was able to conceive and have twin sons. A few
        years after their birth, my endo returned with adenomyosis. I had a
        hysterectomy and still have both ovaries.
      </p>

      <p className="mt-5">
        I'm now in perimenopause and on HRT. I built Ooma to make sense of
        where my hormones might take me day to day. I thought other women might
        find it useful, so I published it on the App Store.
      </p>

      <p className="mt-5">I hope it helps you.</p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(22px, 3vw, 32px)",
          fontWeight: 400,
        }}
      >
        A note on privacy
      </h2>

      <p className="mt-5">
        Privacy matters — especially for women, especially right now. Ooma
        doesn't collect any personal information. No account, no login, no
        email, no servers. Everything you enter stays on your iPhone. We don't
        have backend servers — just our one-page website at ooma.chat.
      </p>

      <p className="mt-5">
        Apple handles your App Store download and any subscription billing
        through your Apple ID, which is standard for all iOS apps and governed
        by Apple's privacy policy. On our side, we see nothing. We also offer
        Ghost Mode to erase your check-in data when you close the app, and an
        "Erase Everything" option in Settings that wipes your phone clean of all
        Ooma data.
      </p>

      <p className="mt-8 font-medium text-[#272124]">
        —{" "}
        <a
          href="https://www.linkedin.com/in/kristycurry/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:no-underline"
        >
          Kristy
        </a>
      </p>
    </PageLayout>
  );
}
