import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Managed Services - ESG",
  description:
    "Guaranteed service levels and reduced total cost of ownership across your SAP applications.",
};

export default function ManagedServicesPage() {
  return (
    <>
      <PageHero
        title="Managed Services"
        subtitle="A Leap to Accelerate Growth"
        image="/img/whatwedo.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Text column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Managed Services</h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />

            <p className="leading-relaxed text-gray-700">
              Organizations that engage a managed services model can transfer the risk to the
              service provider, leverage provider flexibility and grow without hiring
              additional employees.
            </p>

            <img
              src="/img/manage.gif"
              alt="ESG managed services model"
              className="my-8 w-full max-w-xl rounded-lg shadow-md"
            />

            <p className="leading-relaxed text-gray-700">
              We help the businesses uncover opportunities and manage risks in ways that help
              their management create more value every step of the way. We manage the overall
              cost incurred towards the core business applications by incorporating variable IT
              costs for SAP application and operations thereby protecting investment. The
              customer can mitigate the risks by relying on us getting assured continuous
              operation of SAP while increasing the quality and agility of SAP services
              delivered to the business. Executive Software Guild&apos;s managed services offer
              an alternative to the customers&apos; in-house operational planning,
              implementation, staffing, training and on-going operations of SAP applications.
              Executive Software Guild&apos;s extensive SAP experience and industry specific
              knowledge bridges what resources the customer needs and what it can afford.
            </p>

            <img
              src="/img/manage2.gif"
              alt="ESG managed services value"
              className="my-8 w-full max-w-xl rounded-lg shadow-md"
            />

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
