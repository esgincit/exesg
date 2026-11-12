import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Staff Augmentation - ESG",
  description:
    "On-demand availability of highly skilled functional and technical specialists, wherever you need them.",
};

const TECH_ROWS = [
  ["ABAP", "SD", "Security", "Technical", "Siebel CRM"],
  ["BI / BW", "MM", "Basis", "Functional", "PL / SQL"],
  ["Business Objects", "PP", "EP Admin", "Techno-Functional", "IBM / HP Mainframes"],
  ["PI / XI", "PM", "", "", "DBA"],
  ["CRM", "PS", "", "", "NET"],
  ["Webdynpro", "FI/CO", "", "", "JAVA"],
  ["Workflow", "APO", "", "", "Network Admin"],
  ["MDM", "SRM", "", "", ""],
  ["", "CRM", "", "", ""],
];

const TECH_HEADS = ["SAP Technical", "SAP Functional", "SAP Admin", "Oracle Apps", "Others"];

export default function StaffAugPage() {
  return (
    <>
      <PageHero
        title="Staff Augmentation"
        subtitle="A Leap to Accelerate Growth"
        image="/img/whatwedo.jpg"
      />

      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          {/* Text column */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">Staff Augmentation</h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />

            <p className="leading-relaxed text-gray-700">
              Companies manage their growth by adding employees and contractors wherever
              needed to increase output.
            </p>
            <p className="mt-4 font-bold text-gray-800">
              The unique advantages with this model are:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Organization retains the ability to control all its resources in-house</li>
              <li>It is a simple, quick and effective means for addressing support deficiencies</li>
              <li>It offers added flexibility</li>
            </ul>

            <p className="mt-8 font-bold text-gray-800">
              At EXESG, we offer staff augmentation services for the following technologies:
            </p>
            <div className="mt-4 overflow-x-auto">
              <table className="w-full min-w-[560px] border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-brand-light">
                    {TECH_HEADS.map((h) => (
                      <th
                        key={h}
                        className="border border-gray-200 px-3 py-2 text-left font-semibold text-brand"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TECH_ROWS.map((row, ri) => (
                    <tr key={ri}>
                      {row.map((cell, ci) => (
                        <td key={ci} className="border border-gray-200 px-3 py-2 text-gray-700">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Cross-links to related services */}
            <div className="mt-10 flex flex-wrap gap-3 border-t border-gray-200 pt-6">
              <a
                href="/roadmap/"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand-light"
              >
                Business Evolution Roadmap
              </a>
              <a
                href="/managed-services/"
                className="rounded border border-gray-300 px-4 py-2 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand-light"
              >
                Managed Services
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
