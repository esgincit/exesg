import PageHero from "../../components/PageHero";

export const metadata = {
  title: "BI Technologies - ESG",
  description:
    "Comprehensive Business Intelligence and Analytics services: BI, analytics and data mining, data warehousing.",
};

const BI_SERVICES = [
  {
    name: "Business Intelligence",
    text: "Through a tool-agnostic and process-centric approach, ESG offers comprehensive BI services that can help you make more informed decisions faster and optimize business performance across the entire enterprise, from strategy and assessment to migrations, upgrades, implementations, and support capabilities. ESG is at the forefront of BI technology, providing best-in-class business and industry solutions for quick and cost-effective implementations.",
  },
  {
    name: "Analytics and Data Mining",
    text: "ESG can help you increase the return from your BI initiatives by adding analytics to gain a true perspective of business operations. We provide the right analytics and data mining platform and technologies so you can uncover value and insights from enterprise data accumulated over decades; make faster and smarter decisions across the enterprise; increase the productivity of business users and improve customer satisfaction.",
  },
  {
    name: "Data Warehousing",
    text: "By leveraging the power and order of data warehousing and data management, you'll gain quick access to the right information when and where you need it, enabling you to unlock new innovations and insights from existing data sources. Whether you want to improve data quality through data cleansing or migrate to a high-performance database, we leverage a best-in-class technology and an unparalleled implementation methodology developed through hundreds of successful BI engagements.",
  },
];

export default function BITechnologiesPage() {
  return (
    <>
      <PageHero
        title="BI Technologies"
        subtitle="Business evolution. A leap to accelerate growth."
        image="/img/bi_technologies.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              BI Technologies
            </h2>
            <div className="mb-8 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              Businesses today must be able to glean insight and understand the value
              from every purchase, tweet, and customer care interaction. ESG can help you
              unlock this business value from mountains of data.
            </p>
            <p className="mt-4 text-gray-700">
              Our cost-effective and comprehensive Business Intelligence (BI) and
              Analytics services provide a foundation for insight and analysis to help
              you make more insightful business decisions, take bold action, and execute
              quickly.
            </p>

            <div className="mt-10 space-y-8">
              {BI_SERVICES.map(({ name, text }) => (
                <div key={name}>
                  <h3 className="text-xl font-bold text-brand">{name}</h3>
                  <div className="mb-4 mt-3 h-1 w-16 bg-accent" />
                  <p className="text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <img
              src="/img/bi_technologies.jpg"
              alt="Business Intelligence technologies"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
