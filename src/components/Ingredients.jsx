import { motion } from "framer-motion";
import { Leaf, Flower2, Sprout } from "lucide-react";

const ingredients = [
  {
    icon: Leaf,
    name: "Argan Oil",
    note: "Rich in vitamin E to boost elasticity and shine.",
    tint: "from-amber-100 to-emerald-50",
  },
  {
    icon: Flower2,
    name: "Rosemary Extract",
    note: "Known to stimulate scalp and encourage growth.",
    tint: "from-emerald-100 to-lime-50",
  },
  {
    icon: Sprout,
    name: "Jojoba Oil",
    note: "Balances sebum for a calm, comfortable scalp.",
    tint: "from-lime-100 to-emerald-50",
  },
];

export default function Ingredients() {
  return (
    <section id="ingredients" className="relative">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-0 h-48 bg-gradient-to-b from-emerald-100/60 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-900 md:text-4xl">
            Clean ingredients that work
          </h2>
          <p className="mt-3 text-emerald-900/80">
            We select each botanical for its proven benefits, nothing extra. No
            silicones, mineral oils, or synthetic fragrance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ingredients.map(({ icon: Icon, name, note, tint }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.08, duration: 0.45 }}
              className={`rounded-2xl border border-emerald-700/10 bg-gradient-to-br ${tint} p-6`}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-emerald-700 shadow">
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-900">{name}</h3>
                  <p className="mt-1 text-sm text-emerald-900/80">{note}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-emerald-700/10 bg-white p-6">
          <p className="text-sm text-emerald-900/70">
            Safe for all hair types and textures. Vegan, cruelty-free, and packaged in recyclable glass.
          </p>
        </div>
      </div>
    </section>
  );
}
