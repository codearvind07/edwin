import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  FileCheck,
  Gavel,
  Lightbulb,
  ShieldAlert,
  Building2,
  ScrollText,
  Landmark,
  GraduationCap,
  BookOpenCheck,
} from "lucide-react";

const services = [
  {
    title: "Business Consulting",
    summary: "Strategic guidance for corporate structuring, expansion, and compliance.",
    details:
      "We evaluate operational frameworks, advise on merger implications, and craft governance models that balance agility with regulatory expectations.",
    icon: Building2,
  },
  {
    title: "Tax Preparation & GST Advisory",
    summary: "Comprehensive GST planning, filing, and representation services.",
    details:
      "Our tax desk manages GST audits, optimizes indirect tax positions, and resolves departmental notices with clarity and speed.",
    icon: FileCheck,
  },
  {
    title: "Financial Accounting & Audits",
    summary: "Precise financial reporting, statutory audits, and risk mitigation.",
    details:
      "Chartered accountants deliver accurate statements, internal control reviews, and audit liaison support for transparent compliance.",
    icon: BookOpenCheck,
  },
  {
    title: "Intellectual Property Protection",
    summary: "Trademark, copyright, patent, and GI strategy & enforcement.",
    details:
      "IP specialists secure filings, monitor infringements, and litigate violations to protect technology, branding, and creative assets.",
    icon: Lightbulb,
  },
  {
    title: "Corporate & Business Law",
    summary: "End-to-end corporate legal counsel, contracts, and dispute resolution.",
    details:
      "We draft commercial agreements, manage stakeholder alignments, and represent companies in arbitration and litigation arenas.",
    icon: Gavel,
  },
  {
    title: "Startup & Compliance Advisory",
    summary: "Incorporation, ROC filings, LLP agreements, and regulatory roadmaps.",
    details:
      "Startups benefit from structure selection, investor-ready documentation, ESOP policies, and ongoing secretarial compliance.",
    icon: ScrollText,
  },
  {
    title: "Trust, Society & NGO Support",
    summary: "Registration, 80G/12AA certification, and ongoing statutory maintenance.",
    details:
      "We craft charitable governance frameworks, secure FCRA permissions, and ensure transparent financial stewardship.",
    icon: Landmark,
  },
  {
    title: "Complete Legal & Financial Consultancy",
    summary: "Unified advisory combining law, finance, and risk management.",
    details:
      "Dedicated relationship teams synchronize legal directives with financial performance goals for long-term resilience.",
    icon: ShieldAlert,
  },
  {
    title: "Startup Law & Advisory",
    summary: "Investor readiness, equity structuring, and growth compliance.",
    details:
      "Tailored incubation support, mentorship on term sheets, and IP strategies that protect emerging brands and technology.",
    icon: GraduationCap,
  },
];

export const ServicesSection = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="services" className="bg-white py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center rounded-full bg-brand-royal/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-brand-royal">
              Our Services
            </div>
            <h2 className="mt-6 font-display text-4xl text-brand-navy">
              Holistic expertise tailored to every stage of your business lifecycle
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-brand-navy/70">
              Expand confidently with legal, financial, and intellectual property specialists working together for your goals.
            </p>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 md:grid-cols-2">
            {services.map(({ title, summary, details, icon: Icon }, index) => {
              const isActive = activeIndex === index;
              return (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  onHoverStart={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  className={`group relative overflow-hidden rounded-3xl border border-brand-royal/10 bg-white p-6 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-glow focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-royal/40 ${
                    isActive ? "border-brand-royal/40" : ""
                  }`}
                  tabIndex={0}
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-royal/10 text-brand-royal">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-xl text-brand-navy">{title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-brand-navy/70">{summary}</p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-3 border-t border-brand-royal/10 pt-3 text-sm leading-relaxed text-brand-navy/70"
                      >
                        {details}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
