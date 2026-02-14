import { ArrowLeft } from "lucide-react";

export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-black text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-[1000px] mx-auto px-6 py-4">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </a>
        </div>
      </header>

      {/* Content */}
      <div className="max-w-[1000px] mx-auto px-6 py-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-wider">
          TERMS & CONDITIONS
        </h1>
        <p className="text-gray-400 mb-12">
          Last Updated: February 14, 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the services provided by AI Creative Studio
              ("Company," "we," "our," or "us"), you accept and agree to be
              bound by these Terms and Conditions. If you do not agree to these
              terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              2. Services Description
            </h2>
            <p className="mb-4">
              AI Creative Studio provides AI-powered content creation services,
              including but not limited to:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>AI-generated video advertisements</li>
              <li>Product visualization and imagery</li>
              <li>Short-form social media content</li>
              <li>AI influencer content and digital creator services</li>
              <li>Creative consultation and strategy services</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              3. Client Responsibilities
            </h2>
            <p className="mb-4">As a client, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Provide accurate, complete, and timely information for project
                briefs
              </li>
              <li>
                Ensure you have the right to use any materials you provide to us
              </li>
              <li>
                Respond to requests for feedback and approval in a timely manner
              </li>
              <li>
                Use our services and deliverables in compliance with all
                applicable laws
              </li>
              <li>
                Not misrepresent AI-generated content as traditionally produced
                content where disclosure is required
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              4. Intellectual Property Rights
            </h2>
            <h3 className="text-xl font-semibold mb-3 text-white">
              4.1 Ownership of Deliverables
            </h3>
            <p className="mb-4">
              Upon full payment, you will own all rights to the final
              deliverables created specifically for your project. This includes
              the right to use, modify, and distribute the content for
              commercial purposes.
            </p>
            <h3 className="text-xl font-semibold mb-3 text-white">
              4.2 Company Rights
            </h3>
            <p className="mb-4">
              We retain ownership of:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Our proprietary AI models and technologies</li>
              <li>Our AI influencer characters and their likeness</li>
              <li>Templates, tools, and methodologies used in creation</li>
              <li>
                The right to showcase your project in our portfolio (unless
                otherwise agreed in writing)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              5. Payment Terms
            </h2>
            <p className="mb-4">
              Payment terms are established in your project agreement and
              typically include:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                A deposit (usually 50%) required before work begins
              </li>
              <li>
                Final payment due upon project completion and before final
                delivery
              </li>
              <li>
                Late payments may incur interest charges as specified in your
                agreement
              </li>
              <li>
                All prices are in USD unless otherwise specified
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              6. Revisions and Changes
            </h2>
            <p>
              Each project includes a specified number of revision rounds as
              outlined in your project agreement. Additional revisions beyond
              the agreed-upon amount may incur additional fees. Significant
              changes to project scope after work has begun may require a new
              agreement and additional payment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              7. Project Timeline
            </h2>
            <p>
              We will make reasonable efforts to meet agreed-upon deadlines.
              However, timelines are estimates and may be affected by factors
              including client feedback delays, scope changes, or technical
              issues. We are not liable for delays caused by circumstances
              beyond our reasonable control.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              8. Confidentiality
            </h2>
            <p>
              Both parties agree to keep confidential any proprietary or
              sensitive information shared during the course of the project. We
              will not disclose your project details to third parties without
              your consent, except as necessary to complete the work or as
              required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              9. AI Content Disclaimer
            </h2>
            <p className="mb-4">
              You acknowledge and understand that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                All content is created using artificial intelligence technology
              </li>
              <li>
                While we strive for accuracy and quality, AI-generated content
                may occasionally contain imperfections
              </li>
              <li>
                You are responsible for ensuring AI-generated content complies
                with platform policies where you publish it
              </li>
              <li>
                Platform policies regarding AI content may change, and we cannot
                guarantee future compliance
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              10. Limitation of Liability
            </h2>
            <p>
              To the maximum extent permitted by law, AI Creative Studio shall
              not be liable for any indirect, incidental, special, consequential,
              or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly. Our total liability shall not
              exceed the amount paid by you for the specific services giving
              rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              11. Warranties and Disclaimers
            </h2>
            <p className="mb-4">
              We warrant that:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                Services will be performed in a professional and workmanlike
                manner
              </li>
              <li>
                We have the right to grant you the licenses described in these
                terms
              </li>
              <li>
                Final deliverables will be original works created by our AI
                systems
              </li>
            </ul>
            <p className="mt-4">
              EXCEPT AS EXPRESSLY PROVIDED HEREIN, ALL SERVICES ARE PROVIDED "AS
              IS" WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              12. Termination
            </h2>
            <p>
              Either party may terminate a project agreement with written
              notice. Upon termination, you will pay for all work completed up
              to the termination date. Deposits are non-refundable. We reserve
              the right to terminate services if you breach these terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              13. Dispute Resolution
            </h2>
            <p>
              Any disputes arising from these terms or our services shall first
              be attempted to be resolved through good-faith negotiation. If
              negotiation fails, disputes shall be resolved through binding
              arbitration in accordance with the rules of the American
              Arbitration Association.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              14. Governing Law
            </h2>
            <p>
              These Terms and Conditions shall be governed by and construed in
              accordance with the laws of the State of California, United
              States, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              15. Changes to Terms
            </h2>
            <p>
              We reserve the right to modify these terms at any time. Changes
              will be effective immediately upon posting to our website. Your
              continued use of our services after changes are posted constitutes
              acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              16. Entire Agreement
            </h2>
            <p>
              These Terms and Conditions, together with any project-specific
              agreements, constitute the entire agreement between you and AI
              Creative Studio regarding our services and supersede all prior
              agreements and understandings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              17. Contact Information
            </h2>
            <p className="mb-4">
              For questions about these Terms and Conditions, please contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:legal@aistudio.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  legal@aistudio.com
                </a>
              </p>
              <p className="mb-2">
                <strong>Phone:</strong>{" "}
                <a
                  href="tel:+10001234567"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  +1 (000) 123-4567
                </a>
              </p>
              <p>
                <strong>Address:</strong> 123 Innovation Street, San Francisco,
                CA 94105
              </p>
            </div>
          </section>

          <section className="bg-cyan-500/10 border border-cyan-500/30 rounded-lg p-6">
            <p className="text-sm">
              <strong>By using our services, you acknowledge that you have read,
              understood, and agree to be bound by these Terms and Conditions.</strong>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
