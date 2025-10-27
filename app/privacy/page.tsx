import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-dark">
      <Navigation />
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wider mb-8 text-gradient">
            PRIVACY POLICY
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              1. Information We Collect
            </h2>
            <p className="text-gray-400 mb-4">
              We collect information you provide directly to us, such as when you
              create an account, sign up for a class, or contact us for support.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              2. How We Use Your Information
            </h2>
            <p className="text-gray-400 mb-4">
              We use the information we collect to provide, maintain, and improve
              our services, to communicate with you, and to comply with legal
              obligations.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              3. Information Sharing
            </h2>
            <p className="text-gray-400 mb-4">
              We do not sell, trade, or otherwise transfer your personally
              identifiable information to outside parties except as described in
              this policy.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              4. Data Security
            </h2>
            <p className="text-gray-400 mb-4">
              We implement appropriate security measures to protect your personal
              information from unauthorized access, alteration, disclosure, or
              destruction.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              5. Contact Us
            </h2>
            <p className="text-gray-400 mb-4">
              If you have questions about this Privacy Policy, please contact us at
              info@paladinmma.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

