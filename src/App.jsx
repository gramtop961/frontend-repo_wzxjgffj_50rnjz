import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Ingredients from "./components/Ingredients";
import HowToUse from "./components/HowToUse";

export default function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2 font-semibold text-emerald-900">
            <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-b from-emerald-500 to-emerald-700" />
            Verdance Oils
          </a>
          <nav className="hidden items-center gap-6 text-sm text-emerald-900/80 md:flex">
            <a href="#benefits" className="hover:text-emerald-900">Benefits</a>
            <a href="#ingredients" className="hover:text-emerald-900">Ingredients</a>
            <a href="#ritual" className="hover:text-emerald-900">How to use</a>
            <a
              href="#benefits"
              className="rounded-full bg-emerald-600 px-4 py-2 font-medium text-white shadow-md shadow-emerald-600/30 transition hover:bg-emerald-700"
            >
              Shop Now
            </a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Ingredients />
        <HowToUse />
      </main>

      <footer className="border-t border-emerald-900/10 bg-emerald-50/50">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-emerald-900/70 md:flex-row">
            <p>© {new Date().getFullYear()} Verdance. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-emerald-900">Privacy</a>
              <a href="#" className="hover:text-emerald-900">Terms</a>
              <a href="#" className="hover:text-emerald-900">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
