import { motion } from "framer-motion";
import { Linkedin, Mail, PhoneCall, Scale, Twitter, Instagram } from "lucide-react";

const footerLinks = [
  {
    title: "Corporate Office",
    description: "A-5, Pamposh Enclave, GK-1, South Delhi, New Delhi 110048, IN",
    icon: Scale,
  },
  {
    title: "Connect",
    description: "advisory@edwincorporate.com",
    icon: Mail,
    href: "mailto:advisory@edwincorporate.com",
  },
  {
    title: "Call",
    description: "+91 98765 43210",
    icon: PhoneCall,
    href: "tel:+919876543210",
  },
];

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/edwin-corporate-law-firm",
    icon: Linkedin,
  },
  {
    label: "X",
    href: "https://twitter.com/edwincorporate",
    icon: Twitter,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/edwincorporate",
    icon: Instagram,
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <div>
            <div className="inline-flex items-center gap-3 rounded-full bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.3em] text-brand-gold">
              Edwin Corporate Law Firm
            </div>
            <h3 className="mt-6 font-display text-3xl leading-snug">
              Delivering strategic legal and financial clarity to future-ready businesses.
            </h3>
            <p className="mt-4 text-sm text-white/70">
              We support enterprises with corporate law, IP protection, taxation, and compliance solutions across India.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              {socials.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold text-white/90 transition hover:bg-white/20"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-6">
            {footerLinks.map(({ title, description, icon: Icon, href }) => (
              <motion.a
                key={title}
                href={href}
                whileHover={{ x: 4 }}
                className="flex gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 text-sm text-white/80"
                target={href ? "_blank" : undefined}
                rel={href ? "noopener noreferrer" : undefined}
              >
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-2xl bg-white/10 text-brand-gold">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-white/90">{description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>© {year} Edwin Corporate Law Firm. All rights reserved.</p>
          <p>Trusted legal partner for enterprises, startups, and innovators nationwide.</p>
        </motion.div>
        
        {/* Added "Powered by D'miraki" with link */}
        <div className="mt-8 text-center">
          <a 
            href="https://dmiraki.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-xs text-white/50 hover:text-white/80 transition-colors duration-200"
          >
            Powered by D'miraki
          </a>
        </div>
      </div>
    </footer>
  );
};