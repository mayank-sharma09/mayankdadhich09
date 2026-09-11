import Link from "next/link";

// import SelectedWork from "../components/SelectedWork";

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

      {/* <SelectedWork /> */}

      {/* =================================================
          PROCESS
      ================================================= */}

      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            {/* Left */}

            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                How I Work
              </p>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Think first.
                <br />
                Design with purpose.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-6 text-black/45">
                Good design is not only about making something look good.
                It&apos;s about understanding the problem, exploring
                possibilities, and creating an experience that makes sense.
              </p>
            </div>

            {/* Right */}

            <div className="border-t border-black/10">
              {[
                [
                  "01",
                  "Discover",
                  "Understand the people, problem, and context.",
                ],
                [
                  "02",
                  "Define",
                  "Find the real problem worth solving.",
                ],
                [
                  "03",
                  "Design",
                  "Explore ideas and shape the experience.",
                ],
                [
                  "04",
                  "Prototype",
                  "Turn ideas into something people can experience.",
                ],
                [
                  "05",
                  "Build",
                  "Bring the final experience closer to reality.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="
                    grid
                    grid-cols-[40px_1fr]
                    gap-4
                    border-b
                    border-black/10
                    py-6

                    md:grid-cols-[50px_120px_1fr]
                  "
                >
                  <span className="text-xs text-black/30">
                    {number}
                  </span>

                  <h3 className="font-medium">{title}</h3>

                  <p className="col-start-2 text-sm leading-6 text-black/45 md:col-start-3">
                    {description}
                  </p>
                </div>
              ))}
            </div>
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