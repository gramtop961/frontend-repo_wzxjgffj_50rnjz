import { motion } from "framer-motion";

const steps = [
  {
    title: "Warm 2–3 drops",
    desc: "Rub between palms to activate the oils for better absorption.",
  },
  {
    title: "Massage scalp",
    desc: "Work in slow circles for 2–3 minutes to stimulate circulation.",
  },
  {
    title: "Smooth through lengths",
    desc: "Glide the remaining oil over mid-lengths to ends for shine.",
  },
  {
    title: "Leave in or rinse",
    desc: "Use as an overnight treatment or a pre-wash ritual 2–3x weekly.",
  },
];

export default function HowToUse() {
  return (
    <section id="ritual" className="bg-emerald-900">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-emerald-50 md:text-4xl">
            Your nourishing ritual
          </h2>
          <p className="mt-3 text-emerald-100/80">
            A simple, soothing routine for visible results in weeks.
          </p>
        </div>

        <ol className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {steps.map((s, i) => (
            <motion.li
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20 text-emerald-200 ring-1 ring-emerald-300/30">
                {i + 1}
              </div>
              <h3 className="text-lg font-semibold text-emerald-50">{s.title}</h3>
              <p className="mt-1 text-sm text-emerald-100/80">{s.desc}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl bg-gradient-to-r from-emerald-400 to-lime-400 p-[1px]">
          <div className="rounded-2xl bg-emerald-900 p-6 text-center">
            <p className="text-emerald-100/90">
              Tip: For an intensive treatment, apply a few more drops to damp hair and wrap in a warm towel for 20 minutes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
