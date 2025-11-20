import team from "../data/team";
import TeamCard from "../components/TeamCard";

const Team = () => (
  <section id="team" className="mx-auto w-full max-w-6xl px-6 py-16 lg:px-12">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">Our People</p>
        <h2 className="mt-3 text-3xl font-semibold text-black lg:text-4xl">
          Four founders shaping strategy, design, and delivery together.
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        Each founder codes, ships, and steers engagements—so squads stay accountable from discovery through launch.
      </p>
    </div>
    <div className="mt-8 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-black/60">
      {["Backend rigor", "AI expertise", "Flutter craft", "UX leadership"].map((tag) => (
        <span key={tag} className="rounded-full border border-black/10 bg-black/5 px-4 py-2">
          {tag}
        </span>
      ))}
    </div>
    <div className="mt-10 grid gap-6 md:grid-cols-2">
      {team.map((member) => (
        <TeamCard key={member.id} {...member} />
      ))}
    </div>
  </section>
);

export default Team;

