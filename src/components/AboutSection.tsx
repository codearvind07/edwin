import { motion } from "framer-motion";
import { Building, Flag, MapPin, Users } from "lucide-react";

const highlights = [
  {
    title: "Founded in 2014",
    description:
      "Growing with Indian businesses for more than a decade, guiding compliance and expansion decisions.",
    icon: Building,
  },
  {
    title: "Mission",
    description:
      "Deliver holistic legal strategies that safeguard innovation, ensure regulatory confidence, and foster sustainable growth.",
    icon: Flag,
  },
  {
    title: "Nationwide Presence",
    description:
      "Serving clients across India with a primary office in South Delhi backed by regional collaborators.",
    icon: MapPin,
  },
  {
    title: "Multidisciplinary Team",
    description:
      "Lawyers, IP experts, chartered accountants, and company secretaries collaborating on every mandate.",
    icon: Users,
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="relative overflow-hidden bg-brand-sand py-24">
      <div className="gradient-blur left-1/2 top-10 -translate-x-1/2 bg-brand-sky/40" />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-6 lg:flex-row lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="lg:w-1/2"
        >
          <div className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-brand-royal shadow">
            About Us
          </div>
          <h2 className="mt-6 font-display text-4xl leading-tight text-brand-navy sm:text-5xl">
            About Edwin Corporate Law
          </h2>
          <p className="mt-6 text-base leading-relaxed text-brand-navy/70">
            Edwin Corporate Law Firm Founded in 2014, Edwin Corporate Law Firm has been providing the Services All India area with the vision to provide a complete business solution. Edwin Corporate has a dedicated team of professionals including lawyers, Intellectual Property Experts, Chartered Accountants and Company Secretariats with the specific industry expertise, resources, and commitment required to meet all our client's requirements.
          </p>
          <p className="mt-5 text-base leading-relaxed text-brand-navy/70">
            We have the requisite expertise and are well-positioned to provide comprehensive legal services that meet the changing needs of our clients. We can assure you of best services on matters of GST, IPR(Trademark, Patent, Copyright, Geographical Indication, Design), ITR, ROC, Company/LLP Incorporation, Trust/Society, 80G/12AA, ISO, IEC Code, Legal Matters and Books of Accounts Auditing and Complete Financial & Taxation Consultancy, which is handled by our dedicated team of experts.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-2"
        >
          {highlights.map(({ title, description, icon: Icon }) => (
            <motion.div
              key={title}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-brand-royal/10 bg-white p-6 shadow-lg shadow-brand-royal/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-royal/10 text-brand-royal">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-display text-xl text-brand-navy">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-brand-navy/70">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};