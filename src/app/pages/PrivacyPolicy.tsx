import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
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
          PRIVACY POLICY
        </h1>
        <p className="text-gray-400 mb-12">
          Last Updated: February 14, 2026
        </p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              1. Introduction
            </h2>
            <p>
              Welcome to AI Creative Studio ("we," "our," or "us"). We are
              committed to protecting your personal information and your right
              to privacy. This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              2. Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Name and contact information (email, phone number)</li>
              <li>Company or organization details</li>
              <li>
                Communication preferences and feedback about our services
              </li>
              <li>
                Project requirements and creative briefs you submit to us
              </li>
              <li>
                Payment information (processed securely through third-party
                providers)
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              3. How We Use Your Information
            </h2>
            <p className="mb-4">We use the information we collect to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Provide, maintain, and improve our services</li>
              <li>
                Process your requests and communicate with you about our
                services
              </li>
              <li>Send you technical notices and support messages</li>
              <li>
                Respond to your comments, questions, and provide customer
                service
              </li>
              <li>
                Develop new features and enhance the AI content creation
                experience
              </li>
              <li>
                Protect against fraudulent, unauthorized, or illegal activity
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We do not sell, trade, or rent your personal information to third
              parties. We may share your information only in the following
              circumstances:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>
                With service providers who assist us in operating our business
              </li>
              <li>
                When required by law or to respond to legal processes
              </li>
              <li>
                To protect our rights, privacy, safety, or property, and that
                of our users
              </li>
              <li>
                In connection with a merger, acquisition, or sale of all or a
                portion of our assets
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              5. Data Security
            </h2>
            <p>
              We implement appropriate technical and organizational security
              measures to protect your personal information against
              unauthorized access, alteration, disclosure, or destruction.
              However, no method of transmission over the Internet or electronic
              storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              6. Your Privacy Rights
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding
              your personal information:
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Access to the personal information we hold about you</li>
              <li>
                Correction of inaccurate or incomplete personal information
              </li>
              <li>Deletion of your personal information</li>
              <li>
                Objection to or restriction of certain processing activities
              </li>
              <li>Data portability</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              7. Cookies and Tracking Technologies
            </h2>
            <p>
              We use cookies and similar tracking technologies to track activity
              on our website and store certain information. You can instruct
              your browser to refuse all cookies or to indicate when a cookie is
              being sent. However, if you do not accept cookies, you may not be
              able to use some portions of our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              8. AI-Generated Content
            </h2>
            <p>
              Any content you provide for AI processing is used solely for
              creating your requested deliverables. We do not use your project
              data to train our AI models without your explicit consent. All
              client projects are kept confidential and secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              9. Children's Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 18.
              We do not knowingly collect personal information from children. If
              you are a parent or guardian and believe your child has provided
              us with personal information, please contact us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              10. Changes to This Privacy Policy
            </h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify
              you of any changes by posting the new Privacy Policy on this page
              and updating the "Last Updated" date. You are advised to review
              this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 text-white">
              11. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy, please
              contact us:
            </p>
            <div className="bg-white/5 border border-white/10 rounded-lg p-6">
              <p className="mb-2">
                <strong>Email:</strong>{" "}
                <a
                  href="mailto:privacy@aistudio.com"
                  className="text-cyan-400 hover:text-cyan-300"
                >
                  privacy@aistudio.com
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
        </div>
      </div>
    </div>
  );
}
