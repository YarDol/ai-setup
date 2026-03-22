interface SetupStepProps {
  step: number;
  total: number;
  title: string;
  description: string;
  tag?: string;
  tagColor?: string;
  gain?: string;
  children?: React.ReactNode;
}

export function SetupStep({
  step,
  total,
  title,
  description,
  tag,
  tagColor = "bg-secondary text-muted-foreground border-border",
  gain,
  children,
}: SetupStepProps) {
  const isLast = step === total;

  return (
    <div className="flex gap-3 sm:gap-5">
      {/* Timeline */}
      <div className="flex flex-col items-center shrink-0">
        <div className="w-9 h-9 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0 z-10">
          {step}
        </div>
        {!isLast && <div className="w-px flex-1 bg-border mt-1 mb-1 min-h-8" />}
      </div>

      {/* Card */}
      <div className={`flex-1 min-w-0 ${isLast ? "pb-0" : "pb-8"}`}>
        <div className="border border-border rounded-xl p-4 sm:p-5 bg-card">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-2">
            <h3 className="font-semibold text-base text-foreground leading-snug">
              {title}
            </h3>
            {tag && (
              <span
                className={`text-sm px-2 py-0.5 rounded-full border font-medium shrink-0 ${tagColor}`}
              >
                {tag}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            {description}
          </p>

          {/* What you get */}
          {gain && (
            <div className="flex items-start gap-2 mb-4 text-sm flex-wrap">
              <span className="text-muted-foreground/60 shrink-0">
                You get:
              </span>
              <span className="font-medium text-foreground">{gain}</span>
            </div>
          )}

          {/* Content */}
          {children && <div className="space-y-2">{children}</div>}
        </div>
      </div>
    </div>
  );
}
