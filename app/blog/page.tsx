"use client";

import { useState } from "react";

const articles = [
  {
    id: 1, category: "Technology",
    title: "AI-Driven Route Optimization: Reducing CII Scores in Real-Time",
    excerpt: "Explore how machine learning models are helping shipowners meet strict carbon intensity indicators while cutting fuel costs by up to 12%.",
    author: "Marc Dupont",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
    date: "Oct 24, 2024",
    img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=320&fit=crop",
    icon: "smart_toy", views: "6.4k", likes: 24, comments: 12,
  },
  {
    id: 2, category: "Compliance",
    title: "EU ETS Phase 4: What Shipowners Must Know Before January 2025",
    excerpt: "A breakdown of the expanded Emissions Trading System obligations, allowance pricing, and how to avoid costly penalties at EU ports.",
    author: "Sofia Mendes",
    authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
    date: "Oct 18, 2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=320&fit=crop",
    icon: "gavel", views: "9.1k", likes: 38, comments: 7,
  },
  {
    id: 3, category: "Operations",
    title: "Shore Power Adoption: Ports Leading the Zero-Emission Charge",
    excerpt: "From Rotterdam to Singapore, discover which ports are mandating cold-ironing and how operators can prepare their fleets today.",
    author: "James Okafor",
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face",
    date: "Oct 10, 2024",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=320&fit=crop",
    icon: "bolt", views: "4.7k", likes: 15, comments: 4,
  },
  {
    id: 4, category: "Safety",
    title: "Cyber Resilience at Sea: New IMO Guidelines for OT Security",
    excerpt: "The latest IMO circular MSC-FAL.1/Circ.3 raises the bar for onboard cyber risk management — here's what your ISM needs to address.",
    author: "Lena Kowalski",
    authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
    date: "Oct 3, 2024",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=320&fit=crop",
    icon: "security", views: "7.2k", likes: 31, comments: 19,
  },
  {
    id: 5, category: "Environment",
    title: "MARPOL Annex VI: New Fuel Data Reporting Requirements for 2025",
    excerpt: "IMO's latest circular outlines stricter fuel data reporting obligations under MARPOL Annex VI — here's what fleet managers need to prepare.",
    author: "Marc Dupont",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
    date: "Nov 26, 2024",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=320&fit=crop",
    icon: "eco", views: "3.1k", likes: 9, comments: 2,
  },
  {
    id: 6, category: "Environment",
    title: "Mediterranean SECA: Preparing Your Fleet for May 2025",
    excerpt: "The new Sulphur Emission Control Area in the Med is set to reshape operations for thousands of vessels. Here's your compliance roadmap.",
    author: "Sofia Mendes",
    authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
    date: "Nov 26, 2024",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=320&fit=crop",
    icon: "air", views: "2.2k", likes: 6, comments: 1,
  },
];

const topics = [
  { label: "All Articles", icon: "grid_view", count: "124" },
  { label: "Compliance",   icon: "gavel",     count: "38"  },
  { label: "Technology",   icon: "memory",    count: "27"  },
  { label: "Operations",   icon: "anchor",    count: "21"  },
  { label: "Safety",       icon: "shield",    count: "19"  },
  { label: "Environment",  icon: "eco",       count: "14"  },
  { label: "Finance",      icon: "finance",   count: "5"   },
];

const tags = [
  "Digitalization", "maritime", "MARPOL", "Annex VI", "IMO DCS",
  "Sulphur Emission Control Area", "NOx emissions", "BWM Convention",
  "Ballast Water Management", "Environment", "CII", "EEXI",
];

