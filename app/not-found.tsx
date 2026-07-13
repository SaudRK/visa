import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-[60vh] flex-col items-start justify-center py-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-3 font-display text-4xl tracking-tight">Page not found</h1>
      <p className="mt-4 max-w-md text-muted leading-relaxed">
        That URL does not match a published guide. Use the path finder to reach
        the right visa.
      </p>
      <Link href="/" className="btn btn-signal mt-8">
        Back to home
      </Link>
    </div>
  );
}
