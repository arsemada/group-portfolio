const CTA = () => (
  <section className="mx-auto w-full max-w-7xl rounded-[2.5rem] border border-black/5 bg-black px-8 py-16 text-white shadow-brand">
    <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/60">
          Let's build
        </p>
        <h2 className="mt-3 text-3xl font-semibold lg:text-4xl">
          Ready to co-create your next release?
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/80">
          Share a brief, an RFP, or even a napkin sketch—we’ll send back a
          tailored roadmap, squad lineup, and timeline within five working days.
        </p>
      </div>
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-full bg-white px-6 py-3 text-base font-semibold text-black shadow-lg transition hover:-translate-y-0.5"
        >
          Request a working session
        </button>
        <a
          href="https://setrise.com"
          className="rounded-full border border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          Download our profile
        </a>
      </div>
    </div>
  </section>
);

export default CTA;

