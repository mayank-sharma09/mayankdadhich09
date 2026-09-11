"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const projects = [
  {
    number: "01",
    category: "Product Design",
    title: "CayTunes",
    description:
      "A social music experience designed around listening, chatting, and sharing moments through music.",
    tags: ["UX/UI", "Product Design", "Prototype"],
    href: "/design/caytunes",
    theme: "#EEEAFE",
  },
  {
    number: "02",
    category: "Product Design + Frontend",
    title: "FocusList",
    description:
      "A focused task management experience built to make planning feel simple, clear, and personal.",
    tags: ["UI/UX", "Frontend", "React"],
    href: "/design/focuslist",
    theme: "#EEF4FF",
  },
  {
    number: "03",
    category: "Product Design",
    title: "Coming Soon",
    description:
      "Another thoughtful digital experience is currently in progress.",
    tags: ["UX/UI"],
    href: "#",
    theme: "#F1F1EF",
  },
];

function Shape({ className = "", style = {}, children }) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function FloatingShapes({ theme }) {
  const isCayTunes = theme === "#EEEAFE";
  const isFocusList = theme === "#EEF4FF";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* =====================================================
          LARGE ORGANIC BLOBS
      ===================================================== */}

      <Shape
        className="
          left-[-8%]
          top-[8%]
          h-[280px]
          w-[280px]
          rounded-full
          blur-[70px]
          opacity-50
          transition-all
          duration-1000
          md:h-[420px]
          md:w-[420px]
        "
        style={{
          background: isCayTunes
            ? "#DCD2FF"
            : isFocusList
            ? "#D9E7FF"
            : "#E8E8E4",
          animation: "floatOne 14s ease-in-out infinite",
        }}
      />

      <Shape
        className="
          right-[-8%]
          top-[25%]
          h-[240px]
          w-[240px]
          rounded-full
          blur-[65px]
          opacity-40
          transition-all
          duration-1000
          md:h-[360px]
          md:w-[360px]
        "
        style={{
          background: isCayTunes
            ? "#E4DBFF"
            : isFocusList
            ? "#DCEBFF"
            : "#E6E6E2",
          animation: "floatTwo 17s ease-in-out infinite",
        }}
      />

      <Shape
        className="
          bottom-[-12%]
          left-[35%]
          h-[260px]
          w-[260px]
          rounded-full
          blur-[80px]
          opacity-35
          md:h-[380px]
          md:w-[380px]
        "
        style={{
          background: isCayTunes
            ? "#DDD7FF"
            : isFocusList
            ? "#DCE8FF"
            : "#E5E5E1",
          animation: "floatThree 19s ease-in-out infinite",
        }}
      />

      {/* =====================================================
          ORBIT RINGS
      ===================================================== */}

      <Shape
        className="
          left-[5%]
          top-[22%]
          h-[170px]
          w-[170px]
          rounded-full
          border
          border-black/[0.06]
          opacity-50
          md:h-[250px]
          md:w-[250px]
        "
        style={{
          animation: "slowSpin 24s linear infinite",
        }}
      />

      <Shape
        className="
          left-[7%]
          top-[24%]
          h-[130px]
          w-[130px]
          rounded-full
          border
          border-black/[0.05]
          opacity-40
          md:h-[210px]
          md:w-[210px]
        "
        style={{
          animation: "slowSpinReverse 18s linear infinite",
        }}
      />

      <Shape
        className="
          right-[4%]
          bottom-[18%]
          h-[190px]
          w-[190px]
          rounded-full
          border
          border-black/[0.06]
          opacity-45
          md:h-[270px]
          md:w-[270px]
        "
        style={{
          animation: "slowSpinReverse 27s linear infinite",
        }}
      />

      {/* =====================================================
          FLOATING CIRCLES
      ===================================================== */}

      <Shape
        className="
          left-[12%]
          top-[16%]
          h-3
          w-3
          rounded-full
          bg-black/15
          md:h-4
          md:w-4
        "
        style={{
          animation: "driftOne 8s ease-in-out infinite",
        }}
      />

      <Shape
        className="
          right-[18%]
          top-[13%]
          h-4
          w-4
          rounded-full
          bg-black/10
          md:h-5
          md:w-5
        "
        style={{
          animation: "driftOne 10s ease-in-out infinite reverse",
        }}
      />

      <Shape
        className="
          left-[26%]
          bottom-[18%]
          h-2
          w-2
          rounded-full
          bg-black/15
        "
        style={{
          animation: "driftOne 7s ease-in-out infinite",
        }}
      />

      <Shape
        className="
          right-[28%]
          bottom-[12%]
          h-3
          w-3
          rounded-full
          bg-black/10
        "
        style={{
          animation: "driftOne 11s ease-in-out infinite reverse",
        }}
      />

      {/* =====================================================
          DIAMONDS
      ===================================================== */}

      <Shape
        className="
          left-[28%]
          top-[12%]
          h-7
          w-7
          rotate-45
          rounded-[5px]
          border
          border-black/[0.08]
          bg-white/20
          backdrop-blur-sm
        "
        style={{
          animation: "morph 10s ease-in-out infinite",
        }}
      />

      <Shape
        className="
          right-[30%]
          bottom-[20%]
          h-8
          w-8
          rotate-45
          rounded-[6px]
          border
          border-black/[0.06]
          bg-white/25
          backdrop-blur-sm
        "
        style={{
          animation: "morph 13s ease-in-out infinite reverse",
        }}
      />

      {/* =====================================================
          CROSSES
      ===================================================== */}

      <Shape
        className="
          right-[13%]
          top-[32%]
          h-7
          w-7
          opacity-40
        "
        style={{
          animation: "driftOne 9s ease-in-out infinite",
        }}
      >
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-black/20" />
        <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-black/20" />
      </Shape>

      <Shape
        className="
          left-[10%]
          bottom-[30%]
          h-5
          w-5
          opacity-30
        "
        style={{
          animation: "driftOne 12s ease-in-out infinite reverse",
        }}
      >
        <div className="absolute left-1/2 top-0 h-full w-[1px] -translate-x-1/2 bg-black/20" />
        <div className="absolute left-0 top-1/2 h-[1px] w-full -translate-y-1/2 bg-black/20" />
      </Shape>

      {/* =====================================================
          PILLS
      ===================================================== */}

      <Shape
        className="
          right-[8%]
          top-[12%]
          h-3
          w-16
          rotate-[-25deg]
          rounded-full
          border
          border-black/[0.07]
          bg-white/20
        "
        style={{
          animation: "driftOne 14s ease-in-out infinite",
        }}
      />

      <Shape
        className="
          left-[18%]
          bottom-[12%]
          h-3
          w-20
          rotate-[18deg]
          rounded-full
          border
          border-black/[0.06]
          bg-white/20
        "
        style={{
          animation: "driftOne 12s ease-in-out infinite reverse",
        }}
      />

      {/* =====================================================
          CONSTELLATION DOTS
      ===================================================== */}

      <div className="absolute right-[20%] top-[20%] opacity-40">
        <div className="flex gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        </div>

        <div className="ml-3 mt-2 flex gap-4">
          <span className="h-1 w-1 rounded-full bg-black/15" />
          <span className="h-1.5 w-1.5 rounded-full bg-black/20" />
        </div>
      </div>

      {/* =====================================================
          CONNECTING LINE
      ===================================================== */}

      <svg
        className="
          absolute
          right-[12%]
          top-[20%]
          hidden
          h-[180px]
          w-[220px]
          opacity-20
          md:block
        "
        viewBox="0 0 220 180"
        fill="none"
      >
        <path
          d="M20 120 C70 20, 130 160, 200 60"
          stroke="black"
          strokeWidth="1"
          strokeDasharray="5 7"
        />
      </svg>

      {/* =====================================================
          THEME-SPECIFIC SHAPES
      ===================================================== */}

      {isCayTunes && (
        <>
          <Shape
            className="
              left-[42%]
              top-[8%]
              h-12
              w-12
              rounded-full
              border
              border-purple-400/20
              bg-purple-300/10
              blur-[1px]
            "
            style={{
              animation: "floatTwo 11s ease-in-out infinite",
            }}
          />

          <Shape
            className="
              right-[38%]
              bottom-[10%]
              h-16
              w-16
              rounded-full
              bg-purple-300/15
              blur-xl
            "
          />
        </>
      )}

      {isFocusList && (
        <>
          <Shape
            className="
              left-[45%]
              top-[10%]
              h-10
              w-10
              rotate-12
              rounded-[10px]
              border
              border-blue-400/20
              bg-blue-300/10
            "
            style={{
              animation: "floatThree 10s ease-in-out infinite",
            }}
          />

          <Shape
            className="
              right-[40%]
              bottom-[12%]
              h-14
              w-14
              rounded-full
              bg-blue-300/15
              blur-xl
            "
          />
        </>
      )}
    </div>
  );
}

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeMobile, setActiveMobile] = useState(0);

  useEffect(() => {
    const cards = document.querySelectorAll("[data-project-card]");

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => {
            const rect = entry.target.getBoundingClientRect();

            const cardCenter = rect.top + rect.height / 2;
            const viewportCenter = window.innerHeight / 2;

            return {
              index: Number(entry.target.dataset.index),
              distance: Math.abs(cardCenter - viewportCenter),
            };
          })
          .sort((a, b) => a.distance - b.distance);

        if (visibleCards.length > 0) {
          setActiveMobile(visibleCards[0].index);
        }
      },
      {
        rootMargin: "-20% 0px -20% 0px",
        threshold: [0.4, 0.6, 0.8],
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const activeIndex =
    activeProject !== null ? activeProject : activeMobile;

  const activeTheme =
    projects[activeIndex]?.theme || "#F7F7F5";

  return (
    <section
      className="
        relative
        overflow-hidden
        px-6
        py-24
        transition-colors
        duration-1000
      "
    >
      {/* =====================================================
          SOFT SECTION ATMOSPHERE

          This replaces the hard rectangular background.
          The color fades naturally into the page.
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          left-[-15%]
          right-[-15%]
          top-[-8%]
          h-[75%]
          rounded-[50%]
          blur-[110px]
          opacity-70
          transition-all
          duration-1000
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              ${activeTheme} 0%,
              ${activeTheme}CC 35%,
              transparent 72%
            )
          `,
        }}
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-15%]
          left-[-10%]
          right-[-10%]
          h-[60%]
          rounded-[50%]
          blur-[100px]
          opacity-50
          transition-all
          duration-1000
        "
        style={{
          background: `
            radial-gradient(
              ellipse at center,
              ${activeTheme}99 0%,
              transparent 70%
            )
          `,
        }}
      />

      {/* Soft white center */}
      <div
        className="
          pointer-events-none
          absolute
          inset-[5%]
          rounded-[50%]
          bg-white/20
          blur-[80px]
        "
      />

      {/* Floating shapes */}
      <FloatingShapes theme={activeTheme} />

      {/* Very subtle readability layer */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          bg-white/[0.10]
          backdrop-blur-[1px]
        "
      />

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section heading */}

        <div className="mb-14 max-w-2xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.18em] text-black/45">
            Selected Work
          </p>

          <h2 className="text-4xl font-medium tracking-[-0.04em] text-[#111111] md:text-6xl">
            Things I’ve built
            <br />
            <span className="text-black/40">
              with intention.
            </span>
          </h2>
        </div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <Link
                key={project.number}
                href={project.href}
                className="block"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <article
                  data-project-card
                  data-index={index}
                  className={`
                    group
                    relative
                    min-h-[330px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-black/[0.05]
                    p-6
                    backdrop-blur-2xl
                    transition-all
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? "bg-white/75 shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
                        : "bg-white/50"
                    }

                    md:hover:-translate-y-2
                    md:hover:bg-white/75
                    md:hover:shadow-[0_30px_80px_rgba(0,0,0,0.07)]
                  `}
                >
                  {/* Card highlight */}

                  <div
                    className={`
                      pointer-events-none
                      absolute
                      -right-12
                      -top-12
                      h-36
                      w-36
                      rounded-full
                      bg-white/70
                      blur-3xl
                      transition-opacity
                      duration-500
                      ${
                        isActive
                          ? "opacity-100"
                          : "opacity-50"
                      }
                    `}
                  />

                  {/* Top row */}

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-xs font-medium tracking-[0.12em] text-black/40">
                      {project.number}
                    </span>

                    <div
                      className={`
                        flex
                        h-10
                        w-10
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/[0.08]
                        transition-all
                        duration-500
                        ${
                          isActive
                            ? "rotate-45 bg-[#111111] text-white"
                            : "bg-white/40 text-black/60"
                        }
                      `}
                    >
                      <span className="text-lg">
                        ↗
                      </span>
                    </div>
                  </div>

                  {/* Content */}

                  <div className="relative z-10 mt-16">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-black/40">
                      {project.category}
                    </p>

                    <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#111111]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-black/55">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}

                  <div className="absolute bottom-6 left-6 right-6 z-10 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          rounded-full
                          border
                          border-black/[0.05]
                          bg-white/35
                          px-3
                          py-1.5
                          text-[11px]
                          font-medium
                          text-black/50
                          backdrop-blur-md
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Mobile active indicator */}

                  <div
                    className={`
                      absolute
                      bottom-0
                      left-1/2
                      h-[2px]
                      -translate-x-1/2
                      rounded-full
                      bg-[#111111]
                      transition-all
                      duration-500
                      md:hidden
                      ${
                        isActive
                          ? "w-12 opacity-100"
                          : "w-0 opacity-0"
                      }
                    `}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style jsx>{`
        @keyframes floatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(25px, -20px, 0) scale(1.05);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-30px, 25px, 0);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(20px, -30px, 0) scale(1.08);
          }
        }

        @keyframes driftOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(12px, -16px, 0);
          }
        }

        @keyframes morph {
          0%,
          100% {
            transform: rotate(45deg) scale(1);
            border-radius: 5px;
          }

          50% {
            transform: rotate(90deg) scale(1.15);
            border-radius: 50%;
          }
        }

        @keyframes slowSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes slowSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }
      `}</style>
    </section>
  );
}