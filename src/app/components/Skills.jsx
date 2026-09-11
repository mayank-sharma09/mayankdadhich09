"use client";

const skillGroups = [
  {
    number: "01",
    title: "Designing",
    skills: [
      "Product Design",
      "UI/UX",
      "User Flows",
      "Information Architecture",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Figma",
    ],
  },
  {
    number: "02",
    title: "Building",
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "Tailwind CSS",
      "Frontend Development",
      "Responsive Design",
    ],
  },
  {
    number: "03",
    title: "Telling Stories",
    skills: [
      "Visual Storytelling",
      "Product Ads",
      "Motion",
      "Video",
      "Sound",
      "Creative Direction",
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#F7F7F5] px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-16 max-w-2xl md:mb-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.2em] text-black/40">
            Skills
          </p>

          <h2 className="text-4xl font-medium tracking-[-0.045em] text-[#111111] md:text-5xl lg:text-6xl">
            Designing,
            <br />
            building & telling.
          </h2>

          <p className="mt-6 max-w-xl text-base leading-7 text-black/55 md:text-lg">
            A mix of design, technology, and storytelling that helps me turn
            ideas into experiences.
          </p>
        </div>

        {/* Skills */}
        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {skillGroups.map((group) => (
            <div
              key={group.number}
              className="grid gap-8 py-10 md:grid-cols-[100px_1fr_2fr] md:items-start md:gap-12 md:py-14"
            >
              {/* Number */}
              <div className="text-xs font-medium tracking-[0.15em] text-black/30">
                {group.number}
              </div>

              {/* Title */}
              <div>
                <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#111111] md:text-4xl">
                  {group.title}
                </h3>
              </div>

              {/* Tags */}
<div className="flex flex-wrap gap-2.5 md:gap-3">
  {group.skills.map((skill) => (
    <span
      key={skill}
      className="
        rounded-full
        border border-black/[0.08]
        bg-white/70
        px-4 py-2.5
        text-sm
        font-medium
        leading-none
        text-black/65
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-white
        hover:text-black
        md:px-6
        md:py-3.5
        md:text-base
      "
    >
      {skill}
    </span>
  ))}
</div>
            </div>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col gap-4 md:mt-20 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xl text-2xl font-medium leading-tight tracking-[-0.03em] text-[#111111] md:text-3xl">
            I&apos;m constantly learning, experimenting, and finding better
            ways to make things.
          </p>

          <span className="text-xs uppercase tracking-[0.15em] text-black/35">
            Learning · Creating · Improving
          </span>
        </div>

      </div>
    </section>
  );
}