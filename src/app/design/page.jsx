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
    cardClass: "bg-[#EEEAFE]",
    imageClass: "bg-white/45",
    ambient: (
      <>
        <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-[420px] w-[420px] rounded-full bg-cyan-400/20 blur-[100px]" />
      </>
    ),
    image: "/images/caytunes-preview.png",
  },
  {
    number: "02",
    category: "Product Design + Frontend",
    title: "FocusList",
    description:
      "A focused task management experience built to make planning feel simple, clear, and personal.",
    tags: ["UI/UX", "Frontend", "React"],
    href: "/design/focuslist",
    cardClass: "bg-[#F1F5F2]",
    imageClass: "bg-white/70",
    ambient: (
      <>
        <div className="absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full bg-blue-400/15 blur-[100px]" />
        <div className="absolute -bottom-32 -left-32 h-[360px] w-[360px] rounded-full bg-orange-300/10 blur-[100px]" />
      </>
    ),
    image: "/images/focuslist-preview.png",
  },
];

export default function DesignPage() {
  return (
    <main className="min-h-screen bg-[#F7F7F5] text-[#111111]">
      {/* HERO */}
      <section className="px-6 pb-20 pt-32 md:px-10 md:pb-28 md:pt-40 lg:px-16">
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

      {/* SELECTED WORK */}
      <section className="px-6 pb-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-end justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                Selected Work
              </p>

              <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
                A few things I've designed.
              </h2>
            </div>

            <span className="hidden text-sm text-black/30 md:block">
              02 Projects
            </span>
          </div>

          <div className="space-y-8">
            {projects.map((project) => (
              <Link
                href={project.href}
                key={project.title}
                className={`group relative block min-h-[620px] overflow-hidden rounded-[36px] ${project.cardClass} p-6 transition-transform duration-500 hover:-translate-y-1 md:min-h-[700px] md:p-10`}
              >
                {/* Ambient gradients */}
                {project.ambient}

                <div className="relative z-10 flex h-full min-h-[568px] flex-col md:min-h-[620px]">
                  {/* CARD HEADER */}
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-black/35">
                        {project.number} / {project.category}
                      </p>

                      <h3 className="mt-4 text-5xl font-semibold tracking-[-0.05em] md:text-7xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/60 text-lg backdrop-blur-md transition-transform duration-500 group-hover:rotate-45">
                      ↗
                    </div>
                  </div>

                  {/* IMAGE PLACEHOLDER */}
                  <div
                    className={`relative mx-auto mt-12 flex w-full max-w-5xl flex-1 items-center justify-center overflow-hidden rounded-[30px] ${project.imageClass} backdrop-blur-md`}
                  >
                    {/* 
                      Replace these placeholders with your project images.

                      CayTunes:
                      /images/caytunes-preview.png

                      FocusList:
                      /images/focuslist-preview.png
                    */}

                    <div className="flex h-full min-h-[330px] w-full items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/60 text-2xl shadow-sm">
                          +
                        </div>

                        <p className="text-sm font-medium text-black/30">
                          {project.title} Preview
                        </p>

                        <p className="mt-1 text-xs text-black/20">
                          Add project image here
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* CARD FOOTER */}
                  <div className="mt-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                    <p className="max-w-lg text-sm leading-6 text-black/50 md:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/50 px-3 py-1.5 text-xs text-black/45 backdrop-blur-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-20">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/35">
                How I Work
              </p>

              <h2 className="mt-5 max-w-lg text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Think first.
                <br />
                Design with purpose.
              </h2>
            </div>

            <div className="border-t border-black/10">
              {[
                ["01", "Discover", "Understand the people, problem, and context."],
                ["02", "Define", "Find the real problem worth solving."],
                ["03", "Design", "Explore ideas and shape the experience."],
                ["04", "Prototype", "Turn ideas into something people can experience."],
                ["05", "Build", "Bring the final experience closer to reality."],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="grid grid-cols-[40px_1fr] gap-4 border-b border-black/10 py-6 md:grid-cols-[50px_120px_1fr]"
                >
                  <span className="text-xs text-black/30">{number}</span>

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

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[36px] bg-[#111111] px-6 py-20 text-white md:px-12 md:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/35">
            Let's Create
          </p>

          <div className="mt-6 flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Have an idea worth building?
            </h2>

            <Link
              href="/#contact"
              className="group flex w-fit items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition-transform duration-300 hover:scale-105"
            >
              Let's talk
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 pb-28 md:px-10 md:pb-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-black/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium">Mayank.</p>

          <p className="text-xs text-black/35">
            Product Design · Frontend · Visual Storytelling
          </p>
        </div>
      </footer>
    </main>
  );
}