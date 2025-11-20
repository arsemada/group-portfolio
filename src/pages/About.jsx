const About = () => (
  <section id="about" className="mx-auto w-full max-w-7xl">
    <p className="text-xs font-semibold uppercase tracking-[0.4em] text-brand-light">
      Who we are
    </p>
    <div className="mt-4 grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
      <div>
        <h2 className="text-3xl font-semibold text-black lg:text-4xl">
          SetRise engineers intuitive software for bold organizations.
        </h2>
        <p className="mt-4 text-base text-black/80">
          We build custom web and mobile applications, AI-powered tools,
          automation systems, and digital platforms that streamline operations,
          boost efficiency, and amplify impact across industries.
        </p>
        <p className="mt-4 text-base text-black/80">
          Founded in Bahir Dar by four visionary women, our studio blends
          creativity, deep technical expertise, and a passion for solving
          real-world problems. Every engagement is collaborative—we immerse in
          your context, co-design the roadmap, and deliver scalable, reliable,
          and human-centered solutions.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="rounded-3xl bg-black/5 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Vision</p>
            <p className="mt-3 text-sm text-black/80">
              Unlock African products that compete globally without leaving home.
            </p>
          </div>
          <div className="rounded-3xl bg-black/5 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Mission</p>
            <p className="mt-3 text-sm text-black/80">
              Pair strategy, design, and engineering into one accountable team.
            </p>
          </div>
          <div className="rounded-3xl bg-black/5 p-5">
            <p className="text-xs uppercase tracking-[0.4em] text-black/60">Values</p>
            <p className="mt-3 text-sm text-black/80">
              Radical candor, measurable outcomes, community-first innovation.
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-6 rounded-3xl border border-black/5 bg-black/5 p-6">
        <h3 className="text-lg font-semibold text-brand">Milestones</h3>
        <ul className="space-y-4 text-sm text-black/80">
          <li>
            <span className="font-semibold text-black">2017:</span> Opened Addis
            delivery center focused on payments.
          </li>
          <li>
            <span className="font-semibold text-black">2019:</span> Expanded to
            Nairobi & Kigali with health-tech squads.
          </li>
          <li>
            <span className="font-semibold text-black">2022:</span> Launched Atlas
            Insight, our AI narrative engine.
          </li>
          <li>
            <span className="font-semibold text-black">2024:</span> 40+ platforms
            supported with 98% client retention.
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default About;

