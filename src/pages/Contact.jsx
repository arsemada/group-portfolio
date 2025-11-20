const Contact = () => (
  <section id="contact" className="rounded-3xl bg-white px-8 py-16 shadow-sm">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
      Contact
    </p>
    <h2 className="mt-4 text-3xl font-bold text-slate-900">
      Ready to build something bold?
    </h2>
    <p className="mt-4 text-slate-600">
      Email us at{" "}
      <a href="mailto:hello@novalabs.io" className="font-medium text-indigo-600">
        hello@novalabs.io
      </a>
      , or book a discovery call. We respond within 24 hours.
    </p>
    <form className="mt-8 grid gap-6 md:grid-cols-2">
      <input
        type="text"
        placeholder="Name"
        className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-indigo-500 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email"
        className="rounded-2xl border border-slate-200 px-4 py-3 focus:border-indigo-500 focus:outline-none"
      />
      <textarea
        placeholder="Tell us about your project"
        className="h-32 rounded-2xl border border-slate-200 px-4 py-3 focus:border-indigo-500 focus:outline-none md:col-span-2"
      />
      <button
        type="submit"
        className="rounded-2xl bg-slate-900 px-6 py-3 font-semibold text-white transition hover:bg-indigo-700 md:col-span-2"
      >
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;

