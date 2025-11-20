import achievements from "../data/achievements";

const Achievements = () => (
  <section id="achievements" className="mx-auto w-full max-w-7xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
          Achievements
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black lg:text-4xl">
          Proof backed by traction
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        These milestones highlight how SetRise backs strategy with real outcomes.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {achievements.map((item) => (
        <article
          key={item.id}
          className="rounded-3xl bg-white/80 p-6 shadow-brand ring-1 ring-black/5"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-brand">
            {item.title}
          </p>
          <p className="mt-4 text-base text-black/80">{item.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Achievements;

