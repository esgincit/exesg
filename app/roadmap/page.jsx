import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Business Evolution Roadmap - ESG",
  description:
    "A leap to accelerate growth — align technology implementations with business goals to mitigate risk, reduce costs and improve efficiencies.",
};

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        title="Business Evolution Roadmap"
        subtitle="A Leap to Accelerate Growth"
        image="/img/whatwedo.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Text column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              Business Evolution Roadmap
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />

            <p className="leading-relaxed text-gray-700">
              A business evolution roadmap is a plan that organizations use to align their
              technology implementations with their business goals, which help them mitigate
              risk, reduce costs, improve efficiencies and react fast in response to the
              changes in the market place.
            </p>
            <p className="mt-4 leading-relaxed text-gray-700">
              Business Technology Services help customers realize high business value by
              incorporating business strategy, business integration and managing IT risk,
              across the value chain of the organization. Every business evolution roadmap
              should begin with an assessment. We provide implementation, production support
              and support and enhancement services in .NET and Java frameworks. Our solutions
              enable organizations to drive critical business outcomes leveraging information
              technology.
            </p>

            <h3 className="mt-10 text-xl font-bold text-brand sm:text-2xl">
              Implementation Roadmap
            </h3>
            <div className="mb-6 mt-2 h-1 w-16 bg-accent" />
            <ul className="space-y-2 text-gray-700">
              <li>Business Blue Print (analysis of the company)</li>
              <li>Realization (Installation &amp; Configuration)</li>
              <li>Development (if required)</li>
              <li>Unit testing</li>
              <li>Regression testing</li>
              <li>Integration Testing</li>
            </ul>

            {/* Cross-links to related services */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-gray-200 pt-6">
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
              <a
                href="/value-added/"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand-light"
              >
                Value Added Services
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