/* ─────────────────────── MATERIAL SYMBOL HELPER ─────────────────────── */
function Ms({ children, filled = false, className = "" }: { children: string; filled?: boolean; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined select-none ${className}`}
      style={{ fontVariationSettings: filled ? "'FILL' 1" : "'FILL' 0" }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function BlogPage() {
  const [activeTopics, setActiveTopics] = useState<string[]>(["All Articles"]);
  const [visibleCount, setVisibleCount] = useState(6); // plus de cartes visibles au départ
  const [likedArticles, setLikedArticles] = useState<number[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleTopic = (label: string) => {
    if (label === "All Articles") {
      setActiveTopics(["All Articles"]);
    } else {
      let next = activeTopics.filter((t) => t !== "All Articles");
      if (next.includes(label)) {
        next = next.filter((t) => t !== label);
      } else {
        next = [...next, label];
      }
      setActiveTopics(next.length ? next : ["All Articles"]);
    }
    setVisibleCount(6);
  };

  const clearFilters = () => {
    setActiveTopics(["All Articles"]);
    setVisibleCount(6);
  };

  const toggleLike = (id: number) => {
    setLikedArticles((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filtered = activeTopics.includes("All Articles")
    ? articles
    : articles.filter((a) => activeTopics.includes(a.category));

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <>
    <br /><br /><br />
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
        body { font-family: 'Inter', system-ui, sans-serif; background: #07090f; color: #e2e8f0; }
        h1, h2, h3 { font-family: 'Syne', sans-serif; }
        .material-symbols-outlined { font-family: "Material Symbols Outlined"; }
      ` }} />

      {/* Mobile backdrop */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar drawer */}
      <aside className={`fixed top-0 left-0 h-full w-80 z-50 bg-[#0b0f1a] border-r border-white/10 overflow-y-auto p-6 transition-transform duration-300 lg:hidden ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-lg font-semibold text-white">Filtres & Infos</h2>
          <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white">
            <Ms className="text-2xl">close</Ms>
          </button>
        </div>
        <SidebarContent 
          activeTopics={activeTopics} 
          toggleTopic={toggleTopic} 
          clearFilters={clearFilters} 
          topics={topics} 
          tags={tags}
        />
      </aside>

      <section className="min-h-screen bg-[#07090f] pt-16 pb-20 px-4 sm:px-6 lg:pt-20">
        <div className="max-w-7xl mx-auto">

          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-white">Latest Insights</h1>
              <p className="text-sm text-slate-500 mt-1 flex items-center gap-2">
                Last updated • November 2024
                <span className="px-2.5 py-0.5 bg-blue-500/10 text-blue-400 text-xs font-medium rounded-full border border-blue-500/20">
                  {filtered.length} articles
                </span>
              </p>
            </div>
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-sm font-medium transition-all"
            >
              <Ms className="text-xl">tune</Ms>
              Filters
              {!activeTopics.includes("All Articles") && (
                <span className="ml-1 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full">
                  {activeTopics.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-8 self-start">
              <SidebarContent 
                activeTopics={activeTopics} 
                toggleTopic={toggleTopic} 
                clearFilters={clearFilters} 
                topics={topics} 
                tags={tags}
              />
            </aside>

            {/* Main content */}
            <main className="flex-1">
              {/* Desktop header */}
              <div className="hidden lg:flex items-center justify-between mb-10">
                <div>
                  <h1 className="text-3xl font-bold text-white tracking-tight">Latest Insights</h1>
                  <p className="text-slate-500 mt-1 flex items-center gap-2 text-sm">
                    <Ms className="text-base">update</Ms>
                    Last updated November 2024
                  </p>
                </div>
                <div className="text-sm text-slate-500">
                  {filtered.length} articles
                </div>
              </div>

              {/* Active filters */}
              {!activeTopics.includes("All Articles") && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeTopics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 pl-4 pr-3 py-1.5 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded-full text-sm font-medium"
                    >
                      {topic}
                      <button
                        onClick={() => toggleTopic(topic)}
                        className="hover:text-blue-300 transition-colors"
                        aria-label={`Remove filter ${topic}`}
                      >
                        <Ms className="text-lg">close</Ms>
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={clearFilters}
                    className="text-sm text-slate-400 hover:text-slate-300 ml-2 transition-colors"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {/* Articles grid */}
              {visibleArticles.length === 0 ? (
                <div className="py-20 text-center text-slate-500">
                  <Ms className="text-6xl mb-4 opacity-50">article</Ms>
                  <p className="text-lg font-medium">Aucun article ne correspond à ces filtres.</p>
                  <button onClick={clearFilters} className="mt-6 text-blue-400 hover:underline">
                    Réinitialiser les filtres
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {visibleArticles.map((article) => {
                    const isLiked = likedArticles.includes(article.id);
                    const currentLikes = article.likes + (isLiked ? 1 : 0);

                    return (
                      <article
                        key={article.id}
                        className="group bg-[#0f131f] border border-white/10 rounded-3xl overflow-hidden flex flex-col hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                          
                          <div className="absolute top-4 left-4 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded-full text-xs font-medium flex items-center gap-1.5 text-white">
                            <Ms filled className="text-sm">{article.icon}</Ms>
                            {article.category}
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                            <button
                              onClick={() => toggleLike(article.id)}
                              className={`flex items-center gap-1 transition-colors ${isLiked ? "text-red-400" : "hover:text-red-400"}`}
                            >
                              <Ms filled={isLiked} className="text-base">favorite</Ms>
                              {currentLikes}
                            </button>
                            <div className="flex items-center gap-1">
                              <Ms className="text-base">chat_bubble_outline</Ms>
                              {article.comments}
                            </div>
                            <div className="flex items-center gap-1">
                              <Ms className="text-base">visibility</Ms>
                              {article.views}
                            </div>
                          </div>

                          <h3 className="font-semibold text-lg leading-tight text-white group-hover:text-blue-400 transition-colors line-clamp-3">
                            {article.title}
                          </h3>

                          <p className="mt-3 text-sm text-slate-400 line-clamp-3 flex-1">
                            {article.excerpt}
                          </p>

                          <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src={article.authorImg}
                                alt={article.author}
                                className="w-8 h-8 rounded-full ring-1 ring-white/10"
                              />
                              <div className="text-sm">
                                <div className="font-medium text-white truncate">{article.author}</div>
                                <div className="text-xs text-slate-500">{article.date}</div>
                              </div>
                            </div>

                            <button className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 rounded-2xl text-sm font-medium text-blue-400 transition-all">
                              Read full
                              <Ms className="text-lg">arrow_forward</Ms>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* Load more */}
              {hasMore && (
                <div className="flex justify-center mt-12">
                  <button
                    onClick={() => setVisibleCount((v) => v + 6)}
                    className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl flex items-center gap-3 text-sm font-medium transition-all"
                  >
                    <Ms className="text-2xl">expand_more</Ms>
                    Load more articles
                  </button>
                </div>
              )}

            </main>
          </div>
        </div>
      </section>
    </>
  );
}

/* Sidebar reusable component */
function SidebarContent({
  activeTopics,
  toggleTopic,
  clearFilters,
  topics,
  tags,
}: {
  activeTopics: string[];
  toggleTopic: (label: string) => void;
  clearFilters: () => void;
  topics: any[];
  tags: string[];
}) {
  return (
    <div className="space-y-10">
      {/* Quick stats */}
      <div className="grid grid-cols-3 gap-4 bg-white/[0.025] border border-white/10 rounded-3xl p-5">
        {[
          { icon: "article", label: "Articles", value: "124" },
          { icon: "groups", label: "Readers", value: "18k" },
          { icon: "star", label: "Rating", value: "4.9" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <Ms filled className="text-3xl text-blue-500 block mb-1">{s.icon}</Ms>
            <p className="font-bold text-xl text-white">{s.value}</p>
            <p className="text-[10px] uppercase tracking-widest text-slate-500 mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Topics */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="uppercase text-xs font-semibold tracking-widest text-slate-500">Topics</h3>
          {!activeTopics.includes("All Articles") && (
            <button onClick={clearFilters} className="text-xs text-blue-400 hover:text-blue-300 flex items-center gap-1">
              <Ms className="text-sm">close</Ms> Clear
            </button>
          )}
        </div>

        <div className="space-y-1">
          {topics.map((t) => {
            const isActive = activeTopics.includes(t.label);
            return (
              <button
                key={t.label}
                onClick={() => toggleTopic(t.label)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-left transition-all border ${isActive
                  ? "bg-blue-500/10 border-blue-500/30 text-blue-400"
                  : "border-transparent hover:bg-white/5 text-slate-400 hover:text-slate-200"
                }`}
              >
                <Ms filled={isActive} className={`text-xl ${isActive ? "text-blue-400" : ""}`}>
                  {t.icon}
                </Ms>
                <span className="font-medium">{t.label}</span>
                <span className={`ml-auto text-xs font-mono px-2.5 py-0.5 rounded-full ${isActive ? "bg-blue-600 text-white" : "bg-white/10 text-slate-500"}`}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tags cloud */}
      <div>
        <h3 className="uppercase text-xs font-semibold tracking-widest text-slate-500 mb-4">Popular tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-4 py-2 bg-white/5 hover:bg-blue-500/10 border border-white/10 hover:border-blue-500/30 rounded-2xl text-slate-400 hover:text-blue-400 transition-all cursor-pointer"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}