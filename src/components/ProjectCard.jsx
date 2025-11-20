const ProjectCard = ({ title, description, highlights, image, link, linkLabel, featured = false }) => (
  <article
    className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 text-white shadow-[0_30px_70px_rgba(0,0,0,0.35)] ${featured ? "min-h-[420px]" : "min-h-[340px]"}`}
  >
    <img
      src={image}
      alt={title}
      className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" aria-hidden />
    <div className="relative flex h-full flex-col justify-end gap-4 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Case study</p>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs font-medium text-white/80">
        {highlights.map((item) => (
          <span key={item} className="rounded-full bg-white/15 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      <a
        href={link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
      >
        {linkLabel}
        <span aria-hidden>→</span>
      </a>
    </div>
  </article>
);

export default ProjectCard;

