const services = [
  {
    title: "Custom Software Development",
    description:
      "Tailored platforms that translate complex operations into intuitive digital tools and measurable outcomes.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: "Web & Mobile Applications",
    description:
      "Delightful multi-device experiences built with modern stacks, design systems, and accessibility at the core.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    title: "AI & Automation Tools",
    description:
      "Copilots, intelligent workflows, and analytics engines that eliminate manual work and surface better decisions.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
  },
  {
    title: "Cloud Solutions",
    description:
      "Multi-cloud architecture, DevOps automation, and observability so launches stay resilient from day one.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
      </svg>
    ),
  },
  {
    title: "System Integration",
    description:
      "Secure APIs, data pipelines, and interoperability layers that connect legacy systems with modern experiences.",
    icon: (
      <svg className="h-12 w-12" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
      </svg>
    ),
  },
];

const Services = () => (
  <section id="services" className="w-full rounded-[2.5rem] bg-white py-20 shadow-[0_30px_100px_rgba(139,69,255,0.3)]">
    <div className="mx-auto max-w-7xl px-6 lg:px-12">
      <div className="mb-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light mb-3">Services</p>
      <h2 className="text-3xl font-semibold text-black lg:text-4xl mb-4">
        What we build with you
      </h2>
      <p className="max-w-2xl mx-auto text-base text-black/70">
        We partner with organizations to imagine, build, and scale digital products—backed by multi-disciplinary squads,
        modern tooling, and a collaborative mindset.
      </p>
      </div>
      <div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 3).map((service) => (
          <article
            key={service.title}
            className="group relative flex h-full flex-col rounded-[2.5rem] border border-brand/20 bg-brand p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-light hover:shadow-[0_30px_70px_rgba(75,0,85,0.3)]"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
              {service.icon}
            </div>
            <h3 className="mb-4 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">{service.description}</p>
            <div className="flex items-center text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>Learn more</span>
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap justify-center gap-8 md:grid md:grid-cols-2 lg:flex">
        {services.slice(3).map((service) => (
          <article
            key={service.title}
            className="group relative flex h-full w-full max-w-sm flex-col rounded-[2.5rem] border border-brand/20 bg-brand p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-light hover:shadow-[0_30px_70px_rgba(75,0,85,0.3)]"
          >
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 text-white transition-transform duration-300 group-hover:scale-110 group-hover:bg-white/20">
              {service.icon}
            </div>
            <h3 className="mb-4 text-xl font-semibold text-white">{service.title}</h3>
            <p className="mb-6 flex-1 text-sm leading-relaxed text-white/80">{service.description}</p>
            <div className="flex items-center text-sm font-semibold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span>Learn more</span>
              <svg className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </article>
        ))}
        </div>
      </div>
      <div className="mt-16 text-center">
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-full bg-brand px-10 py-4 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-light hover:shadow-xl"
        >
          Book a working session
        </button>
      </div>
    </div>
  </section>
);

export default Services;

