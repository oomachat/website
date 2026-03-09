import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { PageLayout } from "../PageLayout";

const faqs: { q: string; a: React.ReactNode }[] = [
  {
    q: "What is Ooma?",
    a: (
      <>
        <p>
          Ooma is a hormone-aware life planning app for women. It gives you a
          daily and weekly forecast — like a weather report for your hormones —
          across things like brain fog, energy, mood, sleep, pain risk, cravings,
          and social bandwidth. The idea is simple: if you know what's likely
          coming, you can plan around it instead of being blindsided by it.
        </p>
        <p className="mt-4">
          Ooma is not a period tracker, not a fertility app, and not a medical
          device. It's a planning tool.
        </p>
      </>
    ),
  },
  {
    q: "Who is Ooma for?",
    a: (
      <>
        <p>Ooma is built for women navigating:</p>
        <ul className="mt-3 ml-5 list-disc space-y-1.5">
          <li>
            <strong>Perimenopause</strong> — cycles getting unpredictable,
            symptoms escalating
          </li>
          <li>
            <strong>Post-menopause</strong> (natural or surgical) — no period,
            but hormones still affecting daily life
          </li>
          <li>
            <strong>Hysterectomy with ovaries intact</strong> — still cycling
            hormonally but with no bleed to anchor to
          </li>
          <li>
            <strong>Endometriosis</strong> — flare-risk planning layered on top
            of your hormonal forecast
          </li>
          <li>
            <strong>PCOS</strong> — irregular cycles, blood sugar sensitivity,
            and energy management
          </li>
          <li>Any combination of the above</li>
        </ul>
        <p className="mt-4">
          If you've ever thought "I wish someone had warned me today was going to
          feel like this," Ooma is for you.
        </p>
      </>
    ),
  },
  {
    q: "How does the forecast work?",
    a: (
      <>
        <p>
          When you first open Ooma, you answer a short set of onboarding
          questions — where you are hormonally, what symptoms hit you hardest,
          whether you're on HRT, and how regular your cycles are. This takes
          about two minutes.
        </p>
        <p className="mt-4">
          From there, Ooma builds your forecast using established hormonal
          physiology matched to your specific situation. Each morning, a quick
          check-in (sleep, energy, stress — under 30 seconds) sharpens the next
          couple of days. The forecast covers seven dimensions: cognition, mood,
          energy, sleep, pain risk, cravings, and social bandwidth.
        </p>
        <p className="mt-4">
          Days 1–2 are your most accurate forecast, driven by your check-in.
          Days 3–5 are pattern-based. Days 6–7 are directional — a rough
          heads-up, not a guarantee.
        </p>
        <p className="mt-4">
          Everything runs on your phone. No internet connection required.
        </p>
      </>
    ),
  },
  {
    q: "Is Ooma a medical app? Can I use it instead of talking to my doctor?",
    a: (
      <>
        <p>
          No. Ooma is a planning tool, not a medical device and not a substitute
          for medical care. It doesn't diagnose anything, it doesn't interpret
          lab results, and it doesn't provide medical advice.
        </p>
        <p className="mt-4">
          What it does is help you plan your days and weeks around how your body
          is likely to feel — so you can schedule the hard meeting on a clear
          day, protect your calendar on a crash day, and stop being surprised by
          patterns that have been there all along.
        </p>
        <p className="mt-4">
          If something feels off, trust that feeling. Ooma is here to help you
          plan your life, not to replace your doctor.
        </p>
      </>
    ),
  },
  {
    q: "What data does Ooma collect?",
    a: (
      <>
        <p>
          Ooma does not collect any personal information. There's no account, no
          login, no email, no name, no phone number. We don't have servers. We
          don't use analytics SDKs. We don't use ad networks. We don't share
          data with anyone because we never have your data to begin with.
        </p>
        <p className="mt-4">
          Everything you enter — your profile, your check-ins, your cycle dates
          — stays on your iPhone and nowhere else. If you delete the app, it's
          gone.
        </p>
        <p className="mt-4">
          <strong>What Apple sees:</strong> Your App Store download and any
          subscription billing are handled by Apple through your Apple ID, which
          is standard for every iOS app. Apple may also collect anonymized app
          analytics (like crash reports and session data) unless you've opted out
          in your iPhone's privacy settings. This is governed by Apple's privacy
          policy, not ours — because on our side, there's nothing to govern.
        </p>
        <p className="mt-4">We also offer two additional privacy features:</p>
        <ul className="mt-3 ml-5 list-disc space-y-1.5">
          <li>
            <strong>Ghost Mode</strong> — erases your daily check-ins every time
            you close the app. Your profile stays so you don't re-onboard, but
            no rolling data is kept.
          </li>
          <li>
            <strong>Erase Everything</strong> — one tap in Settings wipes all
            Ooma data from your phone. We can't restore it because we never had
            it.
          </li>
        </ul>
      </>
    ),
  },
  {
    q: "Why don't you ask me to create an account?",
    a: (
      <>
        <p>
          Because we don't need one and you shouldn't have one. An account means
          a server. A server means your menstrual and hormonal data exists
          somewhere other than your phone. In the current legal and political
          environment around reproductive health data, we believe that's an
          unnecessary risk.
        </p>
        <p className="mt-4">
          Ooma runs entirely on your device. The trade-off is that if you lose
          your phone or delete the app, your data is gone. We think that's the
          right trade-off.
        </p>
      </>
    ),
  },
  {
    q: "I had a hysterectomy but still have my ovaries. Can Ooma help me?",
    a: (
      <>
        <p>
          Yes — and this is one of the groups we built Ooma specifically to
          serve. Most period trackers are useless if you don't have a period, but
          if your ovaries are intact, your hormones are still cycling. You still
          experience the mood shifts, the energy swings, the brain fog, the joint
          pain — you just don't have a bleed to anchor it to.
        </p>
        <p className="mt-4">
          Ooma's hysterectomy-with-ovaries mode uses symptom pattern recognition
          and your daily check-ins to estimate where you are in your cycle and
          forecast what's coming. It gets more accurate over time as it learns
          your patterns. It won't be as precise as tracking a period, and Ooma is
          honest about that — but it's a lot better than guessing.
        </p>
      </>
    ),
  },
  {
    q: "What is Ghost Mode?",
    a: (
      <>
        <p>
          Ghost Mode is an extra layer of privacy. When it's turned on, Ooma
          erases your daily check-ins and recent period dates every time you
          close the app. Your profile settings (condition mode, symptom
          preferences, HRT status) stay intact so you don't have to re-onboard
          each time.
        </p>
        <p className="mt-4">
          The trade-off: Ghost Mode means Ooma can't learn your patterns over
          time, so your forecasts stay at baseline accuracy rather than
          improving. Some women prefer that trade-off. It's your choice, and you
          can toggle it on or off anytime in Settings.
        </p>
        <p className="mt-4">Ghost Mode is off by default.</p>
      </>
    ),
  },
  {
    q: "I'm on HRT. Does that change my forecast?",
    a: (
      <>
        <p>
          Yes. Ooma asks about your HRT status during onboarding and factors it
          into every forecast. HRT stabilizes hormonal fluctuations, which means
          your predictions tend to be more consistent and your confidence bands
          are narrower.
        </p>
        <p className="mt-4">
          The type of HRT matters too — cyclic combined therapy creates a
          different pattern than continuous combined or estrogen-only. Ooma
          accounts for this. If your HRT changes, you can update it anytime in
          Settings, or Ooma will ask you when you return after a break.
        </p>
      </>
    ),
  },
  {
    q: "How is Ooma different from Flo, Clue, or other period trackers?",
    a: (
      <>
        <p>
          Most period trackers are built around fertility, cycle logging, and
          symptom journals. They want you to log a lot of data, they store it on
          their servers, and their primary value is telling you when your period
          is coming or when you're ovulating.
        </p>
        <p className="mt-4">Ooma is different in three ways:</p>
        <p className="mt-4">
          <strong>It's a planning tool, not a tracker.</strong> The output isn't
          a chart of what happened — it's a forecast of what's coming, with
          specific planning actions attached. "Brain fog likely → short meetings
          only" is more useful than a dot on a graph.
        </p>
        <p className="mt-4">
          <strong>It works without a period.</strong> If you're post-menopausal,
          had a hysterectomy, or have cycles so irregular they're untrackable,
          most apps break. Ooma has dedicated modes for each of these situations
          with forecasting approaches designed for them.
        </p>
        <p className="mt-4">
          <strong>Your data stays on your phone.</strong> No account, no cloud,
          no servers, no analytics. Most "privacy-focused" trackers still send
          data to a server — they just encrypt it. Ooma never sends anything
          anywhere because there's nowhere to send it.
        </p>
      </>
    ),
  },
];

function AccordionItem({ q, a }: { q: string; a: React.ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#272124]/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-5 text-left cursor-pointer"
      >
        <span
          className="text-[#272124] font-medium"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "clamp(16px, 1.5vw, 19px)",
          }}
        >
          {q}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-[#272124]/50 shrink-0 mt-0.5 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-[#272124]/85" style={{ lineHeight: "1.7" }}>
            {a}
          </div>
        </div>
      </div>
    </div>
  );
}

export function FaqPage() {
  return (
    <PageLayout title="Frequently Asked Questions">
      <div className="mt-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} q={faq.q} a={faq.a} />
        ))}
      </div>

      <p className="mt-8 text-[#272124]/60" style={{ fontSize: "15px" }}>
        Have a question that's not here? Reach out on{" "}
        <a
          href="https://substack.com/oomachat"
          className="underline hover:no-underline"
        >
          Substack
        </a>
        .
      </p>
    </PageLayout>
  );
}
