const TeamCard = ({ name, role, bio, image, social }) => (
  <article className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 text-center shadow transition hover:-translate-y-1 hover:shadow-2xl">
    <img
      src={image}
      alt={name}
      className="mx-auto mb-4 h-28 w-28 rounded-full object-cover shadow-lg"
    />
    <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
    <p className="text-sm text-indigo-600">{role}</p>
    <p className="mt-3 text-sm text-slate-600">{bio}</p>
    <div className="mt-4 flex justify-center gap-4 text-sm font-medium text-slate-500">
      <a href={social.linkedin} className="transition hover:text-indigo-600">
        LinkedIn
      </a>
      <a href={social.twitter} className="transition hover:text-indigo-600">
        Twitter
      </a>
    </div>
  </article>
);

export default TeamCard;

