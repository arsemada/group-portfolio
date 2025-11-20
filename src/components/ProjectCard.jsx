const ProjectCard = ({ title, description, tech, image, link }) => (
  <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow transition hover:-translate-y-1 hover:shadow-2xl">
    <img src={image} alt={title} className="h-52 w-full object-cover" />
    <div className="flex flex-1 flex-col p-6">
      <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm text-slate-600">{description}</p>
      <ul className="mt-4 flex flex-wrap gap-2 text-xs font-medium text-slate-500">
        {tech.map((tag) => (
          <li key={tag} className="rounded-full bg-slate-100 px-3 py-1">
            {tag}
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <a href={link} className="text-sm font-semibold text-indigo-600 hover:text-indigo-800">
          View Case Study →
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;

