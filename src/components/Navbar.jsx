import { useState } from "react";

const links = [
  { label: "About", target: "about" },
  { label: "Services", target: "services" },
  { label: "Work", target: "projects" },
  { label: "Achievements", target: "achievements" },
  { label: "Certifications", target: "certifications" },
  { label: "Team", target: "team" },
  { label: "Testimonials", target: "testimonials" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleScroll = (target) => {
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/5 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <button
          onClick={() => handleScroll("home")}
          className="flex items-center gap-4 text-left"
        >
          <div className="relative flex h-14 w-32 items-center justify-center rounded-2xl bg-gradient-to-r from-brand to-brand-light p-[2px] shadow-brand">
            <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white/90 px-2 py-1">
              <img
                src="/setrise.jpg"
                alt="SetRise logo"
                className="h-full w-full object-contain"
              />
            </div>
            <span className="absolute -right-3 -top-3 flex h-6 w-6 items-center justify-center rounded-full bg-crown text-xs font-semibold text-brand-dark shadow-lg">
              ★
            </span>
          </div>
          <div>
            <p className="text-base font-semibold text-black">SetRise</p>
            <p className="text-xs uppercase tracking-[0.5em] text-black/60">
              Tech Studio
            </p>
          </div>
        </button>
        <button
          className="rounded-md border border-black/10 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="mb-1 block h-0.5 w-6 bg-black" />
          <span className="mb-1 block h-0.5 w-6 bg-black" />
          <span className="block h-0.5 w-6 bg-black" />
        </button>
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-6">
            {links.map((link) => (
              <li key={link.target}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className="text-sm font-medium text-black/70 transition hover:text-brand"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
          <button
            onClick={() => handleScroll("contact")}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-light"
          >
            Get in touch
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-black/5 bg-white md:hidden">
          <ul className="flex flex-col space-y-3 px-6 py-4">
            {links.map((link) => (
              <li key={link.target}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className="w-full text-left text-base font-medium text-black"
                >
                  {link.label}
                </button>
              </li>
            ))}
            <li>
              <button
                onClick={() => handleScroll("contact")}
                className="w-full rounded-full bg-brand px-4 py-3 text-base font-semibold text-white"
              >
                Get in touch
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

