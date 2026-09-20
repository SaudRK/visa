import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";
import type { Faq } from "@/lib/types";

const PATH = "/insurance/auto";
const TITLE = "Car Insurance for New Immigrants in the US";
const DESCRIPTION =
  "Car insurance for new immigrants: why quotes start high with a foreign license and no US driving history, what coverage you need, and how to cut the cost.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const FAQS: Faq[] = [
  {
    question: "Why is my car insurance so high as a new immigrant?",
    answer:
      "US insurers price on what they can verify: US driving records, prior US insurance, and a credit file. A foreign record does not appear in any of those, so with a blank history you are rated close to a new driver. Getting a state license, documenting your home insurance history, and building a credit file all bring the price down.",
  },
  {
    question: "Can I get car insurance with a foreign driver’s license?",
    answer:
      "In most states, yes, for as long as the state allows you to drive on it. Some insurers will not write a policy for a foreign license and most rate it higher than a state license. Once you become a resident your state expects you to switch to its license within a set window, and doing so early usually lowers the premium.",
  },
  {
    question: "Does a letter of experience from my home insurer help?",
    answer:
      "Sometimes. Some US insurers will treat a documented claim-free history abroad as prior insurance and price you accordingly; others ignore it. Ask before you request the quote, get the letter on company letterhead in English or with a certified translation, and quote at least one insurer that accepts it.",
  },
  {
    question: "Does my credit score affect my car insurance?",
    answer:
      "In most states, yes. Insurers use a credit-based insurance score derived from your credit report, and a thin or empty file raises the premium. A few states restrict or prohibit the practice. Starting to build US credit in your first month is one of the cheaper ways to lower future renewals.",
  },
];

