import PageHero from "../../components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "IT Staffing / Consulting - ESG",
  description:
    "IT staffing and consulting services from ESG: project staffing, project leaders and teams, and full-service technology consulting.",
};

const OUTCOMES = [
  "Transition of key personnel to priority initiatives",
  "Stable system and user acceptance for future enhancements",
  "Technical aspects of implementation",
];

export default function StaffingPage() {
  return (
    <>
      <PageHero
        title="IT Staffing / Consulting"
        subtitle="A leap to accelerate growth."
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-brand sm:text-3xl">
              IT Staffing
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              The key to success in today&apos;s complex IT environment is the
              ability to staff &amp; manage projects efficiently and
              effectively. This takes strong skills and experience from
              people and teams that have succeeded in taking projects to
              completion regardless of the situation.
            </p>
            <p className="mt-4 text-gray-700">
              Project Staffing services from ESG utilize proven experience
              and methodologies to deliver IT solutions that meet the
              business technology needs of our clients. Regardless of the
              size, scope and technology of the project, ESG can provide your
              organization with project leaders or project teams for
              virtually any IT project. Our long experience in delivering
              complex solutions for our clients has taught us that success
              requires skills both in working with clients as business
              partners and in providing the leadership to manage
              large-scale, complex consulting engagements.
            </p>
            <h2 className="mt-14 text-2xl font-bold text-brand sm:text-3xl">
              IT Consulting
            </h2>
            <div className="mb-8 mt-2 h-1 w-16 bg-accent" />
            <p className="text-gray-700">
              ESG technology consultants uncover technology barriers to
              business growth, and use their unique blend of business and
              technology experience to solve your unique challenges. Our
              proven methodologies, tools and best practices fast-track your
              digital business transformation.
            </p>
            <p className="mt-4 text-gray-700">
              ESG offers full-service IT consulting, addressing not only the
              technology transformation, but equally as important, the impact
              of new technology on your organization. Our IT consulting
              service will work with you to refine your processes, workflows
              and management systems that are affected by technology change
              and help ensure a smooth transition.
            </p>
          </div>
          <aside className="md:col-span-1">
            <img
              src="/img/solutions_small.jpg"
              alt="ESG solutions"
              className="mb-6 rounded-lg shadow-md"
            />
            <ul className="space-y-2 text-gray-700">
              {OUTCOMES.map((o) => (
                <li key={o} className="flex gap-2">
                  <span aria-hidden="true" className="text-accent">
                    &rarr;
                  </span>
                  <span>{o}</span>
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
