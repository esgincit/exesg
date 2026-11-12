import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Value Added Services - ESG",
  description:
    "Knowledge creation and sharing alongside application maintenance support services.",
};

export default function ValueAddedPage() {
  return (
    <>
      <PageHero
        title="Value Added Services"
        subtitle="A Leap to Accelerate Growth"
        image="/img/whatwedo.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Text column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Value Added Services</h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />

            <p className="leading-relaxed text-gray-700">
              Enterprises everywhere are beginning to see the knowledge as foundation upon
              which business grows. Executive Software Guild along with its Application
              Maintenance Support services also initiates creating and sharing knowledge
              across the organization.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Executive Software Guild has knowledge base for application maintenance to gain
              advantage of collective experience and reduce the time taken for maintenance
              activities.
            </p>
            <p className="mt-6 font-bold text-gray-800">
              Example: User Manuals which helps the customers new employees to start their
              regular activities without any hurdles
            </p>

            {/* Cross-links to related services */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-gray-200 pt-6">
              <a
                href="/roadmap/"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand-light"
              >
                Business Evolution Roadmap
              </a>
              <a
                href="/staff-aug/"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand-light"
              >
                Staff Augmentation
              </a>
              <a
                href="/managed-services/"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand-light"
              >
                Managed Services
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <img
              src="/img/solutions_small.jpg"
              alt="ESG solutions"
              className="w-full rounded-lg shadow-md"
            />
            <ul className="mt-6 space-y-3 text-gray-700">
              <li className="rounded-lg border border-gray-200 p-3 text-sm leading-relaxed">
                → Transition of key personnel to priority initiatives
              </li>
              <li className="rounded-lg border border-gray-200 p-3 text-sm leading-relaxed">
                → Stable system and user acceptance for future enhancements
              </li>
              <li className="rounded-lg border border-gray-200 p-3 text-sm leading-relaxed">
                → Technical aspects of implementation
              </li>
            </ul>
            <a
              href="/whyus/"
              className="mt-6 inline-block rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Read more
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
