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

     <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#F7F7F5]">

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

  {/* MOBILE VIDEO 
  <div className="absolute inset-0 block md:hidden">
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
  </div> */}

  {/* TEXT */}
  <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-10 md:px-12 lg:px-16">
    <div className="mx-auto max-w-6xl text-center">

      {/* Small intro */}
      <p
        className="mayank-hero-text-up mb-5 text-[10px] font-medium uppercase leading-[1.6] tracking-[0.16em] text-black/40 sm:mb-7 sm:text-xs sm:tracking-[0.18em] md:text-sm"
        style={{ animationDelay: "0ms" }}
      >
        Product Design
      </p>

      {/* Main heading */}
      <h1
        className="mayank-hero-text-up mx-auto max-w-5xl text-[42px] font-semibold leading-[0.98] tracking-[-0.055em] text-black sm:text-[52px] md:text-7xl lg:text-[76px] xl:text-[88px]"
        style={{ animationDelay: "120ms" }}
      >
        Designing things
        <br />
        Worth experiencing.
      </h1>

      {/* Buttons */}
      <div
        className="mayank-hero-text-up mt-8 flex flex-wrap items-center justify-center gap-3 sm:mt-10"
        style={{ animationDelay: "240ms" }}
      >
        <a
          href="#work"
          className="rounded-full bg-[#111111] px-5 py-3 text-xs font-medium text-white transition-all duration-300 hover:-translate-y-1 sm:px-6 sm:py-3.5 sm:text-sm"
        >
          Explore my work ↓
        </a>

        <a
          href="/about"
          className="rounded-full border border-black/10 bg-white/30 px-5 py-3 text-xs font-medium text-black/60 backdrop-blur-md transition-all duration-300 hover:border-black/20 hover:bg-white/60 hover:text-black sm:px-6 sm:py-3.5 sm:text-sm"
        >
          More about me ↗
        </a>
      </div>

    </div>
  </div>

  {/* HERO-ONLY ANIMATION */}
  <style>{`
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
                    href="https://www.instagram.com/YOUR_USERNAME"
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
                   href="https://www.instagram.com/mayankdadhich._?stkn=a2p4b2c1ZWhwMzlo"
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