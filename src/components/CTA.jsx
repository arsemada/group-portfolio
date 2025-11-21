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
          href="/COMPANY PROFILE — SetRise Technology Solutions.pdf"
          target="_blank"
          rel="noopener noreferrer"
          download="SetRise-Company-Profile.pdf"
          className="group flex items-center gap-2 rounded-full border border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
        >
          <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          View our profile
        </a>
      </div>
    </div>
  </section>
);

export default CTA;

