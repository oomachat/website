import { PageLayout } from "../PageLayout";

export function TermsPage() {
  return (
    <PageLayout title="Terms of Service">
      <p className="font-medium text-[#272124]">
        Effective date: March 2026
      </p>

      <p className="mt-5">
        By downloading or using Ooma, you agree to these terms. Please read them
        carefully.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        What Ooma is
      </h2>
      <p className="mt-4">
        Ooma is a hormone-aware life planning tool. It provides forecasts based
        on established hormonal physiology and your daily check-ins. Ooma is not
        a medical device, does not provide medical advice, and is not a
        substitute for professional medical care.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        No medical advice
      </h2>
      <p className="mt-4">
        The forecasts, suggestions, and information provided by Ooma are for
        planning and informational purposes only. They do not constitute medical
        advice, diagnosis, or treatment. Always consult a qualified healthcare
        provider for medical decisions. Do not disregard professional medical
        advice or delay seeking it because of information from Ooma.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Your data
      </h2>
      <p className="mt-4">
        All data you enter into Ooma is stored locally on your device. We do not
        collect, access, or store your data on any server. You are solely
        responsible for your device and the data stored on it. If you delete the
        app or use the "Erase Everything" feature, your data is permanently
        gone.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Accuracy
      </h2>
      <p className="mt-4">
        Ooma's forecasts are probabilistic estimates, not guarantees. Forecast
        accuracy varies based on your condition, the regularity of your cycles,
        the consistency of your check-ins, and biological variability. Days
        further out in the forecast are less certain than near-term days. Ooma is
        transparent about confidence levels within the app.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Subscriptions and billing
      </h2>
      <p className="mt-4">
        Ooma may offer subscription plans through the Apple App Store. All
        billing is handled by Apple through your Apple ID. Subscription terms,
        pricing, cancellation, and refunds are governed by Apple's terms of
        service.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Limitation of liability
      </h2>
      <p className="mt-4">
        Ooma is provided "as is" without warranties of any kind. To the fullest
        extent permitted by law, we disclaim all liability for any damages
        arising from your use of the app, including but not limited to decisions
        made based on forecast information.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Changes to these terms
      </h2>
      <p className="mt-4">
        We may update these terms from time to time. Continued use of Ooma after
        changes constitutes acceptance of the updated terms.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Contact
      </h2>
      <p className="mt-4">
        Questions about these terms can be directed to us through our Substack
        at{" "}
        <a
          href="https://substack.com/oomachat"
          className="underline hover:no-underline"
        >
          substack.com/oomachat
        </a>
        .
      </p>
    </PageLayout>
  );
}
