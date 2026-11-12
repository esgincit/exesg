import PageHero from "../../components/PageHero";

export const metadata = {
  title: "We Support - ESG",
  description:
    "Comprehensive, efficient and robust solutions tailored to your enterprise needs — application maintenance, integrations and 24x7 support.",
};

const CHALLENGES = [
  "Adapt to the changing market conditions",
  "Innovate continuously",
  "Align IT with business goals",
  "Optimize costs while maintaining high customer satisfaction",
  "Accelerate time-to-market for new products and services",
  "Integrate distributed operations and systems into a cohesive organization",
  "Meet industry standards and compliance requirements",
  "Leverage emerging technologies effectively",
  "Sustaining profitability in highly competitive and rapidly changing environments",
  "Building and managing complex customer information",
];

const AMS_SUPPORT = [
  "Implementation Projects with Remote development and Remote configuration",
  "Post production go-live support",
  "Rollouts with rigorous regression testing and integration testing",
  "Upgradation",
  "Data Migration",
  "24 X 7 Level 1, Level 2 and Level 3 support",
  "User Maintenance",
];

export default function WeSupportPage() {
  return (
    <>
      <PageHero
        title="We Support"
        subtitle="Comprehensive, efficient and robust solutions tailored to your enterprise needs."
        image="/img/whatwedo.jpg"
      />

      {/* Introduction */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">We Support</h2>
        <div className="mb-8 h-1 w-16 bg-accent" />
        <p className="leading-relaxed text-gray-700">
          From managing supply chains, devising strategies and deploying content management
          solutions to integrating enterprise-wide functions, EXESG helps you with comprehensive,
          efficient and robust solutions that meet your unique requirements. EXESG delivers
          comprehensive, efficient and robust solutions tailored to your enterprise needs. Often,
          the software that suits your specific needs simply is not available on the market. When
          packaged solutions and software are not sufficient or flexible enough for your
          enterprise, EXESG can custom-build to your specifications efficiently, and delivering our
          proven certainty.
        </p>
      </section>

      {/* Challenges */}
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">Challenges</h2>
          <div className="mb-8 h-1 w-16 bg-accent" />
          <ul className="grid gap-x-10 gap-y-3 text-gray-700 sm:grid-cols-2">
            {CHALLENGES.map((c) => (
              <li key={c} className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Our Approach + Business Value */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">Our Approach</h2>
            <div className="mb-6 h-1 w-16 bg-accent" />
            <p className="leading-relaxed text-gray-700">
              We partner with you to understand and address your unique transformation initiative.
              We work in transparent consultation with you to devise a best-in-class solution and
              define the best course of action to implement the same across your organization. Our
              integrated consulting and IT services will bring continuity and consistency to your
              strategic programs. Achieving instrumental improvements through technology is no
              longer enough: Companies must find ways to make quantum leaps in business
              performance.
            </p>
          </div>
          <div>
            <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">Business Value</h2>
            <div className="mb-6 h-1 w-16 bg-accent" />
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>Greater flexibility for growth</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  EXESG has proven highest-quality processes for solving complex problems,
                  mitigating risks, and achieving rock-solid ROI
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* AMS support scope */}
      <section className="bg-brand-light">
        <div className="mx-auto max-w-7xl px-4 py-14">
          <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">To Summarize a Few</h2>
          <div className="mb-8 h-1 w-16 bg-accent" />
          <p className="mb-6 text-gray-700">Through our AMS we provide support for</p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AMS_SUPPORT.map((s) => (
              <div
                key={s}
                className="rounded-lg border border-gray-200 bg-white p-6 transition hover:border-brand hover:shadow-lg"
              >
                <p className="text-gray-700">{s}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="/about/"
              className="rounded border border-gray-300 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            >
              About Us
            </a>
            <a
              href="/whyus/"
              className="rounded border border-gray-300 px-5 py-2.5 text-sm font-semibold text-brand transition hover:border-brand hover:bg-brand hover:text-white"
            >
              Why Choose Us?
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
