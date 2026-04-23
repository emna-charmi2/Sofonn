"use client";

import { useEffect } from "react";
import AOS from "aos";

const BLOG_POSTS = [
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuA_aySjtrJebUzzQmlUO2cR03f97E9kz5E1jGSc_yg4orRg9nDOs8-KIltEoGCSkdAKib1j_OmLPMzeaIzJc0FV_1tnoBXph22ZuScHMXzt9C-bOOlW8ydrTupsCuRui_C59NjWtJd6pfgWO321yJivwQ3V0BGPIq7y7xymgxpkmme1wNtXgEgjsj8XujGyIF_64pZRKGGsY-Dzc2YdzCyTGUfegqGgMeUTRbsAbLlEzHlDDbNJywCkUnFBloYLYOMxFfL-KEq6Mc8",
    tag: "Sustainability",
    tagColor: "#34d399",
    tagBg: "rgba(52,211,153,0.10)",
    tagBorder: "rgba(52,211,153,0.20)",
    title: "How Maritime AI Reduces Carbon Emissions",
    excerpt: "Exploring the direct impact of intelligent routing on global shipping carbon footprints.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl8xXVaUjSEysQDc4j2agu-HH2FJJo_pVTvLnlDgnbBgncKXTxAcMWzggxyaancF-n5FOrv4POkkCHWo1mLbGRsN4L7EQhr3BXDWaavdrsqGOmaL_zQu8lGcDkPn61ySVFY6WQRiW7I7Sx1XFTBsi8wMB-DERs0NFa1YBZToMejEUycLjetcMohfALh18NcZAhpc--n84rAOzJs1lurQT2ZHuPBmHVV9nFajESt4mKMww9GJWmG6GRgJbbhp3uDjyi8CNcjxE2pyI",
    tag: "Technology",
    tagColor: "#60a5fa",
    tagBg: "rgba(59,130,246,0.10)",
    tagBorder: "rgba(59,130,246,0.20)",
    title: "The Future of Autonomous Navigation",
    excerpt: "A deep dive into the sensors and AI models powering the next generation of cargo vessels.",
  },
  {
    src: "https://lh3.googleusercontent.com/aida-public/AB6AXuBJAG4isQ7Z4eFcrHctmvX7m1KzcCEyGt4JoIZPNcsHcfcQu7snQkl5grKkM4-oRNM1m0uvLzpEv70qn3am6XxA6qMGb481tLWM5hJJZsKqaX6wnBkHW8H4KF4J7Ak9PwNIil_FKWAcQJmtLnJJno7H8K3m6w4QyNVJDj3lhYQPkSGJQBeg1SdTc9ek8nyfVuUm5yfH6svOhRaarzPMOmxuu3axCO5ksZDBxHsUVaIv5hy1PSRK9PulZGM-6VcMdX-yGn7gJBjHZVo",
    tag: "Compliance",
    tagColor: "#f59e0b",
    tagBg: "rgba(245,158,11,0.10)",
    tagBorder: "rgba(245,158,11,0.20)",
    title: "Meeting 2025 Environmental Standards",
    excerpt: "How to stay ahead of upcoming IMO regulations using automated tracking tools.",
  },
];

export default function Blog() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 120,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
  <section className="py-28 px-4 sm:px-8 relative overflow-hidden">

        <div className="w-[80%] max-w-480 mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-14 gap-6">
          <div>
            <span
              className="inline-block text-xs font-bold tracking-widest uppercase mb-3 px-3 py-1 rounded-full border"
              style={{
                color: "#60a5fa",
                background: "rgba(59,130,246,0.10)",
                borderColor: "rgba(59,130,246,0.20)",
              }}
              data-aos="fade-up"
            >
              Knowledge Hub
            </span>
            <h2 data-aos="fade-up" data-aos-delay="100">
              Latest From our Blog
            </h2>
            <p data-aos="fade-up" data-aos-delay="200">
              Stay updated with the newest trends in maritime technology and sustainability.
            </p>
          </div>
          <a
            href="#"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200 group"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            View All Posts
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {BLOG_POSTS.map((post, i) => (
            <article
              key={i}
              className="group flex flex-col rounded-2xl overflow-hidden border border-2 border-blue-500 transition-all duration-300 hover:-translate-y-1 shadow-2xl cursor-pointer"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(255,255,255,0.07)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(59,130,246,0.35)";
                e.currentTarget.style.boxShadow = "0 24px 48px rgba(59,130,246,0.12)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
                e.currentTarget.style.boxShadow = "none";
              }}
              data-aos="fade-up"
              data-aos-delay={i * 100}
              data-aos-duration="600"
            >
              {/* Image */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={post.src}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#050c1a]/60 to-transparent" />
                {/* Tag badge over image - now with animation */}
                <span
                  className="absolute top-4 left-4 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full border"
                  style={{
                    color: post.tagColor,
                    background: post.tagBg,
                  }}
                  data-aos="fade-down"
                  data-aos-delay={i * 100 + 50}
                  data-aos-duration="500"
                >
                  {post.tag}
                </span>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 gap-3 border border-3 rounded-b-2xl border-blue-500/10">
                <h4>{post.title}</h4>
                <span className="flex-1 text-zinc-500  leading-relaxed">{post.excerpt}</span>
                {/* Read more */}
                <a
                  href="#"
                  className="mt-2 flex items-center gap-2 text-sm font-semibold text-blue-400 transition-colors duration-200 w-fit group/link"
                >
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-hover/link:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}