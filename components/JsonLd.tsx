/**
 * Renders one or more schema.org objects as ld+json.
 *
 * Server-rendered into the static HTML so crawlers see the markup without
 * executing JavaScript. Nulls are filtered so callers can pass conditional
 * schemas inline.
 */
export default function JsonLd({
  schema,
}: {
  schema: object | (object | null | undefined)[];
}) {
  const items = (Array.isArray(schema) ? schema : [schema]).filter(
    (item): item is object => Boolean(item)
  );

  return (
    <>
      {items.map((item, i) => (
        <script
          key={i}
          type="application/ld+json"
          // Schemas are built from our own build-time content, never user
          // input. `<` is still escaped so no string value can close the
          // script tag early.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(item).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}
