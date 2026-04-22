import { getMetadata } from "@/lib/metadata";

export const metadata = getMetadata({
  title: "The Licensing | satoru-render",
  description: "Flexible infrastructure agreements for every project scale.",
  path: "/pricing",
});

const tiers = [
  { name: "Public", type: "01", price: "Free", desc: "Open-source projects and individual community building.", features: ["MIT Licensed", "Community Support", "API Rate Limited", "No Commercial Use"] },
  { name: "Studio", type: "02", price: "$49", desc: "For professional agencies and small production studios.", features: ["Commercial License", "Priority Delivery", "Private Registry", "Consulting (1hr/mo)"] },
  { name: "Monolith", type: "03", price: "Custom", desc: "Enterprise-grade infrastructure and dedicated hardware support.", features: ["Unlimited Licensing", "On-Prem Deployment", "Custom Performance Ops", "24/7 Red-line Support"] },
];

export default function Pricing() {
  return (
    <div className="relative bg-background studio-grid">
      <main className="px-8 md:px-24 pt-48 pb-32 w-full max-w-[1800px] mx-auto">
        <header className="mb-32 animate-reveal">
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-studio-muted mb-8 block">
            Licensing Protocols
          </span>
          <h2 className="text-[8vw] md:text-[6vw] font-serif italic leading-none tracking-tighter text-white">
            Access & <br />
            <span className="text-accent not-italic">Permissions.</span>
          </h2>
        </header>

        <section className="space-y-1 animate-reveal delay-100">
          {tiers.map((t) => (
            <div key={t.type} className="group border-t border-white/5 py-12 flex flex-col md:flex-row gap-12 items-start md:items-center hover:bg-white/[0.02] transition-colors px-12 md:-mx-12 rounded-3xl">
              <div className="md:w-48">
                <span className="text-[10px] font-mono text-studio-muted block mb-2">[{t.type}]</span>
                <h3 className="text-xl font-bold tracking-tight text-white">{t.name}</h3>
              </div>
              <div className="flex-1 md:max-w-md">
                <p className="text-studio-muted leading-relaxed tracking-tight">
                  {t.desc}
                </p>
              </div>
              <div className="flex-1">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                  {t.features.map((f, i) => (
                    <li key={i} className="text-[10px] uppercase tracking-[0.1em] font-bold text-studio-muted flex items-center gap-2">
                      <div className="w-[3px] h-[3px] bg-white opacity-20" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:w-32 text-right">
                <span className="text-2xl font-serif italic text-white block mb-4">{t.price}</span>
                <button className="text-[10px] uppercase tracking-[0.3em] font-black text-white hover:opacity-50 transition-opacity">
                  Select
                </button>
              </div>
            </div>
          ))}
          <div className="border-t border-white/5 pt-12" />
        </section>

        <footer className="mt-32 text-center animate-reveal delay-200">
          <p className="text-studio-muted text-sm tracking-tight">
            All prices are in USD. Standard taxes may apply based on your jurisdiction. 
            By subscribing, you agree to our <span className="text-white hover:underline cursor-pointer">Service Protocol</span>.
          </p>
        </footer>
      </main>
    </div>
  );
}
