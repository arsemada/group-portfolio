import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section id="projects" className="rounded-3xl bg-white px-8 py-16 shadow-sm">
    <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
          Projects
        </p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          Launch-ready case studies
        </h2>
      </div>
      <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
        See all →
      </a>
    </div>
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;

