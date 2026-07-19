type StatBlockProps = {
  value: string;
  label: string;
};

export function StatBlock({ value, label }: StatBlockProps) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-display text-proof-accent">{value}</p>
      <p className="text-body mt-1 text-text-secondary">{label}</p>
    </div>
  );
}
