import Link from "next/link";

const stories = [
  {
    number: "01",
    type: "Product Story",
    title: "Bridgr",
    description:
      "A short product advertisement created to show how a traditional library can move from paper and spreadsheets to smarter digital management.",
    tags: ["Ad Film", "Product Story", "Visual Direction"],
    image: "/images/bridgr-preview.jpg",
    className: "md:col-span-2",
  },
  {
    number: "02",
    type: "Character Story",
    title: "Conversations",
    description:
      "Short visual stories built around characters, everyday situations, and the small conversations that make a scene feel alive.",
    tags: ["Characters", "Storytelling", "Direction"],
    image: "/images/character-story.jpg",
    className: "",
  },
  {
    number: "03",
    type: "Narrative",
    title: "The Last Point",
    description:
      "A visual story about ambition, competition, friendship, and the moments that happen beyond the final point.",
    tags: ["2D Story", "Narrative", "Sound"],
    image: "/images/the-last-point.jpg",
    className: "",
  },
];

export default function StoriesPage() {
  return (
    <main className="min-h-screen bg-[#111111] text-white">
      {/* HERO */}
      <section className="px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <p className="mb-7 text-xs font-medium uppercase tracking-[0.2em] text-white/35">
            Visual Storyteller
          </p>

          <div className="max-w-6xl">
            <h1 className="text-5xl font-semibold leading-[0.92] tracking-[-0.055em] md:text-7xl lg:text-[100px]">
              Stories made
              <br />
              to be felt.
            </h1>

            <p className="mt-9 max-w-xl text-base leading-7 text-white/45 md:text-lg">
              I like turning ideas into visual experiences through
              storytelling, motion, sound, characters, and product films.
            </p>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/25">
            <span className="h-px w-10 bg-white/20" />
            Scroll to explore
          </div>
        </div>
      </section>

      {/* SELECTED STORIES */}
      {/* SELECTED STORIES */}
<section className="px-6 pb-28 md:px-10 lg:px-16">
  <div className="mx-auto max-w-7xl">

    {/* Section heading */}
    <div className="mb-8 flex items-end justify-between">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
          Selected Stories
        </p>

        <h2 className="mt-3 text-2xl font-medium tracking-tight md:text-3xl">
          Things I've made.
        </h2>
      </div>

      <span className="hidden text-sm text-white/20 md:block">
        03 Stories
      </span>
    </div>

    {/* FEATURED STORY */}
    <Link
      href="#"
      className="group relative mb-6 block overflow-hidden rounded-[28px] bg-[#1A1A1A]"
    >
      <div className="relative aspect-[16/8] overflow-hidden bg-[#222222]">

        {/* IMAGE PLACEHOLDER */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-lg text-white/25">
              +
            </div>

            <p className="text-sm text-white/25">
              Bridgr Preview
            </p>
          </div>
        </div>

        {/* Ambient glow */}
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-500/10 blur-[90px]" />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Info over image */}
        <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8">
          <p className="text-[10px] uppercase tracking-[0.18em] text-white/40">
            01 / Product Story
          </p>

          <div className="mt-2 flex items-end justify-between gap-4">
            <h3 className="text-4xl font-medium tracking-[-0.04em] md:text-6xl">
              Bridgr
            </h3>

            <span className="hidden rounded-full bg-white/10 px-4 py-2 text-xs text-white/60 backdrop-blur-md md:block">
              View Story ↗
            </span>
          </div>
        </div>

        {/* Play */}
        <div className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 backdrop-blur-md transition-all duration-500 group-hover:scale-110 group-hover:bg-white group-hover:text-black">
          ▶
        </div>
      </div>
    </Link>

    {/* SMALL STORIES */}
    <div className="grid gap-6 md:grid-cols-2">

      {/* Character Story */}
      <Link
        href="#"
        className="group relative overflow-hidden rounded-[28px] bg-[#1A1A1A]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#222222]">

          {/* IMAGE PLACEHOLDER */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg text-white/25">
                +
              </div>

              <p className="text-sm text-white/25">
                Character Story
              </p>
            </div>
          </div>

          <div className="absolute -left-20 -top-20 h-60 w-60 rounded-full bg-purple-500/10 blur-[80px]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              02 / Character Story
            </p>

            <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">
              Conversations
            </h3>
          </div>

          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 backdrop-blur-md">
            ▶
          </div>
        </div>
      </Link>

      {/* Narrative */}
      <Link
        href="#"
        className="group relative overflow-hidden rounded-[28px] bg-[#1A1A1A]"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[#222222]">

          {/* IMAGE PLACEHOLDER */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-lg text-white/25">
                +
              </div>

              <p className="text-sm text-white/25">
                The Last Point
              </p>
            </div>
          </div>

          <div className="absolute -bottom-20 -right-20 h-60 w-60 rounded-full bg-blue-500/10 blur-[80px]" />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[10px] uppercase tracking-[0.18em] text-white/35">
              03 / Narrative
            </p>

            <h3 className="mt-2 text-3xl font-medium tracking-[-0.035em]">
              The Last Point
            </h3>
          </div>

          <div className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-xs text-white/60 backdrop-blur-md">
            ▶
          </div>
        </div>
      </Link>

    </div>
  </div>
</section>

      {/* STORY TYPES */}
      <section className="border-t border-white/10 px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                What I Create
              </p>

              <h2 className="mt-5 max-w-xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-5xl">
                Different formats.
                <br />
                One purpose.
              </h2>
            </div>

            <div>
              {[
                [
                  "01",
                  "Product Films",
                  "Short advertisements that make digital products easier to understand and more memorable.",
                ],
                [
                  "02",
                  "Character Stories",
                  "Characters, conversations, and everyday moments turned into visual narratives.",
                ],
                [
                  "03",
                  "Narrative Films",
                  "Stories driven by emotion, atmosphere, sound, and visual direction.",
                ],
                [
                  "04",
                  "Visual Experiments",
                  "Small creative experiments exploring motion, composition, sound, and ideas.",
                ],
              ].map(([number, title, description]) => (
                <div
                  key={number}
                  className="border-t border-white/10 py-6"
                >
                  <div className="grid grid-cols-[40px_1fr] gap-4">
                    <span className="text-xs text-white/25">
                      {number}
                    </span>

                    <div>
                      <h3 className="text-lg font-medium">
                        {title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-white/35">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="px-6 py-28 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[36px] bg-[#F4F3EF] px-6 py-20 text-black md:px-12 md:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-black/30">
              My Approach
            </p>

            <h2 className="mt-8 max-w-5xl text-4xl font-semibold leading-[1.02] tracking-[-0.045em] md:text-6xl">
              I don't just want to show
              <br className="hidden md:block" />
              something beautiful.
              <br />
              I want to make people feel something.
            </h2>

            <p className="mt-8 max-w-xl text-sm leading-6 text-black/45 md:text-base">
              Whether it is a product advertisement, a character
              conversation, or a personal story, I care about the idea
              behind the visuals and the emotion they leave behind.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl border-t border-white/10 pt-20">
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
            Have a story?
          </p>

          <div className="mt-6 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.04em] md:text-6xl">
              Let's turn an idea into something people remember.
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
        <div className="mx-auto flex max-w-7xl flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm font-medium">Mayank.</p>

          <p className="text-xs text-white/25">
            Product Design · Frontend · Visual Storytelling
          </p>
        </div>
      </footer>
    </main>
  );
}