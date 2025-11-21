import { useState } from "react";
import certifications from "../data/certifications";

const Certifications = () => {
  const [index, setIndex] = useState(0);

  const shift = (direction) => {
    setIndex((prev) => (prev + direction + certifications.length) % certifications.length);
  };

  return (
    <section id="certifications" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">Certifications</p>
          <h2 className="mt-3 text-3xl font-semibold text-black lg:text-4xl">Trusted by the standards that matter.</h2>
        </div>
        <p className="max-w-xl text-base text-black/70">
          Security, cloud, and UX credentials that make enterprise onboarding faster. Swipe through our latest badges.
        </p>
      </div>
      <div className="relative mt-10">
        <button
          type="button"
          onClick={() => shift(-1)}
          className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 px-3 py-2 text-lg font-semibold shadow-lg transition hover:-translate-y-1/2 hover:bg-white"
          aria-label="Previous certification"
        >
          {"<"}
        </button>
        <button
          type="button"
          onClick={() => shift(1)}
          className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-black/10 bg-white/90 px-3 py-2 text-lg font-semibold shadow-lg transition hover:-translate-y-1/2 hover:bg-white"
          aria-label="Next certification"
        >
          {">"}
        </button>
        <div className="overflow-hidden rounded-[2.5rem] border border-black/5 bg-white">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {certifications.map((cert) => (
              <div key={cert.id} className="w-full flex-shrink-0 basis-full px-6 py-10 sm:px-12">
                <article className="grid gap-6 text-black lg:grid-cols-2">
                  <div className="flex items-center justify-center overflow-hidden rounded-3xl bg-gray-50 p-4">
                    <img src={cert.image} alt={cert.name} className="h-auto w-full max-h-96 object-contain" />
                  </div>
                  <div className="flex flex-col justify-center gap-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">Credential</p>
                    <h3 className="text-2xl font-semibold text-black">{cert.name}</h3>
                    <p className="text-sm text-black/70">{cert.detail}</p>
                    <span className="text-xs uppercase tracking-[0.4em] text-black/50">Swipe to view more →</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;

