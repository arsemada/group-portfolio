import achievements from "../data/achievements";

const statHighlights = [
  { value: "3M+", label: "End users served" },
  { value: "12", label: "Markets supported" },
  { value: "40+", label: "Platforms launched" },
];

const Achievements = () => (
  <section id="achievements" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-12">
    <div className="rounded-[3rem] bg-gradient-to-br from-brand via-brand-light to-[#ff7ac3] p-8 text-white shadow-[0_35px_90px_rgba(75,0,85,0.35)] sm:p-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Achievements</p>
          <h2 className="mt-3 text-3xl font-semibold lg:text-4xl">Traction that backs every promise we make.</h2>
        </div>
        <p className="max-w-xl text-base text-white/85">
          Milestones from the last 24 months—spanning scale-ups, compliance wins, and the impact footprint across our markets.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3">
        {statHighlights.map((stat) => (
          <div key={stat.label} className="rounded-3xl border border-white/20 bg-white/10 px-6 py-5 text-center backdrop-blur">
            <p className="text-4xl font-semibold">{stat.value}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.3em] text-white/70">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {achievements.map((item) => (
          <article key={item.id} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur">
            <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">{item.title}</p>
            <p className="mt-4 text-base text-white/90">{item.detail}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Achievements;

