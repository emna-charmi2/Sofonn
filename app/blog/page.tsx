"use client";

import { useState } from "react";

/* ─────────────────────────── DATA ─────────────────────────── */
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

const popularPosts = [
  { title: "IMO Releases Guidance on Amendments to MARPOL Annex VI Fuel Data Reporting", ago: "1 year ago", likes: 0, comments: 0 },
  { title: "Sulphur Emission Control Area (SECA) to be established in the Mediterranean Sea in 2025.", ago: "1 year ago", likes: 0, comments: 0 },
  { title: "Guidance from IMO on Ballast Water Record-Keeping and Reporting for 2024", ago: "1 year ago", likes: 1, comments: 0 },
];

const tags = [
  "Digitalization","maritime","MARPOL","Annex VI","IMO DCS",
  "Sulphur Emission Control Area","NOx emissions","BWM Convention",
  "Ballast Water Management","Environment","CII","EEXI",
];

/* ─────────────────────── MATERIAL SYMBOL HELPER ─────────────────────── */
function Ms({ children, filled = false, className = "" }: { children: string; filled?: boolean; className?: string }) {
  return (
    <span
      className={`material-symbols-outlined select-none leading-none ${className}`}
      style={{ fontVariationSettings: filled ? "'FILL' 1,'wght' 400,'GRAD' 0,'opsz' 24" : "'FILL' 0,'wght' 400,'GRAD' 0,'opsz' 24" }}
    >
      {children}
    </span>
  );
}

