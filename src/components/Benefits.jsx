import { motion } from "framer-motion";
import { Sparkles, ShieldCheck, Leaf, Zap } from "lucide-react";

const items = [
  {
    icon: Sparkles,
    title: "Shine & Softness",
    desc: "Instantly tames frizz and adds a natural, mirror-like glow.",
  },
  {
    icon: ShieldCheck,
    title: "Strengthens Roots",
    desc: "Fortifies follicles to reduce breakage and split ends.",
  },
  {
    icon: Leaf,
    title: "Scalp Friendly",
    desc: "Naturally soothing botanicals calm irritation and dryness.",
  },
  {
    icon: Zap,
    title: "Faster Growth",
    desc: "Stimulates circulation for visibly healthier growth.",
  },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-gradient-to-b from-white to-emerald-50">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
            Why your hair will love it
          </h2>
          <p className="mt-3 text-emerald-900/80">
            Clean, potent ingredients that transform texture from root to tip.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="group relative overflow-hidden rounded-2xl border border-emerald-700/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-emerald-200/40 blur-2xl transition group-hover:opacity-80" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-600 text-white shadow shadow-emerald-600/30">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-emerald-900">{title}</h3>
              <p className="mt-2 text-sm text-emerald-900/80">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
