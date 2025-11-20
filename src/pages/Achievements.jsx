import achievements from "../data/achievements";
import certifications from "../data/certifications";

const Achievements = () => (
  <section id="achievements" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
    <div className="mb-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light mb-3">Achievements & Recognition</p>
      <h2 className="text-3xl font-semibold text-black lg:text-4xl mb-4">
        Certifications, awards, and milestones
      </h2>
      <p className="max-w-2xl mx-auto text-base text-black/70">
        Our credentials, industry recognition, and key achievements that demonstrate our commitment to excellence and innovation.
      </p>
    </div>

    {/* Certifications */}
    <div className="mb-16">
      <h3 className="mb-8 text-2xl font-semibold text-black text-center">Certifications</h3>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {certifications.map((cert) => (
          <article
            key={cert.id}
            className="group relative overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(139,69,255,0.15)]"
          >
            <div className="relative h-40 overflow-hidden">
              <img
                src={cert.image}
                alt={cert.name}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand/60 to-transparent" />
            </div>
            <div className="p-6">
              <h4 className="mb-2 text-lg font-semibold text-black">{cert.name}</h4>
              <p className="text-sm text-black/70">{cert.detail}</p>
            </div>
          </article>
        ))}
      </div>
    </div>

    {/* Other Achievements */}
    <div>
      <h3 className="mb-8 text-2xl font-semibold text-black text-center">Key Achievements</h3>
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
    </div>
  </section>
);

export default Achievements;

