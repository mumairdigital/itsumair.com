type JsonLdProps = {
  data: Record<string, unknown>;
};

/** Renders a single JSON-LD structured data block. Pass one schema object per instance. */
export function JsonLd({ data }: JsonLdProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}
