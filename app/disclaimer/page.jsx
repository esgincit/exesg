import PageHero from "../../components/PageHero";

export const metadata = {
  title: "Disclaimer - ESG",
  description: "Disclaimer for Executive Software Guild (ESG).",
};

export default function DisclaimerPage() {
  return (
    <>
      <PageHero title="Disclaimer" subtitle="We are transparent!" />
      <section className="mx-auto max-w-3xl px-4 py-14">
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            If you require any more information or have any questions about our site&apos;s
            disclaimer, please feel free to contact us by email at{" "}
            <a href="mailto:info@exesg.us" className="font-semibold text-brand hover:underline">
              info@exesg.us
            </a>
            .
          </p>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">Disclaimers for ESG</h2>
            <p>
              All the information on this website is published in good faith and for general
              information purpose only. ESG does not make any warranties about the completeness,
              reliability and accuracy of this information. Any action you take upon the information
              you find on this website (www.exesg.us), is strictly at your own risk. ESG will not be
              liable for any losses and/or damages in connection with the use of our website.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">External Links</h2>
            <p>
              From our website, you can visit other websites by following hyperlinks to such external
              sites. While we strive to provide only quality links to useful and ethical websites, we
              have no control over the content and nature of these sites. These links to other
              websites do not imply a recommendation for all the content found on these sites. Site
              owners and content may change without notice and may occur before we have the
              opportunity to remove a link which may have gone &lsquo;bad&apos;.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">Third-Party Policies</h2>
            <p>
              Please be also aware that when you leave our website, other sites may have different
              privacy policies and terms which are beyond our control. Please be sure to check the
              Privacy Policies of these sites as well as their &ldquo;Terms of Service&rdquo; before
              engaging in any business or uploading any information.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">Consent</h2>
            <p>
              By using our website, you hereby consent to our disclaimer and agree to its terms. For
              details on how we handle personal information, please see our{" "}
              <a href="/privacy/" className="font-semibold text-brand hover:underline">
                Privacy Policy
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-bold text-brand">Update</h2>
            <p>
              Should we update, amend or make any changes to this document, those changes will be
              prominently posted here.
            </p>
          </div>

          <p className="text-sm text-gray-500">Last updated: November 2026</p>
        </div>
      </section>
    </>
  );
}
