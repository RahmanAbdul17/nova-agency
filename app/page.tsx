
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#08090A] pt-24 text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section
        id="home"
        className="relative flex min-h-[80vh] flex-col items-center justify-center px-6 text-center"
      >
        {/* Background glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px] sm:h-[500px] sm:w-[500px]"
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center">
          <p className="mb-6 text-sm uppercase tracking-[0.3em] text-cyan-400">
            Independent Digital Studio
          </p>

          
<h1 className="max-w-5xl text-5xl font-semibold leading-tight tracking-tight sm:text-7xl lg:text-8xl">
  We{" "}
  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
    Build
  </span>{" "}
  What You Imagine.
</h1>


          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-400">
            We design and develop digital experiences
            that help ambitious businesses stand out,
            scale up, and move forward.
          </p>

          <a
            href="#contact"
            className="mt-10 rounded-full bg-white px-8 py-4 font-semibold text-black transition-transform duration-300 hover:-translate-y-1"
          >
            Start Your Journey ↗
          </a>

          <p className="mt-12 text-xs uppercase tracking-[0.25em] text-gray-500">
            Design · Development · Innovation
          </p>
        </div>
      </section>
      <Services />
    </main>
  );
}
