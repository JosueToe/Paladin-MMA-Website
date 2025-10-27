import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-dark">
      <Navigation />
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bebas tracking-wider mb-8 text-gradient">
            TERMS OF SERVICE
          </h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-400 mb-4">
              By accessing and using Paladin MMA Academy's services, you accept and
              agree to be bound by these Terms of Service.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              2. Membership and Classes
            </h2>
            <p className="text-gray-400 mb-4">
              Membership terms, class schedules, and fees are subject to change. All
              members must complete a waiver before participating in classes.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              3. Code of Conduct
            </h2>
            <p className="text-gray-400 mb-4">
              Members are expected to maintain respect, sportsmanship, and proper
              gym etiquette. Violation of conduct policies may result in membership
              termination.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              4. Liability Waiver
            </h2>
            <p className="text-gray-400 mb-4">
              Martial arts training involves physical contact and inherent risks.
              Members participate at their own risk and agree to release Paladin MMA
              Academy from liability.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              5. Cancellation Policy
            </h2>
            <p className="text-gray-400 mb-4">
              Membership cancellations require 30 days written notice. No refunds
              for partial months.
            </p>

            <h2 className="text-2xl font-bebas tracking-wider text-light mt-8 mb-4">
              6. Contact
            </h2>
            <p className="text-gray-400 mb-4">
              For questions about these Terms, contact us at info@paladinmma.com
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

