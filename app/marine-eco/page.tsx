import type { Metadata } from 'next';
import '@/app/globals.css';
import OffersInspo from '../features/marine-eco/offersinspo';
import Container from '../components/sections/Container';
import Heading from '../components/ui/Heading';
import TextBlock from '../components/ui/TextBlock';

export const metadata: Metadata = {
  title: 'Marine ECO | Sustainable Maritime Intelligence',
  description: 'AI-Driven Decarbonization for Maritime Operations',
};

const INITIATIVES = [
  {
    icon: 'waves',
    title: 'Hull Optimization',
    desc: 'Minimize drag and reduce fuel consumption with advanced hydrodynamic data modeling and real-time fouling analysis.',
    tileVariant: 'dim' as const,
  },
  {
    icon: 'route',
    title: 'AI Route Management',
    desc: 'Dynamic pathfinding adjusts for currents, weather, and traffic to reduce engine load and transit time via neural networks.',
    tileVariant: 'dim' as const,
  },
  {
    icon: 'battery_charging_full',
    title: 'Auxiliary Power',
    desc: 'Smart management of on-board power systems and shore-side connectivity to lower harbor emissions to near-zero.',
    tileVariant: 'raised' as const,
  },
];

const FEATURE_ROWS = [
  {
    icon: 'oil_barrel',
    title: 'Fuel Optimization',
    desc: 'Compare real-time consumption against predicted AI-modeled routes to identify inefficiencies instantly.',
  },
  {
    icon: 'co2',
    title: 'Emissions Tracking',
    desc: 'Automated CO2 reduction reporting and proactive SECA zone compliance monitoring with geofenced alerts.',
  },
  {
    icon: 'assignment_turned_in',
    title: 'MARPOL Compliance',
    desc: 'One-click automated data reporting for Annex VI sulfur emissions, ensuring total regulatory adherence with zero manual entry.',
  },
];

const WHY_CARDS = [
  {
    title: 'Environmental Legacy',
    desc: "Significant reduction in your fleet's carbon footprint supporting global ESG goals.",
  },
  {
    title: 'Cost-Efficiency',
    desc: 'Up to 15% reduction in annual fuel costs through precision AI route management.',
  },
  {
    title: 'Future-Proofing',
    desc: 'Stay ahead of evolving maritime regulations like the EEXI and CII requirements.',
  },
  {
    title: 'Operational Clarity',
    desc: 'Unified dashboard providing visibility across the entire fleet for all stakeholders.',
  },
];