/* ─────────────────────────── PAGE ─────────────────────────── */
export default function BlogPage() {
  const [activeTopics,  setActiveTopics]  = useState<string[]>(["All Articles"]);
  const [visibleCount,  setVisibleCount]  = useState(4);
  const [likedArticles, setLikedArticles] = useState<number[]>([]);
  const [sidebarOpen,   setSidebarOpen]   = useState(false);

  const toggleTopic = (label: string) => {
    if (label === "All Articles") { setActiveTopics(["All Articles"]); }
    else {
      const without = activeTopics.filter((t) => t !== "All Articles");
      if (without.includes(label)) {
        const next = without.filter((t) => t !== label);
        setActiveTopics(next.length ? next : ["All Articles"]);
      } else { setActiveTopics([...without, label]); }
    }
    setVisibleCount(4);
  };

  const clearFilters = () => { setActiveTopics(["All Articles"]); setVisibleCount(4); };
  const toggleLike   = (id: number) =>
    setLikedArticles((p) => p.includes(id) ? p.filter((i) => i !== id) : [...p, id]);

  const filtered = activeTopics.includes("All Articles") ? articles : articles.filter((a) => activeTopics.includes(a.category));
  const visible  = filtered.slice(0, visibleCount);
  const hasMore  = visibleCount < filtered.length;

  /* ── Shared sidebar content ── */
  const SidebarInner = () => (
    <div className="flex flex-col gap-6">

      {/* Quick Stats */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl px-5 py-4 flex justify-between">
        {[
          { icon: "article", label: "Articles", value: "124" },
          { icon: "groups",  label: "Readers",  value: "18k" },
          { icon: "star",    label: "Rating",   value: "4.9" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <Ms filled className="text-xl text-blue-500 block">{s.icon}</Ms>
            <p className="text-lg font-extrabold text-slate-100 leading-none mt-0.5">{s.value}</p>
            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-0.5">{s.label}</p>
          </div>
        ))}
      </div>

      {/* Filter by Topic */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <h3 className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-slate-500 flex items-center gap-1.5">
            <Ms className="text-sm text-slate-500">tune</Ms>Filter by Topic
          </h3>
          {!activeTopics.includes("All Articles") && (
            <button onClick={clearFilters} className="text-[10px] text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-0.5 transition-colors">
              <Ms className="text-xs">close</Ms>Cancel
            </button>
          )}
        </div>
        <nav className="flex flex-col gap-0.5">
          {topics.map((t) => {
            const isActive = activeTopics.includes(t.label);
            return (
              <button
                key={t.label}
                onClick={() => { toggleTopic(t.label); setSidebarOpen(false); }}
                className={[
                  "flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm border transition-all text-left w-full",
                  isActive
                    ? "bg-blue-500/10 border-blue-500/25 text-blue-400 font-bold"
                    : "bg-transparent border-transparent text-slate-500 hover:bg-white/[0.03] hover:text-slate-400",
                ].join(" ")}
              >
                <Ms filled={isActive} className={`text-lg ${isActive ? "text-blue-400" : "text-slate-500"}`}>{t.icon}</Ms>
                <span>{t.label}</span>
                <span className={`ml-auto text-[10px] font-bold px-2 py-0.5 rounded-full ${isActive ? "bg-blue-600 text-white" : "bg-white/[0.05] text-slate-500"}`}>
                  {t.count}
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Popular Posts */}
      <div>
        <h3 className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-slate-500 flex items-center gap-1.5 mb-3">
          <Ms filled className="text-sm text-blue-500">trending_up</Ms>Popular Posts
        </h3>
        <div className="flex flex-col gap-2">
          {popularPosts.map((post, i) => (
            <button key={i} className="group flex flex-col gap-1 p-3 rounded-xl border border-transparent hover:border-white/[0.07] hover:bg-white/[0.02] transition-all text-left">
              <p className="text-xs font-semibold text-slate-300 group-hover:text-blue-400 transition-colors leading-snug line-clamp-2">{post.title}</p>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-[10px] text-slate-600">{post.ago}</span>
                <span className="flex items-center gap-1 text-[10px] text-slate-600"><Ms className="text-xs">favorite</Ms>{post.likes}</span>
                <span className="flex items-center gap-1 text-[10px] text-slate-600"><Ms className="text-xs">chat_bubble_outline</Ms>{post.comments}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div>
        <h3 className="text-[10px] font-extrabold tracking-[0.12em] uppercase text-slate-500 flex items-center gap-1.5 mb-3">
          <Ms className="text-sm text-slate-500">sell</Ms>Tags
        </h3>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <button key={tag} className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/[0.07] text-slate-500 hover:bg-blue-500/10 hover:border-blue-500/25 hover:text-blue-400 transition-all">
              #{tag}
            </button>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-5">
        <div className="flex items-center gap-2 mb-2">
          <Ms filled className="text-xl text-blue-500">mail</Ms>
          <h4 className="font-bold text-sm text-slate-100">Newsletter</h4>
        </div>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">Weekly maritime intelligence delivered to your inbox.</p>
        <div className="flex flex-col gap-2">
          {[
            { icon: "person",          placeholder: "Full name",     type: "text"  },
            { icon: "alternate_email", placeholder: "Email address", type: "email" },
          ].map((f) => (
            <div key={f.icon} className="relative">
              <Ms className="absolute left-2.5 top-1/2 -translate-y-1/2 text-sm text-slate-500">{f.icon}</Ms>
              <input
                type={f.type}
                placeholder={f.placeholder}
                className="w-full text-xs rounded-lg bg-white/[0.04] border border-white/[0.07] pl-8 pr-3 py-2.5 text-slate-200 outline-none placeholder:text-slate-600 focus:border-blue-500/40 transition-colors"
              />
            </div>
          ))}
          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 tracking-wide transition-all">
            <Ms className="text-base">send</Ms>Subscribe
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        body{font-family:"DM Sans",sans-serif;background:#07090f;color:#e2e8f0}
        h1,h2,h3,h4,h5{font-family:"Syne",sans-serif}
        .material-symbols-outlined{font-family:"Material Symbols Outlined";font-weight:normal;font-style:normal;line-height:1;display:inline-block;white-space:nowrap;-webkit-font-smoothing:antialiased}
        ::-webkit-scrollbar{width:5px}::-webkit-scrollbar-track{background:#07090f}::-webkit-scrollbar-thumb{background:#1e293b;border-radius:3px}
      ` }} />

      {/* ── Mobile drawer backdrop ── */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Mobile sidebar drawer ── */}
      <aside className={[
        "fixed top-0 left-0 h-full w-72 z-40 bg-[#0b0f1a] border-r border-white/[0.07] overflow-y-auto p-5 transition-transform duration-300 lg:hidden",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
      ].join(" ")}>
        <div className="flex items-center justify-between mb-5">
          <span className="text-sm font-bold text-slate-200">Filters & Info</span>
          <button onClick={() => setSidebarOpen(false)} className="text-slate-400 hover:text-white transition-colors">
            <Ms className="text-xl">close</Ms>
          </button>
        </div>
        <SidebarInner />
      </aside>

      <section className="min-h-screen bg-[#07090f] pt-20 pb-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">

          {/* ── Mobile top bar ── */}
          <div className="flex items-center justify-between mb-6 lg:hidden ">
            <div>
              <h2 className="text-xl font-extrabold text-slate-100">Latest Insights</h2>
              <p className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1 flex-wrap">
                <Ms className="text-xs">update</Ms>
                Last updated November 2024
                <span className="ml-1 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold">
                  {filtered.length} articles
                </span>
              </p>
            </div>
            {/* Mobile filter button */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/[0.05] border border-white/[0.09] text-slate-300 text-xs font-semibold hover:bg-white/[0.09] transition-all shrink-0"
            >
              <Ms className="text-base">tune</Ms>
              Filters
              {!activeTopics.includes("All Articles") && (
                <span className="ml-1 w-4 h-4 rounded-full bg-blue-600 text-white text-[9px] font-bold flex items-center justify-center">
                  {activeTopics.length}
                </span>
              )}
            </button>
          </div>

          {/* ── Desktop + tablet layout ── */}
          <div className="flex gap-8 items-start">

            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-60 xl:w-64 shrink-0 sticky top-6">
              <SidebarInner />
            </aside>

            {/* Main content */}
            <div className="flex-1 min-w-0">

              {/* Desktop header */}
              <div className="hidden lg:flex items-center justify-between mb-7">
                <div>
                  <h2 className="text-2xl font-extrabold text-slate-100">Latest Insights</h2>
                  <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                    <Ms className="text-sm">update</Ms>
                    Last updated November 2024
                    <span className="ml-3 px-2 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold">
                      {filtered.length} articles
                    </span>
                  </p>
                </div>
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-slate-500">Sort:</span>
                  <div className="relative">
                    <select className="bg-white/[0.04] border border-white/[0.08] text-slate-200 py-2 pl-3 pr-8 rounded-lg text-xs font-semibold appearance-none outline-none cursor-pointer">
                      <option>Newest First</option><option>Most Popular</option><option>Most Discussed</option>
                    </select>
                    <Ms className="absolute right-2 top-1/2 -translate-y-1/2 text-base text-slate-500 pointer-events-none">expand_more</Ms>
                  </div>
                </div>
              </div>

              {/* Mobile sort */}
              <div className="flex items-center gap-2 mb-4 lg:hidden">
                <span className="text-xs text-slate-500">Sort:</span>
                <div className="relative">
                  <select className="bg-white/[0.04] border border-white/[0.08] text-slate-200 py-2 pl-3 pr-8 rounded-lg text-xs font-semibold appearance-none outline-none cursor-pointer">
                    <option>Newest First</option><option>Most Popular</option><option>Most Discussed</option>
                  </select>
                  <Ms className="absolute right-2 top-1/2 -translate-y-1/2 text-base text-slate-500 pointer-events-none">expand_more</Ms>
                </div>
              </div>

              {/* Active filter chips */}
              {!activeTopics.includes("All Articles") && (
                <div className="flex flex-wrap gap-2 mb-5">
                  {activeTopics.map((t) => (
                    <span key={t} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs font-semibold">
                      {t}
                      <button onClick={() => toggleTopic(t)} className="hover:text-blue-200 transition-colors">
                        <Ms className="text-xs">close</Ms>
                      </button>
                    </span>
                  ))}
                  <button onClick={clearFilters} className="text-xs text-slate-500 hover:text-slate-300 transition-colors self-center">Clear all</button>
                </div>
              )}

              {/* Empty state */}
              {visible.length === 0 ? (
                <div className="flex flex-col items-center justify-center py-24 text-slate-600">
                  <Ms filled className="text-5xl mb-4">article</Ms>
                  <p className="text-sm font-semibold">No articles found for this filter.</p>
                  <button onClick={clearFilters} className="mt-4 text-xs text-blue-400 hover:underline">Clear filters</button>
                </div>
              ) : (
                /* Article grid: 1 col on mobile, 2 col on sm+ */
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  {visible.map((article) => {
                    const isLiked = likedArticles.includes(article.id);
                    return (
                      <article key={article.id} className="bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-blue-500/25 group">

                        {/* Image */}
                        <div className="h-44 sm:h-48 relative overflow-hidden">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#07090f]/70 to-transparent" />
                          <span className="absolute top-3 left-3 bg-[#07090f]/75 backdrop-blur-lg border border-white/10 text-slate-200 text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full flex items-center gap-1">
                            <Ms filled className="text-xs">{article.icon}</Ms>{article.category}
                          </span>
                        </div>

                        {/* Body */}
                        <div className="p-4 sm:p-5 flex flex-col flex-1">
                          {/* Stats */}
                          <div className="flex items-center gap-3 mb-3">
                            <button
                              onClick={() => toggleLike(article.id)}
                              className={`flex items-center gap-1 text-xs font-semibold transition-colors ${isLiked ? "text-red-400" : "text-slate-500 hover:text-red-400"}`}
                            >
                              <Ms filled={isLiked} className="text-sm">favorite</Ms>
                              {article.likes + (isLiked ? 1 : 0)}
                            </button>
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <Ms className="text-sm">chat_bubble_outline</Ms>{article.comments}
                            </span>
                            <span className="flex items-center gap-1 text-xs text-slate-500">
                              <Ms className="text-sm">visibility</Ms>{article.views}
                            </span>
                          </div>

                          <h3 className="text-sm sm:text-base font-bold leading-snug text-slate-100 mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                            {article.title}
                          </h3>
                          <p className="text-xs text-slate-500 leading-relaxed flex-1 mb-4 line-clamp-3">
                            {article.excerpt}
                          </p>

                          {/* Footer */}
                          <div className="flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={article.authorImg} alt={article.author} className="w-7 h-7 rounded-full object-cover border border-white/10 shrink-0" />
                              <div className="min-w-0">
                                <p className="text-xs font-semibold text-slate-300 leading-none truncate">{article.author}</p>
                                <p className="text-[10px] text-slate-500 mt-0.5">{article.date}</p>
                              </div>
                            </div>
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold hover:bg-blue-500/20 transition-all shrink-0">
                              Read <Ms className="text-sm">arrow_forward</Ms>
                            </button>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              )}

              {/* Show More */}
              {hasMore && (
                <div className="flex justify-center mt-8 sm:mt-10">
                  <button
                    onClick={() => setVisibleCount((v) => v + 4)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 text-sm font-semibold hover:bg-white/[0.07] hover:border-white/[0.15] transition-all"
                  >
                    <Ms className="text-base">expand_more</Ms>
                    Show more
                    <span className="ml-1 text-xs text-slate-500">({filtered.length - visibleCount} remaining)</span>
                  </button>
                </div>
              )}

              {/* End of results */}
              {!hasMore && visible.length > 0 && (
                <p className="text-center text-xs text-slate-600 mt-8 flex items-center justify-center gap-2">
                  <Ms className="text-sm">done_all</Ms>
                  You&apos;ve seen all {filtered.length} articles
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}