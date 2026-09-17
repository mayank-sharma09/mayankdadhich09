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
    theme: "cay",
  },
  {
    number: "02",
    category: " Frontend",
    title: "FocusList",
    description:
      "A focused task management experience built to make planning feel simple, clear, and personal.",
    tags: ["UI/UX", "Frontend", "React", "Demo"],
    href: "https://task-list-theta-amber.vercel.app/",
    theme: "focus",
  },
  {
    number: "03",
    category: "Product Design",
    title: "Coming Soon",
    description:
      "Another thoughtful digital experience is currently in progress.",
    tags: ["UX/UI"],
    href: "#",
    theme: "future",
  },
];

function Shape({ className = "", children }) {
  return (
    <div
      className={`pointer-events-none absolute select-none ${className}`}
      aria-hidden="true"
    >
      {children}
    </div>
  );
}

function FloatingShapes({ theme }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Large organic shape */}
      <Shape className="left-[-120px] top-[80px] h-[260px] w-[260px] rounded-full bg-white/30 blur-3xl animate-[floatOne_12s_ease-in-out_infinite]" />

      {/* Large soft blob */}
      <Shape className="right-[-120px] top-[120px] h-[300px] w-[300px] rounded-full bg-white/35 blur-3xl animate-[floatTwo_15s_ease-in-out_infinite]" />

      {/* Orbit rings */}
      <Shape className="right-[8%] top-[10%] h-[180px] w-[180px] rounded-full border border-black/[0.035] animate-[slowSpin_30s_linear_infinite]" />

      <Shape className="right-[5%] top-[6%] h-[230px] w-[230px] rounded-full border border-black/[0.025] animate-[slowSpinReverse_40s_linear_infinite]" />

      {/* Left orbit */}
      <Shape className="left-[-60px] bottom-[15%] h-[180px] w-[180px] rounded-full border border-black/[0.035] animate-[slowSpinReverse_35s_linear_infinite]" />

      {/* Floating circles */}
      <Shape className="left-[12%] top-[18%] h-5 w-5 rounded-full bg-white/50 blur-[1px] animate-[floatThree_8s_ease-in-out_infinite]" />

      <Shape className="right-[18%] top-[42%] h-8 w-8 rounded-full bg-white/45 blur-[1px] animate-[floatOne_10s_ease-in-out_infinite]" />

      <Shape className="left-[6%] bottom-[25%] h-3 w-3 rounded-full bg-black/[0.04] animate-[floatTwo_9s_ease-in-out_infinite]" />

      {/* Diamonds */}
      <Shape className="left-[28%] top-[12%] h-7 w-7 rotate-45 rounded-[6px] border border-black/[0.045] animate-[driftOne_14s_ease-in-out_infinite]" />

      <Shape className="right-[30%] bottom-[16%] h-5 w-5 rotate-45 rounded-[5px] border border-black/[0.04] animate-[driftOne_12s_ease-in-out_infinite]" />

      {/* Cubes */}
      <Shape className="right-[12%] bottom-[20%] h-10 w-10 rotate-12 rounded-[8px] border border-black/[0.04] bg-white/15 animate-[floatThree_13s_ease-in-out_infinite]" />

      <Shape className="left-[20%] bottom-[10%] h-7 w-7 -rotate-12 rounded-[6px] border border-black/[0.04] animate-[floatOne_11s_ease-in-out_infinite]" />

      {/* Crosses */}
      <Shape className="right-[38%] top-[18%] text-2xl font-light text-black/[0.06] animate-[floatTwo_11s_ease-in-out_infinite]">
        +
      </Shape>

      <Shape className="left-[42%] bottom-[20%] text-xl font-light text-black/[0.05] animate-[floatThree_9s_ease-in-out_infinite]">
        +
      </Shape>

      {/* Pills */}
      <Shape className="left-[8%] top-[48%] h-3 w-16 rotate-[-25deg] rounded-full bg-black/[0.025] animate-[driftOne_16s_ease-in-out_infinite]" />

      <Shape className="right-[10%] top-[65%] h-3 w-20 rotate-[30deg] rounded-full bg-white/40 animate-[driftOne_15s_ease-in-out_infinite]" />

      {/* Constellation */}
      <Shape className="right-[25%] top-[12%]">
        <div className="flex gap-2 opacity-40">
          <span className="h-1 w-1 rounded-full bg-black/20" />
          <span className="mt-3 h-1 w-1 rounded-full bg-black/15" />
          <span className="mt-1 h-1 w-1 rounded-full bg-black/20" />
        </div>
      </Shape>

      {/* Connecting line */}
      <Shape className="left-[15%] top-[30%] h-px w-[140px] rotate-[20deg] bg-black/[0.04]" />

      {/* CayTunes */}
      {theme === "cay" && (
        <>
          <Shape className="left-[45%] top-[8%] h-24 w-24 rounded-full border border-purple-500/[0.04] animate-[slowSpin_25s_linear_infinite]" />

          <Shape className="right-[5%] bottom-[8%] h-28 w-28 rounded-full border border-purple-500/[0.035] animate-[slowSpinReverse_28s_linear_infinite]" />

          <Shape className="left-[60%] bottom-[12%] h-4 w-4 rounded-full bg-purple-500/[0.05] animate-[floatTwo_10s_ease-in-out_infinite]" />
        </>
      )}

      {/* FocusList */}
      {theme === "focus" && (
        <>
          <Shape className="left-[48%] top-[6%] h-20 w-20 rounded-full border border-blue-500/[0.035] animate-[slowSpin_26s_linear_infinite]" />

          <Shape className="right-[6%] bottom-[10%] h-32 w-32 rounded-full border border-blue-500/[0.03] animate-[slowSpinReverse_32s_linear_infinite]" />

          <Shape className="left-[68%] bottom-[15%] h-3 w-3 rounded-full bg-blue-500/[0.05] animate-[floatThree_9s_ease-in-out_infinite]" />
        </>
      )}

      {/* Future */}
      {theme === "future" && (
        <>
          <Shape className="left-[50%] top-[10%] h-24 w-24 rounded-full border border-black/[0.025] animate-[slowSpin_30s_linear_infinite]" />

          <Shape className="right-[12%] bottom-[15%] h-24 w-24 rounded-full border border-black/[0.025] animate-[slowSpinReverse_35s_linear_infinite]" />
        </>
      )}
    </div>
  );
}

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeMobile, setActiveMobile] = useState(0);

  /*
   * MOBILE CARD DETECTION
   *
   * The card closest to the center of the viewport
   * becomes active.
   */
  useEffect(() => {
    const cards = document.querySelectorAll("[data-project-card]");

    if (!cards.length) return;

    let ticking = false;

    const updateActiveCard = () => {
      if (window.innerWidth >= 768) return;

      if (ticking) return;

      ticking = true;

      window.requestAnimationFrame(() => {
        const viewportCenter = window.innerHeight / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card) => {
          const rect = card.getBoundingClientRect();

          // Ignore cards completely outside viewport
          if (
            rect.bottom <= 0 ||
            rect.top >= window.innerHeight
          ) {
            return;
          }

          const cardCenter = rect.top + rect.height / 2;

          const distance = Math.abs(
            cardCenter - viewportCenter
          );

          if (distance < closestDistance) {
            closestDistance = distance;
            closestIndex = Number(card.dataset.index);
          }
        });

        setActiveMobile(closestIndex);

        ticking = false;
      });
    };

    updateActiveCard();

    window.addEventListener("scroll", updateActiveCard, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveCard);

    return () => {
      window.removeEventListener("scroll", updateActiveCard);
      window.removeEventListener("resize", updateActiveCard);
    };
  }, []);

  /*
   * Desktop = hover
   * Mobile = center card
   */
  const activeIndex =
    activeProject !== null
      ? activeProject
      : activeMobile;

  const activeTheme =
    projects[activeIndex]?.theme || "future";

  const backgroundColor =
    activeTheme === "cay"
      ? "#EEEAFE"
      : activeTheme === "focus"
      ? "#EEF4FF"
      : "#F1F1EF";

  return (
    <section
      id="selected-work"
      className="relative overflow-hidden px-6 py-20 transition-colors duration-700 ease-out md:px-10 md:py-24 lg:px-16"
      style={{ backgroundColor }}
      onMouseLeave={() => {
        if (
          typeof window !== "undefined" &&
          window.innerWidth >= 768
        ) {
          setActiveProject(null);
        }
      }}
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#F7F7F5] to-transparent" />

        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#F7F7F5] to-transparent" />

        <div className="absolute left-1/2 top-1/2 h-[80%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 blur-[100px]" />
      </div>

      <FloatingShapes theme={activeTheme} />

      <div className="pointer-events-none absolute inset-0 bg-white/[0.18]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-black/45">
            Selected Work
          </p>

          <h2 className="text-4xl font-medium tracking-[-0.04em] text-[#111111] md:text-5xl lg:text-6xl">
            A few things
            <br />
            I&apos;ve been building.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/55 md:text-lg">
            A collection of products and experiences where I explored
            problems, designed solutions, and brought ideas closer
            to reality.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-5 md:grid-cols-3">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <Link
                href={project.href}
                key={project.number}
                className="group block"
                onMouseEnter={() => {
                  if (
                    typeof window !== "undefined" &&
                    window.innerWidth >= 768
                  ) {
                    setActiveProject(index);
                  }
                }}
              >
                <article
                  data-project-card
                  data-index={index}
                  className={`
                    relative
                    min-h-[360px]
                    overflow-hidden
                    rounded-[28px]
                    border border-black/[0.06]
                    p-6
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? "bg-white/85 shadow-[0_30px_80px_rgba(0,0,0,0.08)] md:scale-[1.01]"
                        : "bg-white/65"
                    }

                    md:min-h-[330px]

                    md:hover:-translate-y-2
                    md:hover:bg-white/80
                    md:hover:shadow-[0_30px_80px_rgba(0,0,0,0.07)]
                  `}
                >
                  {/* Top row */}
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium tracking-[0.15em] text-black/35">
                      {project.number}
                    </span>

                    {/* Arrow */}
                    <span
                      className={`
                        flex
                        h-9
                        w-9
                        shrink-0
                        items-center
                        justify-center
                        rounded-full
                        border
                        border-black/[0.07]
                        bg-white/60
                        text-sm
                        transition-all
                        duration-300

                        ${
                          isActive
                            ? "rotate-45 bg-black text-white"
                            : "rotate-0 text-black/60"
                        }

                        md:group-hover:rotate-45
                        md:group-hover:bg-black
                        md:group-hover:text-white
                      `}
                    >
                      ↗
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-14 pb-20 md:mt-20 md:pb-16">
                    <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-black/40">
                      {project.category}
                    </p>

                    <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#111111]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-black/55 md:text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/[0.06] bg-white/45 px-3 py-1.5 text-[11px] text-black/50"
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
                      bg-black
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

        {/* Bottom hint */}
        <div className="mt-10 flex items-center justify-between text-xs text-black/35 md:mt-12">
          <span>More work coming soon.</span>

          <span className="hidden md:block">
            Hover to explore
          </span>

          <span className="md:hidden">
            Scroll to explore
          </span>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(20px, -18px, 0);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(-22px, 18px, 0);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(10px, -12px, 0);
          }
        }

        @keyframes driftOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(18px, -14px, 0) rotate(8deg);
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