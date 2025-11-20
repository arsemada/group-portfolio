const Footer = () => (
  <footer className="mt-20 rounded-3xl bg-slate-900 px-8 py-12 text-white shadow-2xl">
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <h4 className="text-xl font-semibold">NovaLabs</h4>
        <p className="mt-3 text-sm text-white/70">
          123 Venture Street, San Francisco, CA
        </p>
      </div>
      <div>
        <h5 className="text-sm uppercase tracking-wide text-white/60">Contact</h5>
        <p className="mt-3 text-sm">hello@novalabs.io</p>
        <p className="text-sm">(555) 123-4567</p>
      </div>
      <div>
        <h5 className="text-sm uppercase tracking-wide text-white/60">Follow</h5>
        <div className="mt-3 flex gap-4 text-sm">
          <a href="#" className="hover:text-indigo-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-indigo-300">
            Twitter
          </a>
          <a href="#" className="hover:text-indigo-300">
            Dribbble
          </a>
        </div>
      </div>
    </div>
    <p className="mt-8 text-xs text-white/50">
      © {new Date().getFullYear()} NovaLabs. All rights reserved.
    </p>
  </footer>
);

export default Footer;

