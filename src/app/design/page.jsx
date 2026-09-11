import Link from "next/link";

import SelectedWork from "../components/SelectedWork";

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#111111]">
      {/* =================================================
          HERO
      ================================================= */}

      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-24 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Product Design
          </p>

          <div className="max-w-5xl">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.055em] md:text-7xl lg:text-[96px]">
              Designing things
              <br />
              worth experiencing.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-black/50 md:text-lg">
              I enjoy turning ideas into thoughtful digital experiences —
              from understanding the problem to designing, prototyping,
              and building the final product.
            </p>
          </div>
        </div>
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

    {/* Small closing detail */}
    <div className="mt-12 flex items-center justify-center gap-3">
      <span className="h-px w-8 bg-black/15" />

      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-black/30">
        Curious · Creating · Improving
      </span>

      <span className="h-px w-8 bg-black/15" />
    </div>

  </div>
</section>

      {/* =================================================
          CTA
      ================================================= */}

      <section className="px-6 pb-24 md:px-10 lg:px-16">
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

            <Link
              href="/#contact"
              className="
                group
                flex
                w-fit
                items-center
                gap-3
                rounded-full
                bg-white
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition-transform
                duration-300
                hover:scale-105
              "
            >
              Let&apos;s talk

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* =================================================
          FOOTER
      ================================================= */}

      <footer className="px-6 pb-28 md:px-10 md:pb-10 lg:px-16">
        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            gap-4
            border-t
            border-black/10
            pt-6

            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          <p className="text-sm font-medium">
            Mayank.
          </p>

          <p className="text-xs text-black/35">
            Product Design · Frontend · Visual Storytelling
          </p>
        </div>
      </footer>
    </main>
  );
}