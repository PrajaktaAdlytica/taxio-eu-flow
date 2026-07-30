import { CountUp } from "./Motion";

const stats = [
  {
    n: 98,
    s: "%",
    l: "Illustrative validation target",
    bg: "bg-[#EAF7F1]",
    text: "text-accent",
  },
  {
    n: 27,
    s: "",
    l: "EU markets in the concept",
    bg: "bg-[#F3EEFF]",
    text: "text-[#6D5AE6]",
  },
  {
    n: 80,
    s: "%",
    l: "Illustrative review reduction",
    bg: "bg-[#FFF7E8]",
    text: "text-[#D97706]",
  },
  {
    n: 24,
    s: "/7",
    l: "Target monitoring model",
    bg: "bg-[#E8F1FF]",
    text: "text-[#2563EB]",
  },
];

export function BenefitStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((s) => (
        <div key={s.l} className={`card-hover rounded-2xl border border-border p-7 ${s.bg}`}>
          <div className={`text-5xl md:text-6xl font-semibold tracking-tight ${s.text}`}>
            <CountUp to={s.n} suffix={s.s} />
          </div>
          <div className="mt-3 text-sm font-medium text-primary/80 leading-snug">{s.l}</div>
        </div>
      ))}
    </div>
  );
}
