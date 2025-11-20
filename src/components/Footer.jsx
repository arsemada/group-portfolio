const Footer = () => (
  <footer className="mt-20 w-full bg-brand-dark px-6 py-12 text-white">
    <div className="grid gap-8 md:grid-cols-3">
      <div>
        <div className="flex h-12 w-32 items-center justify-center">
          <img
            src="/setrise.jpg"
            alt="SetRise logo"
            className="h-full w-full object-contain"
          />
        </div>
        <p className="mt-3 text-sm text-white/70">
          Nile Tower • Lakeside Innovation Corridor • Bahir Dar, Ethiopia
        </p>
      </div>
      <div>
        <h5 className="text-sm uppercase tracking-wide text-white/60">
          Stay in touch
        </h5>
        <p className="mt-3 text-sm">hello@setrise.com</p>
        <p className="text-sm">+251 911 223 344</p>
      </div>
      <div>
        <h5 className="text-sm uppercase tracking-wide text-white/60">
          Social
        </h5>
        <div className="mt-3 flex gap-4 text-sm">
          <a href="https://linkedin.com/company/setrise" className="hover:text-white">
            LinkedIn
          </a>
          <a href="https://twitter.com/setrise" className="hover:text-white">
            Twitter
          </a>
          <a href="https://setrise.com" className="hover:text-white">
            Blog
          </a>
        </div>
      </div>
    </div>
    <div className="mt-10 flex flex-wrap items-center justify-between gap-4 text-xs text-white/60">
      <p>© {new Date().getFullYear()} SetRise. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="/privacy" className="hover:text-white">
          Privacy Policy
        </a>
        <a href="/terms" className="hover:text-white">
          Terms of Use
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

