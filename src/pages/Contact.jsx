const Contact = () => (
  <section id="contact" className="mx-auto w-full max-w-7xl">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
      Contact
    </p>
    <div className="mt-4 grid gap-12 lg:grid-cols-2">
      <div>
        <h2 className="text-3xl font-semibold text-black lg:text-4xl">
          Let's build something together
        </h2>
        <p className="mt-4 text-base text-black/80">
          Ready to transform your ideas into powerful technology solutions? Get in touch with our team. 
          Share your project vision, challenges, or questions—we'll respond within 24 hours and schedule 
          a discovery call to discuss how we can help you achieve your goals.
        </p>
        <div className="mt-8 grid gap-6 text-sm text-black/80">
          <div>
            <p className="font-semibold text-black">Email</p>
            <a
              href="mailto:iimsystem04@gmail.com"
              className="text-brand-light underline-offset-4 hover:underline"
            >
              iimsystem04@gmail.com
            </a>
          </div>
          <div>
            <p className="font-semibold text-black">Phone</p>
            <div className="flex flex-col gap-1">
              <a href="tel:+251955336000" className="text-brand-light underline-offset-4 hover:underline">
                +251 955336000
              </a>
              <a href="tel:+251975163930" className="text-brand-light underline-offset-4 hover:underline">
                +251 975163930
              </a>
            </div>
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

