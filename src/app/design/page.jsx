"use client";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import SelectedWork from "../components/SelectedWork";

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-[#000000] text-[#111111]">
      {/* =================================================
          HERO
      ================================================= */}

    <section className="relative flex min-h-screen items-start justify-center overflow-hidden bg-[#F7F7F5] md:items-center">

        {/* DESKTOP VIDEO */}
        <div className="absolute inset-0 hidden md:block">
          <video
            src="/designPage.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        </div>

        {/* MOBILE VIDEO  */}


        {/* TEXT */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pt-50 sm:px-10 sm:pt-16 md:px-12 md:py-20 lg:px-16">
  <div className="mx-auto max-w-6xl  text-center ">

    {/* Small intro */}
    <p
      className="mayank-hero-text-up mb-4 text-[9px] font-medium uppercase leading-[1.6] tracking-[0.16em] text-black/40 sm:mb-6 sm:text-xs sm:tracking-[0.18em] md:text-sm"
      style={{ animationDelay: "0ms" }}
    >
      Product Design
    </p>

    {/* Main heading + mobile shapes */}
    <div className="relative mx-auto max-w-5xl">

      {/* MOBILE FLOATING SHAPES */}
      <div className="pointer-events-none absolute inset-0 md:hidden">

        {/* Top left dot */}
        <span className="hero-shape hero-shape-1 absolute left-[6%] top-[5%] h-2.5 w-2.5 rounded-full bg-black/10" />
           <span className="hero-shape hero-shape-1 absolute left-[10%] top-[5%] h-2.5 w-2.5 rounded-full bg-black/10" />
            <span className="hero-shape hero-shape-1 absolute left-[60%] top-[30%] h-2.5 w-2.5 rounded-full bg-black/10" />
        {/* Top right ring */}
        <span className="hero-shape hero-shape-2 absolute right-[6%] top-[12%] h-7 w-7 rounded-full border border-black/10" />

        {/* Left square */}
        <span className="hero-shape hero-shape-3 absolute left-[8%] top-[48%] h-4 w-4 rotate-12 rounded-[5px] border border-black/10" />

        {/* Right diamond */}
        <span className="hero-shape hero-shape-4 absolute right-[8%] top-[55%] h-3.5 w-3.5 rotate-45 bg-black/[0.06]" />

        {/* Bottom ring */}
        <span className="hero-shape hero-shape-5 absolute bottom-[2%] left-[22%] h-5 w-5 rounded-full border border-black/10" />

        {/* Bottom dot */}
        <span className="hero-shape hero-shape-6 absolute bottom-[7%] right-[23%] h-1.5 w-1.5 rounded-full bg-black/15" />

      </div>

      <h1
        className="mayank-hero-text-up relative z-10 text-[42px] font-semibold leading-[1] tracking-[-0.05em] text-black sm:text-[46px] md:text-7xl lg:text-[76px] xl:text-[88px]"
        style={{ animationDelay: "120ms" }}
      >
        Designing things
        <br />
        Worth experiencing.
      </h1>

    </div>

  </div>
</div>

        {/* HERO-ONLY ANIMATION */}
        <style>{`
  .hero-shape {
  animation: heroShapeFloat 5s ease-in-out infinite;
}

.hero-shape-1 {
  animation-delay: 0s;
}

.hero-shape-2 {
  animation-delay: 1s;
}

.hero-shape-3 {
  animation-delay: 2s;
}

.hero-shape-4 {
  animation-delay: 0.7s;
}

.hero-shape-5 {
  animation-delay: 1.5s;
}

.hero-shape-6 {
  animation-delay: 2.5s;
}

@keyframes heroShapeFloat {
  0%,
  100% {
    transform: translate3d(0, 0, 0) rotate(0deg);
  }

  50% {
    transform: translate3d(0, -12px, 0) rotate(8deg);
  }
}
    .mayank-hero-text-up {
      opacity: 0;
      transform: translateY(20px);
      animation: mayankHeroTextUp 0.8s ease-out forwards;
    }

    @keyframes mayankHeroTextUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }

      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .mayank-hero-text-up {
        opacity: 1;
        transform: none;
        animation: none;
      }
    }
  `}</style>

      </section>

      {/* =================================================
          SELECTED WORK
      ================================================= */}

      <SelectedWork />

      {/* =================================================
    HOW I WORK
================================================= */}

      <section className="relative bg-[#F7F7F5] px-6 py-24 md:py-32 lg:px-16">
        <div className="mx-auto max-w-4xl text-center">

          {/* Section label */}
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
            How I Work
          </p>

          {/* Main statement */}
          <h2 className="mx-auto mt-8 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.045em] md:text-6xl">
            I start with curiosity.
          </h2>

          {/* Paragraph 1 */}
          <p className="mx-auto mt-10 max-w-2xl text-base leading-8 text-black/50 md:text-lg md:leading-9">
            Before thinking about screens or visuals, I try to understand the
            problem, the people experiencing it, and what actually needs to be
            solved. I ask questions, explore possibilities, and let the problem
            shape the direction.
          </p>

          {/* Paragraph 2 */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-black/50 md:text-lg md:leading-9">
            Once I have a clearer picture, I turn those thoughts into something
            tangible. I sketch, structure, prototype, break things, and try again.
            I care about how an experience feels, but also about whether it makes
            sense and genuinely helps someone.
          </p>

          {/* Paragraph 3 */}
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-black/50 md:text-lg md:leading-9">
            For me, design is never really finished. I keep questioning, refining,
            and learning from what I create. Every project is another opportunity
            to understand people better and make something a little more meaningful.
          </p>


        </div>
      </section>

      {/* =================================================
          CTA
      ================================================= */}

      <section className="px-6 mt-24 pb-24 md:px-10 lg:px-16">
        <div
          className="
            mx-auto
            max-w-7xl
            overflow-hidden
            rounded-[36px]
            bg-[#111111]
            px-6
            py-20
            text-white

            md:px-12
            md:py-28
          "
        >
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
            Let&apos;s Create
          </p>

          <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Have an idea worth building?
            </h2>

            <div className="flex items-center gap-4">
              {/* Let's Talk */}
              <a
                href="mailto:dadhichmayank09@gmail.com"
                className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
              >
                Let's talk
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  ↗
                </span>
              </a>

              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/mayankdadhich._?stkn=a2p4b2c1ZWhwMzlo"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-transparent hover:bg-gradient-to-br hover:from-[#f58529] hover:via-[#dd2a7b] hover:to-[#8134af] hover:text-white"
                >
                  <FaInstagram
                    size={17}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/mayank-sharma-ab0a9b226/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white/40 transition-all duration-300 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                >
                  <FaLinkedinIn
                    size={17}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="px-6 pb-28 md:px-10 md:pb-10 lg:px-16 ">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Mayank Dadhich.</p>

          <p>Designed & built by Mayank Dadhich.</p>
        </div>
      </footer>
    </main>
  );
}