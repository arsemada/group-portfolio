const Hero = () => (
  <section
    id="home"
    className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-800 px-8 py-24 text-white shadow-2xl"
  >
    <div className="max-w-2xl">
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-white/70">
        NovaLabs
      </p>
      <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl">
        Building bold digital products for the next decade.
      </h1>
      <p className="mb-8 text-lg text-white/80">
        We partner with ambitious startups to design, ship, and scale delightful
        experiences across web, mobile, and emerging platforms.
      </p>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() =>
            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
        >
          View Projects
        </button>
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-full border border-white/60 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
        >
          Contact Us
        </button>
      </div>
    </div>
    <div className="pointer-events-none absolute -right-16 top-1/2 hidden h-72 w-72 -translate-y-1/2 rounded-full bg-white/10 blur-3xl md:block" />
  </section>
);

export default Hero;

