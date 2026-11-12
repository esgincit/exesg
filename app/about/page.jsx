import PageHero from "../../components/PageHero";

export const metadata = {
  title: "About Us - ESG",
  description:
    "Executive Software Guild (ESG) is a global business consulting company providing services in Business functions and Information Technology.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Global Business"
        subtitle="World Class Integrated Team"
        image="/img/about_small.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Main content */}
          <div className="md:col-span-2">
            <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">About Us</h2>
            <div className="mb-8 h-1 w-16 bg-accent" />

            <p className="leading-relaxed text-gray-700">
              <strong>ESG</strong> is a provider of world class integrated business, technology and
              process solutions on a global delivery platform. Executive Software Guild is a global
              business consulting company that provides services in Business functions and
              Information Technology. We believe that today&apos;s Technology is constructing
              tomorrows&apos; life. Leveraging functional and domain expertise, global delivery
              model and our technology practices, we enable companies to unlock the business
              potential.
            </p>

            <p className="mt-5 leading-relaxed text-gray-700">
              We are powered by a pool of innovative and talented professionals excelling in
              enterprise solutions, client relationship management, business intelligence, business
              process quality, operations management, engineering solutions, product lifecycle
              management and infrastructure services among other key capabilities. Our functions are
              majorly in <strong>Supply Chain Management (SCM)</strong>,{" "}
              <strong>Financial Management</strong>, <strong>Human Capital Management (HCM)</strong>,{" "}
              <strong>Customer Relationship Management (CRM)</strong>,{" "}
              <strong>Supply Relationship Management (SRM)</strong>,{" "}
              <strong>Product Lifecycle Management (PLM)</strong> and{" "}
              <strong>Corporate Performance Management (CPM)</strong>. We also support customers
              with expertise in Web Services, SAP Net Weaver Technologies, Process Integration,
              Portals, Business Intelligence, Business Objects and Cognos.
            </p>

            <p className="mt-5 leading-relaxed text-gray-700">
              Our comprehensive consulting, system integration and outsourcing services provide
              customers with affordable and flexible approach to solving business problems, thereby
              accelerating success and improving performance. Executive Software Guild provides
              customized, upgraded Application Maintenance (AMS) and support services that meet the
              needs of the customers across the globe.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/whyus/"
                className="rounded border border-gray-300 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
              >
                Why Choose Us?
              </a>
              <a
                href="/wesupport/"
                className="rounded border border-gray-300 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
              >
                We Support
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <img
              src="/img/about_small.jpg"
              alt="Executive Software Guild global team"
              className="w-full rounded-lg shadow-md"
            />
            <div className="mt-8">
              <h3 className="mb-4 text-lg font-bold text-brand">Why ESG?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="mt-1 font-semibold text-accent">→</span>
                  <span>Reduce Total Cost of Ownership</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 font-semibold text-accent">→</span>
                  <span>Guaranteed service levels</span>
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 font-semibold text-accent">→</span>
                  <span>
                    On-Demand availability of highly skilled functional and technical specialists.
                  </span>
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
        </div>
      </section>
    </>
  );
}
