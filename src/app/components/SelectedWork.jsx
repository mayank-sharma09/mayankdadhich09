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
    category: "Product Design + Frontend",
    title: "FocusList",
    description:
      "A focused task management experience built to make planning feel simple, clear, and personal.",
    tags: ["UI/UX", "Frontend", "React"],
    href: "/design/focuslist",
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

/* =========================================================
   FLOATING SHAPE
========================================================= */

function Shape({ className = "", children }) {
  return (
    <div
      className={`pointer-events-none absolute ${className}`}
    >
      {children}
    </div>
  );
}

/* =========================================================
   ABSTRACT BACKGROUND
========================================================= */

function FloatingShapes({ theme }) {
  const isCay = theme === "cay";
  const isFocus = theme === "focus";
  const isFuture = theme === "future";

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* =================================================
          LARGE ORGANIC SHAPES
      ================================================= */}

      <Shape
        className={`
          left-[-8%]
          top-[5%]
          h-[360px]
          w-[360px]
          rounded-full
          blur-[2px]

          ${
            isCay
              ? "bg-[#DCD7FF]/55"
              : isFocus
              ? "bg-[#DCE8FF]/65"
              : "bg-black/[0.025]"
          }

          animate-[driftOne_14s_ease-in-out_infinite]
        `}
      />

      <Shape
        className={`
          right-[-8%]
          bottom-[-15%]
          h-[420px]
          w-[420px]
          rounded-[45%_55%_60%_40%]

          ${
            isCay
              ? "bg-[#E9E5FF]/55"
              : isFocus
              ? "bg-[#E5EEFF]/65"
              : "bg-black/[0.02]"
          }

          animate-[morph_17s_ease-in-out_infinite]
        `}
      />

      {/* =================================================
          BIG ORBIT
      ================================================= */}

      <Shape
        className={`
          right-[3%]
          top-[2%]
          h-[330px]
          w-[330px]
          rounded-full
          border

          ${
            isCay
              ? "border-[#7D72DF]/20"
              : isFocus
              ? "border-[#739BFF]/20"
              : "border-black/[0.07]"
          }

          animate-[slowSpin_28s_linear_infinite]
        `}
      />

      <Shape
        className={`
          right-[8%]
          top-[10%]
          h-[250px]
          w-[390px]
          rounded-[50%]
          border
          rotate-[28deg]

          ${
            isCay
              ? "border-[#8C82E8]/15"
              : isFocus
              ? "border-[#7198FF]/15"
              : "border-black/[0.05]"
          }

          animate-[slowSpinReverse_22s_linear_infinite]
        `}
      />

      <Shape
        className={`
          right-[16%]
          top-[19%]
          h-[150px]
          w-[270px]
          rounded-[50%]
          border
          -rotate-[20deg]

          ${
            isCay
              ? "border-[#8C82E8]/10"
              : isFocus
              ? "border-[#7198FF]/10"
              : "border-black/[0.04]"
          }
        `}
      />

      {/* =================================================
          LEFT ORBIT
      ================================================= */}

      <Shape
        className={`
          left-[-8%]
          bottom-[5%]
          h-[250px]
          w-[430px]
          rounded-[50%]
          border
          rotate-[-25deg]

          ${
            isCay
              ? "border-[#8C82E8]/15"
              : isFocus
              ? "border-[#7198FF]/12"
              : "border-black/[0.05]"
          }

          animate-[slowSpinReverse_32s_linear_infinite]
        `}
      />

      {/* =================================================
          FLOATING CIRCLES
      ================================================= */}

      <Shape
        className={`
          left-[20%]
          top-[9%]
          h-5
          w-5
          rounded-full

          ${
            isCay
              ? "bg-[#8378E7]/30"
              : isFocus
              ? "bg-[#6E98FF]/30"
              : "bg-black/10"
          }

          animate-[floatOne_7s_ease-in-out_infinite]
        `}
      />

      <Shape
        className={`
          left-[7%]
          bottom-[20%]
          h-3
          w-3
          rounded-full

          ${
            isCay
              ? "bg-[#9D91FF]/25"
              : isFocus
              ? "bg-[#6E98FF]/25"
              : "bg-black/10"
          }

          animate-[floatTwo_8s_ease-in-out_infinite]
        `}
      />

      <Shape
        className={`
          right-[30%]
          bottom-[13%]
          h-4
          w-4
          rounded-full

          ${
            isCay
              ? "bg-[#7569D8]/25"
              : isFocus
              ? "bg-[#6E98FF]/25"
              : "bg-black/10"
          }

          animate-[floatThree_9s_ease-in-out_infinite]
        `}
      />

      <Shape
        className="
          left-[47%]
          top-[8%]
          h-2
          w-2
          rounded-full
          bg-black/10
          animate-[floatOne_6s_ease-in-out_infinite]
        "
      />

      {/* =================================================
          DIAMOND 01
      ================================================= */}

      <Shape
        className={`
          left-[11%]
          top-[27%]
          h-14
          w-14
          rotate-45
          rounded-[12px]
          border
          backdrop-blur-sm

          ${
            isCay
              ? "border-[#8176E2]/15 bg-[#EEEAFE]/25"
              : isFocus
              ? "border-[#7198FF]/15 bg-[#EAF1FF]/30"
              : "border-black/[0.06] bg-white/20"
          }

          animate-[floatTwo_10s_ease-in-out_infinite]
        `}
      />

      {/* =================================================
          DIAMOND 02
      ================================================= */}

      <Shape
        className={`
          right-[5%]
          bottom-[27%]
          h-20
          w-20
          rotate-12
          rounded-[22px]
          border

          ${
            isCay
              ? "border-[#8176E2]/12 bg-white/20"
              : isFocus
              ? "border-[#7198FF]/12 bg-white/20"
              : "border-black/[0.05]"
          }

          animate-[floatThree_11s_ease-in-out_infinite]
        `}
      />

      {/* =================================================
          SMALL CUBES
      ================================================= */}

      <Shape
        className={`
          left-[31%]
          bottom-[5%]
          h-12
          w-12
          rotate-[18deg]
          rounded-[10px]
          border

          ${
            isCay
              ? "border-[#8B80E7]/15"
              : isFocus
              ? "border-[#7198FF]/15"
              : "border-black/[0.06]"
          }

          animate-[floatOne_12s_ease-in-out_infinite]
        `}
      />

      <Shape
        className={`
          right-[35%]
          top-[5%]
          h-9
          w-9
          rotate-[35deg]
          rounded-[9px]
          border

          ${
            isCay
              ? "border-[#8B80E7]/12"
              : isFocus
              ? "border-[#7198FF]/12"
              : "border-black/[0.05]"
          }

          animate-[floatTwo_9s_ease-in-out_infinite]
        `}
      />

      {/* =================================================
          CROSS 01
      ================================================= */}

      <Shape
        className={`
          left-[38%]
          top-[24%]
          h-7
          w-7

          ${
            isCay
              ? "text-[#8277E4]/20"
              : isFocus
              ? "text-[#7198FF]/20"
              : "text-black/10"
          }

          animate-[floatThree_8s_ease-in-out_infinite]
        `}
      >
        <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
      </Shape>

      {/* =================================================
          CROSS 02
      ================================================= */}

      <Shape
        className={`
          right-[22%]
          bottom-[22%]
          h-5
          w-5

          ${
            isCay
              ? "text-[#8277E4]/15"
              : isFocus
              ? "text-[#7198FF]/15"
              : "text-black/10"
          }
        `}
      >
        <span className="absolute left-1/2 top-0 h-full w-px bg-current" />
        <span className="absolute left-0 top-1/2 h-px w-full bg-current" />
      </Shape>

      {/* =================================================
          FLOATING PILLS
      ================================================= */}

      <Shape
        className={`
          left-[16%]
          bottom-[12%]
          h-3
          w-20
          rotate-[-20deg]
          rounded-full

          ${
            isCay
              ? "bg-[#8A80E7]/12"
              : isFocus
              ? "bg-[#7198FF]/12"
              : "bg-black/[0.05]"
          }
        `}
      />

      <Shape
        className={`
          right-[17%]
          top-[32%]
          h-2
          w-14
          rotate-[35deg]
          rounded-full

          ${
            isCay
              ? "bg-[#8A80E7]/15"
              : isFocus
              ? "bg-[#7198FF]/15"
              : "bg-black/[0.05]"
          }
        `}
      />

      {/* =================================================
          CONSTELLATION
      ================================================= */}

      <div className="absolute left-[27%] top-[17%] flex gap-3">
        {[1, 2, 3].map((dot) => (
          <span
            key={dot}
            className={`
              h-1.5
              w-1.5
              rounded-full

              ${
                isCay
                  ? "bg-[#8277E4]/20"
                  : isFocus
                  ? "bg-[#7198FF]/20"
                  : "bg-black/10"
              }
            `}
          />
        ))}
      </div>

      {/* =================================================
          CONNECTING LINE
      ================================================= */}

      <Shape
        className={`
          left-[20%]
          top-[34%]
          h-px
          w-[180px]
          rotate-[18deg]

          ${
            isCay
              ? "bg-[#8277E4]/10"
              : isFocus
              ? "bg-[#7198FF]/10"
              : "bg-black/[0.04]"
          }
        `}
      />

      {/* =================================================
          CAYTUNES EXTRA SHAPE
      ================================================= */}

      {isCay && (
        <>
          <Shape
            className="
              right-[25%]
              bottom-[10%]
              h-10
              w-10
              rounded-full
              bg-[#A79EFF]/15
              blur-md
              animate-[floatOne_8s_ease-in-out_infinite]
            "
          />

          <Shape
            className="
              left-[50%]
              bottom-[8%]
              h-24
              w-24
              rounded-full
              border
              border-[#8176E2]/10
              animate-[slowSpin_20s_linear_infinite]
            "
          />
        </>
      )}

      {/* =================================================
          FOCUSLIST EXTRA SHAPE
      ================================================= */}

      {isFocus && (
        <>
          <Shape
            className="
              left-[13%]
              top-[17%]
              h-7
              w-7
              rounded-full
              bg-[#E7B18A]/20
              blur-[1px]
              animate-[floatTwo_7s_ease-in-out_infinite]
            "
          />

          <Shape
            className="
              right-[40%]
              bottom-[7%]
              h-24
              w-24
              rounded-[28px]
              border
              border-[#7198FF]/10
              rotate-[-15deg]
              animate-[floatOne_10s_ease-in-out_infinite]
            "
          />
        </>
      )}

      {/* =================================================
          FUTURE EXTRA SHAPES
      ================================================= */}

      {isFuture && (
        <>
          <Shape
            className="
              left-[42%]
              top-[5%]
              h-28
              w-28
              rounded-full
              border-[12px]
              border-black/[0.025]
              animate-[slowSpin_25s_linear_infinite]
            "
          />

          <Shape
            className="
              right-[20%]
              top-[40%]
              h-14
              w-14
              rounded-full
              border
              border-black/[0.07]
              animate-[floatTwo_9s_ease-in-out_infinite]
            "
          />
        </>
      )}
    </div>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export default function SelectedWork() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeMobile, setActiveMobile] = useState(0);

  /* =======================================================
     MOBILE CENTER DETECTION
  ======================================================= */

  useEffect(() => {
    const cards = document.querySelectorAll(
      "[data-project-card]"
    );

    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleCards = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => {
            const aDistance = Math.abs(
              a.boundingClientRect.top +
                a.boundingClientRect.height / 2 -
                window.innerHeight / 2
            );

            const bDistance = Math.abs(
              b.boundingClientRect.top +
                b.boundingClientRect.height / 2 -
                window.innerHeight / 2
            );

            return aDistance - bDistance;
          });

        if (visibleCards.length > 0) {
          const closestCard = visibleCards[0];

          setActiveMobile(
            Number(closestCard.target.dataset.index)
          );
        }
      },
      {
        threshold: [0.4, 0.6, 0.8],
        rootMargin: "-20% 0px -20% 0px",
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
    };
  }, []);

  /* =======================================================
     DESKTOP / MOBILE ACTIVE PROJECT
  ======================================================= */

  const activeIndex =
    activeProject !== null
      ? activeProject
      : activeMobile;

  const activeTheme =
    activeIndex !== null
      ? projects[activeIndex].theme
      : null;

  /* =======================================================
     BACKGROUND COLORS
  ======================================================= */

  const backgroundColor =
    activeTheme === "cay"
      ? "#EEEAFE"
      : activeTheme === "focus"
      ? "#EEF4FF"
      : activeTheme === "future"
      ? "#F1F1EF"
      : "#F7F7F5";

  return (
    <section
      className="relative overflow-hidden px-6 py-20 transition-colors duration-700 ease-out md:px-10 md:py-24 lg:px-16"
      style={{
        backgroundColor,
      }}
      onMouseLeave={() => {
        setActiveProject(null);
      }}
    >
      {/* =================================================
          ABSTRACT BACKGROUND
      ================================================= */}

      <FloatingShapes theme={activeTheme} />

      {/* Soft readability layer */}

      <div className="pointer-events-none absolute inset-0 bg-white/[0.18]" />

      {/* =================================================
          CONTENT
      ================================================= */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <div className="mb-12 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
              Selected Work
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.045em] md:text-5xl">
              Things I&apos;ve designed.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45">
            A collection of products, interfaces, and experiments
            where design meets technology.
          </p>
        </div>

        {/* =================================================
            PROJECT CARDS
        ================================================= */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => {
            const isActive =
              activeIndex === index;

            return (
              <Link
                href={project.href}
                key={project.number}
                onMouseEnter={() => {
                  setActiveProject(index);
                }}
                className="group"
              >
                <article
                  data-project-card
                  data-index={index}
                  className={`
                    relative
                    min-h-[330px]
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-black/[0.06]
                    p-6
                    backdrop-blur-xl

                    transition-all
                    duration-500
                    ease-out

                    ${
                      isActive
                        ? "bg-white/85 shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
                        : "bg-white/65"
                    }

                    md:hover:-translate-y-2
                    md:hover:bg-white/80
                    md:hover:shadow-[0_30px_80px_rgba(0,0,0,0.07)]
                  `}
                >
                  {/* =================================================
                      TOP
                  ================================================= */}

                  <div className="flex items-start justify-between">
                    <span className="text-xs font-medium text-black/30">
                      {project.number}
                    </span>

                    <span
                      className={`
                        flex
                        h-9
                        w-9
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
                            : ""
                        }

                        md:group-hover:rotate-45
                        md:group-hover:bg-black
                        md:group-hover:text-white
                      `}
                    >
                      ↗
                    </span>
                  </div>

                  {/* =================================================
                      PROJECT CONTENT
                  ================================================= */}

                  <div className="mt-16">
                    <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.18em] text-black/35">
                      {project.category}
                    </p>

                    <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                      {project.title}
                    </h3>

                    <p className="mt-4 max-w-sm text-sm leading-6 text-black/50">
                      {project.description}
                    </p>
                  </div>

                  {/* =================================================
                      TAGS
                  ================================================= */}

                  <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-black/[0.06] bg-white/60 px-3 py-1.5 text-[10px] font-medium text-black/45 backdrop-blur-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* =================================================
                      MOBILE ACTIVE GLOW
                  ================================================= */}

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
                          : "opacity-0"
                      }

                      md:group-hover:opacity-100
                    `}
                  />

                  {/* =================================================
                      MOBILE ACTIVE INDICATOR
                  ================================================= */}

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

                      ${
                        isActive
                          ? "w-16 opacity-20"
                          : "w-0 opacity-0"
                      }

                      md:hidden
                    `}
                  />
                </article>
              </Link>
            );
          })}
        </div>
      </div>

      {/* =================================================
          ANIMATIONS
      ================================================= */}

      <style jsx>{`
        @keyframes floatOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(10px, -18px, 0) rotate(4deg);
          }
        }

        @keyframes floatTwo {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(-14px, 12px, 0) rotate(-5deg);
          }
        }

        @keyframes floatThree {
          0%,
          100% {
            transform: translate3d(0, 0, 0) rotate(0deg);
          }

          50% {
            transform: translate3d(8px, 10px, 0) rotate(7deg);
          }
        }

        @keyframes driftOne {
          0%,
          100% {
            transform: translate3d(0, 0, 0) scale(1);
          }

          50% {
            transform: translate3d(25px, -15px, 0)
              scale(1.06);
          }
        }

        @keyframes morph {
          0%,
          100% {
            border-radius: 45% 55% 60% 40%;
            transform: translate(0, 0) rotate(0deg);
          }

          33% {
            border-radius: 60% 40% 45% 55%;
            transform: translate(-18px, -10px)
              rotate(5deg);
          }

          66% {
            border-radius: 40% 60% 55% 45%;
            transform: translate(10px, 15px)
              rotate(-4deg);
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