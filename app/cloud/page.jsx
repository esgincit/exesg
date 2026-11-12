import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Cloud Computing - ESG",
  description:
    "Cloud computing services with primary, high-availability, backup and disaster-recovery instances.",
};

const CLOUD_FEATURES = [
  {
    name: "Primary Instance",
    text: "Cloud server hosted in a Tier-4 Datacenter with world-class connectivity and security.",
  },
  {
    name: "High Availability",
    text: "A synchronously replicated instance in the same Datacenter where Primary instance resides, to ensure High Availability of your application/workload.",
  },
  {
    name: "Backup",
    text: "Data on the primary instance is backed up periodically, to ensure you can always restore it when needed. This 3rd Copy of data is put in a different Datacenter than the Primary and High Available (HA) instance.",
  },
  {
    name: "Disaster Recovery",
    text: "4th Copy of data is put in a different seismic zone which is at least 500KM away from the primary datacenter. This ensures you can always recover the systems in the event of any disaster/outages in the Primary DC, thus giving you a complete business continuity without any service disruption.",
  },
];

export default function CloudPage() {
  return (
    <>
      <PageHero
        title="Cloud Computing"
        subtitle="Technology forward. Always two steps ahead."
        image="/img/cloud_small.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              Cloud Computing
            </h2>
            <div className="mb-8 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              On-demand IT has reached a tipping point and organisations of all sizes and
              sectors are using cloud computing services to run and develop their
              businesses. But where does the cloud go next and what are some of the
              interesting use cases that will help take cloud to the next level?
            </p>
            <p className="mt-4 text-gray-700">
              Cloud computing is the new normal: Is it time to use it for everything?
            </p>
            <p className="mt-6 font-semibold text-gray-800">
              Our cloud computing services address the following:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">
              <li>Overcoming legacy concerns to leave the internal data centre</li>
              <li>Using on-demand IT for almost everything</li>
              <li>Boosting real-time marketing and sales communications</li>
              <li>Enabling enterprise and development from any location</li>
            </ul>

            <h3 className="mt-10 text-xl font-bold text-brand">
              ESG&apos;s unique features are as follows:
            </h3>
            <div className="mb-8 mt-4 h-1 w-16 bg-accent" />
            <div className="space-y-4">
              {CLOUD_FEATURES.map(({ name, text }) => (
                <div
                  key={name}
                  className="rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg"
                >
                  <h4 className="font-semibold text-gray-900">{name}</h4>
                  <p className="mt-2 text-gray-700">{text}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-1">
            <img
              src="/img/cloud_small.jpg"
              alt="Cloud computing"
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>
    </>
  );
}
