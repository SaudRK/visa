import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";
import type { Faq } from "@/lib/types";

const PATH = "/insurance/health";
const TITLE = "Health Insurance for H-1B, F-1 & Immigrants";
const DESCRIPTION =
  "Health insurance for H-1B visa holders, F-1 students and new immigrants: employer plans, the ACA Marketplace, what happens at layoff, and how to read a plan.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

const FAQS: Faq[] = [
  {
    question: "Do H-1B workers get health insurance automatically?",
    answer:
      "No. Nothing about the visa itself provides coverage. Most H-1B employers offer a group plan, but you have to enroll during your new-hire window, and coverage may not start until a waiting period ends. Until then you are uninsured unless you arrange something yourself.",
  },
  {
    question: "Can I buy a Marketplace plan on an H-1B or F-1 visa?",
    answer:
      "Yes. HealthCare.gov treats anyone in a valid nonimmigrant status, including worker and student visas, as lawfully present. You can buy a plan and, depending on household income, may qualify for a premium tax credit. Dependents on H-4, L-2 or F-2 are eligible on the same basis.",
  },
  {
    question: "Is there a penalty for not having health insurance in the US?",
    answer:
      "Not at the federal level. The federal fee stopped applying after the 2018 plan year. A few states run their own mandate with a payment on the state tax return, New Jersey among them. Being uninsured is still a serious financial risk, because one hospital stay can cost more than years of premiums.",
  },
  {
    question: "What happens to my health insurance if I am laid off on an H-1B?",
    answer:
      "Your employer plan ends on the date the plan document specifies, often your last day or the end of that month. You can keep it through COBRA at full cost if the employer has 20 or more employees, or use the 60-day special enrollment window to buy a Marketplace plan. Your 60-day immigration grace period runs on a separate clock.",
  },
];

