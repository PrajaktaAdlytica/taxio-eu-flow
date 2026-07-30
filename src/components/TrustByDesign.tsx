import {
  BookMarked,
  CalendarClock,
  Eye,
  FlaskConical,
  ShieldAlert,
  UserRoundCheck,
} from "lucide-react";

const principles = [
  {
    title: "Sources stay visible",
    detail: "Every illustrated rule result includes its authority reference and jurisdiction.",
    icon: BookMarked,
  },
  {
    title: "Dates matter",
    detail: "Effective dates and review dates appear beside the fictional decision.",
    icon: CalendarClock,
  },
  {
    title: "Uncertainty is explicit",
    detail: "Missing inputs and unavailable sources become review states—not silent assumptions.",
    icon: ShieldAlert,
  },
  {
    title: "Humans remain accountable",
    detail: "The concept keeps reviewer actions and approvals visible in the decision history.",
    icon: UserRoundCheck,
  },
];

export function TrustByDesign() {
  return (
    <div className="overflow-hidden rounded-3xl border border-primary/10 bg-primary text-primary-foreground">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-white/10 p-7 sm:p-9 lg:border-b-0 lg:border-r">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/[0.06] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-emerald-200 ring-1 ring-inset ring-white/10">
            <Eye className="h-3.5 w-3.5" aria-hidden="true" />
            Transparent by design
          </div>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Credibility without pretending the concept is live.
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/56">
            Taxexa is presented as an interactive startup concept. The interface demonstrates how
            explainable VAT operations could work; it does not claim customers, certifications, live
            integrations or production coverage.
          </p>
          <div className="mt-7 flex items-start gap-2 rounded-2xl bg-amber-300/[0.08] p-4 text-xs leading-relaxed text-amber-50 ring-1 ring-inset ring-amber-200/15">
            <FlaskConical className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
            Every company, person, transaction, result, timestamp and performance metric shown on
            this website is fictional.
          </div>
        </div>
        <div className="grid gap-px bg-white/10 sm:grid-cols-2">
          {principles.map((principle) => {
            const Icon = principle.icon;
            return (
              <div key={principle.title} className="state-hover-dark bg-primary p-7 sm:p-8">
                <Icon className="h-5 w-5 text-emerald-200" aria-hidden="true" />
                <h3 className="mt-5 text-sm font-semibold text-white">{principle.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-white/48">{principle.detail}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
