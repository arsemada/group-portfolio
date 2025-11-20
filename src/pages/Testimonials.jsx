import testimonials from "../data/testimonials";

const Testimonials = () => (
  <section
    id="testimonials"
    className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12"
  >
    <div className="mb-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light mb-3">
        Social Proof
      </p>
      <h2 className="text-3xl font-semibold text-black lg:text-4xl mb-4">
        Voices from the field
      </h2>
      <p className="max-w-2xl mx-auto text-base text-black/70">
        Testimonials that underline trust, speed, and the measurable progress we deliver.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.id}
          className="flex flex-col rounded-[2.5rem] border border-black/5 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(0,0,0,0.1)]"
        >
          <div className="mb-6 flex items-center gap-4">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="h-16 w-16 rounded-full object-cover border-2 border-brand/20"
            />
            <div>
              <p className="text-base font-semibold text-black">{testimonial.name}</p>
              <p className="text-sm text-black/70">{testimonial.title}</p>
            </div>
          </div>
          <p className="flex-1 text-sm leading-relaxed text-black/70">
            "{testimonial.quote}"
          </p>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;

