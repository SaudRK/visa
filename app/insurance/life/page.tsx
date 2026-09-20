import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";
import type { Faq } from "@/lib/types";

const PATH = "/insurance/life";
const TITLE = "Life Insurance for H-1B & Other Visa Holders";
const DESCRIPTION =
  "Life insurance for H-1B visa holders and other immigrants: who needs it, term vs permanent, how underwriting treats your visa, beneficiaries abroad, and tax.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const FAQS: Faq[] = [
  {
    question: "Can H-1B visa holders get life insurance in the US?",
    answer:
      "Yes. Many US insurers will issue term life to people on work visas, though each sets its own rules on visa category, minimum time in the US, and travel to certain countries. Practices differ widely, so an agent who writes for several carriers can tell you which will currently accept your situation and save you a string of declined applications.",
  },
  {
    question: "Can I name a beneficiary who lives in another country?",
    answer:
      "Yes. A beneficiary does not need to live in the US or hold any US status. The insurer will need their full legal name, date of birth and contact details, and at claim time a certified death certificate and claim form. Ask how the insurer pays foreign beneficiaries — check or wire, and in what currency — before you buy.",
  },
  {
    question: "Is a life insurance payout taxable?",
    answer:
      "In the US, generally no. Proceeds paid to a beneficiary because the insured died are not included in the beneficiary’s gross income and do not have to be reported. Any interest the insurer pays on top is taxable as interest. A beneficiary living abroad should also check whether their own country taxes the receipt.",
  },
  {
    question: "What happens to my US life insurance if I move back home?",
    answer:
      "Most US term policies stay in force as long as you keep paying the premiums; the contract does not depend on your visa. Some insurers, however, exclude or will not continue cover for residents of specific countries, so read the residence and travel provisions and ask the question directly before you buy.",
  },
];

