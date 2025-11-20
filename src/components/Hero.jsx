const stats = [
  { label: "Platforms launched", value: "40+" },
  { label: "Markets served", value: "12" },
  { label: "Client retention", value: "98%" },
  { label: "Response time", value: "48 hrs" },
];

const Hero = () => (
  <section
    id="home"
    className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
    style={{
      backgroundImage:
        "linear-gradient(120deg, rgba(8,0,20,0.75), rgba(8,0,20,0.35)), url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black" aria-hidden />
    <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-20 lg:flex-row lg:items-center">
      <div className="max-w-2xl animate-fadeSlideUp text-center lg:text-left">
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70">Women-led Tech Studio</p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight text-white drop-shadow lg:text-6xl">
          SetRise builds innovative software so organizations scale with confidence.
        </h1>
        <p className="mt-6 text-lg text-white/85">
          We’re a women-founded technology studio delivering custom apps, AI copilots, automation systems, and digital
          platforms that keep operations smooth, efficient, and ready for impact.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-white/70 lg:justify-start">
          {["Custom builds", "AI & automation", "Human-centered delivery"].map((chip) => (
            <span key={chip} className="rounded-full border border-white/30 px-4 py-1">
              {chip}
            </span>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            Meet SetRise
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Explore work
          </button>
        </div>
      </div>
      <div className="grid w-full max-w-xl gap-4 animate-fadeIn sm:grid-cols-2">
        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-3xl border border-white/15 bg-white/10 p-5 text-center shadow-lg backdrop-blur transition hover:-translate-y-1"
          >
            <p className="text-3xl font-semibold">{item.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Hero;

