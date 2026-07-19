type ProcessStepProps = {
  number: number;
  title: string;
  children: React.ReactNode;
};

export function ProcessStep({ number, title, children }: ProcessStepProps) {
  return (
    <div className="flex flex-col gap-3 sm:items-start">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-primary text-body-lg font-bold text-white">
        {number}
      </div>
      <h3 className="text-h4">{title}</h3>
      <p className="text-body text-text-secondary">{children}</p>
    </div>
  );
}
