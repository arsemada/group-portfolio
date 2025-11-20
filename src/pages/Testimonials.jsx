import testimonials from "../data/testimonials";

const Testimonials = () => (
  <section
    id="testimonials"
    className="mx-auto w-full max-w-7xl rounded-[2.5rem] bg-brand text-white px-8 py-16 shadow-brand"
  >
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">
          Social Proof
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-white lg:text-4xl">
          Voices from the field
        </h2>
      </div>
      <p className="max-w-xl text-base text-white/80">
        Testimonials that underline trust, speed, and the measurable progress we
        deliver.
      </p>
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-3">
      {testimonials.map((testimonial) => (
        <article
          key={testimonial.id}
          className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur"
        >
          <p className="text-sm leading-relaxed text-white/90">
            “{testimonial.quote}”
          </p>
          <div className="mt-6">
            <p className="text-base font-semibold text-white">{testimonial.name}</p>
            <p className="text-sm text-white/70">{testimonial.title}</p>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Testimonials;

