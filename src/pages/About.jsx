const highlights = [
  {
    title: "Innovation",
    copy: "We prototype fast, validate with users, and ship forward-looking features.",
    icon: (
      <svg className="h-6 w-6 text-brand-light" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v4m0 10v4m7-7h-4m-6 0H5m12.95-4.95-2.83 2.83m-5.24 5.24-2.83 2.83m0-10.9 2.83 2.83m5.24 5.24 2.83 2.83" />
      </svg>
    ),
  },
  {
    title: "Reliability",
    copy: "Multi-cloud, automated observability, and battle-tested handoffs keep products stable.",
    icon: (
      <svg className="h-6 w-6 text-brand-light" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5 19 8v5c0 4.5-3 8.5-7 9-4-.5-7-4.5-7-9V8l7-3.5z" />
      </svg>
    ),
  },
  {
    title: "Scalability",
    copy: "We architect for growth with modular APIs, automation, and measurable KPIs.",
    icon: (
      <svg className="h-6 w-6 text-brand-light" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 18V6m6 12V3m6 15V9m4 9V12" />
      </svg>
    ),
  },
];

const About = () => (
  <section id="about" className="scroll-mt-24 bg-white px-6 py-20 text-black lg:px-12">
    <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 lg:flex-row lg:items-center">
      <div className="space-y-6">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-brand-light">Who we are</p>
        <h2 className="text-3xl font-semibold text-black lg:text-5xl">
          SetRise is a technology service startup delivering innovative software for organizations across industries.
        </h2>
        <p className="text-base text-black/70 lg:text-lg">
          We specialize in building custom web and mobile applications, AI-powered tools, automation systems, and digital
          platforms that help teams streamline operations, improve efficiency, and grow their impact.
        </p>
        <p className="text-base text-black/70 lg:text-lg">
          Founded by four visionary women, SetRise combines creativity, technical expertise, and a passion for solving real-world
          problems. We collaborate closely with clients to understand their challenges and deliver scalable, reliable, user-friendly
          technology.
        </p>
        <p className="text-base text-black/70 lg:text-lg">
          We believe in innovation, collaboration, and empowerment—and we’re dedicated to helping organizations harness technology
          to achieve ambitious goals.
        </p>
        <div className="flex flex-wrap gap-4 text-sm text-black/70">
          <span className="rounded-full border border-black/10 bg-black/5 px-4 py-2">Custom platforms</span>
          <span className="rounded-full border border-black/10 bg-black/5 px-4 py-2">AI & automation</span>
          <span className="rounded-full border border-black/10 bg-black/5 px-4 py-2">Design systems</span>
          <span className="rounded-full border border-black/10 bg-black/5 px-4 py-2">Automation</span>
        </div>
      </div>
      <div className="grid w-full max-w-xl gap-6 rounded-[2.5rem] border border-black/5 bg-white p-8 shadow-[0_30px_80px_rgba(0,0,0,0.08)]">
        {highlights.map((item) => (
          <article key={item.title} className="flex gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/10 text-brand">{item.icon}</div>
            <div>
              <h3 className="text-lg font-semibold text-black">{item.title}</h3>
              <p className="mt-2 text-sm text-black/70">{item.copy}</p>
            </div>
          </article>
        ))}
        <div className="rounded-2xl border border-black/10 bg-black/5 p-6 text-sm text-black/70">
          “Headquartered in Bahir Dar, we operate across Africa. Every product is a collaboration with the organizations we serve.”
        </div>
      </div>
    </div>
  </section>
);

export default About;

