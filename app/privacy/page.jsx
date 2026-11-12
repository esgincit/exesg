import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Privacy Policy - ESG",
  description: "How Executive Software Guild (ESG) collects, uses and protects personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        title="Privacy Policy"
        subtitle="How we collect, use and protect your information"
      />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            Executive Software Guild (&ldquo;ESG&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) operates
            the website www.exesg.us. This page explains what personal information we collect, why
            we collect it, and the choices you have. If you have any questions, contact us at{" "}
            <a href="mailto:info@exesg.us" className="font-semibold text-brand hover:underline">
              info@exesg.us
            </a>
            .
          </p>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">1. Information We Collect</h2>
            <p>We collect information you choose to give us, and basic technical data about your visit:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Contact form submissions.</strong> When you use our contact form we collect
                your name, email address, subject and message. This information is delivered to our
                designated company mailboxes so we can respond to you.
              </li>
              <li>
                <strong>Job applications and LCA-related correspondence.</strong> If you contact us
                about a posted Labor Condition Application (LCA) or a career opportunity, we use the
                details you provide to process your enquiry.
              </li>
              <li>
                <strong>Technical data.</strong> Like most websites, our hosting provider (Cloudflare)
                processes standard request data — such as IP address, browser type and pages visited —
                to deliver the site, protect it from abuse, and enforce our security policies. This
                data is governed by Cloudflare&apos;s privacy policy.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">2. How We Use Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Respond to your enquiries, project discussions and job applications;</li>
              <li>Provide and operate the website securely;</li>
              <li>Comply with applicable legal and regulatory obligations (including U.S. Department of Labor posting requirements);</li>
              <li>Send you information you have specifically requested.</li>
            </ul>
            <p className="mt-3">
              We do not sell, rent or trade your personal information to third parties for marketing
              purposes. We do not use your data to train AI models.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">3. Third-Party Service Providers</h2>
            <p>
              We rely on a small number of service providers to operate this website. Each processes
              data only as needed to provide its service:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>
                <strong>Cloudflare</strong> — website hosting, content delivery, TLS encryption and
                protection against malicious traffic.
              </li>
              <li>
                <strong>Web3Forms</strong> — delivery of contact form submissions to our email inbox.
              </li>
              <li>
                <strong>Google Workspace</strong> — storage and processing of email correspondence
                sent to and from our company mailboxes.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">4. Data Retention</h2>
            <p>
              We keep contact-form correspondence and application-related emails for as long as
              necessary to handle your enquiry and to meet legal or record-keeping obligations, after
              which they are deleted in the normal course of mailbox management.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">5. Cookies</h2>
            <p>
              This website does not use tracking or advertising cookies. Any cookies present are
              strictly functional (for example, an administrator session cookie on the internal
              postings management area, which is not accessible to the public).
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">6. Your Rights and Choices</h2>
            <p>
              You may ask us to access, correct or delete the personal information you have provided
              to us. To make a request, email{" "}
              <a href="mailto:info@exesg.us" className="font-semibold text-brand hover:underline">
                info@exesg.us
              </a>{" "}
              with sufficient detail for us to identify you and your submission. We will respond
              within a reasonable timeframe.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">7. Children&apos;s Privacy</h2>
            <p>
              This website is intended for business and professional audiences and is not directed at
              children under 13. We do not knowingly collect personal information from children.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">8. Security</h2>
            <p>
              The website is served exclusively over encrypted TLS connections, hosted behind
              Cloudflare&apos;s network with bot and abuse protection enabled. No system is perfectly
              secure, but we take reasonable technical and organizational measures to protect your
              information.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">9. External Links</h2>
            <p>
              Our website may contain links to external sites. We are not responsible for the privacy
              practices or content of those sites; we encourage you to review their policies. See
              also our{" "}
              <a href="/disclaimer/" className="font-semibold text-brand hover:underline">
                Disclaimer
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this
              page with an updated revision date.
            </p>
          </div>

          <p className="text-sm text-gray-500">Last updated: November 2026</p>
        </div>
      </section>
    </>
  );
}
