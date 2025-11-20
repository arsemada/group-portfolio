import certifications from "../data/certifications";

const Certifications = () => (
  <section id="certifications" className="mx-auto w-full max-w-7xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
          Certifications
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black lg:text-4xl">
          Trusted by global standards
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        Compliance and partner credentials that let enterprises onboard us with
        confidence.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {certifications.map((cert) => (
        <article key={cert.id} className="rounded-3xl border border-black/5 bg-white p-6">
          <h3 className="text-lg font-semibold text-brand">{cert.name}</h3>
          <p className="mt-3 text-sm text-black/70">{cert.detail}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Certifications;

