import { motion } from "framer-motion";
import { Building2, Globe2, ShieldCheck, Users } from "lucide-react";

const stats = [
  {
    label: "All-India Reach",
    value: "30+ Cities",
    icon: Globe2,
  },
  {
    label: "Professionals",
    value: "35 Specialists",
    icon: Users,
  },
  {
    label: "Matters Delivered",
    value: "1500+",
    icon: ShieldCheck,
  },
  {
    label: "Corporate Clients",
    value: "240+",
    icon: Building2,
  },
];

export const StatsStrip = () => (
  <section className="relative overflow-hidden bg-white py-12">
    <div className="mx-auto max-w-6xl px-6">
      <div className="grid gap-6 rounded-3xl border border-brand-royal/10 bg-brand-sand/60 p-8 shadow-lg backdrop-blur md:grid-cols-4">
        {stats.map(({ label, value, icon: Icon }, index) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-120px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center text-center text-brand-navy"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-royal/10 text-brand-royal">
              <Icon className="h-5 w-5" />
            </div>
            <p className="mt-4 font-display text-2xl">{value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-brand-navy/60">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
