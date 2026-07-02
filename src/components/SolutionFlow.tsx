import { motion } from "motion/react";
import { FileText, ShieldCheck, Globe2, FolderCheck, BadgeCheck } from "lucide-react";

const nodes = [
  { icon: FileText, label: "Invoice" },
  { icon: ShieldCheck, label: "Validation Engine" },
  { icon: Globe2, label: "VAT Rules" },
  { icon: FolderCheck, label: "Evidence" },
  { icon: BadgeCheck, label: "Ready to File" },
];

export function SolutionFlow() {
  return (
    <div className="surface-card p-8 md:p-12 relative overflow-hidden">
      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="relative grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-3 items-stretch">
        {nodes.map((n, i) => (
          <div key={n.label} className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="surface-card w-full p-5 flex flex-col items-center text-center relative z-10"
            >
              <motion.div
                animate={{ scale: [1, 1.06, 1] }}
                transition={{ duration: 2.2, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
                className={`h-12 w-12 rounded-xl flex items-center justify-center ${
                  i === nodes.length - 1 ? "bg-accent text-accent-foreground" : "bg-accent-soft text-accent"
                }`}
              >
                <n.icon className="h-5 w-5" />
              </motion.div>
              <div className="mt-3 text-sm font-semibold text-primary">{n.label}</div>
            </motion.div>
            {i < nodes.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-px">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.15, duration: 0.4 }}
                  style={{ transformOrigin: "left" }}
                  className="w-full h-px bg-accent/40"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
