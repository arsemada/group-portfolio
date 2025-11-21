import { useState, useEffect } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const displayedProjects = projects; // Show all projects in the grid below
  const otherProjects = []; // We'll show all projects in the main grid

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="projects" className="mx-auto w-full max-w-7xl px-6 py-16 lg:px-12">
      <div className="text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-600">Our Work</p>
        <h2 className="mt-3 text-3xl font-bold text-gray-900 lg:text-4xl">
          Delivering Impact Through Innovation
        </h2>
      </div>

      {/* Logo Carousel */}
      <div className="mt-12 w-full bg-gray-50 py-8 rounded-2xl">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {[...projects, ...projects, ...projects].map((project, index) => (
                <div key={`${project.id}-${index}`} className="w-1/4 flex-shrink-0 px-4">
                  <div className="flex h-32 items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                    <img 
                      src={project.logo} 
                      alt={`${project.title} logo`} 
                      className="max-h-16 w-auto max-w-[200px] object-contain opacity-80 hover:opacity-100 transition-opacity"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = `https://via.placeholder.com/200x80?text=${encodeURIComponent(project.title)}`;
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Previous"
          >
            &larr;
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % projects.length)}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors"
            aria-label="Next"
          >
            &rarr;
          </button>
        </div>
      </div>

      {/* Two Card Grid */}
      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} {...project} featured={false} />
        ))}
      </div>

      {/* Other Projects List */}
      {showAll && otherProjects.length > 0 && (
        <div className="mt-12 space-y-6">
          {otherProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col gap-6 rounded-[2rem] border border-black/5 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition hover:-translate-y-1 hover:shadow-[0_25px_60px_rgba(139,69,255,0.1)] md:flex-row"
            >
              <div className="relative h-48 w-full overflow-hidden rounded-2xl md:h-40 md:w-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-1 flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light mb-2">Case study</p>
                  <h3 className="mb-2 text-xl font-semibold text-black">{project.title}</h3>
                  <p className="mb-4 text-sm text-black/70">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.slice(0, 2).map((item) => (
                      <span key={item} className="rounded-full bg-black/5 px-3 py-1 text-xs text-black/70">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <a
                  href={project.link}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand transition hover:gap-3"
                >
                  {project.linkLabel}
                  <span aria-hidden>→</span>
                </a>
              </div>
            </article>
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
