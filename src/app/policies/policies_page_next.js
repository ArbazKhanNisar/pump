import React from "react";

export default function PoliciesPage() {
  return (
    <main className="container py-5">
      {/* Header */}
      <header className="text-center mb-5">
        <p className="text-uppercase text-secondary small mb-2">Our Company Policies</p>
        <h1 className="fw-bold mb-3">Built on Trust. Delivered with Transparency.</h1>
        <p className="text-muted mx-auto" style={{ maxWidth: '720px' }}>
          At Inventomatic Seals India, we believe that great products are only as strong as the
          policies behind them. Our guidelines are designed to ensure quality, fairness, and
          customer satisfaction—whether you’re ordering from Mumbai or Munich.
        </p>
      </header>

      <div className="bg-white border rounded-4 shadow-sm p-4 mb-4">
        <p className="mb-0 text-muted">
          We proudly serve industries across India and international markets, backed by clear and
          transparent policies that protect both your purchase and peace of mind.
        </p>
      </div>

      <div className="d-flex flex-column gap-4">
        {/* Quality Assurance */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <h4 className="fw-semibold mb-3">1. Quality Assurance Policy</h4>
          <p>
            We manufacture all mechanical seals, rotary joints, and sealing components as per ISO
            9001:2015 standards. Every product undergoes:
          </p>
          <ul>
            <li>Raw material verification with Material Test Certificates (MTCs)</li>
            <li>Visual and dimensional inspections</li>
            <li>Pressure or hydrostatic testing (if applicable)</li>
            <li>Final QC audit and packaging validation</li>
          </ul>
          <p>
            Our goal: Zero-defect products that deliver long operational life and peak performance
            across critical industrial applications.
          </p>
        </section>

        {/* Return & Replacement */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <h4 className="fw-semibold mb-3">2. Return & Replacement Policy</h4>
          <p>We accept returns and replacements in the following cases:</p>
          <ul>
            <li>Return request raised within 7 working days of delivery</li>
            <li>Product is unused, uninstalled, and in original packaging</li>
            <li>Manufacturing defects or mismatch with order specifications</li>
            <li>Custom-designed or OEM-specific products are non-returnable, unless defective</li>
          </ul>
          <p>
            All returns are subject to inspection and approval by our QC team before processing.
          </p>
        </section>

        {/* Shipping */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <h4 className="fw-semibold mb-3">3. Shipping & Delivery Policy</h4>
          <p>We deliver across India and to global destinations.</p>
          <ul>
            <li>Standard delivery window: 5–15 business days, depending on product & location</li>
            <li>International shipments via trusted partners (FedEx, DHL, Aramex, etc.)</li>
            <li>All orders are transit-insured against damage or loss</li>
            <li>Shipping charges based on actual weight, volume, and destination</li>
          </ul>
          <p>Real-time tracking details will be shared post-dispatch.</p>
        </section>

        {/* Warranty */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <h4 className="fw-semibold mb-3">4. Warranty Policy</h4>
          <p>
            All Inventomatic products are backed by a 12-month warranty from the invoice date.
            Warranty covers:
          </p>
          <ul>
            <li>Material and casting defects</li>
            <li>Manufacturing errors</li>
            <li>Design flaws (for standard designs)</li>
          </ul>
          <p className="fw-semibold mt-3">Not Covered:</p>
          <ul>
            <li>Improper installation or misuse</li>
            <li>Exposure to conditions beyond design limits</li>
            <li>Wear and tear due to continuous use</li>
          </ul>
          <p>Extended warranties are available for OEMs and high-volume contracts.</p>
        </section>

        {/* Privacy */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <h4 className="fw-semibold mb-3">5. Privacy Policy</h4>
          <p>We value your trust and protect your information.</p>
          <ul>
            <li>We never share your personal, technical, or company data</li>
            <li>All drawings and project communications are kept 100% confidential</li>
            <li>Information is stored securely and used only for order processing & communication</li>
          </ul>
        </section>

        {/* Legal */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <h4 className="fw-semibold mb-3">6. Legal & Compliance Policy</h4>
          <p>
            All business dealings follow Indian corporate laws, GST norms, and international trade
            laws.
          </p>
          <p>We provide all necessary documentation:</p>
          <ul>
            <li>Proforma invoices</li>
            <li>Country-of-origin certificates</li>
            <li>Custom-clearance documentation</li>
          </ul>
          <p>
            Disputes, if any, fall under the legal jurisdiction of <strong>[City, State, India]</strong>.
          </p>
        </section>

        {/* Contact */}
        <section className="bg-white p-4 rounded-4 border shadow-sm">
          <div className="row align-items-center">
            <div className="col-md-6 mb-3 mb-md-0">
              <h5 className="fw-semibold mb-2">Policy-Related Queries</h5>
              <p>Have a question or concern? We’re here to help.</p>
              <p className="mb-0">info@inventomaticseals.com<br/>+91-9987253602</p>
            </div>
            <div className="col-md-6">
              <p className="text-muted mb-1">Trust. Transparency. Commitment.</p>
              <p className="text-muted mb-0">
                At Inventomatic, policies are not just procedures—they’re promises. From procurement
                to support, we aim to be your most reliable partner in sealing technology.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
