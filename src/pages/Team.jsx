import team from "../data/team";
import TeamCard from "../components/TeamCard";

const Team = () => (
  <section id="team" className="mx-auto w-full max-w-7xl px-6 py-20 lg:px-12">
    <div className="mb-16 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light mb-3">Our People</p>
      <h2 className="text-3xl font-semibold text-black lg:text-4xl mb-4">
        Four founders shaping strategy, design, and delivery together
      </h2>
      <p className="max-w-2xl mx-auto text-base text-black/70">
        Each founder codes, ships, and steers engagements—so squads stay accountable from discovery through launch.
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {team.map((member) => (
        <TeamCard key={member.id} {...member} />
      ))}
    </div>
  </section>
);

export default Team;

