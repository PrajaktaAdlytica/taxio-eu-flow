import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Globe2, FolderCheck, Check } from "lucide-react";
import { EuropeMap } from "./EuropeMap";
import { Link } from "@tanstack/react-router";

type Tone = "green" | "lavender" | "amber";

const tones: Record<Tone, { bg: string; chip: string; text: string }> = {
  green:    { bg: "bg-[#EAF7F1]", chip: "bg-accent text-accent-foreground", text: "text-accent" },
  lavender: { bg: "bg-[#F3EEFF]", chip: "bg-[#6D5AE6] text-white", text: "text-[#6D5AE6]" },
  amber:    { bg: "bg-[#FFF7E8]", chip: "bg-[#D97706] text-white", text: "text-[#D97706]" },
};

export function ProductCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <ProductCard
        tone="green"
        eyebrow="Check"
        title="Taxio Check"
        to="/products/check"
        icon={<ShieldCheck className="h-5 w-5" />}
        desc="Automatically validate VAT numbers, invoices and transaction data before filing."
        preview={<CheckPreview />}
      />
      <ProductCard
        tone="lavender"
        eyebrow="Rules"
        title="Taxio Rules"
        to="/products/rules"
        icon={<Globe2 className="h-5 w-5" />}
        desc="Apply country-specific VAT regulations automatically across every transaction."
        preview={<RulesPreview />}
      />
      <ProductCard
        tone="amber"
        eyebrow="Evidence"
        title="Taxio Evidence"
        to="/products/evidence"
        icon={<FolderCheck className="h-5 w-5" />}
        desc="Automatically collect, organise and export compliance evidence for every transaction."
        preview={<EvidencePreview />}
      />
    </div>
  );
}

function ProductCard({
  tone, eyebrow, title, desc, icon, preview, to,
}: {
  tone: Tone; eyebrow: string; title: string; desc: string;
  icon: React.ReactNode; preview: React.ReactNode; to: string;
}) {
  const t = tones[tone];
  return (
    <Link
      to={to}
      className={`group relative overflow-hidden rounded-2xl border border-border ${t.bg} p-7 flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.18)]`}
    >
      <div className="flex items-center gap-2">
        <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${t.chip}`}>
          {eyebrow}
        </span>
        <div className={`ml-auto h-9 w-9 rounded-lg bg-white/70 backdrop-blur ${t.text} flex items-center justify-center`}>
          {icon}
        </div>
      </div>
      <h3 className="mt-5 text-2xl font-semibold text-primary tracking-tight">{title}</h3>
      <p className="mt-2 text-sm text-primary/70 leading-relaxed">{desc}</p>

      <div className="mt-6 relative">
        <div className="rounded-xl bg-white/70 backdrop-blur border border-white/60 p-4 shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
          {preview}
        </div>
      </div>

      <div className="mt-6 min-h-[24px]">
        <span className={`inline-flex items-center gap-1.5 text-sm font-medium ${t.text} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
          Explore Product <ArrowRight className="h-4 w-4" />
        </span>
      </div>
    </Link>
  );
}

function CheckPreview() {
  const rows = [
    { l: "Invoice", v: "INV-2026-0421" },
    { l: "VAT Number", v: "PL5252344078" },
    { l: "Country", v: "Poland" },
    { l: "Validation", v: "Passed" },
  ];
  return (
    <div className="space-y-1.5">
      {rows.map((r, i) => (
        <motion.div
          key={r.l}
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.08 }}
          className="flex items-center justify-between text-[11px] px-2 py-1.5 rounded-md bg-white/60"
        >
          <span className="text-muted-foreground">{r.l}</span>
          <span className="font-medium text-primary tabular-nums">{r.v}</span>
        </motion.div>
      ))}
      <div className="mt-2 flex items-center justify-between rounded-md bg-accent text-accent-foreground px-2.5 py-1.5 text-[11px] font-semibold">
        Everything Valid
        <Check className="h-3.5 w-3.5" strokeWidth={3} />
      </div>
    </div>
  );
}

function RulesPreview() {
  return (
    <div className="grid grid-cols-2 gap-3 items-center">
      <div className="h-24 text-[#6D5AE6]"><EuropeMap className="h-full w-full" /></div>
      <div className="space-y-1.5">
        {["DE · 19%", "FR · 20%", "PL · 23%", "IT · 22%"].map((r, i) => (
          <motion.div
            key={r}
            initial={{ opacity: 0, x: 6 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="text-[11px] px-2 py-1 rounded bg-white/70 text-primary font-medium"
          >
            {r}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function EvidencePreview() {
  const items = [
    { l: "Invoices", n: 128 }, { l: "Receipts", n: 342 },
    { l: "Contracts", n: 46 }, { l: "Attachments", n: 87 },
  ];
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-1.5">
        {items.map((it, i) => (
          <motion.div
            key={it.l}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-md bg-white/70 px-2 py-1.5"
          >
            <div className="text-[10px] text-muted-foreground">{it.l}</div>
            <div className="text-sm font-semibold text-primary">{it.n}</div>
          </motion.div>
        ))}
      </div>
      <div className="rounded-md bg-[#D97706] text-white text-[11px] font-semibold px-2.5 py-1.5 flex items-center justify-between">
        Export Package <ArrowRight className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}
