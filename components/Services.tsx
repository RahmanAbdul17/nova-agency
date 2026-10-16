
const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Fast, responsive websites engineered to turn your ideas into powerful digital experiences.",
    tags: ["Next.js", "React", "Performance"],
    type: "web",
  },
  {
    number: "02",
    title: "UI/UX Design",
    description:
      "Intuitive interfaces and thoughtful user journeys that make every interaction feel effortless.",
    tags: ["Web Design", "Prototyping", "Design Systems"],
    type: "design",
  },
  {
    number: "03",
    title: "Creative Development",
    description:
      "Distinctive digital experiences with refined motion, expressive visuals, and memorable details.",
    tags: ["Animation", "Interactions", "Motion"],
    type: "creative",
  },
];

function ServiceVisual({ type }: { type: string }) {
  if (type === "web") {
    return (
      <div className="visual-web relative mx-auto w-full max-w-[310px]">
        <div className="overflow-hidden rounded-xl border border-white/15 bg-[#0A0D10] shadow-2xl transition-transform duration-500 group-hover:-translate-y-2 group-hover:rotate-[-2deg]">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-3 py-3">
            <span className="h-2 w-2 rounded-full bg-red-400" />
            <span className="h-2 w-2 rounded-full bg-yellow-400" />
            <span className="h-2 w-2 rounded-full bg-green-400" />
            <div className="ml-3 h-4 flex-1 rounded bg-white/5" />
          </div>
          <div className="space-y-4 p-5">
            <div className="h-1.5 w-1/3 rounded bg-cyan-300" />
            <div className="h-5 w-4/5 rounded bg-white/90" />
            <div className="h-5 w-3/5 rounded bg-white/25" />
            <div className="h-2 w-full rounded bg-white/10" />
            <div className="h-2 w-4/5 rounded bg-white/10" />
            <div className="flex items-end gap-3 pt-2">
              <div className="h-16 flex-1 rounded bg-gradient-to-br from-cyan-300/40 to-blue-600/10" />
              <div className="h-24 flex-1 rounded bg-gradient-to-br from-white/15 to-cyan-400/10" />
              <div className="h-12 flex-1 rounded bg-cyan-300/20" />
            </div>
          </div>
        </div>
        <div className="absolute -right-3 -top-4 rounded-lg border border-cyan-300/30 bg-[#112125] px-3 py-2 text-xs text-cyan-200 shadow-xl">
          Built for speed ↗
        </div>
      </div>
    );
  }

  if (type === "design") {
    return (
      <div className="relative mx-auto flex h-44 w-full max-w-[310px] items-center justify-center">
        <div className="absolute h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="relative w-40 -rotate-6 rounded-xl border border-white/15 bg-[#171B20] p-3 shadow-xl transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-105">
          <div className="mb-3 flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-cyan-300" />
            <div className="space-y-1">
              <div className="h-1.5 w-16 rounded bg-white/70" />
              <div className="h-1 w-10 rounded bg-white/20" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="h-14 rounded-md bg-gradient-to-br from-cyan-300/50 to-blue-500/10" />
            <div className="h-14 rounded-md bg-white/5" />
          </div>
          <div className="mt-3 h-2 w-4/5 rounded bg-white/20" />
          <div className="mt-2 h-2 w-3/5 rounded bg-white/10" />
        </div>
        <div className="absolute right-3 top-4 w-32 rotate-6 rounded-xl border border-cyan-300/20 bg-[#102023] p-3 shadow-xl transition-transform duration-500 group-hover:rotate-12">
          <div className="mb-3 flex items-center justify-between">
            <span className="text-[10px] text-cyan-200">Components</span>
            <span className="text-xs text-cyan-300">✳</span>
          </div>
          <div className="space-y-2">
            <div className="h-5 rounded border border-cyan-300/30" />
            <div className="h-5 rounded bg-cyan-300/20" />
            <div className="flex gap-1">
              <div className="h-5 w-5 rounded-full bg-cyan-300/60" />
              <div className="h-5 flex-1 rounded bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative mx-auto flex h-44 w-full max-w-[310px] items-center justify-center">
      <div className="absolute h-36 w-36 rounded-full bg-cyan-400/10 blur-3xl" />
      <div className="creative-orbit absolute h-36 w-36 rounded-full border border-cyan-300/20 transition-transform duration-700 group-hover:scale-110" />
      <div className="creative-orbit absolute h-24 w-40 rotate-45 rounded-[50%] border border-cyan-300/40 transition-transform duration-700 group-hover:rotate-[70deg]" />
      <div className="creative-orbit absolute h-24 w-40 -rotate-45 rounded-[50%] border border-white/20 transition-transform duration-700 group-hover:-rotate-[70deg]" />
      <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-200/40 bg-cyan-300/10 shadow-[0_0_55px_rgba(103,232,249,0.15)] transition-transform duration-500 group-hover:scale-110">
        <div className="h-7 w-7 rounded-lg bg-cyan-300 shadow-[0_0_25px_rgba(103,232,249,0.6)]" />
      </div>
      <span className="absolute right-8 top-6 h-3 w-3 rounded-full bg-cyan-200 shadow-[0_0_20px_rgba(103,232,249,0.8)]" />
      <span className="absolute bottom-5 left-10 h-2 w-2 rounded-full bg-white/80" />
      <span className="absolute bottom-8 right-12 h-1.5 w-1.5 rounded-full bg-cyan-300" />
    </div>
  );
}

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-28 bg-[#08090A] px-6 py-24 text-white sm:px-10 sm:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col justify-between gap-6 md:mb-20 md:flex-row md:items-end">
          <div>
            <p className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-cyan-300">
              <span className="h-px w-8 bg-cyan-300" />
              What We Do
            </p>
            <h2 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Digital solutions.
              <br />
              <span className="text-white/35">Built with purpose.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-7 text-gray-400 sm:text-base">
            We combine thoughtful design and modern technology to help
            ambitious brands move forward.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.number}
              className="group relative flex min-h-[460px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101214] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-[#121719] sm:p-8"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-cyan-300/[0.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-300/[0.09]" />

              <div className="relative flex items-center justify-between">
                <span className="text-xs tracking-[0.2em] text-cyan-300/80">
                  {service.number} / 03
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-lg text-gray-400 transition-all duration-300 group-hover:border-cyan-300/40 group-hover:bg-cyan-300 group-hover:text-black">
                  ↗
                </span>
              </div>

              <div className="relative flex flex-1 items-center justify-center py-8">
                <ServiceVisual type={service.type} />
              </div>

              <div className="relative mt-auto">
                <h3 className="text-2xl font-medium tracking-tight transition-colors duration-300 group-hover:text-cyan-200 sm:text-3xl">
                  {service.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] text-gray-400 transition-colors duration-300 group-hover:border-white/15 group-hover:text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
