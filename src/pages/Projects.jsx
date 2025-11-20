import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section id="projects" className="mx-auto w-full max-w-7xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
          Our Work
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black lg:text-4xl">
          Launch-quality builds across sectors
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        Each case study links to the full story—problem framing, solution,
        features, and the measurable result. Add your own product links to keep
        this gallery current.
      </p>
    </div>
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
