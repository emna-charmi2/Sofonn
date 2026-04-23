"use client";

import { useState } from "react";

// ---------- Données ----------
const articles = [
  {
    id: 1,
    category: "Technology",
    title: "AI-Driven Route Optimization: Reducing CII Scores in Real-Time",
    excerpt:
      "Explore how machine learning models are helping shipowners meet strict carbon intensity indicators while cutting fuel costs by up to 12%.",
    author: "Marc Dupont",
    authorImg:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
    date: "Oct 24, 2024",
    img: "https://images.unsplash.com/photo-1605745341112-85968b19335b?w=600&h=320&fit=crop",
    icon: "smart_toy",
    views: "6.4k",
    likes: 24,
    comments: 12,
  },
  {
    id: 2,
    category: "Compliance",
    title: "EU ETS Phase 4: What Shipowners Must Know Before January 2025",
    excerpt:
      "A breakdown of the expanded Emissions Trading System obligations, allowance pricing, and how to avoid costly penalties at EU ports.",
    author: "Sofia Mendes",
    authorImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
    date: "Oct 18, 2024",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=320&fit=crop",
    icon: "gavel",
    views: "9.1k",
    likes: 38,
    comments: 7,
  },
  {
    id: 3,
    category: "Operations",
    title: "Shore Power Adoption: Ports Leading the Zero-Emission Charge",
    excerpt:
      "From Rotterdam to Singapore, discover which ports are mandating cold-ironing and how operators can prepare their fleets today.",
    author: "James Okafor",
    authorImg:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face",
    date: "Oct 10, 2024",
    img: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=320&fit=crop",
    icon: "bolt",
    views: "4.7k",
    likes: 15,
    comments: 4,
  },
  {
    id: 4,
    category: "Safety",
    title: "Cyber Resilience at Sea: New IMO Guidelines for OT Security",
    excerpt:
      "The latest IMO circular MSC-FAL.1/Circ.3 raises the bar for onboard cyber risk management — here's what your ISM needs to address.",
    author: "Lena Kowalski",
    authorImg:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
    date: "Oct 3, 2024",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=320&fit=crop",
    icon: "security",
    views: "7.2k",
    likes: 31,
    comments: 19,
  },
  {
    id: 5,
    category: "Environment",
    title: "MARPOL Annex VI: New Fuel Data Reporting Requirements for 2025",
    excerpt:
      "IMO's latest circular outlines stricter fuel data reporting obligations under MARPOL Annex VI — here's what fleet managers need to prepare.",
    author: "Marc Dupont",
    authorImg:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
    date: "Nov 26, 2024",
    img: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=600&h=320&fit=crop",
    icon: "eco",
    views: "3.1k",
    likes: 9,
    comments: 2,
  },
  {
    id: 6,
    category: "Environment",
    title: "Mediterranean SECA: Preparing Your Fleet for May 2025",
    excerpt:
      "The new Sulphur Emission Control Area in the Med is set to reshape operations for thousands of vessels. Here's your compliance roadmap.",
    author: "Sofia Mendes",
    authorImg:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
    date: "Nov 26, 2024",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=320&fit=crop",
    icon: "air",
    views: "2.2k",
    likes: 6,
    comments: 1,
  },
];

const categories = [
  { label: "All Articles", icon: "layers", count: articles.length },
  {
    label: "Technology",
    icon: "smart_toy",
    count: articles.filter((a) => a.category === "Technology").length,
  },
  {
    label: "Compliance",
    icon: "gavel",
    count: articles.filter((a) => a.category === "Compliance").length,
  },
  {
    label: "Operations",
    icon: "bolt",
    count: articles.filter((a) => a.category === "Operations").length,
  },
  {
    label: "Safety",
    icon: "security",
    count: articles.filter((a) => a.category === "Safety").length,
  },
  {
    label: "Environment",
    icon: "eco",
    count: articles.filter((a) => a.category === "Environment").length,
  },
];

