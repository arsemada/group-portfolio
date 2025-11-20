import { useState } from "react";

const links = [
  { label: "Home", target: "home" },
  { label: "About", target: "about" },
  { label: "Projects", target: "projects" },
  { label: "Team", target: "team" },
  { label: "Contact", target: "contact" },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <div className="text-xl font-semibold text-slate-900">NovaLabs</div>
        <button
          className="rounded-md border border-slate-200 p-2 md:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="mb-1 block h-0.5 w-6 bg-slate-900" />
          <span className="mb-1 block h-0.5 w-6 bg-slate-900" />
          <span className="block h-0.5 w-6 bg-slate-900" />
        </button>
        <ul className="hidden gap-6 md:flex">
          {links.map((link) => (
            <li key={link.target}>
              <button
                onClick={() => handleScroll(link.target)}
                className="text-sm font-medium text-slate-600 transition hover:text-slate-900"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white md:hidden">
          <ul className="flex flex-col space-y-3 px-6 py-4">
            {links.map((link) => (
              <li key={link.target}>
                <button
                  onClick={() => handleScroll(link.target)}
                  className="w-full text-left text-base font-medium text-slate-700"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;

