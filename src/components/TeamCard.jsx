const TeamCard = ({ name, role, bio, image, social }) => (
  <article className="group flex h-full flex-col gap-4 rounded-[2rem] border border-black/5 bg-white/90 p-6 shadow-[0_25px_60px_rgba(0,0,0,0.08)] transition hover:-translate-y-1">
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="h-16 w-16 rounded-2xl object-cover" />
      <div>
        <h3 className="text-lg font-semibold text-black">{name}</h3>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">{role}</p>
      </div>
    </div>
    <p className="text-sm text-black/70">{bio}</p>
    <div className="mt-auto flex gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
      <a
        href={social.linkedin}
        className="rounded-full border border-black/10 px-4 py-2 transition hover:border-brand hover:text-brand"
      >
        LinkedIn
      </a>
      <a
        href={social.twitter}
        className="rounded-full border border-black/10 px-4 py-2 transition hover:border-brand hover:text-brand"
      >
        Twitter
      </a>
    </div>
  </article>
);

export default TeamCard;

