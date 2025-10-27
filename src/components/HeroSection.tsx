import { motion } from "framer-motion";
import { ArrowRight, ScrollText, ShieldCheck, Scale } from "lucide-react";

const stats = [
  { label: "Years of Excellence", value: "10+" },
  { label: "Expert Professionals", value: "35" },
  { label: "Cases Resolved", value: "1500+" },
];

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-brand-navy via-[#131f44] to-[#1f3c88]"
    >
      <div className="absolute inset-0 opacity-60">
        <img
          src="https://public.youware.com/users-website-assets/prod/59284182-b3ef-454d-a012-27cd8e0d74c7/2653a56c97fd41528b7e4b09bfb2f303"
          alt="Corporate law team working on documents"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16),_transparent_55%)]" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-40 text-white lg:flex-row lg:pt-44">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-1/2"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em]">
            Since 2014
          </div>

          <h1 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
            Strategic Counsel for Businesses Ready to Lead with Confidence
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/80 sm:text-lg">
            Edwin Corporate Law Firm delivers comprehensive legal, tax, and intellectual property solutions across India. Our multidisciplinary experts protect your innovations, streamline compliance, and unlock sustainable growth.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
           
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore Our Expertise
              <ScrollText className="h-4 w-4" />
            </motion.a>
          </div>

          <div className="mt-16 grid w-full max-w-lg grid-cols-3 gap-6 text-center text-white/80">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl border border-white/20 bg-white/10 px-3 py-4">
                <div className="font-display text-3xl">{stat.value}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.25em]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mt-14 w-full max-w-xl rounded-3xl border border-white/20 bg-white/5 p-8 backdrop-blur-lg lg:ml-auto lg:mt-0"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-gold/90 to-white text-brand-navy">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
                Dedicated Business Partner
              </p>
              <p className="text-sm text-white/80">
                Comprehensive legal support across corporate, taxation, and IP domains.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-5 text-sm leading-relaxed text-white/75">
            <p>
              We integrate lawyers, chartered accountants, IP strategists, and compliance experts under one roof to support your expansion from incorporation to international operations.
            </p>
            <p>
              Trusted by growing enterprises nationwide for GST, ROC filings, intellectual property protection, financial governance, and corporate restructuring.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 text-xs text-white/70 sm:grid-cols-2">
            {[
              "GST & Taxation Advisory",
              "IPR (Trademark, Patent, GI)",
              "Company & LLP Incorporation",
              "Compliance & Audits",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-3"
              >
                <ShieldCheck className="h-4 w-4 text-brand-gold" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
