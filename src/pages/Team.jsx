import team from "../data/team";
import TeamCard from "../components/TeamCard";

const Team = () => (
  <section id="team" className="rounded-3xl bg-white px-8 py-16 shadow-sm">
    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-500">
      Team
    </p>
    <h2 className="mt-4 text-3xl font-bold text-slate-900">
      Operators, makers, and systems thinkers.
    </h2>
    <div className="mt-10 grid gap-8 md:grid-cols-3">
      {team.map((member) => (
        <TeamCard key={member.id} {...member} />
      ))}
    </div>
  </section>
);

export default Team;

