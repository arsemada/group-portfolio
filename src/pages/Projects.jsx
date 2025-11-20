import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => (
  <section id="projects" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-12">
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
    <div className="mt-12 grid gap-6 lg:grid-cols-2">
      {projects.map((project, index) => (
        <div key={project.id} className={index === 0 ? "lg:col-span-2" : ""}>
          <ProjectCard {...project} featured={index === 0} />
        </div>
      ))}
    </div>
    <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-black/70">
      <button
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
        className="rounded-full bg-brand px-6 py-3 text-base font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-brand-light"
      >
        Request a case study
      </button>
      <span>Need more references? We’ll share relevant demos on request.</span>
    </div>
  </section>
);

export default Projects;
