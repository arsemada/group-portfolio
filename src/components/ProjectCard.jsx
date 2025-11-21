const ProjectCard = ({ title, description, highlights, image, logo, link, linkLabel, featured = false, longDescription }) => (
  <div className={`group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl ${featured ? 'md:col-span-2' : 'h-full'}`}>
    {/* Project Image */}
    <div className="relative h-48 overflow-hidden md:h-56">
      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
    </div>

    {/* Project Content */}
    <div className="p-6">
      {/* Logo */}
      {logo && (
        <div className="mb-4 h-12 w-auto">
          <img 
            src={logo} 
            alt={`${title} logo`} 
            className="h-full w-auto object-contain"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/200x80?text=${encodeURIComponent(title)}`;
            }}
          />
        </div>
      )}
      
      {/* Title and Description */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        {!featured && <p className="text-gray-600">{longDescription || description}</p>}
      </div>

      {/* Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {highlights.map((item) => (
            <span 
              key={item} 
              className="rounded-full bg-brand-50 px-3 py-1 text-xs font-medium text-brand-700"
            >
              {item}
            </span>
          ))}
        </div>
      )}

      {/* Link */}
      {link && linkLabel && (
        <div className="mt-6">
          <a
            href={link}
            className="inline-flex items-center text-sm font-semibold text-brand-600 hover:text-brand-800"
          >
            {linkLabel}
            <svg 
              className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      )}
    </div>
  </div>
);

export default ProjectCard;

