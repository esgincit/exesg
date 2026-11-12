import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Why Choose Us - ESG",
  description:
    "What is so unique about our services? Reduced TCO, guaranteed service levels and on-demand availability of highly skilled specialists.",
};

const UNIQUE = [
  "Reduce TCO (Total Cost of Ownership) of support services",
  "Guaranteed service levels",
  "Expertise at various levels of service",
  "On-Demand availability of highly skilled functional and technical specialists",
  "Transition of key personnel to priority initiatives",
  "Stable system and user acceptance for future enhancements",
  "Technical aspects of implementation",
  "Change Management",
  "Archiving",
  "Post-implementation support",
  "Problem resolution and knowledge management",
  "New custom development support",
  "Business enhancements",
  "Reports",
];

const AMS_ACTIVITIES = [
  "Request Management",
  "Management of incidents",
  "Processing of requests",
  "Work around",
  "Resolution",
  "Root cause analysis",
];

export default function WhyUsPage() {
  return (
    <>
      <PageHero
        title="Why Choose Us"
        subtitle="Global Business — World Class Integrated Team"
        image="/img/whyesg.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Main content */}
          <div className="md:col-span-2">
            <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">
              What is so unique about our services?
            </h2>
            <div className="mb-8 h-1 w-16 bg-accent" />

            <ul className="grid gap-x-10 gap-y-3 text-gray-700 sm:grid-cols-2">
              {UNIQUE.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="mt-10 leading-relaxed text-gray-700">
              Executive Software Guild has a well-defined and matured application maintenance
              process which allows effective capture, reporting resolution of maintenance requests.
              This process supports a distributed delivery environment wherein work responsibilities
              can be effectively distributed between organizations depending on the criticality of
              the requests.
            </p>

            <p className="mt-5 font-bold text-gray-800">
              Each of these activities can be governed and monitored by SLA framework.
            </p>

            <h3 className="mb-4 mt-10 text-xl font-bold text-brand">Application Maintenance</h3>
            <ul className="space-y-3 text-gray-700">
              {AMS_ACTIVITIES.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="/about/"
                className="rounded border border-gray-300 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
              >
                About Us
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
              alt="Executive Software Guild integrated team"
              className="w-full rounded-lg shadow-md"
            />
            <div className="mt-8 rounded-lg border border-gray-200 p-6">
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
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
