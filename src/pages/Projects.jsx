import { useState, useEffect } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedProjects = projects.slice(0, 2);
  const otherProjects = projects.slice(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">Our Work</p>
          <h2 className="mt-3 text-3xl font-semibold text-black lg:text-4xl">
            Product launches that pair creativity with measurable outcomes.
          </h2>
        </div>
        <p className="max-w-xl text-base text-black/70">
          From ERP rebuilds to AI copilots, every engagement links the problem framing, squad lineup, and the tangible
          results we delivered.
        </p>
      </div>

      {/* Featured Carousel - Full Width */}
      <div className="mt-12 w-full overflow-hidden rounded-[2.5rem]">
        <div className="relative">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {projects.map((project) => (
              <div key={project.id} className="w-full flex-shrink-0">
                <ProjectCard {...project} featured={true} />
              </div>
            ))}
          </div>
          
          {/* Carousel Controls */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-white backdrop-blur transition hover:bg-black/50"
            aria-label="Previous project"
          >
            ←
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full border border-white/20 bg-black/30 px-4 py-2 text-white backdrop-blur transition hover:bg-black/50"
            aria-label="Next project"
          >
            →
          </button>

          {/* Carousel Indicators */}
          <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {projects.map((_, index) => (
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
      </div>

      {/* Two Card Grid */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} featured={false} />
        ))}
      </div>

      {/* Other Projects Grid */}
      {showAll && otherProjects.length > 0 && (
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherProjects.map((project) => (
            <ProjectCard key={project.id} {...project} featured={false} />
          ))}
        </div>
      )}

      <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-black/70">
        {otherProjects.length > 0 && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-light"
          >
            {showAll ? "Show less" : "See other works"}
          </button>
        )}
        {!showAll && <span>Need more references? We'll share relevant demos on request.</span>}
      </div>
    </section>
  );
};

export default Projects;
