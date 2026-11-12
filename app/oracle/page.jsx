import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Oracle - ESG",
  description:
    "EXESG's hands-on expertise across Oracle E-Business Suite, PeopleSoft, JD Edwards, Fusion Middleware, Seibel CRM and more.",
};

const ORACLE_HANDS_ON = [
  "Oracle's E-Business Suite",
  "PeopleSoft",
  "JD Edwards",
  "Fusion Middleware",
  "Seibel CRM",
  "JAVA",
];

const ORACLE_STRATEGY = [
  "Due diligence for Application Support",
  "ERP Strategy and Roadmap",
  "ERP Audit",
  "Upgrade Assessment",
  "Architecture Assessment",
  "Business Process Standardization",
];

export default function OraclePage() {
  return (
    <>
      <PageHero
        title="Oracle"
        subtitle="Technology forward. Always two steps ahead."
        image="/img/oracle_small.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Oracle</h2>
            <div className="mb-8 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              In today&apos;s evolving business landscape, enterprises need to do more
              than just adapt; they need to predict change and respond proactively. This
              requires effective alignment of people, processes, data and technology in a
              way that enables enterprises to keep pace with existing demands, while
              preparing for future.
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              EXESG has hands on with the following:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              {ORACLE_HANDS_ON.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-brand">
              ERP Process and Strategy
            </h3>
            <div className="mb-8 mt-4 h-1 w-16 bg-accent" />
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              {ORACLE_STRATEGY.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <img
              src="/img/oracle_small.jpg"
              alt="Oracle solutions"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
