const Hero = () => (
  <section
    id="home"
    className="relative w-full overflow-hidden px-6 py-32 text-white"
    style={{
      backgroundImage:
        "linear-gradient(120deg, rgba(43,0,51,0.92), rgba(75,0,85,0.85)), url('/setrise.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-hero-noise opacity-50" aria-hidden />
    <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col gap-8 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/80">
        SetRise • Bahir Dar
      </p>
      <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
        From the cloud to your clients, we answer every why and how.
      </h1>
      <p className="text-lg text-white/85">
        Women software engineers crafting custom web and mobile applications,
        AI copilots, automation systems, and digital platforms for organizations
        that need reliability, speed, and measurable impact.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-xl transition hover:-translate-y-0.5"
        >
          Let’s discuss
        </button>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-full border border-white/70 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          Talk to us
        </button>
      </div>
    </div>
  </section>
);

export default Hero;

