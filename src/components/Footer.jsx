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
        <p className="mt-3 text-sm text-white/80 leading-relaxed">
          Empowering organizations through innovative technology solutions that scale, transform, and drive lasting impact.
        </p>
      </div>
      <div>
        <h5 className="text-sm uppercase tracking-wide text-white/60">
          Stay in touch
        </h5>
        <p className="mt-3 text-sm">
          <a href="mailto:iimsystem04@gmail.com" className="hover:text-white underline-offset-4 hover:underline">
            iimsystem04@gmail.com
          </a>
        </p>
        <div className="mt-2 flex flex-col gap-1 text-sm">
          <a href="tel:+251955336000" className="hover:text-white underline-offset-4 hover:underline">
            +251 955336000
          </a>
          <a href="tel:+251975163930" className="hover:text-white underline-offset-4 hover:underline">
            +251 975163930
          </a>
        </div>
      </div>
      <div>
        <h5 className="text-sm uppercase tracking-wide text-white/60">
          Social
        </h5>
        <div className="mt-3 flex gap-4">
          <a
            href="mailto:iimsystem04@gmail.com"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:scale-110"
            aria-label="Email us"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/innovation-and-incubation-management-system/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-xs text-white/60">
      <p>© {new Date().getFullYear()} SetRise. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;