export default function AutoInsuranceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Insurance"
      title="Car insurance for new immigrants: why it costs more and how to bring it down"
      description="Foreign licenses, missing US history, credit-based scores, and the coverage that actually protects you — without paying a new-driver premium for longer than you have to."
      path={PATH}
      crumbs={[
        { name: "Insurance", path: "/insurance" },
        { name: "Car insurance", path: PATH },
      ]}
      sources={[
        {
          label:
            "USA.gov — Driving in the US as a visitor (foreign licenses and the IDP)",
          href: "https://www.usa.gov/visitors-driving",
        },
        {
          label: "New York State DMV — Drivers from other countries",
          href: "https://dmv.ny.gov/driver-license/drivers-from-other-countries",
        },
        {
          label: "NAIC — Credit-based insurance scores",
          href: "https://content.naic.org/insurance-topics/credit-based-insurance-scores",
        },
        {
          label:
            "Insurance Information Institute — What is covered by a basic auto insurance policy?",
          href: "https://www.iii.org/article/what-is-covered-by-a-basic-auto-insurance-policy",
        },
        {
          label:
            "Insurance Information Institute — Nine ways to lower your auto insurance costs",
          href: "https://www.iii.org/article/nine-ways-to-lower-your-auto-insurance-costs",
        },
      ]}
      faqs={FAQS}
    >
      <h2>Why your first quote is so high</h2>
      <p>
        Car insurance in the US is priced on what the insurer can verify about
        you. For a long-term resident that means years of driving records,
        claims history, prior coverage, and a credit file. For you, most of
        those fields are blank. A foreign driving record is not something US
        insurers can pull, and the years you spent driving safely at home do not
        appear anywhere they look.
      </p>
      <p>
        So the pricing model treats you much like a new driver: no proven
        record, no continuous prior insurance in the US, no credit file. That is
        why a 35-year-old with fifteen clean years abroad can be quoted more
        than a 22-year-old local. It is not personal and it is not permanent —
        but it does mean the first year is the expensive one, and everything
        below is about shrinking it.
      </p>
      <p>
        The other rating factors — where you live, the car, your mileage, your
        age, your prior coverage — work the same way for everyone. What is
        unusual about a newcomer’s file is how many of them are missing rather
        than bad.
      </p>

      <h2>Foreign license, International Driving Permit, and the state license</h2>
      <p>Three documents get confused here.</p>
      <ul>
        <li>
          <strong>Your home-country license</strong> is what actually authorizes
          you to drive. Most states honor a valid foreign license for visitors
          and for new arrivals, for a period the state sets.
        </li>
        <li>
          <strong>An International Driving Permit (IDP)</strong> is a
          translation of that license into several languages. It is not a
          license on its own and it does not extend your right to drive; it
          lets an officer read what your license says. Some states ask for one
          and others do not, so USA.gov’s advice is to check with each state’s
          DMV. New York, for example, does not require one but calls it
          helpful, and does require an IDP or certified translation for the
          road test if your license is not in English.
        </li>
        <li>
          <strong>A state driver’s license</strong> is what you must eventually
          hold. Once you become a resident of a state, the visitor allowance
          ends and the state expects you to get its license within a window it
          sets. New York’s rule is typical in shape: you can drive on a valid
          foreign license, but you must apply for a New York license once you
          become a resident.
        </li>
      </ul>
      <p>
        The deadline is set by each state and can be short. Find your state’s
        rule the week you sign a lease — it is on the DMV site under “new
        residents” — and book the tests early.
      </p>
      <p>
        Getting the state license quickly does more than keep you legal. Many
        insurers rate a foreign license less favorably than a US one, and some
        will not write it at all. With a state license you are priced as a US
        driver with a short history rather than as an unknown. Ask your insurer
        to re-quote the day you have the card.
      </p>

      <h2>Bring proof of your driving history</h2>
      <p>
        The one thing that can partly fill the blank fields is documentation
        from home. Ask your previous insurer for a letter of experience —
        sometimes called a no-claims letter or claims history letter — on
        company letterhead, in English or with a certified translation, stating
        how long you were insured, on what vehicles, and whether you made any
        claims. Ask your home licensing authority for a driving record or
        abstract as well.
      </p>
      <p>
        Not every US insurer will use these. Some ignore them; others treat a
        documented claim-free history as prior insurance and price you
        accordingly, which can cut the first-year premium materially. Ask before
        the quote, not after: “Do you give credit for a verified foreign driving
        or insurance history?” Quote three or four insurers and make sure at
        least one says yes.
      </p>

      <h2>Credit-based insurance scores and your thin file</h2>
      <p>
        Most US auto insurers also use a credit-based insurance score — a
        number derived from your credit report that predicts how likely you are
        to file a claim. It is not your credit score, but it is built from the
        same file, and as a newcomer that file is thin or empty. In most states
        insurers are allowed to use it. Regulators generally bar them from
        using it as the sole reason to raise a rate or refuse coverage, and a
        few states restrict or prohibit the practice altogether.
      </p>
      <p>
        The effect for you is simple: a thin credit file pushes the premium up,
        and it keeps doing so until the file has some history in it. Starting
        your credit file in your first month is therefore an insurance decision
        as well as a banking one — the steps are in{" "}
        <Link
          href="/banking/build-credit"
          className="font-semibold text-accent hover:underline"
        >
          how to build US credit as an immigrant
        </Link>
        . If you live in a state that limits credit-based pricing, the thin
        file matters less; your state insurance department’s website will say.
      </p>

      <h2>Coverage vocabulary: what you are actually buying</h2>
      <p>
        A US policy is a bundle of separate coverages, each with its own limit.
        Learn the names before you compare quotes, because two quotes with the
        same headline price can be buying very different things.
      </p>
      <ul>
        <li>
          <strong>Bodily injury liability</strong> — pays for injuries you
          cause to other people. This is the one that can ruin you if it is too
          low.
        </li>
        <li>
          <strong>Property damage liability</strong> — pays for damage you
          cause to other people’s property: their car, a fence, a storefront.
        </li>
        <li>
          <strong>Collision</strong> — repairs your own car after a crash,
          whoever was at fault, minus your deductible.
        </li>
        <li>
          <strong>Comprehensive</strong> — repairs or replaces your car for
          non-crash losses: theft, fire, hail, flood, vandalism, hitting an
          animal.
        </li>
        <li>
          <strong>Uninsured/underinsured motorist</strong> — covers you when
          the other driver has no insurance, too little, or drives off.
        </li>
        <li>
          <strong>Medical payments or personal injury protection (PIP)</strong>{" "}
          — pays medical costs for you and your passengers regardless of fault.
          Some states require it.
        </li>
      </ul>
      <p>
        States decide which of these you must carry and at what minimum limits,
        and the minimums vary a lot. Almost all require liability. But minimums
        are set by legislatures, not by what accidents cost, and the industry’s
        own guidance is blunt: you will probably need more liability than the
        state requires, because accidents cost more than the minimum limits. If
        your limit runs out, the rest comes from you.
      </p>
      <Callout tone="warning" title="Do not buy the state minimum by default">
        Quote forms often pre-fill the state minimum. Raising liability limits
        well above it is usually cheap relative to the protection, and it is
        the single place newcomers most often under-insure without noticing.
        Decide your limits before you start comparing prices.
      </Callout>
      <p>
        Collision and comprehensive are optional in law but required by any
        lender if you finance the car. On an old car worth little, dropping
        them can make sense; on anything you could not afford to replace
        tomorrow, keep them. The deductible is the amount you pay toward a
        claim before the insurer pays the rest, and the trade-off is direct:
        the higher the deductible, the lower the premium.
      </p>

      <h2>Cutting the first-year cost without under-insuring</h2>
      <p>
        The wrong way to lower the premium is to cut liability limits. These are
        the right ways, roughly in order of how much they tend to save:
      </p>
      <ol>
        <li>
          <strong>Shop widely.</strong> Insurers weigh missing history
          differently. Get at least three quotes and include companies that
          actively write newcomers, not just the biggest brands.
        </li>
        <li>
          <strong>Get the state license first,</strong> then quote — or
          re-quote the moment you have it.
        </li>
        <li>
          <strong>Raise the deductible</strong> on collision and comprehensive.
          Set it at an amount you could pay from savings tomorrow, and no
          higher.
        </li>
        <li>
          <strong>Join a usage-based or low-mileage program.</strong> A tracking
          app or plug-in device prices you on how you actually drive rather than
          on your empty file. For a careful driver with a short commute it is
          often the biggest first-year saving.
        </li>
        <li>
          <strong>Bundle</strong> renters and auto with the same insurer.
          Renters insurance is cheap and the multi-policy discount often covers
          most of it.
        </li>
        <li>
          <strong>Take a defensive driving course.</strong> Many insurers
          discount for an approved course, and some states list approved
          providers on the DMV site.
        </li>
        <li>
          <strong>Pay the term in full</strong> if you can; many insurers charge
          more for monthly installments.
        </li>
        <li>
          <strong>Ask about every discount:</strong> good student, employer or
          alumni group, anti-theft devices, paperless billing, autopay.
        </li>
      </ol>
      <p>
        Compare the total for the year, not the monthly figure, and compare
        like with like — same limits, same deductibles.
      </p>

      <h2>How premiums come down over time</h2>
      <p>
        The expensive first year is a data problem, and data accumulates. Each
        renewal adds another policy term of US insured, claim-free history,
        which is exactly what the models reward. Your credit file thickens. Your
        state license ages. Most newcomers see meaningful drops at the first and
        second renewals without changing anything else.
      </p>
      <p>
        Two habits protect that progress. Never let coverage lapse — even a
        short gap breaks “continuous prior insurance,” which insurers treat as
        a risk signal. And re-shop at every renewal for the first three years;
        loyalty is rarely rewarded, and the insurer that was cheapest for a
        blank file is often not the cheapest for a two-year clean one.
      </p>

      <h2>Buying a car as a newcomer: pre-purchase checklist</h2>
      <ol>
        <li>
          Quote insurance on the exact model before you agree a price; the same
          money buys very different premiums across models.
        </li>
        <li>
          Confirm you can be insured on your current license in your state, or
          get the state license first.
        </li>
        <li>
          Decide your liability limits before shopping; do not let the quote
          form’s default decide for you.
        </li>
        <li>
          If financing, get the lender’s coverage requirements in writing. They
          will require collision and comprehensive and may cap the deductible.
        </li>
        <li>
          Gather your letter of experience and home driving record so they can
          be sent the same day.
        </li>
        <li>
          Have proof of insurance before you drive off the lot — the dealer
          will ask for it — and register and title the car within the state’s
          deadline.
        </li>
        <li>
          Budget the first-year premium as part of the car’s cost; for a
          newcomer it can rival the first year’s depreciation.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>
        Car insurance is priced off files you are still building. These help
        you build them:
      </p>
      <ul>
        <li>
          <Link
            href="/banking/build-credit"
            className="font-semibold text-accent hover:underline"
          >
            How to build US credit as an immigrant
          </Link>{" "}
          — the sequence that thickens the file your insurer is scoring.
        </li>
        <li>
          <Link
            href="/insurance/health"
            className="font-semibold text-accent hover:underline"
          >
            Health insurance for visa holders
          </Link>{" "}
          — the coverage to sort out before the car.
        </li>
        <li>
          <Link
            href="/visa-guides/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B financial guide
          </Link>{" "}
          — the first-year money checklist in one place.
        </li>
      </ul>
    </GuideLayout>
  );
}