export default function MarineEcoPage() {
  return (
    <>
      <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden ds-page">
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap');

        * { font-family: 'Inter', sans-serif; box-sizing: border-box; }

        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
          line-height: 1;
          display: inline-flex;
          align-items: center;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
        .pulse-dot { animation: pulse-dot 2s infinite; }
      `}</style>

        <header className="sticky top-0 z-50 w-full ds-glass border-b border-[var(--border-card)] px-6 lg:px-20 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg ds-surface-raised border border-[var(--accent-border)]">
                <span className="material-symbols-outlined ds-text-accent">tsunami</span>
              </div>
              <div>
                <Heading as="h2" className="tracking-tight">
                  Marine <span className="ds-text-accent">ECO</span>
                </Heading>
                <div className="uppercase tracking-widest ds-text-muted">
                  <p>by Sofonn</p>
                </div>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-10">
              {['Solutions', 'Compliance', 'Intelligence', 'Sustainability'].map((item) => (
                <a key={item} href="#" className="text-sm font-medium ds-nav-link">
                  {item}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-4">
              <button
                type="button"
                className="hidden sm:flex px-5 py-2 text-sm font-bold rounded-lg transition-all cursor-pointer ds-glass ds-text-primary hover:bg-[var(--bg-card-hover)]"
              >
                Client Portal
              </button>
              <button type="button" className="px-5 py-2 text-sm font-bold rounded-lg transition-all shadow-lg cursor-pointer ds-btn-primary">
                Get Started
              </button>
            </div>
          </div>
        </header>

        <main className="flex-1">
          <section className="relative pt-20 pb-32 px-6 lg:px-20 overflow-hidden section">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-30 pointer-events-none">
              <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[var(--accent-dim)] blur-[120px]" />
              <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[var(--accent-glow)] blur-[150px]" />
            </div>

            <Container flush className="grid lg:grid-cols-2 gap-16 items-center px-6 lg:px-20">
              <div className="flex flex-col gap-8">
                <div className="ds-chip">
                  <span className="material-symbols-outlined text-sm">verified_user</span>
                  <span>AI-Driven Decarbonization</span>
                </div>

                <Heading as="h1" className="leading-[1.1] tracking-tight">
                  Environmental Intelligence for a <span className="ds-gradient-text">Sustainable</span> Fleet
                </Heading>

                <TextBlock as="p" className="max-w-xl">
                  Empowering maritime operations with real-time eco-efficiency tracking, emissions compliance monitoring,
                  and AI-optimized fuel consumption.
                </TextBlock>

                <div className="flex flex-wrap gap-4">
                  <button type="button" className="px-8 py-4 ds-btn-primary rounded-xl hover:scale-105 transition-transform shadow-xl flex items-center gap-2 cursor-pointer">
                    <span className="material-symbols-outlined">analytics</span>
                    View Solutions
                  </button>
                  <button
                    type="button"
                    className="px-8 py-4 ds-glass ds-text-primary font-bold rounded-xl transition-all flex items-center gap-2 cursor-pointer hover:bg-[var(--bg-card-hover)]"
                  >
                    <span className="material-symbols-outlined">play_circle</span>
                    Request Demo
                  </button>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-[var(--accent-dim)] to-[var(--accent-glow)] rounded-3xl blur-2xl" />
                <div className="relative ds-glass rounded-3xl overflow-hidden aspect-video border border-[var(--border-card)] shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-br from-[var(--bg-level-1)] via-[var(--bg-level-2)] to-[var(--bg-base)] flex items-center justify-center">
                    <span className="material-symbols-outlined ds-icon-xl text-[var(--accent-glow)]">directions_boat</span>
                  </div>
                  <div className="absolute inset-0 ds-fade-from-level1" />
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                    <div className="ds-glass p-4 rounded-xl">
                      <span className="eco-kpi-label ds-text-accent">Live Efficiency</span>
                      <span className="eco-kpi-value">94.2%</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <div className="w-2 h-2 rounded-full bg-[var(--accent)] pulse-dot" />
                      <div className="w-2 h-2 rounded-full bg-[var(--border-card)]" />
                      <div className="w-2 h-2 rounded-full bg-[var(--border-card)]" />
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          <section className="py-24 px-6 lg:px-20 ds-section-alt">
            <Container flush className="px-6 lg:px-20">
              <div className="text-center mb-16">
                <Heading as="h2" className="mb-4">
                  Eco-Efficiency Initiatives
                </Heading>
                <div className="w-20 h-1 bg-[var(--accent)] mx-auto rounded-full" />
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {INITIATIVES.map(({ icon, title, desc, tileVariant }) => (
                  <div
                    key={title}
                    className="ds-glass p-8 rounded-2xl border border-[var(--border-subtle)] hover:border-[var(--accent-border)] transition-all hover:-translate-y-2 group"
                  >
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform border ${
                        tileVariant === 'raised'
                          ? 'ds-surface-raised border-[var(--accent-border)]'
                          : 'ds-surface-inset border-[var(--border-subtle)]'
                      }`}
                    >
                      <span className="material-symbols-outlined text-3xl ds-text-accent">{icon}</span>
                    </div>
                    <Heading as="h3" className="mb-3">
                      {title}
                    </Heading>
                    <TextBlock as="p">
                      {desc}
                    </TextBlock>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-24 px-6 lg:px-20 section relative overflow-hidden">
            <Container flush className="grid lg:grid-cols-2 gap-20 items-center px-6 lg:px-20">
              <div className="order-2 lg:order-1 relative">
                <div className="ds-glass rounded-3xl p-6 border border-[var(--border-card)] shadow-2xl">
                  <div className="flex items-center justify-between mb-8">
                    <Heading as="h4" className="flex items-center gap-2">
                      <span className="material-symbols-outlined ds-text-accent">query_stats</span>
                      Environmental Analytics
                    </Heading>
                    <div className="px-3 py-1 rounded-full bg-[var(--accent-dim)] ds-text-accent text-[10px] font-bold uppercase">
                      Real-time Data
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-col gap-2">
                      <div className="flex justify-between text-xs ds-text-secondary mb-1">
                        <span>Fuel Savings Target</span>
                        <span className="ds-text-accent font-bold">88% Achieved</span>
                      </div>
                      <div className="h-2 w-full ds-surface-inset rounded-full overflow-hidden">
                        <div className="h-full bg-[var(--accent)] rounded-full w-[88%]" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 rounded-xl ds-surface-inset">
                        <span className="eco-kpi-label ds-text-secondary">CO2 Reduction</span>
                        <span className="eco-kpi-value">
                          -12.4 <span className="text-xs font-normal">tons</span>
                        </span>
                      </div>
                      <div className="p-4 rounded-xl ds-surface-inset">
                        <span className="eco-kpi-label ds-text-secondary">SECA Compliance</span>
                        <span className="eco-kpi-value ds-text-accent">Active</span>
                      </div>
                    </div>

                    <div className="h-40 w-full relative">
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-dim)] to-transparent rounded-lg" />
                      <svg className="w-full h-full" viewBox="0 0 400 100">
                        <path d="M0,80 Q50,70 100,75 T200,50 T300,60 T400,20" fill="none" stroke="var(--accent-light)" strokeWidth="3" />
                        <path
                          d="M0,90 Q50,85 100,88 T200,70 T300,75 T400,50"
                          fill="none"
                          stroke="var(--accent)"
                          strokeDasharray="4"
                          strokeWidth="2"
                        />
                      </svg>
                      <div className="absolute top-4 right-4 flex gap-3">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[var(--accent-light)]" />
                          <span className="text-[10px] ds-text-secondary">Predicted</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 rounded-full bg-[var(--accent)]" />
                          <span className="text-[10px] ds-text-secondary">Actual</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-1 lg:order-2">
                <Heading as="h2" className="mb-8">
                  Integrated Sustainability Features
                </Heading>
                <div className="space-y-8">
                  {FEATURE_ROWS.map(({ icon, title, desc }) => (
                    <div key={title} className="flex gap-6">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full ds-surface-raised border border-[var(--accent-border)] flex items-center justify-center ds-text-accent">
                        <span className="material-symbols-outlined">{icon}</span>
                      </div>
                      <div>
                        <Heading as="h4" className="mb-2">
                          {title}
                        </Heading>
                        <TextBlock as="p">{desc}</TextBlock>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          <section className="py-24 px-6 lg:px-20 section relative">
            <Container flush tight className="text-center px-6 lg:px-20">
              <Heading as="h2" className="mb-6">
                Why Choose Marine ECO?
              </Heading>
              <TextBlock as="p" className="mb-12 max-w-3xl mx-auto">
                We bridge the gap between profitable operations and environmental responsibility through high-fidelity data.
              </TextBlock>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                {WHY_CARDS.map(({ title, desc }) => (
                  <div key={title} className="ds-glass p-6 rounded-xl border border-[var(--border-card)] flex items-start gap-4">
                    <span className="material-symbols-outlined ds-text-accent mt-1">check_circle</span>
                    <div>
                      <Heading as="h5" className="mb-1">
                        {title}
                      </Heading>
                      <TextBlock as="p">
                        {desc}
                      </TextBlock>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </section>

          <section className="py-20 px-6 lg:px-20 ds-section-alt">
            <Container flush className="px-6 lg:px-20">
              <div className="ds-glass rounded-3xl p-12 text-center relative overflow-hidden border border-[var(--border-card)]">
                <div className="absolute inset-0 -z-10 ds-cta-gradient-bg" />
                <Heading as="h2" className="mb-6">
                  Ready to Lead the Green Transition?
                </Heading>
                <TextBlock as="p" className="max-w-2xl mx-auto mb-10">
                  Join forward-thinking maritime leaders who are already optimizing their environmental impact with Sofonn
                  Intelligence.
                </TextBlock>
                <button type="button" className="px-10 py-5 ds-btn-primary text-lg rounded-2xl shadow-2xl cursor-pointer">
                  Schedule a Consultation
                </button>
              </div>
            </Container>
          </section>
        </main>
      </div>
      <OffersInspo />
    </>
  );
}
