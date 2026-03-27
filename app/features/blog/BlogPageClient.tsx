"use client";

import { useState } from "react";

const articles = [
  {
    id: 1,
    category: "Technology",
    title: "AI-Driven Route Optimization: Reducing CII Scores in Real-Time",
    excerpt:
      "Explore how machine learning models are helping shipowners meet strict carbon intensity indicators while cutting fuel costs by up to 12%.",
    author: "Marc Dupont",
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
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
    authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
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
    authorImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=48&h=48&fit=crop&crop=face",
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
    authorImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=face",
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
    authorImg: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face",
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
    authorImg: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=face",
    date: "Nov 26, 2024",
    img: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&h=320&fit=crop",
    icon: "air",
    views: "2.2k",
    likes: 6,
    comments: 1,
  },
];



const tags = [
  "Digitalization",
  "maritime",
  "MARPOL",
  "Annex VI",
  "IMO DCS",
  "Sulphur Emission Control Area",
  "NOx emissions",
  "BWM Convention",
  "Ballast Water Management",
  "Environment",
  "CII",
  "EEXI",
];

function Ms({
  children,
  filled = false,
  className = "",
}: {
  children: string;
  filled?: boolean;
  className?: string;
}) {
  return (
    <span
      className={`material-symbols-outlined select-none ${filled ? "ms-fill-1" : "ms-fill-0"} ${className}`}
    >
      {children}
    </span>
  );
}

