import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 bg-brand-dark text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src="/img/logo.png" alt="ESG logo" className="h-9 w-9 rounded bg-white p-0.5" />
              <span className="text-sm font-semibold uppercase tracking-wide text-white">
                Executive Software Guild
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              End-to-end IT consulting, staffing and managed services across SAP, Oracle, Microsoft,
              Cloud, Big Data and emerging technologies.
            </p>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Quick Links</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <li><Link href="/about/" className="hover:text-white">About Us</Link></li>
              <li><Link href="/whyus/" className="hover:text-white">Why Choose Us</Link></li>
              <li><Link href="/roadmap/" className="hover:text-white">Roadmap</Link></li>
              <li><Link href="/staff-aug/" className="hover:text-white">Staff Augmentation</Link></li>
              <li><Link href="/trainings/" className="hover:text-white">Trainings</Link></li>
              <li><Link href="/careers/" className="hover:text-white">Careers</Link></li>
              <li><Link href="/clients/" className="hover:text-white">Clients</Link></li>
              <li><Link href="/contact/" className="hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-white">Get in Touch</h3>
            <p className="text-sm">
              Ready to discuss your project or staffing needs?
              <br />
              <Link
                href="/contact/"
                className="mt-3 inline-block rounded bg-accent px-4 py-2 text-sm font-semibold text-white hover:bg-amber-600"
              >
                Contact Us
              </Link>
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 text-xs sm:flex-row">
          <p>Copyright © ESG. All Rights Reserved.</p>
          <p>
            <Link href="/contact/" className="hover:text-white">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
