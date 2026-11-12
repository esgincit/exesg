import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Microsoft - ESG",
  description:
    "Microsoft platform solutions and service offerings built on .NET, SharePoint and BizTalk Server.",
};

const MS_CHALLENGES = [
  "High cost of sustaining legacy applications and technologies",
  "Fragmented enterprise knowledge, which is also not shared among employees",
  "Lack of unified platform to facilitate the smooth collaboration among employees, partners and suppliers",
  "Lack of actionable insight into business processes",
  "Inefficient user experience of legacy LOB applications, leading to reduced employee productivity",
  "Sub-optimal utilization of IT infrastructure",
];

const MS_OFFERINGS = [
  "Legacy modernization to the latest .NET platform",
  "Notes and documentum to SharePoint migration",
  "Portals, Collaboration, ECM and enterprise search solutions based on SharePoint and FAST",
  "Custom development on .NET platform",
  "BPM, SOA and application integration solutions based on BIZTALK server",
  "SharePoint and SAP interoperability",
];

export default function MicrosoftPage() {
  return (
    <>
      <PageHero
        title="Microsoft"
        subtitle="Technology forward. Always two steps ahead."
        image="/img/microsoft_small.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Microsoft</h2>
            <div className="mb-8 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              In order to remain competitive, enterprises today seek to gain more value
              from the existing IT investments and adopt new applications to meet the
              changing business needs. EXESG&apos;s Microsoft platform based solutions
              and service offerings provide the necessary infrastructure, products and
              tools to build and deploy innovative business solutions that help adopt
              newer technologies, enhance employee productivity and provide deeper
              insights into business performance, thereby increasing the ROI while
              minimizing the TCO.
            </p>

            <h3 className="mt-10 text-xl font-bold text-brand">
              Legacy ERP Process and Strategy — Challenges
            </h3>
            <div className="mb-8 mt-4 h-1 w-16 bg-accent" />
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              {MS_CHALLENGES.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-brand">
              Legacy ERP Process and Strategy — Offerings
            </h3>
            <div className="mb-8 mt-4 h-1 w-16 bg-accent" />
            <ul className="list-disc space-y-2 pl-6 text-gray-700">
              {MS_OFFERINGS.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <img
              src="/img/microsoft_small.jpg"
              alt="Microsoft solutions"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
