import PageHero from "../../components/PageHero";
import AdminDashboard from "../../components/AdminDashboard";

export const metadata = {
  title: "Admin - ESG",
  robots: { index: false, follow: false },
};

export default function AdminPage() {
  return (
    <>
      <PageHero title="Admin Panel" subtitle="LCA postings management" />
      <section className="mx-auto max-w-5xl px-4 py-14">
        <AdminDashboard />
      </section>
    </>
  );
}
