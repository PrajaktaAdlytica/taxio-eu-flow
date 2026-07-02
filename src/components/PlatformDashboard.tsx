import { motion } from "motion/react";
import { Search, Filter, Download, Plus } from "lucide-react";
import { EuropeMap } from "./EuropeMap";
import { CountUp } from "./Motion";

type Status = "valid" | "review" | "missing" | "filed";

const badge: Record<Status, string> = {
  valid:   "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  filed:   "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
  review:  "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
  missing: "bg-red-50 text-red-700 ring-1 ring-red-200",
};

const rows = [
  { inv: "INV-2026-0421", vendor: "Baltic Retail Sp. z o.o.", country: "PL", amount: "€ 4,820.00", vat: "23%", ev: "valid", st: "valid" },
  { inv: "INV-2026-0422", vendor: "Nordic Supply GmbH",        country: "DE", amount: "€ 2,140.00", vat: "19%", ev: "valid", st: "filed" },
  { inv: "INV-2026-0423", vendor: "Loire Marketplace SAS",     country: "FR", amount: "€ 1,340.00", vat: "20%", ev: "missing", st: "review" },
  { inv: "INV-2026-0424", vendor: "Milano Trade S.r.l.",       country: "IT", amount: "€ 3,905.00", vat: "22%", ev: "valid", st: "valid" },
  { inv: "INV-2026-0425", vendor: "Iberia Logistics S.L.",     country: "ES", amount: "€    980.00", vat: "21%", ev: "valid", st: "valid" },
] as const;

const tabs = ["Invoices", "VAT Rules", "Evidence", "Countries", "Activity"];

export function PlatformDashboard() {
  return (
    <div className="surface-card overflow-hidden shadow-[0_30px_80px_-40px_rgba(11,18,32,0.25)]">
      {/* Tabs */}
      <div className="flex items-center gap-1 border-b border-border px-4 py-2 bg-surface overflow-x-auto">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`px-3 h-8 rounded-md text-xs font-medium transition-colors ${
              i === 0 ? "bg-secondary text-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 border-b border-border px-4 py-3">
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input readOnly placeholder="Search invoices..." className="w-full h-9 rounded-md border border-border bg-background pl-8 pr-3 text-xs text-primary placeholder:text-muted-foreground focus:outline-none" />
          </div>
          <button className="h-9 px-3 rounded-md border border-border bg-background text-xs text-primary/80 hover:border-primary/30">All Countries</button>
          <button className="h-9 px-3 rounded-md border border-border bg-background text-xs text-primary/80 hover:border-primary/30 inline-flex items-center gap-1.5">
            <Filter className="h-3 w-3" /> Filters
          </button>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-9 px-3 rounded-md border border-border bg-background text-xs text-primary/80 hover:border-primary/30 inline-flex items-center gap-1.5">
            <Download className="h-3 w-3" /> Export
          </button>
          <button className="h-9 px-3 rounded-md bg-accent text-accent-foreground text-xs font-medium inline-flex items-center gap-1.5 hover:bg-accent/90">
            <Plus className="h-3 w-3" /> New Invoice
          </button>
        </div>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 p-4 border-b border-border bg-secondary/30">
        {[
          { l: "Pending Reviews", v: 12, s: "" },
          { l: "Validated Today", v: 348, s: "" },
          { l: "Missing Evidence", v: 4, s: "" },
          { l: "Compliance Score", v: 98, s: "%" },
        ].map((w, i) => (
          <motion.div
            key={w.l}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-lg bg-surface border border-border p-3"
          >
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{w.l}</div>
            <div className="mt-1 text-2xl font-semibold text-primary tracking-tight">
              <CountUp to={w.v} suffix={w.s} />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-[1fr_260px]">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs">
            <thead>
              <tr className="text-left text-muted-foreground border-b border-border">
                {["Invoice", "Vendor", "Country", "Amount", "VAT", "Evidence", "Status"].map((h) => (
                  <th key={h} className="font-medium px-4 py-3 whitespace-nowrap">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <motion.tr
                  key={r.inv}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className={`border-b border-border last:border-0 hover:bg-secondary/60 ${i % 2 ? "bg-background/40" : ""}`}
                >
                  <td className="px-4 py-3 font-medium text-primary whitespace-nowrap">{r.inv}</td>
                  <td className="px-4 py-3 text-primary/70 whitespace-nowrap">{r.vendor}</td>
                  <td className="px-4 py-3 text-primary/70">{r.country}</td>
                  <td className="px-4 py-3 tabular-nums text-primary/80 whitespace-nowrap">{r.amount}</td>
                  <td className="px-4 py-3 text-primary/70">{r.vat}</td>
                  <td className="px-4 py-3"><Badge s={r.ev as Status} /></td>
                  <td className="px-4 py-3"><Badge s={r.st as Status} /></td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Side widgets */}
        <div className="border-t lg:border-t-0 lg:border-l border-border p-4 space-y-4 bg-secondary/20">
          <div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">EU Coverage</div>
            <div className="mt-2 h-28 text-accent"><EuropeMap className="h-full w-full" /></div>
          </div>
          <MiniLine />
          <MiniBars />
        </div>
      </div>
    </div>
  );
}

function Badge({ s }: { s: Status }) {
  const label = { valid: "Valid", filed: "Filed", review: "Review", missing: "Missing" }[s];
  return (
    <span className={`inline-flex items-center rounded-md px-2 py-0.5 text-[11px] font-medium ${badge[s]}`}>
      {label}
    </span>
  );
}

function MiniLine() {
  const pts = [8, 12, 10, 18, 16, 22, 20, 28, 26, 32];
  const max = 34;
  const w = 220, h = 48;
  const step = w / (pts.length - 1);
  const path = pts.map((p, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (p / max) * h}`).join(" ");
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Validations · 7d</div>
      <svg viewBox={`0 0 ${w} ${h}`} className="mt-2 w-full h-14">
        <motion.path
          d={path}
          fill="none"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
        />
      </svg>
    </div>
  );
}

function MiniBars() {
  const bars = [40, 65, 50, 80, 60, 90, 72];
  return (
    <div>
      <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Filings by Country</div>
      <div className="mt-2 flex items-end gap-1.5 h-14">
        {bars.map((b, i) => (
          <motion.div
            key={i}
            initial={{ height: 0 }}
            whileInView={{ height: `${b}%` }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t bg-accent/70"
          />
        ))}
      </div>
    </div>
  );
}
