export const dynamic = "force-static";

export default function sitemap() {
  const base = "https://www.exesg.us";
  const routes = [
    "",
    "about/",
    "whyus/",
    "wesupport/",
    "roadmap/",
    "staff-aug/",
    "managed-services/",
    "value-added/",
    "trainings/",
    "staffing/",
    "sap/",
    "oracle/",
    "microsoft/",
    "cloud/",
    "big-data/",
    "bi-technologies/",
    "ui-technologies/",
    "rpa/",
    "revpro/",
    "clients/",
    "careers/",
    "contact/",
  ];
  return routes.map((r) => ({ url: `${base}/${r}`, lastModified: "2026-11-10" }));
}
