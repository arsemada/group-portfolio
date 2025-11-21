const ProjectCard = ({ title, description, highlights, image, logo, link, linkLabel, featured = false }) => (
  <article
    className={`group relative overflow-hidden rounded-[2.5rem] border border-white/10 text-white shadow-[0_30px_70px_rgba(0,0,0,0.35)] ${featured ? "min-h-[420px] bg-gray-900" : "min-h-[340px]"}`}
  >
    <img
      src={image}
      alt={title}
      className={`absolute inset-0 h-full w-full transition duration-700 group-hover:scale-105 ${featured ? "object-contain p-8" : "object-cover"}`}
    />
    <div className={`absolute inset-0 ${featured ? "bg-gradient-to-t from-black via-black/60 to-black/40" : "bg-gradient-to-t from-black via-black/70 to-transparent"}`} aria-hidden />
    <div className="relative flex h-full flex-col justify-end gap-4 p-6 sm:p-8">
      {/* Logo */}
      {logo && (
        <div className={`mb-2 ${featured ? "h-20" : "h-16"} w-auto`}>
          <img 
            src={logo} 
            alt={`${title} logo`} 
            className={`h-full w-auto ${featured ? "max-w-[250px]" : "max-w-[200px]"} object-contain drop-shadow-lg`}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/200x80?text=${encodeURIComponent(title)}`;
            }}
          />
        </div>
      )}
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-white/70">Case study</p>
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p className="text-sm text-white/80">{description}</p>
      <div className="flex flex-wrap gap-2 text-xs font-medium text-white/80">
        {highlights && highlights.map((item) => (
          <span key={item} className="rounded-full bg-white/15 px-3 py-1">
            {item}
          </span>
        ))}
      </div>
      {link && linkLabel && (
        <a
          href={link}
          target={link.startsWith('http') ? '_blank' : '_self'}
          rel={link.startsWith('http') ? 'noopener noreferrer' : ''}
          className="inline-flex items-center gap-2 text-sm font-semibold text-white transition hover:gap-3"
        >
          {linkLabel}
          <span aria-hidden>→</span>
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;

