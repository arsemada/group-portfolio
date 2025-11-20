import team from "../data/team";
import TeamCard from "../components/TeamCard";

const Team = () => (
  <section id="team" className="mx-auto w-full max-w-7xl">
    <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
          Our People
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-black lg:text-4xl">
          Women software engineers behind SetRise
        </h2>
      </div>
      <p className="max-w-xl text-base text-black/70">
        Four founders lead every engagement, pairing backend rigor, AI depth,
        flutter craftsmanship, and UX strategy—so you always have accountable
        partners in the field.
      </p>
    </div>
    <div className="mt-10 grid gap-8 md:grid-cols-2">
      {team.map((member) => (
        <TeamCard key={member.id} {...member} />
      ))}
    </div>
  </section>
);

export default Team;

