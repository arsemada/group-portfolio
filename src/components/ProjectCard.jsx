const ProjectCard = ({ title, description, highlights, image, link, linkLabel }) => (
  <article className="flex flex-col overflow-hidden rounded-3xl border border-black/5 bg-white shadow-lg">
    <div className="relative h-52 overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="absolute inset-0 bg-black/20" aria-hidden />
    </div>
    <div className="flex flex-1 flex-col p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
        Case study
      </p>
      <h3 className="mt-2 text-2xl font-semibold text-black">{title}</h3>
      <p className="mt-3 text-sm text-black/70">{description}</p>
      <ul className="mt-5 flex flex-1 flex-col gap-3 text-sm text-black/80">
        {highlights.map((item) => (
          <li key={item} className="flex gap-2 rounded-2xl bg-black/5 px-3 py-2">
            <span className="mt-1 h-2 w-2 rounded-full bg-brand-light" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a
        href={link}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-light underline-offset-4 hover:underline"
      >
        {linkLabel}
        <span aria-hidden>→</span>
      </a>
    </div>
  </article>
);

export default ProjectCard;

