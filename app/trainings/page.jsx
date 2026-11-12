import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Trainings - ESG",
  description:
    "Training sessions, knowledge sharing and career development across ERP, database, development and reporting technologies.",
};

const TRAININGS = [
  ["ERP:", "Oracle E-Business Suite, SAP, SAS, PeopleSoft"],
  ["Database Administration:", "Oracle, SQL Server, DB2"],
  ["Development/Coding:", "Java, Oracle, .Net, C++, Ruby Rails"],
  [
    "Integration Services:",
    "SOA, Oracle Identity Management, Portal Development, Application Development Framework (ADF), Build Manager",
  ],
  [null, "Web Applications"],
  ["Storage:", "SANDISK"],
  [null, "Data Warehousing"],
  ["Reporting:", "Hyperion, Informatica, OBIEE"],
  [null, "Data Analysis"],
  [null, "Networking"],
  [null, "Business Analysis"],
  [null, "Testing"],
];

export default function TrainingsPage() {
  return (
    <>
      <PageHero
        title="Trainings"
        subtitle="A Leap to Accelerate Growth"
        image="/img/whatwedo.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Text column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Trainings</h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />

            <p className="leading-relaxed text-gray-700">
              Our strength lies in our employees and their extensive knowledge on various
              business software. We constantly strive to provide support, training sessions,
              Knowledge Sharing and Career Development sessions, to build upon the expertise
              levels.
            </p>

            <p className="mt-6 font-bold text-gray-800">
              We are specialized in training on various technologies including and not limited
              to:
            </p>
            <ul className="space-y-2 text-gray-700">
              {TRAININGS.map(([label, text]) => (
                <li key={text}>
                  {label ? <strong className="text-gray-900">{label}</strong> : null}
                  {label ? " " : ""}
                  {text}
                </li>
              ))}
            </ul>
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
