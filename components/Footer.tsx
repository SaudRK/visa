import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import Disclaimer from "./Disclaimer";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-ink bg-ink text-[#f2f4f7]">
      <div className="page-shell py-14">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="font-display text-4xl tracking-tight">{siteConfig.name}</p>
            <p className="mt-4 max-w-md text-[#b7bec8]">{siteConfig.tagline}</p>
            <p className="mt-4 max-w-lg text-sm text-[#8b93a0]">{siteConfig.trustLine}</p>
          </div>
          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-6 gap-y-3 self-start text-sm"
          >
            <Link href="/#find-path" className="hover:text-signal transition-colors">
              Find path
            </Link>
            <Link href="/#popular" className="hover:text-signal transition-colors">
              Guides
            </Link>
            <Link href="/about" className="hover:text-signal transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-signal transition-colors">
              Contact
            </Link>
            <Link href="/privacy-policy" className="hover:text-signal transition-colors">
              Privacy
            </Link>
          </nav>
        </div>

        <div className="mt-10 border border-[#2a303a] bg-[#161a21] p-5">
          <Disclaimer invert />
        </div>

        <p className="mt-8 text-sm text-[#8b93a0]">
          © {new Date().getFullYear()} {siteConfig.name}. Fees and policies can
          change — verify official sources before filing.
        </p>
      </div>
    </footer>
  );
}
