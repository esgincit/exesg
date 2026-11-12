import Link from "next/link";

const NAV = [
  { label: "HOME", href: "/" },
  {
    label: "ABOUT",
    href: "#",
    children: [
      { label: "About Us", href: "/about/" },
      { label: "Why Choose Us", href: "/whyus/" },
      { label: "We Support", href: "/wesupport/" },
    ],
  },
  {
    label: "SERVICES",
    href: "#",
    children: [
      { label: "Business Evolution Roadmap", href: "/roadmap/" },
      { label: "Staff Augmentation", href: "/staff-aug/" },
      { label: "Managed Services", href: "/managed-services/" },
      { label: "Value Added Services", href: "/value-added/" },
      { label: "Trainings", href: "/trainings/" },
      { label: "IT Staffing / Consulting", href: "/staffing/" },
    ],
  },
  {
    label: "TECHNOLOGIES",
    href: "#",
    children: [
      { label: "SAP", href: "/sap/" },
      { label: "Oracle", href: "/oracle/" },
      { label: "Microsoft", href: "/microsoft/" },
      { label: "Cloud", href: "/cloud/" },
      { label: "Big Data", href: "/big-data/" },
      { label: "BI Technologies", href: "/bi-technologies/" },
      { label: "UI Technologies", href: "/ui-technologies/" },
      { label: "RPA", href: "/rpa/" },
      { label: "RevPro", href: "/revpro/" },
    ],
  },
  { label: "CLIENTS", href: "/clients/" },
  { label: "CAREERS", href: "/careers/" },
  { label: "CONTACT", href: "/contact/" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold tracking-wide text-brand">
          <img src="/img/logo.png" alt="ESG logo" className="h-9 w-9" />
          <span className="uppercase">Executive Software Guild</span>
        </Link>
        <nav aria-label="Main navigation">
          <ul className="hidden items-center gap-1 lg:flex">
            {NAV.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className="block px-3 py-2 text-xs font-semibold text-gray-700 hover:text-brand"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 z-50 min-w-56 border-t-2 border-accent bg-white py-1 opacity-0 shadow-lg transition-opacity group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-light hover:text-brand"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
                {!item.children && (
                  <span className="absolute inset-x-0 bottom-0 mx-auto h-0.5 w-0 bg-brand transition-all group-hover:w-1/2" />
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Mobile nav */}
      <details className="border-t border-gray-100 lg:hidden">
        <summary className="cursor-pointer px-4 py-3 text-sm font-semibold text-brand">
          Menu
        </summary>
        <ul className="space-y-1 px-4 pb-4">
          {NAV.map((item) => (
            <li key={item.label}>
              <Link href={item.href} className="block py-1 text-sm font-semibold text-gray-800">
                {item.label}
              </Link>
              {item.children && (
                <ul className="ml-4 border-l border-gray-200 pl-3">
                  {item.children.map((child) => (
                    <li key={child.href}>
                      <Link href={child.href} className="block py-1 text-sm text-gray-600">
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </details>
    </header>
  );
}
