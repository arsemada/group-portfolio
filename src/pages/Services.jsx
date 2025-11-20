const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored platforms that translate complex operations into intuitive digital tools and measurable outcomes.",
    icon: (
      <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16M8 5v4m0 6v4" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Delightful multi-device experiences built with modern stacks, design systems, and accessibility at the core.",
    icon: (
      <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm4 16h2" />
      </svg>
    ),
  },
  {
    title: "AI & Automation Tools",
    description:
      "Copilots, intelligent workflows, and analytics engines that eliminate manual work and surface better decisions.",
    icon: (
      <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.5h4.5l1 4.5h4.75L17 13l1 7-6-3-6 3 1-7-3-5h4.75l1-4.5z" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Multi-cloud architecture, DevOps automation, and observability so launches stay resilient from day one.",
    icon: (
      <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 18h10a4 4 0 0 0 0-8 6 6 0 0 0-11-2 4 4 0 0 0 1 8z" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    description:
      "Secure APIs, data pipelines, and interoperability layers that connect legacy systems with modern experiences.",
    icon: (
      <svg className="h-8 w-8 text-brand" fill="none" stroke="currentColor" strokeWidth="1.6" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h8v10H8zM3 12h5m8 0h5" />
      </svg>
    ),
  },
];

const Services = () => (
  <section id="services" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-12">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">Services</p>
        <h2 className="mt-3 text-3xl font-semibold text-black lg:text-4xl">
          Strategy, design, and engineering inside every engagement.
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        We partner with organizations to imagine, build, and scale digital products—backed by multi-disciplinary squads,
        modern tooling, and a collaborative mindset.
      </p>
    </div>
    <div className="mt-12 grid gap-6 md:grid-cols-2">
      {services.map((service) => (
        <article
          key={service.title}
          className="group flex h-full flex-col gap-4 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-brand/30"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand/10 text-brand">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold text-black">{service.title}</h3>
          </div>
          <p className="text-sm text-black/70">{service.description}</p>
          <div className="mt-auto flex items-center text-sm font-semibold text-brand opacity-0 transition group-hover:opacity-100">
            See our approach →
          </div>
        </article>
      ))}
    </div>
    <div className="mt-10 text-center">
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="rounded-full bg-brand px-8 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-light"
      >
        Book a working session
      </button>
    </div>
  </section>
);

export default Services;

