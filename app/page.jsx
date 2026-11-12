export const metadata = {
  title: "ESG - Home Page",
};

const SLIDES = [
  {
    img: "/img/slides/file.jpg",
    title: "SOLUTIONS CONSULTING",
    caption: "END-TO-END IMPLEMENTATION",
  },
  {
    img: "/img/slides/slide_2.jpg",
    title: "ORACLE CERTIFIED ASSOCIATES",
    caption: "WHEN BUSINESS DEMANDS",
  },
  {
    img: "/img/slides/slide_3.jpg",
    title: "MICROSOFT SOLUTIONS",
    caption: "ADOPT NEW APPLICATIONS TO MEET CHANGING BUSINESS",
  },
  {
    img: "/img/slides/slide_4.jpg",
    title: "BIG DATA",
    caption: "DATA REALLY POWERS EVERYTHING THAT WE DO.",
  },
  {
    img: "/img/cloud_small.jpg",
    title: "CLOUD COMPUTING",
    caption: "CLOUD IS ABOUT HOW YOU DO COMPUTING, NOT WHERE YOU DO.",
  },
];

const WHAT_WE_DO = [
  {
    title: "Business Evolution Roadmap",
    href: "/roadmap/",
    text: "Align your technology implementations with business goals — mitigating risk, reducing cost and improving efficiency.",
  },
  {
    title: "Staff Augmentation",
    href: "/staff-aug/",
    text: "On-demand availability of highly skilled functional and technical specialists, where you need them.",
  },
  {
    title: "Managed Services",
    href: "/managed-services/",
    text: "Guaranteed service levels and reduced total cost of ownership across your applications.",
  },
  {
    title: "Value Added Services",
    href: "/value-added/",
    text: "Security, support and specialized services that extend your team's reach.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-brand-dark text-white">
        <div className="relative mx-auto max-w-7xl">
          <img
            src={SLIDES[0].img}
            alt="ESG solutions consulting"
            className="h-[420px] w-full object-cover opacity-40 sm:h-[480px]"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <h1 className="max-w-3xl text-3xl font-bold tracking-wide sm:text-5xl">
              {SLIDES[0].title}
            </h1>
            <p className="mt-3 text-lg text-gray-200">{SLIDES[0].caption}</p>
            <a
              href="/roadmap/"
              className="mt-6 rounded bg-accent px-6 py-2.5 text-sm font-semibold text-white hover:bg-amber-600"
            >
              READ MORE
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 border-t border-white/10 py-4 text-xs text-gray-300 sm:grid-cols-5">
            {SLIDES.slice(1).map((s) => (
              <li key={s.title} className="text-center sm:text-left">
                <span className="font-semibold text-white">{s.title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* What We Do */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">What We Do?</h2>
        <div className="mb-8 h-1 w-16 bg-accent" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {WHAT_WE_DO.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="group rounded-lg border border-gray-200 p-6 transition hover:border-brand hover:shadow-lg"
            >
              <h3 className="mb-2 font-semibold text-brand group-hover:text-accent">{c.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600">{c.text}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-accent">Learn more →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Featured + Why ESG */}
      <section className="bg-brand-light">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-2">
          <div>
            <h2 className="mb-2 text-xl font-bold uppercase tracking-wide text-brand">
              Featured Service
            </h2>
            <div className="mb-6 h-1 w-16 bg-accent" />
            <p className="leading-relaxed text-gray-700">
              A business evolution roadmap is a plan that organizations use to align their technology
              implementations with their business goals, which help them mitigate risk, reduce
              costs, improve efficiencies and react fast in response to the changes in the market
              place.
            </p>
            <a
              href="/roadmap/"
              className="mt-6 inline-block rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Learn more
            </a>
          </div>
          <div>
            <h2 className="mb-2 text-xl font-bold uppercase tracking-wide text-brand">Why ESG?</h2>
            <div className="mb-6 h-1 w-16 bg-accent" />
            <ul className="space-y-4 text-gray-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>Reduce Total Cost of Ownership</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>Guaranteed service levels</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent" />
                <span>
                  On-Demand availability of highly skilled functional and technical specialists
                </span>
              </li>
            </ul>
            <a
              href="/whyus/"
              className="mt-6 inline-block rounded bg-brand px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand-dark"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <h2 className="mb-2 text-2xl font-bold text-brand sm:text-3xl">Our Clients</h2>
        <div className="mb-8 h-1 w-16 bg-accent" />
        <div className="grid grid-cols-3 items-center justify-items-center gap-6 sm:grid-cols-6">
          {[
            "pwc.png",
            "tech_mahindra.png",
            "hcl.gif",
            "Parker.jpeg",
            "client_1.gif",
            "client_3.gif",
          ].map((f) => (
            <img
              key={f}
              src={`/img/clients/${f}`}
              alt="Client logo"
              className="max-h-16 w-auto max-w-[120px] object-contain grayscale transition hover:grayscale-0"
            />
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href="/clients/" className="inline-block text-sm font-semibold text-brand hover:text-accent">
            See all our clients →
          </a>
        </div>
      </section>
    </>
  );
}