export default function HealthInsuranceGuidePage() {
  return (
    <GuideLayout
      eyebrow="Insurance"
      title="Health insurance for visa holders: how US coverage actually works"
      description="Where coverage comes from on an H-1B, L-1, F-1 or J-1, how to bridge the gaps, and what to do the week a job ends."
      path={PATH}
      crumbs={[
        { name: "Insurance", path: "/insurance" },
        { name: "Health insurance", path: PATH },
      ]}
      sources={[
        {
          label: "HealthCare.gov — Coverage for lawfully present immigrants",
          href: "https://www.healthcare.gov/immigrants/lawfully-present-immigrants/",
        },
        {
          label:
            "HealthCare.gov — Special Enrollment Period after losing coverage",
          href: "https://www.healthcare.gov/coverage-outside-open-enrollment/special-enrollment-period/",
        },
        {
          label: "US Department of Labor — COBRA continuation coverage",
          href: "https://www.dol.gov/general/topic/health-plans/cobra",
        },
        {
          label:
            "USCIS — Options for nonimmigrant workers following termination of employment",
          href: "https://www.uscis.gov/working-in-the-united-states/information-for-employers-and-employees/options-for-nonimmigrant-workers-following-termination-of-employment",
        },
        {
          label:
            "22 CFR 62.14 — Insurance requirements for J-1 exchange visitors",
          href: "https://www.law.cornell.edu/cfr/text/22/62.14",
        },
      ]}
      faqs={FAQS}
    >
      <h2>How people actually get covered in the US</h2>
      <p>
        There is no national health service to register with. Coverage comes
        from one of four places, and which one you use depends on your visa and
        your employer far more than on your preference.
      </p>
      <ul>
        <li>
          <strong>Employer group plans.</strong> The default for H-1B and L-1
          workers. Your employer chooses the plans, pays part of the premium,
          and deducts your share from each paycheck before tax.
        </li>
        <li>
          <strong>The ACA Marketplace.</strong> Individual plans sold through
          HealthCare.gov or your state’s own exchange. This is where you go if
          you have no employer plan, are between jobs, or are a dependent
          without coverage.
        </li>
        <li>
          <strong>School plans.</strong> Universities run or sponsor plans for
          international students and usually make enrollment the default.
        </li>
        <li>
          <strong>Short-term and travel plans.</strong> Cheap because they cover
          less. Many exclude pre-existing conditions and cap what they pay. They
          can bridge a gap of a few weeks; they are a poor substitute for real
          coverage.
        </li>
      </ul>
      <p>
        One thing to unlearn: there is no federal penalty for being uninsured.
        The federal fee stopped applying after the 2018 plan year. A few states
        run their own mandate, though. New Jersey, for example, requires most
        residents to hold coverage or make a payment on the state tax return.
        If your state runs its own exchange, check whether it has a mandate
        too.
      </p>

      <h2>Employer plans and the waiting-period gap</h2>
      <p>
        Most job offers include health insurance, but coverage rarely starts on
        day one. Plans commonly begin on the first of the month after you
        start, or after a 30-, 60- or 90-day wait. Federal rules cap the waiting
        period for job-based plans at 90 days, so it should never be longer
        than that — but it can easily leave you uncovered for your first weeks
        in the country, which are also the weeks you are most likely to need
        urgent care and least likely to know where to get it.
      </p>
      <p>Three ways to bridge that gap, in order of preference:</p>
      <ol>
        <li>
          Ask HR whether the wait can be shortened or whether coverage is
          retroactive to your start date. Some plans do this. It costs nothing
          to ask.
        </li>
        <li>
          Keep travel or international coverage from home running until the
          employer plan starts, and read what it excludes before you rely on
          it.
        </li>
        <li>
          Buy a bridge plan. Short-term plans are sold year-round; the
          Marketplace sells outside Open Enrollment only if you have a
          qualifying life change, so check whether your move qualifies.
        </li>
      </ol>

      <h2>The Marketplace: who can use it and what it costs</h2>
      <p>
        HealthCare.gov is open to US citizens, US nationals and “lawfully
        present” immigrants. Its list of qualifying statuses includes anyone
        holding a valid nonimmigrant status, with worker visas and student visas
        named as examples. That covers H-1B, L-1, F-1 and J-1 holders, and it
        covers their H-4, L-2, F-2 and J-2 dependents, who hold nonimmigrant
        status in their own right. You do not need a green card.
      </p>
      <p>
        Being allowed to buy is only half of it. Lawfully present immigrants can
        also qualify for the premium tax credit, which lowers the monthly
        premium based on household income, and for reduced cost-sharing on some
        plans. The credit is income-tested, so a well-paid H-1B worker may not
        receive much, but a student, a dependent, or someone between jobs often
        does. Always apply with your real income and let the Marketplace do the
        arithmetic.
      </p>
      <p>
        Plans are sold during an annual Open Enrollment period. Outside it you
        need a qualifying life change. Losing other coverage is the one most
        relevant to visa holders, and it is covered below.
      </p>

      <h2>Students: school plans and the J-1 federal minimum</h2>
      <p>
        F-1 students have no federal health insurance requirement. DHS puts it
        plainly: students are responsible for buying coverage for themselves
        and their families, and requirements and fees differ from school to
        school. In practice, most universities enroll international students in
        the school plan automatically and bill it with tuition. You can usually
        waive it only by proving you hold comparable coverage that meets the
        school’s criteria, and the waiver deadline often falls in the first
        weeks of the semester. Miss it and you pay for the school plan whether
        you wanted it or not.
      </p>
      <p>
        J-1 exchange visitors are different. Federal regulations set a minimum
        that every J-1 and every accompanying J-2 dependent must carry for the
        whole program: at least $100,000 in medical benefits per accident or
        illness, $25,000 for repatriation of remains, $50,000 for medical
        evacuation, and a deductible of no more than $500 per accident or
        illness. The insurer must meet a minimum financial-strength rating. Your
        sponsor is required to check, and letting the coverage lapse puts your
        program status at risk — so if a university or host offers you a plan,
        confirm in writing that it meets the J-1 minimums before you decline
        it.
      </p>

      <h2>Layoff: the 60-day grace period, COBRA and the Marketplace window</h2>
      <p>
        Losing a job on a work visa starts two clocks at once, and it helps to
        keep them separate.
      </p>
      <p>
        <strong>The immigration clock.</strong> USCIS gives H-1B, H-1B1, L-1,
        O-1, TN and E-visa workers — and their dependents — a grace period of
        up to 60 consecutive calendar days after employment ends, starting the
        day after your last paid day. During it you can find a new sponsor,
        file a change of status, or prepare to leave. You cannot work during
        the grace period unless otherwise authorized, though an H-1B can start
        with a new employer as soon as that employer properly files a new
        petition.
      </p>
      <p>
        <strong>The insurance clock.</strong> Your employer plan usually ends
        on your last day or at the end of that month; the plan document says
        which, and HR must tell you. From there you have two routes.
      </p>
      <ul>
        <li>
          <strong>COBRA.</strong> If your employer had 20 or more employees,
          federal law lets you keep the same plan for a limited period. The
          catch is price: you can be charged the entire premium — the share
          your employer was paying plus your own — plus up to 2% for
          administration. For a family plan that is often a shock. The upside is
          continuity: same doctors, same progress toward your deductible.
        </li>
        <li>
          <strong>Marketplace special enrollment.</strong> Losing job-based
          coverage opens a 60-day window to enroll in a Marketplace plan, and
          you can apply as soon as you know the end date so there is no gap.
          With no salary coming in, you may now qualify for a premium tax
          credit you did not qualify for before.
        </li>
      </ul>
      <Callout tone="warning" title="Do not drop COBRA mid-stream">
        If you take COBRA and later stop paying it voluntarily, that does not
        open a new Marketplace window — you would wait for the next Open
        Enrollment. Decide between COBRA and a Marketplace plan inside the first
        60 days, not after.
      </Callout>
      <p>
        If you leave the US inside the grace period, cancel from your departure
        date rather than letting premiums run, and ask the insurer in writing
        what the policy covers once you are abroad.
      </p>

      <h2>Dependents on H-4, L-2 and F-2</h2>
      <p>
        Dependents are eligible for the same things you are. They can be added
        to your employer plan, but usually only within a short window after
        they arrive or after your own enrollment — tell HR their arrival dates
        before they land, not after. They count as lawfully present for the
        Marketplace. A spouse who is studying can often join a school plan.
      </p>
      <p>
        Two things trip people up. First, adding a family to an employer plan is
        often expensive: many employers subsidize the employee’s premium
        heavily and the family’s much less, so compare the cost of covering a
        spouse on your plan against a Marketplace plan for them alone. Second,
        a child born in the US needs to be added to a plan promptly; the window
        after a birth is short, and the bill for a delivery without coverage is
        not.
      </p>

      <h2>How to read a plan</h2>
      <p>
        Every plan is described by the same handful of numbers. Look at all of
        them, not just the premium.
      </p>
      <ul>
        <li>
          <strong>Premium</strong> — what you pay every month whether or not
          you use care. Premiums do not count toward your deductible or your
          out-of-pocket maximum.
        </li>
        <li>
          <strong>Deductible</strong> — what you pay for covered care before
          the plan starts paying. Many plans cover preventive visits before the
          deductible; Marketplace plans must.
        </li>
        <li>
          <strong>Copay and coinsurance</strong> — the flat fee or percentage
          you pay for a service once the plan is paying.
        </li>
        <li>
          <strong>Out-of-pocket maximum</strong> — the most you pay in a plan
          year for covered, in-network care. After that the plan pays 100%.
          Out-of-network care and anything the plan does not cover sit outside
          the cap.
        </li>
        <li>
          <strong>Network</strong> — the doctors and hospitals the plan has
          contracted with. Going outside it costs far more, and in an emergency
          you may not get to choose. Check that a hospital near you is
          in-network before you enroll.
        </li>
      </ul>
      <p>
        A low premium usually means a high deductible. If you are healthy,
        single, and have an emergency fund, that trade often makes sense, and a
        high-deductible plan may come with a health savings account. If you have
        a family or an ongoing condition, the plan with the higher premium and
        the lower out-of-pocket maximum often costs less over the year.
      </p>

      <h2>Your first-week checklist</h2>
      <ol>
        <li>
          Ask HR for the coverage start date and the enrollment deadline.
          Missing the deadline can mean waiting until next year.
        </li>
        <li>
          If there is a gap, arrange bridge coverage before your home-country
          policy lapses.
        </li>
        <li>
          Choose a plan by comparing deductible, out-of-pocket maximum and
          network — not premium alone.
        </li>
        <li>Add dependents at the same time, and give HR their arrival dates.</li>
        <li>
          Students: find the waiver deadline and decide whether to keep or
          waive the school plan.
        </li>
        <li>
          Save your member ID card and the plan’s summary of benefits where you
          can reach them from your phone.
        </li>
        <li>
          Find an in-network primary care doctor and an urgent care clinic
          before you need one.
        </li>
      </ol>

      <h2>Other guides on this site</h2>
      <p>
        Health coverage is one line in a bigger first-year budget. These cover
        the others:
      </p>
      <ul>
        <li>
          <Link
            href="/visa-guides/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B financial guide
          </Link>{" "}
          — the wider first-year money checklist, including benefits
          enrollment.
        </li>
        <li>
          <Link
            href="/visa-guides/f1"
            className="font-semibold text-accent hover:underline"
          >
            F-1 student financial guide
          </Link>{" "}
          — budgeting around tuition, the school plan and part-time work.
        </li>
        <li>
          <Link
            href="/taxes/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B taxes explained
          </Link>{" "}
          — how pre-tax deductions such as premiums show up in your paycheck.
        </li>
      </ul>
    </GuideLayout>
  );
}
