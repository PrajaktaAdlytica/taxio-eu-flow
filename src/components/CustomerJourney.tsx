import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  FileCheck2,
  PackageCheck,
  ShieldCheck,
} from "lucide-react";

const steps = [
  {
    label: "Transaction",
    title: "Facts captured",
    detail: "Polish seller · German B2B buyer · goods move PL → DE",
    icon: PackageCheck,
  },
  {
    label: "Rules",
    title: "Treatment determined",
    detail: "0% intra-Community supply proposed with conditions",
    icon: BookOpen,
  },
  {
    label: "Check",
    title: "Invoice validated",
    detail: "Fields, wording and VAT treatment pass the concept checks",
    icon: FileCheck2,
  },
  {
    label: "Evidence",
    title: "Proof assembled",
    detail: "VAT receipt and CMR stored; destination receipt requested",
    icon: ShieldCheck,
  },
  {
    label: "Outcome",
    title: "Reviewer knows what is next",
    detail: "One visible action before the transaction can be closed",
    icon: CheckCircle2,
  },
];

export function CustomerJourney() {
  return (
    <div className="relative">
      <div className="absolute left-6 top-7 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-accent/20 via-accent/50 to-accent/20 lg:block" />
      <ol className="relative grid gap-3 lg:grid-cols-5">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <li key={step.label} className="surface-card card-hover group relative p-5">
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-accent-soft text-accent ring-4 ring-background">
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </span>
                {index < steps.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-border lg:hidden" aria-hidden="true" />
                )}
              </div>
              <div className="mt-5 text-[10px] font-semibold uppercase tracking-[0.17em] text-accent">
                {step.label}
              </div>
              <h3 className="mt-1.5 text-sm font-semibold text-primary">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{step.detail}</p>
            </li>
          );
        })}
      </ol>
      <div className="mt-4 text-center text-[10px] text-muted-foreground">
        Illustrative end-to-end scenario · no tax advice or live processing
      </div>
    </div>
  );
}
