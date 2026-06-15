import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section" style={{ padding: '120px 0 100px 0' }}>
        <div className="container">
          <div className="hero-content" style={{ textAlign: 'center', margin: '0 auto', maxWidth: '800px' }}>
            <span className="hero-badge">RBI Licensed Payment Aggregator</span>
            <h1 className="hero-title italic-black">
              Payments That <br /> Power Your Growth
            </h1>
            <p className="hero-description" style={{ margin: '0 auto 36px auto' }}>
              Accept 100+ payment modes with 99.6% success rate. Smart dashboard & instant settlements for Indian businesses.
            </p>
            <div className="hero-ctas" style={{ justifyContent: 'center' }}>
              <Link to="/products" className="btn btn-primary">
                Start Accepting
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Talk to Expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <div className="trust-strip">
        <div className="container stats-container">
          <div className="stat-item">
            <span className="italic-black stat-number">30+</span>
            <span className="stat-label">API Integrations</span>
          </div>
          <div className="stat-item">
            <span className="italic-black stat-number">15,000+</span>
            <span className="stat-label">Simulated Transacts</span>
          </div>
          <div className="stat-item">
            <span className="italic-black stat-number">100%</span>
            <span className="stat-label">Secure Coding Standards</span>
          </div>
          <div className="stat-item">
            <span className="italic-black stat-number">4.9★</span>
            <span className="stat-label">Customer Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Expertise / Features Section */}
      <section className="section-padding container">
        <div className="section-header">
          <h2 className="section-title italic-black">
            Complete <span className="highlight">Payment</span> Infrastructure For Modern Business
          </h2>
          <p className="section-subtitle">
            Accept credit cards, wallets, netbanking, and UPI seamlessly with developer-friendly systems.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card">
            <div className="service-icon-box icon-orange">
              <i className="fas fa-credit-card"></i>
            </div>
            <h3 className="italic-black service-card-title">Payment Gateway Integrations</h3>
            <p className="service-card-desc">
              Integration of leading payment aggregators like Stripe, Razorpay, and Paytm. Experience building checkout flows, handling webhook callbacks, and creating reconciliation scripts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card">
            <div className="service-icon-box icon-blue">
              <i className="fas fa-lock"></i>
            </div>
            <h3 className="italic-black service-card-title">UPI & QR Code Payments</h3>
            <p className="service-card-desc">
              Seamless UPI, static/dynamic QR codes, and pay-by-link integrations. Features include real-time transaction monitoring and instant credit notifications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card">
            <div className="service-icon-box icon-green">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3 className="italic-black service-card-title">Payouts & Payins Suite</h3>
            <p className="service-card-desc">
              Automated vendor payouts, instant refund processing, secure billing links, and real-time reconciliation logs to maximize operating speed.
            </p>
          </div>
        </div>
      </section>

      {/* App Promo Style CTA */}
      <section className="container">
        <div className="promo-banner">
          <div className="container promo-flex">
            <div className="promo-text">
              <h2 className="italic-black">Ready to scale your payment infrastructure?</h2>
              <p>Start accepting payments instantly with our production-ready gateway integrations.</p>
            </div>
            <div>
              <Link to="/contact" className="btn btn-primary" style={{ padding: '14px 28px' }}>
                <i className="fas fa-rocket mr-1"></i> Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
