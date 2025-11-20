const TeamCard = ({ name, role, bio, image, social }) => (
  <article className="group relative flex h-full flex-col overflow-hidden rounded-[2.5rem] border border-black/5 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_30px_70px_rgba(139,69,255,0.15)]">
    <div className="relative h-64 overflow-hidden">
      <img
        src={image}
        alt={name}
        className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-4 left-4 right-4">
        <h3 className="text-xl font-semibold text-white drop-shadow-lg">{name}</h3>
        <p className="mt-1 text-sm font-medium text-white/90">{role}</p>
      </div>
    </div>
    <div className="flex flex-1 flex-col p-6">
      <p className="mb-6 flex-1 text-sm leading-relaxed text-black/70">{bio}</p>
      <a
        href={social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm font-semibold text-black transition hover:border-brand hover:bg-brand/10 hover:text-brand"
      >
        <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
        <span>Connect on LinkedIn</span>
      </a>
    </div>
  </article>
);

export default TeamCard;

