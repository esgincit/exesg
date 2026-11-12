import PageHero from "../../components/PageHero";
import Link from "next/link";

export const metadata = {
  title: "Clients - ESG",
  description: "Organizations trusting Executive Software Guild.",
};

const CLIENTS = [
  ["pwc.png", "PwC"],
  ["tech_mahindra.png", "Tech Mahindra"],
  ["hcl.gif", "HCL"],
  ["Parker.jpeg", "Parker"],
  ["JandJ.jpeg", "Johnson & Johnson"],
  ["LG1.jpeg", "LG"],
  ["lord.GIF", "Lord Corporation"],
  ["allianceone.gif", "AllianceOne"],
  ["borg.gif", "Borg"],
  ["chealth.gif", "Community Health"],
  ["mbsi.gif", "MBSI"],
  ["client_1.gif", "Client"],
  ["client_2.gif", "Client"],
  ["client_3.gif", "Client"],
  ["client_4.gif", "Client"],
  ["client_5.gif", "Client"],
  ["client_6.gif", "Client"],
  ["client_7.gif", "Client"],
  ["client_8.gif", "Client"],
  ["client_9.gif", "Client"],
  ["client_10.gif", "Client"],
  ["client_11.gif", "Client"],
  ["client_12.gif", "Client"],
  ["client_13.gif", "Client"],
  ["client_14.gif", "Client"],
  ["client_15.gif", "Client"],
  ["client_16.gif", "Client"],
  ["client_17.gif", "Client"],
];

export default function ClientsPage() {
  return (
    <>
      <PageHero
        title="Our Clients"
        subtitle="Companies and organizations that have trusted ESG."
        image="/img/client_small.jpg"
      />
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="grid grid-cols-2 items-center justify-items-center gap-8 sm:grid-cols-4 lg:grid-cols-6">
          {CLIENTS.map(([f, name]) => (
            <div key={f} className="flex flex-col items-center gap-2">
              <img
                src={`/img/clients/${f}`}
                alt={name}
                className="max-h-20 w-auto max-w-[140px] object-contain grayscale transition hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
