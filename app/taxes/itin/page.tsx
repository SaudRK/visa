import Link from "next/link";
import { buildPageMetadata } from "@/lib/metadata";
import GuideLayout from "@/components/GuideLayout";
import Callout from "@/components/Callout";

const PATH = "/taxes/itin";
const TITLE = "ITIN: How to Apply, Who Needs One & Renewal";
const DESCRIPTION =
  "ITIN explained: what it is, who needs one (H-4 and F-2 spouses, dependents, nonresidents), how to apply with Form W-7, and the three-year expiry rule.";

export const metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: PATH,
  type: "article",
});

export default function ItinGuidePage() {
  return (
    <GuideLayout
      eyebrow="Taxes"
      title="ITIN: what it is, who needs one, and how to apply"
      description="The IRS number for people who file or are claimed on a US tax return but cannot get a Social Security number — and the limits of what it does for you."
      path={PATH}
      crumbs={[
        { name: "Taxes", path: "/taxes" },
        { name: "ITIN", path: PATH },
      ]}
      sources={[
        {
          label: "IRS — Individual taxpayer identification number (ITIN)",
          href: "https://www.irs.gov/individuals/individual-taxpayer-identification-number",
        },
        {
          label: "IRS — How to apply for an ITIN",
          href: "https://www.irs.gov/tin/itin/how-to-apply-for-an-itin",
        },
        {
          label: "IRS — Instructions for Form W-7",
          href: "https://www.irs.gov/instructions/iw7",
        },
        {
          label: "IRS — How to renew an ITIN",
          href: "https://www.irs.gov/tin/itin/how-to-renew-an-itin",
        },
        {
          label: "IRS — ITIN acceptance agents",
          href: "https://www.irs.gov/individuals/international-taxpayers/acceptance-agent-program",
        },
      ]}
      faqs={[
        {
          question: "Can I work in the US with an ITIN?",
          answer:
            "No. An ITIN is a tax processing number only. It does not authorize employment, does not change your immigration status, and does not qualify you for Social Security benefits. Work authorization comes from your visa status or an Employment Authorization Document, and anyone who has it is normally eligible for a Social Security number instead.",
        },
        {
          question: "Does my H-4 spouse need an ITIN?",
          answer:
            "Only if they will appear on a US tax return and are not eligible for an SSN. The common case is an H-4 spouse with no work authorization who is included on a joint return with a resident H-1B filer. If the spouse holds an approved H-4 EAD they can get an SSN and should apply to the Social Security Administration rather than the IRS.",
        },
        {
          question: "How long does it take to get an ITIN?",
          answer:
            "The IRS says to allow about seven weeks to hear back, and nine to eleven weeks if you apply between mid-January and the end of April or from outside the US. Because the W-7 is normally filed with your paper tax return, any refund on that return waits until the number is assigned.",
        },
        {
          question: "Does an ITIN expire?",
          answer:
            "Yes, through disuse. If an ITIN is not used on a federal tax return for three consecutive tax years, it expires on December 31 after the third year. You renew it with Form W-7 by ticking the renewal box; no tax return is required for a renewal, but you do need to resubmit identity documents.",
        },
      ]}
    >
      <h2>What an ITIN is — and is not</h2>
      <p>
        An Individual Taxpayer Identification Number is a nine-digit number,
        beginning with 9, that the IRS issues to people who need a US taxpayer
        identification number for federal tax purposes but are not eligible for
        a Social Security number. That is the whole job. It lets the IRS process
        a return, a treaty claim or a withholding form that has your name on it.
      </p>
      <p>
        It is easy to over-read. An ITIN does not authorize you to work in the
        US, does not confer or change immigration status, does not qualify you
        for Social Security benefits or the Earned Income Tax Credit, and is not
        valid identification outside the federal tax system. It is also not a
        fallback for people who could get an SSN: the IRS tells you not to apply
        if you have or are eligible for one, and if you later receive an SSN you
        must stop using the ITIN and tell the IRS so it can combine your
        records.
      </p>

      <h2>Who typically needs one</h2>
      <p>
        For most readers of this site, the ITIN question comes up for a family
        member rather than the visa holder. The usual cases:
      </p>
      <ul>
        <li>
          <strong>H-4, F-2 and other dependents with no work authorization</strong>{" "}
          who will appear on a US return — most often a spouse on a joint
          return, or a child claimed for a credit that accepts an ITIN.
        </li>
        <li>
          <strong>A nonresident spouse being treated as a resident</strong>{" "}
          under the joint-return election described in the{" "}
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            resident vs nonresident guide
          </Link>
          . The election is not valid without an SSN or ITIN for that spouse.
        </li>
        <li>
          <strong>Nonresidents with US-source income</strong> and no SSN — an
          owner abroad renting out a US property, someone selling US real
          estate, or an investor claiming a reduced treaty rate on a withholding
          certificate.
        </li>
        <li>
          <strong>Dependents of a resident filer</strong> who are claimed for an
          allowable tax benefit, such as the Credit for Other Dependents or
          head-of-household filing status.
        </li>
        <li>
          <strong>Nonresident students, professors and researchers</strong> who
          must file a return or claim a treaty exemption but have no US
          employment and so cannot get an SSN.
        </li>
      </ul>
      <p>
        The dependent rule has teeth. A spouse or dependent is not eligible for
        an ITIN — or a renewal — unless they are claimed for a specific tax
        benefit on the return. Writing a child’s name on the return is not
        enough; the benefit box has to be checked. Check the rules of the credit
        you are after, too. The Child Tax Credit requires both you and the child
        to have Social Security numbers valid for employment, so a child with an
        ITIN cannot unlock it — though the same child can qualify you for the
        Credit for Other Dependents, which does accept an ITIN.
      </p>

      <h2>SSN or ITIN? Settle eligibility first</h2>
      <p>
        The IRS rule is blunt: do not complete Form W-7 if you have an SSN or
        are eligible to get one. Eligibility is set by immigration status, not
        by whether you have started a job yet. Anyone whose status permits
        work — H-1B, L-1, TN, O-1 and E-2 principals, dependents holding an
        Employment Authorization Document, and F-1 students once they have
        authorized employment such as an on-campus job, CPT or OPT — should
        apply to the Social Security Administration. An ITIN application from an
        SSN-eligible person is rejected, and the time spent is lost.
      </p>
      <p>
        If your situation is genuinely uncertain, resolve it with SSA before you
        touch the W-7. Do not run the two applications in parallel.
      </p>

      <Callout tone="warning" title="Do not apply for both">
        If you have a Social Security application pending, wait for the
        decision. If SSA cannot issue you a number, get its letter of denial —
        the IRS requires that letter to be attached to the W-7 of anyone who
        applied for an SSN and was refused.
      </Callout>

      <h2>Form W-7 and the three ways to apply</h2>
      <p>
        Every ITIN application is <strong>Form W-7</strong>, Application for
        IRS Individual Taxpayer Identification Number, plus documents proving
        identity and foreign status, plus — in most cases — the federal tax
        return the number is needed for. One W-7 per applicant: a family of
        three applying together files three forms with one return. You have
        three ways to submit the package.
      </p>
      <ol>
        <li>
          <strong>By mail</strong> to the IRS ITIN Operation in Austin, Texas,
          with the return and either original documents or copies certified by
          the agency that issued them. Cheapest, slowest, and the route most
          people regret when it means posting a passport.
        </li>
        <li>
          <strong>In person at an IRS Taxpayer Assistance Center</strong>, by
          appointment. Staff review the W-7 and can authenticate most supporting
          documents on the spot, so the originals go home with you. There is no
          charge, but you need an appointment.
        </li>
        <li>
          <strong>Through a Certifying Acceptance Agent</strong> — a tax
          professional or firm authorized by the IRS to complete the W-7,
          authenticate your documents, return them to you immediately and mail
          the package on your behalf. CAAs charge a fee. For dependents they can
          authenticate only passports and birth certificates; any other
          dependent document still has to go to the IRS.
        </li>
      </ol>
      <p>
        Whichever route you use, the document standard is the same. A valid
        passport is the only document that proves both identity and foreign
        status on its own. Without one you need two documents from the list in
        the W-7 instructions — a national ID card, a foreign driver’s license, a
        birth certificate and so on — and the combination has to cover both
        identity and foreign status.
      </p>
      <p>
        Dependents have an extra hurdle. A child’s passport only works as a
        standalone document if it shows a US date of entry. If it does not, you
        must add proof that the child lives in the US — school records, medical
        records or a state ID, depending on age. The W-7 instructions carve out
        exceptions for dependents from Canada and Mexico and for the families
        of US military personnel stationed abroad.
      </p>

      <Callout tone="alert" title="Do not mail a passport you will need">
        Mailed originals come back, but processing runs about seven weeks in
        normal periods and longer in tax season, and a passport in an IRS
        mailroom is a passport you cannot travel on. If anyone in the family
        might need to travel, use a Taxpayer Assistance Center or a Certifying
        Acceptance Agent, or get a certified copy from the agency that issued the
        passport — for most people, their country’s consulate — before you
        file.
      </Callout>

      <h2>Timing: file it with your return</h2>
      <p>
        A W-7 is normally filed <strong>with</strong> the tax return that needs
        it, not ahead of it. You prepare the complete return, leave the SSN box
        blank for each applicant, attach the W-7 forms and documents, and send
        the whole package to Austin or hand it over at the TAC or to your CAA.
        The IRS assigns the numbers, processes the return, and posts the ITIN
        letters to you. That means the return goes in on paper, and any refund
        waits for the number.
      </p>
      <p>
        The exceptions to the with-a-return rule are narrow and listed in the
        W-7 instructions: certain third-party withholding on passive income,
        scholarship and treaty claims by students and researchers,
        mortgage-interest reporting, US real estate sales, and a few others. If
        none applies to you, a W-7 mailed on its own comes back unprocessed.
      </p>
      <p>
        Plan on about seven weeks to hear back, and nine to eleven weeks if you
        file between mid-January and the end of April or from overseas. Filing
        on April 14 with a W-7 attached is allowed; it is also the slowest
        possible path, because your package lands in the peak-season queue.
      </p>

      <h2>Expiry and renewal</h2>
      <p>
        ITINs expire through disuse. If an ITIN is not used on a US federal tax
        return for any three consecutive tax years, it expires on December 31
        after the third year of non-use. An ITIN that appears only on
        information returns you receive — a 1099 for bank interest, say — does
        not need renewing for that purpose. It only has to be renewed if it is
        going to appear on a tax return.
      </p>
      <p>
        Renewal is the same Form W-7 with the “Renew an existing ITIN” box
        checked, the same document rules, and no tax return required. If you
        know the number has lapsed, renew before you file: a return that arrives
        with an expired ITIN is delayed while the IRS sorts out the number, and
        credits tied to that person may be held back until the renewal comes
        through.
      </p>

      <h2>What an ITIN does — and does not — do for banking and credit</h2>
      <p>
        Federal customer-identification rules allow a bank to accept an ITIN, a
        passport number or another government ID number as the identifying
        number on a new account, so many banks and credit unions will open a
        checking account for an ITIN holder. Policies vary by institution, and
        the ITIN is only the identifier, not the reason you are approved. Our{" "}
        <Link
          href="/banking"
          className="font-semibold text-accent hover:underline"
        >
          banking guide
        </Link>{" "}
        covers what to bring and what to ask before you sign.
      </p>
      <p>
        Credit is murkier. The credit bureaus do not require an SSN to build a
        file — a lender that reports under an ITIN will create one, and some card
        issuers accept ITIN applications. But fewer lenders lend or report on an
        ITIN, and if you later get an SSN you should tell each bureau so the
        history moves with you rather than staying orphaned under the old
        number. If you are SSN-eligible, get the SSN first; it opens every door
        the ITIN opens and many it does not. If you are not, the{" "}
        <Link
          href="/banking/build-credit"
          className="font-semibold text-accent hover:underline"
        >
          build-credit guide
        </Link>{" "}
        walks through the sequence that works without one.
      </p>

      <h2>Common mistakes</h2>
      <ul>
        <li>
          Applying for an ITIN when you are SSN-eligible, or running both
          applications at the same time.
        </li>
        <li>
          Mailing a W-7 without the tax return and without qualifying for a
          listed exception.
        </li>
        <li>
          Requesting an ITIN for a dependent who is not claimed for a specific
          tax benefit on the return.
        </li>
        <li>
          Sending a child’s passport with no US entry stamp and no school or
          medical records to back it up.
        </li>
        <li>
          Posting the family’s only passport the month before an international
          trip.
        </li>
        <li>
          Assuming the ITIN on last year’s return is still active without
          checking the three-year rule.
        </li>
        <li>
          Continuing to use the ITIN after receiving an SSN instead of asking
          the IRS to merge the records.
        </li>
      </ul>

      <h2>Other guides on this site</h2>
      <p>
        An ITIN is usually one step inside a larger question. These pick up the
        rest of it:
      </p>
      <ul>
        <li>
          <Link
            href="/taxes/resident-vs-nonresident"
            className="font-semibold text-accent hover:underline"
          >
            Resident vs nonresident alien
          </Link>{" "}
          — the status test that decides whether a joint return, and the spouse
          election, is even on the table.
        </li>
        <li>
          <Link
            href="/banking/build-credit"
            className="font-semibold text-accent hover:underline"
          >
            Build US credit as an immigrant
          </Link>{" "}
          — the sequence that gets you a usable score, with or without an SSN.
        </li>
        <li>
          <Link
            href="/taxes/h1b"
            className="font-semibold text-accent hover:underline"
          >
            H-1B taxes explained
          </Link>{" "}
          — withholding, FICA and filing status for the household’s main
          earner.
        </li>
      </ul>
    </GuideLayout>
  );
}
