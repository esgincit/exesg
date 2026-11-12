import PageHero from "../../components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "RevPro - ESG",
  description:
    "RevPro revenue recognition automation from ESG: eliminate spreadsheets, stay compliant, faster period close and real-time revenue visibility.",
};

const BENEFITS = [
  {
    title: "Eliminate spreadsheets",
    text: "The use of manual spreadsheets carries a substantial risk of restatements, errors, and possible fines. The time and financial costs of auditing these manual processes is also a huge burden on companies. And spreadsheets simply can’t handle the volume and flow of transactions through the accounting life-cycle, delaying review and increasing the period close cycle.",
  },
  {
    title: "Be compliant",
    text: "By replacing spreadsheets with a scalable, automated, and auditable solution, RevPro aids in maintaining compliance with existing policies and accounting guidance. Manual changes to transactions and system settings are tracked and reported, and changes to policies and guidance can be systematically implemented and reviewed.",
    extra:
      "With new, converged revenue guidance (ASC 606/IFRS 15), it’s more important than ever to automate revenue recognition to stay in compliance. The automation process requires some amount of pre-work to ensure data quality, so the time to start is now.",
  },
  {
    title: "Faster period close",
    text: "RevPro’s periodic processing, standardization, and automation allows users to proactively identify and resolve issues, increase productivity, and reduce the close cycle.",
  },
  {
    title: "Real-time revenue visibility",
    text: "With RevPro, transactions can be processed and reviewed on a real-time basis, rather than waiting for period end and finalization of a spreadsheet. Revenue entries are automatically generated for posting to the financial system. Revenue details are available in RevPro to users throughout the organization based on their roles and responsibilities. These details can be ported back to existing reporting and business intelligence applications.",
  },
];

const HIGHLIGHTS = [
  "Eliminate spreadsheets",
  "Be compliant",
  "Faster period close",
  "Real-time revenue visibility",
];

const QUICK_LINKS = [
  ["SAP", "/sap/"],
  ["Oracle", "/oracle/"],
  ["Microsoft", "/microsoft/"],
  ["Cloud", "/cloud/"],
  ["Big Data", "/big-data/"],
];

export default function RevProPage() {
  return (
    <>
      <PageHero
        title="RevPro"
        subtitle="Always two steps ahead."
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-gray-700">
              <span className="font-semibold">RevPro</span> is the most
              widely-deployed revenue recognition solution available today
              and boasts a robust community of users happy to talk about
              their experience.
            </p>
            <p className="mt-4 text-gray-700">
              RevPro’s proven, rules-based engine seamlessly integrates with
              your ERP and business applications to automate the entire
              revenue recognition process.
            </p>
            <p className="mt-4 text-gray-700">
              Your revenue recognition policies and rules are unique to your
              company, so you need a revenue recognition and forecasting
              solution that can easily be configured to your systems.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-brand sm:text-3xl">
              Why RevPro?
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />
            <div className="space-y-6">
              {BENEFITS.map((b) => (
                <div
                  key={b.title}
                  className="rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{b.text}</p>
                  {b.extra && <p className="mt-4 text-gray-600">{b.extra}</p>}
                </div>
              ))}
            </div>
          </div>
          <aside className="md:col-span-1">
            <img
              src="/img/revpro.jpg"
              alt="RevPro revenue recognition"
              className="mb-6 rounded-lg shadow-md"
            />
            <ul className="space-y-2 text-gray-700">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/whyus/"
              className="mt-6 inline-block rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Read more
            </Link>
            <h2 className="mt-10 text-xl font-bold text-brand">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2 text-gray-700">
              {QUICK_LINKS.map(([name, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm transition hover:text-brand"
                  >
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
