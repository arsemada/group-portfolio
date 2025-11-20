import partners from "../data/partners";

const Partners = () => (
  <section id="partners" className="mx-auto w-full max-w-7xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
          Partners & Clients
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black lg:text-4xl">
          Ecosystem that multiplies reach
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        Strategic alliances keep our builds trusted—from funding partners to
        research labs and regulators.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {partners.map((partner) => (
        <article
          key={partner.id}
          className="rounded-3xl border border-black/5 bg-white px-6 py-5"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-lg font-semibold text-brand">{partner.name}</p>
            <a
              href={partner.website}
              className="text-sm font-medium text-black/70 underline-offset-4 hover:underline"
            >
              Visit
            </a>
          </div>
          <p className="mt-3 text-sm text-black/70">{partner.description}</p>
        </article>
      ))}
    </div>
  </section>
);

export default Partners;

