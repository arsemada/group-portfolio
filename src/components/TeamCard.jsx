const TeamCard = ({ name, role, bio, image, social }) => (
  <article className="flex flex-col rounded-3xl border border-black/5 bg-white p-6 text-center shadow-lg">
    <img
      src={image}
      alt={name}
      className="mx-auto mb-5 h-28 w-28 rounded-3xl object-cover shadow-brand"
    />
    <h3 className="text-xl font-semibold text-black">{name}</h3>
    <p className="text-sm text-brand-light">{role}</p>
    <p className="mt-4 text-sm text-black/70">{bio}</p>
    <div className="mt-6 flex justify-center gap-5 text-sm font-medium">
      <a
        href={social.linkedin}
        className="text-black/70 underline-offset-4 hover:text-brand hover:underline"
      >
        LinkedIn
      </a>
      <a
        href={social.twitter}
        className="text-black/70 underline-offset-4 hover:text-brand hover:underline"
      >
        Twitter
      </a>
    </div>
  </article>
);

export default TeamCard;

