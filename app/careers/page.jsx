import PageHero from "../../components/PageHero";
import LcaListings from "../../components/LcaListings";

export const metadata = {
  title: "Careers - ESG",
  description:
    "Career opportunities at Executive Software Guild — make your future bright with us. Also view our Labor Condition Application (LCA) postings.",
};

export default function CareersPage() {
  return (
    <>
      <PageHero title="Careers" subtitle="Make your future bright with us" />

      {/* Careers */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">Careers</h2>
        <div className="mb-8 h-1 w-16 bg-accent" />
        <p className="max-w-3xl leading-relaxed text-gray-700">
          We are always interested in hearing from talented professionals. Current openings are
          published here as they become available — in the meantime, tell us about your skills and
          experience through our contact page and we will get back to you.
        </p>
        <a
          href="/contact/"
          className="mt-8 inline-block rounded bg-brand px-6 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
        >
          Get in touch
        </a>
      </section>

      {/* LCA Posting */}
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">LCA Posting</h2>
          <div className="mb-8 h-1 w-16 bg-accent" />
          <div className="max-w-3xl space-y-4 text-gray-700">
            <p>
              These LCAs are being displayed in accordance with U.S. Department of Labor
              regulations.
            </p>
            <p>
              Please note that these LCAs are posted in connection with the intended employment of
              foreign national workers.
            </p>
          </div>
          <div className="mt-8">
            <LcaListings />
          </div>
        </div>
      </section>
    </>
  );
}
