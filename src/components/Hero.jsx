import { motion } from "framer-motion";
import { Leaf, Droplets, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-emerald-300/30 blur-3xl" />
        <div className="absolute -bottom-20 -right-10 h-96 w-96 rounded-full bg-lime-300/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-1 text-sm text-emerald-700">
            <Sparkles className="h-4 w-4" />
            100% Organic • Cold-Pressed • Cruelty-Free
          </div>

          <h1 className="mt-6 bg-gradient-to-b from-emerald-900 to-emerald-600 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-6xl">
            Nourish Your Roots. Illuminate Your Shine.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-balance text-base text-emerald-900/80 md:text-lg">
            A botanical blend of premium oils that strengthens, stimulates growth, and brings a healthy glow to every strand.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <a
              href="#benefits"
              className="group inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 text-white shadow-lg shadow-emerald-600/30 transition hover:translate-y-[-2px] hover:bg-emerald-700"
            >
              <Droplets className="h-5 w-5" /> Shop Now
            </a>
            <a
              href="#ingredients"
              className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-white/70 px-6 py-3 text-emerald-800 backdrop-blur transition hover:bg-white"
            >
              <Leaf className="h-5 w-5" /> Learn More
            </a>
          </div>
        </motion.div>

        {/* Floating bottle silhouette */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="relative mx-auto mt-14 h-72 w-full max-w-3xl"
        >
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-100 to-lime-100 p-1 shadow-xl">
            <div className="flex h-full w-full items-center justify-center rounded-3xl bg-white/70 backdrop-blur">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-emerald-400/20 blur-2xl" />
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="mx-auto flex h-36 w-36 items-center justify-center rounded-2xl bg-gradient-to-b from-emerald-500 to-emerald-700 shadow-2xl"
                >
                  <Droplets className="h-14 w-14 text-white" />
                </motion.div>
                <p className="mt-6 text-center text-sm text-emerald-900/70">
                  Infused with rosemary, argan, and jojoba for balanced scalp care.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
