import services from "../data/services";

const Services = () => (
  <section id="services" className="mx-auto w-full max-w-7xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
          Services
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black lg:text-4xl">
          What we build with you
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        Every engagement is led by a multi-disciplinary squad so strategy,
        design, and engineering decisions happen together.
      </p>
    </div>
    <div className="mt-12 flex flex-col gap-8">
      {services.map((service) => (
        <article
          key={service.id}
          className="flex flex-col gap-4 border-l-4 border-crown/70 bg-white/70 px-6 py-4 shadow-[0_20px_45px_rgba(75,0,85,0.08)]"
        >
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <h3 className="text-2xl font-semibold text-brand">{service.title}</h3>
            <span className="text-xs uppercase tracking-[0.5em] text-black/50">
              Squad-based
            </span>
          </div>
          <p className="text-sm text-black/75">{service.summary}</p>
          <div className="grid gap-3 text-sm text-black/80 sm:grid-cols-3">
            {service.bullets.map((item) => (
              <p key={item} className="rounded-full bg-black/5 px-4 py-2">
                {item}
              </p>
            ))}
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Services;