export default function LifeInsuranceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Insurance"
      title="Life insurance on a visa: who needs it, what to buy, and what to check"
      description="A plain-English guide for H-1B, L-1 and other visa holders — including family abroad, underwriting questions about your status, and what happens if you leave."
      path={PATH}
      crumbs={[
        { name: "Insurance", path: "/insurance" },
        { name: "Life insurance", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Life insurance and disability insurance proceeds",
          href: "https://www.irs.gov/faqs/interest-dividends-other-types-of-income/life-insurance-disability-insurance-proceeds",
        },
        {
          label:
            "IRS — Some nonresidents with U.S. assets must file estate tax returns",
          href: "https://www.irs.gov/individuals/international-taxpayers/some-nonresidents-with-us-assets-must-file-estate-tax-returns",
        },
        {
          label: "IRS — Group-term life insurance",
          href: "https://www.irs.gov/government-entities/federal-state-local-governments/group-term-life-insurance",
        },
        {
          label: "Insurance Information Institute — Life insurance basics",
          href: "https://www.iii.org/article/life-insurance-basics",
        },
        {
          label: "NAIC — Life insurance consumer guide",
          href: "https://content.naic.org/consumer/life-insurance.htm",
        },
      ]}
      faqs={FAQS}
    >
      <h2>Who actually needs life insurance — and who does not</h2>
      <p>
        Life insurance replaces your income for the people who depend on it.
        That is the whole test. If your salary supports a spouse, children or
        parents — in the US or at home — and they would struggle without it,
        you need cover. If you hold debt that someone else would have to carry,
        such as a co-signed loan or a mortgage in joint names, you need cover.
        Family abroad counts fully: remittances that pay for a parent’s care or
        a sibling’s school are income someone depends on, and they stop the day
        you do.
      </p>
      <p>
        If nobody depends on your income and nobody inherits your debts, you
        probably do not need it yet. A single H-1B worker with no dependents and
        no co-signed loans is usually better off putting the premium into an
        emergency fund and a retirement account, and buying cover when that
        changes. Cover sold to people who do not need it is a common way
        newcomers overspend in year one.
      </p>

      <h2>Term vs permanent: why term is the default</h2>
      <p>
        <strong>Term life</strong> pays a death benefit only if you die during
        a fixed term, usually somewhere between one and 30 years. The premium
        is level for the term, the policy builds no cash value, and when the
        term ends it is simply over. Because it is pure insurance, it is by
        far the cheapest way to buy a large amount of cover.
      </p>
      <p>
        <strong>Permanent life</strong> — whole life, universal life and their
        variants — pays out whenever you die and builds a cash value you can
        borrow against or withdraw. The premium is much higher for the same
        death benefit, because part of it funds the savings component and
        part pre-pays for your older, costlier years.
      </p>
      <p>
        For most people the right answer is term: buy enough to cover the years
        someone depends on you — until the children are independent, the
        mortgage is paid, or your partner’s earnings can carry the household —
        and let it expire. Permanent policies have real uses in estate planning,
        but they are complex, carry fees and non-guaranteed elements, and are
        often sold to people whose need is temporary. If an agent leads with
        one, ask what the same death benefit costs as term and why term would
        not do.
      </p>

      <h2>How insurers underwrite visa holders</h2>
      <p>
        US life insurers will consider applicants on temporary visas, but
        underwriting is where your status matters. Expect to be asked about:
      </p>
      <ul>
        <li>
          <strong>
            Your immigration status and how long you have been in the US.
          </strong>{" "}
          Some insurers require a minimum period of US residence; others
          accept recent arrivals on certain visa types.
        </li>
        <li>
          <strong>Your visa category.</strong> Work visas such as H-1B and L-1
          are generally viewed favorably because they imply steady income and
          an employer. Some insurers restrict or decline particular categories,
          especially short-term or non-working ones.
        </li>
        <li>
          <strong>Your country of citizenship and your travel plans.</strong>{" "}
          Insurers rate the countries you travel to. Frequent or long trips to
          places they consider higher-risk can raise the premium, add
          exclusions, or lead to a decline.
        </li>
        <li>
          <strong>Your ties to the US.</strong> A US address, bank account,
          employer and Social Security number all help; some carriers will
          accept an ITIN.
        </li>
      </ul>
      <p>
        Practices differ widely and change often, so this is about matching
        yourself to a carrier rather than eligibility in general. An independent
        agent who writes for several insurers can tell you which ones currently
        accept your visa type and residence period, and spare you a string of
        declined applications.
      </p>
      <Callout
        tone="alert"
        title="Answer the status and travel questions exactly"
      >
        A misstatement about your status, residence or travel can let the
        insurer contest the policy when your family needs it most. If a question
        is unclear, ask the agent to explain it; never round an answer toward
        what you think they want to hear.
      </Callout>

      <h2>Employer group life: a starting point, not a plan</h2>
      <p>
        Many employers include group term life, often at one or two times
        salary, sometimes with the option to buy more. Take it: the basic amount
        is usually free or cheap, and there is normally no medical underwriting,
        which matters if your health or visa makes individual cover hard to get.
      </p>
      <p>
        It has three limits. It is rarely enough: one or two years’ salary does
        not replace fifteen years of income. It ends when the job does, which on
        a work visa can happen abruptly. And above a threshold it is taxable:
        the IRS excludes the first $50,000 of employer-provided group term
        cover, but the imputed cost of coverage above that is added to your
        taxable income and is subject to Social Security and Medicare taxes.
      </p>
      <p>
        Treat it as a floor. If you need cover, buy an individual term policy
        you own, which travels with you between employers.
      </p>

      <h2>Naming a beneficiary who lives abroad</h2>
      <p>
        You can name anyone as a beneficiary, and they do not need to live in
        the US or hold any US status. What changes when they live abroad is the
        logistics of paying them.
      </p>
      <ul>
        <li>
          <strong>Identification.</strong> Give the insurer the beneficiary’s
          full legal name as on their passport, date of birth, relationship to
          you, and a current address. At claim time they will need a certified
          death certificate and a claim form.
        </li>
        <li>
          <strong>Payment.</strong> Insurers pay in US dollars, usually by check
          or wire. A US check can be slow and costly to cash abroad; a wire is
          simpler, but conversion happens at the receiving bank’s rate. Ask how
          the insurer pays foreign beneficiaries before you buy, and tell your
          beneficiary where the policy documents are.
        </li>
        <li>
          <strong>Percentages and contingents.</strong> You can name several
          beneficiaries with a percentage each. Name a contingent too, so the
          money does not fall into your estate — and a US probate process — if
          the primary dies before you.
        </li>
        <li>
          <strong>Minors.</strong> Insurers will not pay a child directly; use a
          trust or name an adult you trust.
        </li>
      </ul>
      <p>
        Keep the designation current: it overrides your will, and an ex-spouse
        left on the form is a common and painful mistake.
      </p>

      <h2>Tax: what the beneficiary owes, and the estate-tax angle</h2>
      <p>
        The income-tax answer is favorable. Life insurance proceeds paid to a
        beneficiary because the insured died are generally not included in the
        beneficiary’s gross income and do not have to be reported — in the US,
        at least. Only interest the insurer pays on top, for example on a
        delayed payout, is taxable. A beneficiary abroad should check whether
        their own country taxes the receipt.
      </p>
      <p>
        The estate-tax angle is subtler and turns on your domicile, which is
        not the same as your visa or your income-tax residency. The IRS treats
        proceeds of life insurance on the life of a nonresident who is not a US
        citizen as located outside the US, so they do not count toward that
        person’s US estate. If instead you are treated as domiciled in the US —
        a question of intent and circumstances, not just of days — the death
        benefit can count in your estate under the rules for US persons, and who
        owns the policy starts to matter. If your cover is large or you hold
        significant US assets, get cross-border estate advice before deciding
        who owns it. Income-tax residency, a separate question, is covered in{" "}
        <Link
          href="/taxes/resident-vs-nonresident"
          className="font-semibold text-accent hover:underline"
        >
          resident vs nonresident for tax purposes
        </Link>
        .
      </p>

      <h2>What happens to a US policy if you leave the country</h2>
      <p>
        Most US term policies stay in force if you move abroad, as long as you
        keep paying the premiums; the contract does not depend on your visa
        remaining valid. But check these before you buy, not after.
      </p>
      <ul>
        <li>
          Some insurers exclude or will not continue cover for residents of
          specific countries, or require notice of a change of residence. Read
          the residence and travel provisions and ask directly: “If I move
          back to my home country, does this policy remain in force?”
        </li>
        <li>
          Keep a US bank account open for premiums, or confirm the insurer
          accepts international payments. A missed premium is the most common
          way an expatriate’s policy ends.
        </li>
        <li>
          Keep your address current with the insurer and make sure it can reach
          your beneficiary; an unclaimed benefit is worth nothing.
        </li>

      </ul>

      <h2>How much cover — and what to ask an agent</h2>
      <p>
        Skip the “ten times salary” rule of thumb; it ignores whether you have
        dependents, how long they need support, and what else exists. Work it
        out instead:
      </p>
      <ol>
        <li>
          <strong>Annual income to replace.</strong> Take what your household
          actually spends from your income, including remittances, and subtract
          your own personal spending, which stops.
        </li>
        <li>
          <strong>Years of support.</strong> Until the youngest child is
          independent, or until your partner’s own earnings and savings can
          carry the household, or for parents, their expected remaining years.
          Multiply.
        </li>
        <li>
          <strong>Add lump sums.</strong> Debts that fall on someone else,
          funeral and repatriation costs, and any goal you want funded —
          children’s education is the usual one.
        </li>
        <li>
          <strong>Add lost benefits.</strong> If your job provides the family’s
          health insurance or a retirement match, replacing those costs money
          too.
        </li>
        <li>
          <strong>Subtract what already exists.</strong> Savings, employer group
          life, any survivor benefits your family would receive, and cover you
          already hold at home.
        </li>
      </ol>
      <p>
        The result is your death benefit, and the years in step two are a good
        guide to the term. Revisit it after a marriage, a birth, a mortgage, or
        a green card. Then put these questions to any agent before you sign:
      </p>
      <ul>
        <li>
          Which insurers will accept my visa type and my time in the US, and
          which will not?
        </li>
        <li>
          What does this death benefit cost as level term, and for how many
          years is the premium guaranteed?
        </li>
        <li>Which parts of this policy are not guaranteed?</li>
        <li>
          Is there a residence or travel exclusion, and what happens if I move
          back to my home country?
        </li>
        <li>
          How do you pay a beneficiary who lives outside the US, and what
          documents will they need?
        </li>
        <li>
          Can this policy be converted or renewed at the end of the term without
          new medical underwriting?
        </li>
        <li>
          What is your commission on this product versus the term alternative?
        </li>
      </ul>

      <h2>Other guides on this site</h2>
      <p>
        Life insurance is one decision in a wider plan. These cover the rest:
      </p>
      <ul>
        <li>
          <Link
            href="/insurance/health"
            className="font-semibold text-accent hover:underline"
          >
            Health insurance for visa holders
          </Link>{" "}
          — the cover to sort out first.
        </li>
        <li>
          <Link
            href="/investing/on-a-visa"
            className="font-semibold text-accent hover:underline"
          >
            Investing on a visa
          </Link>{" "}
          — where the money that is not going into premiums should go.
        </li>
        <li>
          <Link
            href="/visa-guides/green-card"
            className="font-semibold text-accent hover:underline"
          >
            Green card financial guide
          </Link>{" "}
          — how permanent residence changes the underwriting and estate
          picture.
        </li>
      </ul>
    </GuideLayout>
  );
}
