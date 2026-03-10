import { PageLayout } from "../PageLayout";

export function PrivacyPage() {
  return (
    <PageLayout title="Privacy Policy">
      <p className="font-medium text-[#272124]">
        Effective date: March 2026
      </p>

      <p className="mt-5">
        Ooma is a hormone-aware planning app that runs entirely on your iPhone.
        We designed it this way on purpose: your hormonal health data is
        sensitive, and we believe the safest place for it is on your device and
        nowhere else.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        What we collect
      </h2>
      <p className="mt-4">
        Nothing. Ooma does not collect, transmit, or store any personal
        information on external servers. There is no account creation, no login,
        no email address, no name, no phone number, and no analytics SDK. We do
        not use third-party tracking, advertising networks, or data brokers.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        What stays on your device
      </h2>
      <p className="mt-4">
        All data you enter — your hormonal profile, daily check-ins, cycle
        dates, symptom preferences, and HRT status — is stored locally on your
        iPhone using on-device storage. This data never leaves your phone. If
        you delete the app, all data is permanently removed.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        What Apple may collect
      </h2>
      <p className="mt-4">
        Your App Store download and any subscription billing are processed by
        Apple through your Apple ID. Apple may also collect anonymized app
        analytics (such as crash reports and session data) unless you have opted
        out in your iPhone's privacy settings. This data collection is governed
        by Apple's privacy policy, not ours.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Subscription billing
      </h2>
      <p className="mt-4">
        We use RevenueCat to manage subscription billing. RevenueCat processes
        your anonymous App Store subscriber ID and subscription status (active,
        expired, or trial) to verify your access to Ooma. This is billing data
        that Apple already handles as part of the purchase process.
      </p>
      <p className="mt-4">
        RevenueCat does not receive your name, email address, health data,
        hormonal profile, daily check-ins, cycle dates, symptom preferences, or
        any other information you enter in Ooma. Your hormonal health data never
        leaves your device — RevenueCat only sees whether you have an active
        subscription, not what you use Ooma for.
      </p>
      <p className="mt-4">
        We do not enable any third-party analytics integrations through
        RevenueCat. RevenueCat's privacy policy is available at{" "}
        <a
          href="https://www.revenuecat.com/privacy"
          className="underline hover:no-underline"
        >
          revenuecat.com/privacy
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
        Ghost Mode
      </h2>
      <p className="mt-4">
        Ooma offers Ghost Mode, which automatically erases your daily check-ins
        and recent period dates every time you close the app. Your profile
        settings remain so you don't have to re-onboard. Ghost Mode can be
        toggled on or off at any time in Settings.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Erase Everything
      </h2>
      <p className="mt-4">
        The "Erase Everything" option in Settings permanently deletes all Ooma
        data from your device. This action cannot be undone, and we cannot
        restore your data because we never had access to it.
      </p>

      <h2
        className="mt-10 text-[#272124]"
        style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(20px, 2.5vw, 28px)",
          fontWeight: 400,
        }}
      >
        Children's privacy
      </h2>
      <p className="mt-4">
        Ooma is not directed at children under 13. We do not knowingly collect
        information from children.
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
        If we make changes to this policy, we will update this page. Our core
        commitment — that your data stays on your device — will not change.
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
        Questions about this policy can be directed to us through our Substack
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
