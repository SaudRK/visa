import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell section">
      <div className="bento grid-cols-1 md:grid-cols-3 max-w-3xl">
        <div className="cell cell-ink md:col-span-2">
          <p className="mono-label !text-white/50">404</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white">
            Page not found
          </h1>
          <p className="mt-4 text-white/65">
            That URL is not in the library. Pick a live path below.
          </p>
        </div>
        <div className="cell flex flex-col gap-3">
          <Link href="/" className="btn">
            Home
          </Link>
          <Link href="/calculators" className="btn btn-ghost">
            Calculators
          </Link>
        </div>
      </div>
    </div>
  );
}
