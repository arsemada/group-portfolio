const Contact = () => (
  <section id="contact" className="mx-auto w-full max-w-7xl">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
      Contact
    </p>
    <div className="mt-4 grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-semibold text-black lg:text-4xl">
          Bahir Dar HQ • Available across time zones
        </h2>
        <p className="mt-4 text-base text-black/80">
          Visit us on the lakeside Innovation Corridor, Nile Tower, Level 5.
          Book a virtual working session or request our detailed capability
          deck—your message lands in our shared inbox and we reply within one
          business day.
        </p>
        <div className="mt-8 grid gap-6 text-sm text-black/80">
          <div>
            <p className="font-semibold text-black">Email</p>
            <a
              href="mailto:hello@setrise.com"
              className="text-brand-light underline-offset-4 hover:underline"
            >
              hello@setrise.com
            </a>
          </div>
          <div>
            <p className="font-semibold text-black">Phone</p>
            <a href="tel:+251911223344" className="text-brand-light underline-offset-4 hover:underline">
              +251 911 223 344
            </a>
          </div>
          <div>
            <p className="font-semibold text-black">Office hours</p>
            <p>Mon – Fri · 9:00 – 18:00 EAT</p>
          </div>
        </div>
      </div>
      <form className="grid gap-5">
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full name"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
          />
          <input
            type="email"
            placeholder="Work email"
            className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
          />
        </div>
        <input
          type="text"
          placeholder="Company / Organization"
          className="rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
        />
        <textarea
          placeholder="Tell us about your roadmap, pains, or target launch date"
          className="h-32 rounded-2xl border border-black/10 bg-white px-4 py-3 text-sm focus:border-brand focus:outline-none"
        />
        <button
          type="submit"
          className="rounded-2xl bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-light"
        >
          Send the brief
        </button>
      </form>
    </div>
  </section>
);

export default Contact;

