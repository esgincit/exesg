import PageHero from "../../components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "RPA - ESG",
  description:
    "Robotic process automation (RPA) services from ESG: process automation, IT support and management, and automated assistants.",
};

const AREAS = [
  {
    title: "Process automation",
    text: "Technologies like presentation-layer automation software – a technology that mimics the steps of a rules-based, non-subjective process without compromising the existing IT architecture – are able to consistently carry out prescribed functions and easily scale up or down to meet demand. Process automation can expedite back-office tasks in finance, procurement, supply chain management, accounting, customer service and human resources, including data entry, purchase order issuing, creation of online access credentials, or business processes that require “swivel-chair” access to multiple existing systems.",
  },
  {
    title: "IT support and management",
    text: "Automated processes in the remote management of IT infrastructures can consistently investigate and solve problems for faster process throughput. RPA can improve service desk operations and the monitoring of network devices. Separating scalability from human resources allows a company to handle short-term demand without extra recruiting or training.",
  },
  {
    title: "Automated assistant",
    text: "As in voice recognition software or automated online assistants, developments in how machines process language, retrieve information and structure basic content mean that RPA can provide answers to employees or customers in natural language rather than in software code. This technology can help to conserve resources for large call centers and for customer interaction centers.",
  },
];

const BENEFITS = [
  "Cost savings",
  "Quality, accurate work",
  "Enhanced cycle time",
  "Employee empowerment",
  "Simplicity and flexibility",
  "Insights and analytics",
];

const QUICK_LINKS = [
  ["SAP", "/sap/"],
  ["Oracle", "/oracle/"],
  ["Microsoft", "/microsoft/"],
  ["Cloud", "/cloud/"],
  ["Big Data", "/big-data/"],
];

export default function RpaPage() {
  return (
    <>
      <PageHero
        title="RPA"
        subtitle="Always two steps ahead."
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <p className="text-gray-700">
              <span className="font-semibold">
                Robotic process automation (RPA)
              </span>{" "}
              is the application of technology that allows employees in a
              company to configure computer software or a “robot” to capture
              and interpret existing applications for processing a
              transaction, manipulating data, triggering responses and
              communicating with other digital systems.
            </p>
            <p className="mt-4 text-gray-700">
              Any company that uses labor on a large scale for general
              knowledge process work, where people are performing
              high-volume, highly transactional process functions, will boost
              their capabilities and save money and time with robotic process
              automation software.
            </p>
            <p className="mt-4 text-gray-700">
              Just as industrial robots are remaking the manufacturing
              industry by creating higher production rates and improved
              quality, RPA “robots” are revolutionizing the way we think
              about and administer business processes, IT support processes,
              workflow processes, remote infrastructure and back-office work.
              RPA provides dramatic improvements in accuracy and cycle time
              and increased productivity in transaction processing while it
              elevates the nature of work by removing people from dull,
              repetitive tasks.
            </p>
            <h2 className="mt-12 text-2xl font-bold text-brand sm:text-3xl">
              Where RPA can be applied
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />
            <div className="space-y-6">
              {AREAS.map((a) => (
                <div
                  key={a.title}
                  className="rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <h3 className="text-lg font-semibold text-gray-900">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-gray-600">{a.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-gray-700">
              As RPA brings more technologically-advanced solutions to
              businesses around the world, operating models that adopt
              automation, whether in-house or offshored, will cut costs,
              drive efficiency and improve quality.
            </p>
          </div>
          <aside className="md:col-span-1">
            <img
              src="/img/rpa.jpg"
              alt="Robotic process automation"
              className="mb-6 rounded-lg shadow-md"
            />
            <ul className="space-y-2 text-gray-700">
              {BENEFITS.map((b) => (
                <li key={b} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                  <span>{b}</span>
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