export default function BlogPageClient() {
  const [activeTopics, setActiveTopics] = useState<string[]>(["All Articles"]);
  const [visibleCount, setVisibleCount] = useState(6);
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
    setLikedArticles((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
  };

  const filtered = activeTopics.includes("All Articles")
    ? articles
    : articles.filter((a) => activeTopics.includes(a.category));

  const visibleArticles = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="min-h-screen bg-[var(--bg-base)] text-[var(--text-primary)]">
      <br />
      <br />
      <br />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
            @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700&family=Inter:wght@400;500;600&display=swap');
            body { font-family: 'Inter', system-ui, sans-serif; }
            .material-symbols-outlined { font-family: "Material Symbols Outlined"; }
            .ms-fill-0 { font-variation-settings: 'FILL' 0; }
            .ms-fill-1 { font-variation-settings: 'FILL' 1; }
          `,
        }}
      />

      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 backdrop-blur-sm bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-80 z-50 border-r border-[var(--border-card)] bg-[var(--bg-level-1)] overflow-y-auto p-6 transition-transform duration-300 lg:hidden ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-[var(--text-primary)]">Filtres & Infos</h2>
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            <Ms className="text-2xl">close</Ms>
          </button>
        </div>
        <SidebarContent
          tags={tags}
        />
      </aside>

      <section className="py-16 pb-20 px-4 sm:px-6 lg:pt-20">
        <div className="max-w-7xl mx-auto">
          {/* Mobile header */}
          <div className="lg:hidden flex items-center justify-between mb-8">
            <div>
              <h1 className="text-[var(--color-heading)]">Latest Insights</h1>
              <p className="mt-1 flex items-center gap-2 text-[var(--text-secondary)]">
                Last updated • November 2024
                <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-[var(--accent-dim)] text-[var(--accent)]">
                  {filtered.length} articles
                </span>
              </p>
            </div>
            <button
              type="button"
              onClick={() => setSidebarOpen(true)}
              className="flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-medium transition-all border border-[var(--border-card)] hover:bg-[var(--bg-card-hover)]"
            >
              <Ms className="text-xl">tune</Ms>
              Filters
              {!activeTopics.includes("All Articles") && (
                <span className="ml-1 text-[10px] font-bold w-5 h-5 flex items-center justify-center rounded-full bg-[var(--accent)] text-white">
                  {activeTopics.length}
                </span>
              )}
            </button>
          </div>

          <div className="flex gap-10">
            {/* Desktop sidebar */}
            <aside className="hidden lg:block w-72 xl:w-80 shrink-0 sticky top-8 self-start">
              <SidebarContent
           tags={tags}
              />
            </aside>

            <main className="flex-1">
              {/* Desktop header */}
              <div className="hidden lg:flex items-center justify-between mb-10">
                <div>
                  <h1 className="text-[var(--color-heading)]">Latest Insights</h1>
                  <p className="mt-1 flex items-center gap-2 text-[var(--text-secondary)]">
                    <Ms className="text-base">update</Ms>
                    Last updated November 2024
                  </p>
                </div>
                <div className="text-sm text-[var(--text-secondary)]">{filtered.length} articles</div>
              </div>

              {/* Active filter pills */}
              {!activeTopics.includes("All Articles") && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {activeTopics.map((topic) => (
                    <div
                      key={topic}
                      className="flex items-center gap-2 pl-4 pr-3 py-1.5 rounded-full text-sm font-medium bg-[var(--accent-dim)] text-[var(--accent)]"
                    >
                      {topic}
                      <button
                        type="button"
                        onClick={() => toggleTopic(topic)}
                        className="hover:text-[var(--accent-light)] transition-colors"
                        aria-label={`Remove filter ${topic}`}
                      >
                        <Ms className="text-lg">close</Ms>
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="text-sm text-[var(--accent)] hover:text-[var(--accent-light)] transition-colors ml-2"
                  >
                    Clear all
                  </button>
                </div>
              )}

              {visibleArticles.length === 0 ? (
                <div className="py-20 text-center text-[var(--text-secondary)]">
                  <Ms className="text-6xl mb-4 opacity-50">article</Ms>
                  <p>Aucun article ne correspond à ces filtres.</p>
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="mt-6 text-[var(--accent)] hover:underline"
                  >
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
                        className="group rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 bg-[var(--bg-level-2)] border border-[var(--border-card)] shadow-[var(--shadow-card)]"
                      >
                        <div className="relative h-56 overflow-hidden">
                          <img
                            src={article.img}
                            alt={article.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                          <div className="absolute top-4 left-4 px-3 py-1 backdrop-blur-md rounded-full text-xs font-medium flex items-center gap-1.5 text-white border border-white/20 bg-black/30">
                            <Ms filled className="text-sm">
                              {article.icon}
                            </Ms>
                            {article.category}
                          </div>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-4 text-xs text-[var(--text-secondary)] mb-4">
                            <button
                              type="button"
                              onClick={() => toggleLike(article.id)}
                              className={`flex items-center gap-1 transition-colors ${
                                isLiked ? "text-[var(--accent)]" : "hover:text-[var(--accent)]"
                              }`}
                            >
                              <Ms filled={isLiked} className="text-base">
                                favorite
                              </Ms>
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

                          <h3 className="line-clamp-3 text-[var(--color-heading)] transition-colors duration-200">
                            {article.title}
                          </h3>

                          <p className="mt-3 line-clamp-3 text-[var(--color-body)] flex-1">{article.excerpt}</p>

                          <div className="mt-6 pt-6 border-t border-[var(--border-card)] flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <img
                                src={article.authorImg}
                                alt={article.author}
                                className="w-8 h-8 rounded-full ring-1 ring-[var(--border-card)]"
                              />
                              <div className="text-sm">
                                <div className="font-medium text-[var(--text-primary)] truncate">
                                  {article.author}
                                </div>
                                <div className="text-xs text-[var(--text-secondary)]">{article.date}</div>
                              </div>
                            </div>

                            <button
                              type="button"
                              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-medium transition-all bg-[var(--accent-dim)] text-[var(--accent)] hover:bg-[var(--accent-border)]"
                            >
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

              {hasMore && (
                <div className="flex justify-center mt-12">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((v) => v + 6)}
                    className="px-8 py-4 rounded-2xl flex items-center gap-3 text-sm font-medium transition-all border border-[var(--border-card)] bg-[var(--bg-level-1)] hover:bg-[var(--bg-card-hover)]"
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
    </div>
  );
}

function SidebarContent({
  
  tags,
}: {
 
  tags: string[];
}) {
  return (
    <div className="space-y-10">
      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-4 rounded-3xl p-5 bg-[var(--bg-level-2)] border border-[var(--border-card)]">
        {[
          { icon: "article", label: "Articles", value: "124" },
          { icon: "groups", label: "Readers", value: "18k" },
          { icon: "star", label: "Rating", value: "4.9" },
        ].map((s) => (
          <div key={s.label} className="text-center">
            <Ms filled className="text-3xl text-[var(--accent)] block mb-1">
              {s.icon}
            </Ms>
            <span className="text-xl font-bold text-[var(--text-primary)] block">{s.value}</span>
            <span className="text-xs text-[var(--text-secondary)] block mt-0.5">{s.label}</span>
          </div>
        ))}
      </div>

    

      {/* Tags */}
      <div>
        <h3 className="text-xs font-semibold uppercase tracking-wider text-[var(--text-secondary)] mb-4">
          Popular tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs px-4 py-2 rounded-2xl transition-all cursor-pointer border border-[var(--border-card)] bg-[var(--bg-level-1)] hover:bg-[var(--bg-card-hover)] text-[var(--text-secondary)]"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}