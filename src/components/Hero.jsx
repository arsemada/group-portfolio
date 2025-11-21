import { useState, useEffect } from "react";

const carouselImages = [
  "/hult.jpg",
  "/orbit.jpg",
  "/hult.jpg",
  "/redifine.jpg",
  "/iims.jpg",
  "/iims2.jpg",
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen w-screen items-center justify-center overflow-hidden bg-black text-white"
    >
      {/* Carousel Background */}
      <div className="absolute inset-0">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center 50%",
              backgroundRepeat: "no-repeat",
            }}
          />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" aria-hidden />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full px-6 py-20 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.6em] text-white/70 mb-4">
          Women-led Tech Studio
        </p>
        <h1 className="text-4xl font-semibold leading-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
          Innovative software solutions for organizations that scale
        </h1>
        <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
          Custom apps, AI tools, automation systems, and digital platforms that streamline operations and drive impact.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full bg-white px-8 py-3 text-base font-semibold text-black shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-white/70"
          >
            Let's discuss
          </button>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="rounded-full border border-white/60 px-8 py-3 text-base font-semibold text-white transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            View our work
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="mt-12 flex justify-center gap-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentIndex ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;