const tags = [
  "CII", "MARPOL", "EEXI", "IMO DCS", "Annex VI",
  "maritime", "NOx", "BWM", "Sulphur ECA", "Ballast Water", "Digitalization",
];

// ---------- Composant icône Material Symbols ----------
function Icon({
  name,
  filled = false,
  className = "",
}: {
  name: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined select-none leading-none ${
        filled ? "[font-variation-settings:'FILL'_1,'wght'_300]" : "[font-variation-settings:'FILL'_0,'wght'_300]"
      } ${className}`}
    >
      {name}
    </span>
  );
}

// ---------- Sidebar (contenu commun desktop/mobile) ----------
function SidebarContent({
  activeFilter,
  onFilter,
}: {
  activeFilter: string;
  onFilter: (cat: string) => void;
}) {
  return (
    <div className="flex flex-col gap-5 ">
      {/* Stats */}
      <div className="grid grid-cols-3 divide-x divide-neutral-200/30 dark:divide-neutral-800/30 rounded-2xl border border-neutral-200/40 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-sm overflow-hidden">
        {[
          { icon: "article", label: "Articles", value: "124" },
          { icon: "groups", label: "Readers", value: "18k" },
          { icon: "star", label: "Rating", value: "4.9" },
        ].map((s) => (
          <div key={s.label} className="flex flex-col items-center py-4 px-2">
            <Icon name={s.icon} filled className="text-[20px] text-indigo-500" />
            <span className="text-[17px] font-semibold text-neutral-800 dark:text-neutral-100 mt-1">
              {s.value}
            </span>
            <span className="text-[11px] text-neutral-500 dark:text-neutral-400 mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Catégories */}
      <div className="rounded-2xl border border-neutral-200/40 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-sm overflow-hidden">
        <div className="px-4 pt-4 pb-2">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
            Browse by topic
          </p>
        </div>
        <div className="flex flex-col pb-2">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.label;
            return (
              <button
                key={cat.label}
                type="button"
                onClick={() => onFilter(cat.label)}
                className={`flex items-center gap-3 px-4 py-2.5 mx-2 mb-0.5 rounded-xl text-sm transition-all text-left ${
                  isActive
                    ? "bg-indigo-100/60 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 font-medium"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-white/50 dark:hover:bg-neutral-800/50 hover:text-neutral-800 dark:hover:text-neutral-200"
                }`}
              >
                <Icon
                  name={cat.icon}
                  filled={isActive}
                  className={`text-[17px] ${isActive ? "text-indigo-500" : "text-neutral-500"}`}
                />
                <span className="flex-1">{cat.label}</span>
                <span
                  className={`text-[11px] rounded-full px-2 py-0.5 font-medium ${
                    isActive
                      ? "bg-indigo-200/60 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300"
                      : "bg-neutral-200/40 dark:bg-neutral-800/40 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Tags */}
      <div className="rounded-2xl border border-neutral-200/40 dark:border-neutral-800/40 bg-white/40 dark:bg-neutral-950/40 backdrop-blur-sm p-4">
        <p className="text-[10px] font-semibold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-3">
          Popular tags
        </p>
        <div className="flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] px-2.5 py-1 rounded-full border border-neutral-200/40 dark:border-neutral-800/40 bg-white/30 dark:bg-neutral-800/30 text-neutral-600 dark:text-neutral-400 cursor-pointer hover:border-indigo-300 dark:hover:border-indigo-700 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50/40 dark:hover:bg-indigo-950/40 transition-all"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// ---------- Carte article ----------
function ArticleCard({
  article,
  isLiked,
  onToggleLike,
}: {
  article: (typeof articles)[0];
  isLiked: boolean;
  onToggleLike: (id: number) => void;
}) {
  const currentLikes = article.likes + (isLiked ? 1 : 0);

  return (
    <article className="group flex flex-col rounded-2xl overflow-hidden border border-neutral-200/40 dark:border-neutral-800/40 bg-white/50 dark:bg-neutral-950/50 backdrop-blur-sm hover:-translate-y-1 hover:border-neutral-300/60 dark:hover:border-neutral-700/60 hover:shadow-lg hover:shadow-indigo-500/5 transition-all duration-300 h-full">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={article.img}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-white bg-black/40 border border-white/20 backdrop-blur-md">
          <Icon name={article.icon} filled className="text-[13px]" />
          {article.category}
        </span>
      </div>

      {/* Corps */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 text-[12px] text-neutral-500 dark:text-neutral-400 mb-3">
          <button
            type="button"
            onClick={() => onToggleLike(article.id)}
            className={`flex items-center gap-1 transition-colors ${
              isLiked ? "text-red-500" : "hover:text-red-400"
            }`}
          >
            <Icon name="favorite" filled={isLiked} className="text-[15px]" />
            {currentLikes}
          </button>
          <span className="flex items-center gap-1">
            <Icon name="chat_bubble_outline" className="text-[15px]" />
            {article.comments}
          </span>
          <span className="flex items-center gap-1">
            <Icon name="visibility" className="text-[15px]" />
            {article.views}
          </span>
        </div>

        <h3 className="text-[15px] font-semibold leading-snug text-neutral-800 dark:text-neutral-100 line-clamp-2 mb-2">
          {article.title}
        </h3>
        <p className="text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400 line-clamp-2 flex-1">
          {article.excerpt}
        </p>

        <div className="mt-4 pt-4 border-t border-neutral-200/30 dark:border-neutral-800/30 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <img
              src={article.authorImg}
              alt={article.author}
              className="w-7 h-7 rounded-full object-cover ring-1 ring-neutral-200/50 dark:ring-neutral-800/50"
            />
            <div>
              <p className="text-[12px] font-medium text-neutral-700 dark:text-neutral-300 leading-tight">
                {article.author}
              </p>
              <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                {article.date}
              </p>
            </div>
          </div>
          <button
            type="button"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[12px] font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100/60 dark:bg-indigo-950/60 hover:bg-indigo-200/70 dark:hover:bg-indigo-900/70 transition-colors"
          >
            Read
            <Icon name="arrow_forward" className="text-[14px]" />
          </button>
        </div>
      </div>
    </article>
  );
}

// ---------- Page principale ----------
export default function BlogPage() {
  const [activeFilter, setActiveFilter] = useState("All Articles");
  const [visibleCount, setVisibleCount] = useState(6);
  const [likedArticles, setLikedArticles] = useState<number[]>([]);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleFilter = (cat: string) => {
    setActiveFilter(cat);
    setVisibleCount(6);
    setMobileSidebarOpen(false);
  };

  const toggleLike = (id: number) =>
    setLikedArticles((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );

  const filtered =
    activeFilter === "All Articles"
      ? articles
      : articles.filter((a) => a.category === activeFilter);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const activeCategory = categories.find((c) => c.label === activeFilter);

  return (
    <>
      {/* Police Material Symbols */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        .material-symbols-outlined { font-family: "Material Symbols Outlined"; font-style: normal; }
      `}</style>

      <div className="min-h-screen ">
        {/* Overlay pour mobile */}
        {mobileSidebarOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileSidebarOpen(false)}
          />
        )}

        {/* Sidebar mobile drawer */}
        <aside
          className={`fixed top-0 left-0 h-full w-80 z-50 overflow-y-auto p-5 transition-transform duration-300 lg:hidden ${
            mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between mb-6">
            <span className="text-sm font-semibold text-neutral-700 dark:text-neutral-300">
              Filters & Info
            </span>
            <button
              type="button"
              onClick={() => setMobileSidebarOpen(false)}
              className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-200"
            >
              <Icon name="close" className="text-[22px]" />
            </button>
          </div>
          <SidebarContent activeFilter={activeFilter} onFilter={handleFilter} />
        </aside>

        {/* Conteneur principal - Largeur 95% de l'écran */}
        <div className="w-[95%] mx-auto  md:py-10 py-28 px-4 sm:px-8 relative  section-s3 overflow-hidden">
          <div className="flex gap-6 xl:gap-8 items-start">
            {/* Sidebar desktop (glass) - sticky */}
            <aside className="hidden lg:flex flex-col w-72 xl:w-80 flex-shrink-0 sticky top-6 self-start max-h-[calc(100vh-3rem)] overflow-y-auto scrollbar-none gap-5">
              <div className="rounded-2xl  p-5 shadow-sm">
                <SidebarContent activeFilter={activeFilter} onFilter={handleFilter} />
              </div>
            </aside>

            {/* Contenu principal */}
            <main className="flex-1 min-w-0 py-28 px-4 sm:px-8 relative section-s3 overflow-hidden">
              <div className="rounded-2xl p-5 md:p-6 shadow-sm">
                {/* En-tête */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-8">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-semibold100 leading-tight">
                      Latest Insights
                    </h1>
                    <p className="mt-1 flex items-center gap-1.5 text-sm ">
                      <Icon name="update" className="text-[16px]" />
                      Last updated November 2024
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-neutral-600rounded-full px-3 py-1.5 backdrop-blur-sm">
                      {filtered.length} article{filtered.length > 1 ? "s" : ""}
                    </span>
                    <button
                      type="button"
                      onClick={() => setMobileSidebarOpen(true)}
                      className="lg:hidden flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-sm border border-neutral-200/40 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-neutral-800/70 transition-colors"
                    >
                      <Icon name="tune" className="text-[17px]" />
                      Filters
                      {activeFilter !== "All Articles" && (
                        <span className="w-4 h-4 text-[10px] font-bold flex items-center justify-center rounded-full bg-indigo-500 text-white">
                          1
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Filtre actif (pill) */}
                {activeFilter !== "All Articles" && activeCategory && (
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex items-center gap-2 pl-3 pr-2 py-1.5 rounded-full text-xs font-medium bg-indigo-100/70 dark:bg-indigo-900/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 backdrop-blur-sm">
                      <Icon name={activeCategory.icon} className="text-[14px]" />
                      {activeFilter}
                      <button
                        type="button"
                        onClick={() => handleFilter("All Articles")}
                        className="hover:text-indigo-800 dark:hover:text-indigo-200"
                      >
                        <Icon name="close" className="text-[15px]" />
                      </button>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleFilter("All Articles")}
                      className="text-xs text-neutral-500 dark:text-neutral-400 hover:text-indigo-500"
                    >
                      Clear
                    </button>
                  </div>
                )}

                {/* État vide ou grille */}
                {visible.length === 0 ? (
                  <div className="py-24 text-center">
                    <Icon name="article" className="text-[52px] text-neutral-300 dark:text-neutral-600 block mx-auto mb-4" />
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm">No articles match this filter.</p>
                    <button
                      type="button"
                      onClick={() => handleFilter("All Articles")}
                      className="mt-4 text-sm text-indigo-500 hover:text-indigo-600"
                    >
                      Reset filters
                    </button>
                  </div>
                ) : (
                  <>
                    {/* Grille responsive : 1 sur mobile, 2 sur tablette, 3 sur desktop large */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
                      {visible.map((article) => (
                        <ArticleCard
                          key={article.id}
                          article={article}
                          isLiked={likedArticles.includes(article.id)}
                          onToggleLike={toggleLike}
                        />
                      ))}
                    </div>
                    {hasMore && (
                      <div className="flex justify-center mt-10">
                        <button
                          type="button"
                          onClick={() => setVisibleCount((v) => v + 6)}
                          className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium border border-neutral-200/40 dark:border-neutral-700 bg-white/50 dark:bg-neutral-900/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-neutral-800/70 text-neutral-700 dark:text-neutral-200 transition-colors"
                        >
                          <Icon name="expand_more" className="text-[20px]" />
                          Load more articles
                        </button>
                      </div>
                    )}
                  </>
                )}
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}