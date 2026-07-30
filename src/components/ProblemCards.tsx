import { motion } from "motion/react";
import { Globe2, FileCheck2, FolderArchive, Check, AlertTriangle } from "lucide-react";
import { EuropeMap } from "./EuropeMap";

export function ProblemCards() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card
        title="Cross-border VAT"
        icon={<Globe2 className="h-5 w-5" />}
        desc="Different countries require different VAT treatments, creating uncertainty during every transaction."
      >
        <div className="h-32 w-full text-accent">
          <EuropeMap className="h-full w-full" />
        </div>
      </Card>

      <Card
        title="E-Invoicing"
        icon={<FileCheck2 className="h-5 w-5" />}
        desc="Invoices move through multiple systems before becoming compliant."
      >
        <InvoiceMini />
      </Card>

      <Card
        title="Missing Evidence"
        icon={<FolderArchive className="h-5 w-5" />}
        desc="Receipts, contracts and supporting documents become disconnected from the original transaction."
      >
        <StackingFiles />
      </Card>
    </div>
  );
}

function Card({
  title,
  icon,
  desc,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  desc: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group surface-card card-hover p-6 flex flex-col">
      <div className="h-10 w-10 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-primary">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
      <div className="state-hover mt-5 rounded-xl border border-border bg-background/60 p-4 flex-1 flex items-center justify-center min-h-[140px] overflow-hidden">
        {children}
      </div>
    </div>
  );
}

function InvoiceMini() {
  const items = [
    { label: "Invoice", tone: "bg-secondary text-primary" },
    { label: "Validation", tone: "bg-accent-soft text-accent" },
    { label: "Approved", tone: "bg-accent text-accent-foreground" },
  ];
  return (
    <div className="w-full space-y-1.5">
      {items.map((it, i) => (
        <motion.div
          key={it.label}
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.25 }}
          className={`flex items-center justify-between rounded-md px-3 py-2 text-xs font-medium ${it.tone}`}
        >
          <span>{it.label}</span>
          {i === 2 && <Check className="h-3.5 w-3.5" strokeWidth={3} />}
        </motion.div>
      ))}
    </div>
  );
}

function StackingFiles() {
  return (
    <div className="relative w-full h-24 flex items-end justify-center">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          initial={{ y: -30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.2, type: "spring", stiffness: 200, damping: 18 }}
          style={{ zIndex: 3 - i, marginLeft: i === 0 ? 0 : -14 }}
          className="h-16 w-12 rounded-md border border-border bg-surface shadow-sm flex items-center justify-center text-[9px] text-muted-foreground"
        >
          PDF
        </motion.div>
      ))}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 0, scale: 0.6 }}
        viewport={{ once: true }}
        transition={{ delay: 1.1, duration: 0.4 }}
        className="absolute top-1 right-6 h-6 w-6 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center shadow-sm"
      >
        <AlertTriangle className="h-3.5 w-3.5" />
      </motion.div>
    </div>
  );
}
