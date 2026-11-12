import PageHero from "../../components/PageHero";

export const metadata = {
  title: "SAP - ESG",
  description:
    "SAP solutions consulting, end-to-end implementations, upgrades, maintenance and support.",
};

const SAP_EXPERTISE = [
  "Maintenance and Quality",
  "Sales and Distribution Management (SAP SD)",
  "Inventory and Production (SAP IM / PP)",
  "Purchase Order Management",
  "Warehouse Management (SAP WM)",
  "Financial Accounting (SAP FI)",
  "Cost Accounting (SAP CO)",
  "Human Resources (SAP HR)",
  "Plant Maintenance (SAP PM)",
  "Project Systems (SAP PS)",
  "Environment Health and Safety (SAP EHS)",
  "Technical Developments and Enhancements",
  "Third Party Software Integration",
  "EDI",
];

const SAP_NEW_DIMENSIONAL = [
  "SAP CRM",
  "SAP HANA",
  "SAP HCM",
  "SAP MDG",
  "SAP Mobility",
  "SAP PLM",
  "SAP S/4 HANA",
  "SAP Solution Manager",
  "SAP SRM",
  "SAP SCM",
  "SAP Data Science",
  "SAP IOT Technical",
];

export default function SapPage() {
  return (
    <>
      <PageHero
        title="SAP"
        subtitle="Technology forward. Always two steps ahead."
        image="/img/sap_small.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">SAP</h2>
            <div className="mb-8 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              The business world is transforming at a fast pace. To sustain competitive
              advantage in this changing environment, it is imperative for the companies
              to connect the entire enterprise together. EXESG has extensive experience
              across SAP solutions and Consulting, End-to-End implementations, Upgrades,
              Maintenance and Support helping customers implement, optimize and enhance
              value from their SAP investments.
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              By offering SAP enterprise solutions, EXESG enables companies across
              industries benefit from the following:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Simplified technology landscapes</li>
              <li>Integrated processes</li>
              <li>Streamlined operations</li>
              <li>Unit testing</li>
              <li>Agility and improved connectivity</li>
            </ul>

            <h3 className="mt-10 text-xl font-bold text-brand">
              Our expertise falls into the following areas of SAP
            </h3>
            <div className="mb-8 mt-4 h-1 w-16 bg-accent" />
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {SAP_EXPERTISE.map((item) => (
                <li
                  key={item}
                  className="border-b border-dotted border-gray-300 py-2 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <h3 className="mt-10 text-xl font-bold text-brand">
              We have expertise in the below mentioned new-dimensional products of SAP
            </h3>
            <div className="mb-8 mt-4 h-1 w-16 bg-accent" />
            <ul className="grid gap-x-10 sm:grid-cols-2">
              {SAP_NEW_DIMENSIONAL.map((item) => (
                <li
                  key={item}
                  className="border-b border-dotted border-gray-300 py-2 text-gray-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-1">
            <img
              src="/img/sap_small.jpg"
              alt="SAP solutions"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
