import PageHero from "../../components/PageHero";
import ContactForm from "../../components/ContactForm";

export const metadata = {
  title: "Contact - ESG",
  description: "Get in touch with Executive Software Guild.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Tell us about your project, staffing or training needs and we'll get back to you."
        image="/img/contact_small.jpg"
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <ContactForm />
      </section>
    </>
  );
}
