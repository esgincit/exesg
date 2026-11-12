import PageHero from "../../components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "UI Technologies - ESG",
  description:
    "UI technologies expertise with Microsoft Azure and Amazon Web Services cloud platforms.",
};

const AZURE_FEATURES = [
  {
    img: "build-apps.png",
    title: "Build your apps, your way",
    text: "Use the tools and open source technologies you already know and trust, because Azure supports a broad selection of operating systems, programming languages, frameworks, databases and devices.",
  },
  {
    img: "extend.png",
    title: "Extend on-premises data and apps",
    text: "Take the investment you have made in open source technology, data, or apps and extend it to the cloud. Seamless hybrid cloud capabilities in Azure span infrastructure, data, user identity, apps and management.",
  },
  {
    img: "ecosystem.png",
    title: "Deploy the cloud on-premises",
    text: "Bring Azure capabilities to your datacentre with Azure Stack. Leverage the Azure portal, PowerShell and DevOps tools experience and app model across the cloud and on-premises.",
  },
];

const AWS_FEATURES = [
  {
    img: "security.png",
    title: "Secure",
    text: "Comprehensive security capabilities to satisfy the most demanding information security requirements.",
  },
  {
    img: "solutions.png",
    title: "Compliant",
    text: "Rich controls, auditing and broad security accreditations.",
  },
  {
    img: "hybrid.png",
    title: "Hybrid",
    text: "Build hybrid IT architectures that extend your on-premises infrastructure to the Cloud.",
  },
];

const SERVICES = [
  "Technical aspects of implementation",
  "Post-implementation support",
  "Problem resolution and knowledge management",
  "New custom development support",
  "Business enhancements",
  "Reports",
];

export default function UiTechnologiesPage() {
  return (
    <>
      <PageHero
        title="UI Technologies"
        subtitle="A leap to accelerate growth."
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              Microsoft Azure
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              Microsoft Azure is a growing collection of integrated cloud
              services which developers and IT professionals use to build,
              deploy and manage applications through our global network of
              datacentres. With Azure, you get the freedom to build and deploy
              wherever you want, using the tools, applications and frameworks
              of your choice.
            </p>
            <h3 className="mt-10 text-center text-lg font-semibold text-brand">
              Deploy anywhere with your choice of tools
            </h3>
            <div className="mt-8 grid gap-8 sm:grid-cols-3">
              {AZURE_FEATURES.map((f) => (
                <div
                  key={f.img}
                  className="rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <img
                    src={`/img/${f.img}`}
                    alt={f.title}
                    className="mx-auto h-20 w-auto"
                  />
                  <h4 className="mt-4 text-base font-semibold text-gray-900">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{f.text}</p>
                </div>
              ))}
            </div>

            <h2 className="mt-14 text-2xl font-bold text-brand sm:text-3xl">
              Amazon Web Services (AWS)
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              Amazon Web Services offers cloud web hosting solutions that
              provide businesses, non-profits, and governmental organizations
              with a flexible, highly scalable, and low-cost way to deliver
              their websites and web applications.
            </p>
            <h3 className="mt-10 text-center text-lg font-semibold text-brand">
              Engineered for the most demanding requirements
            </h3>
            <div className="mt-8 grid gap-8 text-center sm:grid-cols-3">
              {AWS_FEATURES.map((f) => (
                <div
                  key={f.img}
                  className="rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <img
                    src={`/img/${f.img}`}
                    alt={f.title}
                    className="mx-auto h-20 w-auto"
                  />
                  <h4 className="mt-4 text-base font-semibold text-gray-900">
                    {f.title}
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
          <aside className="md:col-span-1">
            <img
              src="/img/cloud_technologies.jpg"
              alt="Cloud technologies"
              className="mb-6 rounded-lg shadow-md"
            />
            <ul className="space-y-2 text-gray-700">
              {SERVICES.map((s) => (
                <li key={s} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                  <span>{s}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/whyus/"
              className="mt-6 inline-block rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              Read more
            </Link>
          </aside>
        </div>
      </section>
    </>
  );
}
