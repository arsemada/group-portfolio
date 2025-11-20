import achievements from "../data/achievements";

const Achievements = () => (
  <section id="achievements" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
    <div className="mb-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light mb-3">Achievements & Recognition</p>
      <h2 className="text-3xl font-semibold text-black lg:text-4xl mb-4">
        Key achievements and milestones
      </h2>
      <p className="max-w-2xl mx-auto text-base text-black/70">
        Our industry recognition and key achievements that demonstrate our commitment to excellence and innovation.
      </p>
    </div>

    {/* Key Achievements */}
    <div className="grid gap-6 md:grid-cols-3">
      {achievements.map((item) => (
        <article
          key={item.id}
          className="group rounded-[2rem] border border-black/5 bg-gradient-to-br from-white to-white/50 p-8 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-brand/30 hover:shadow-[0_25px_60px_rgba(139,69,255,0.1)]"
        >
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand/10 to-brand/5 text-2xl">
            🏆
          </div>
          <h4 className="mb-3 text-lg font-semibold text-black">{item.title}</h4>
          <p className="text-sm text-black/70">{item.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Achievements;

