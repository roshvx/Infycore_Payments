import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import dashboardMockup from '../assets/dashboard_mockup.png';
import upiMockup from '../assets/upi_qr_mockup.png';
import payoutsMockup from '../assets/payouts_mockup.png';
import AnimatedCounter from '../components/AnimatedCounter';

const slides = [
  {
    badge: "RBI Licensed Payment Aggregator",
    title: <>Payments That <br /> Power Your Growth</>,
    description: "Accept 100+ payment modes with 99.6% success rate. Smart dashboard & instant settlements for Indian businesses.",
    cta1Text: "Start Accepting",
    cta1Link: "/products",
    cta2Text: "Talk to Expert",
    cta2Link: "/contact",
    image: dashboardMockup
  },
  {
    badge: "UPI & Dynamic QR Processing",
    title: <>Seamless UPI <br /> & QR Payments</>,
    description: "Accept payments via UPI, static/dynamic QRs, and secure pay-by-link integrations. Features include real-time callbacks.",
    cta1Text: "Accept UPI",
    cta1Link: "/products",
    cta2Text: "View Solutions",
    cta2Link: "/contact",
    image: upiMockup
  },
  {
    badge: "Automated Payouts Suite",
    title: <>Instant Settlements <br /> & Disbursements</>,
    description: "Automate payouts to vendors and clients instantly with automated reconciliation and real-time transaction monitoring.",
    cta1Text: "Explore Payouts",
    cta1Link: "/products",
    cta2Text: "Contact Sales",
    cta2Link: "/contact",
    image: payoutsMockup
  }
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    document.title = "Infycore Payments | India's Leading Payment Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Infycore Payments provides robust, secure payment gateways, UPI QR payment processing, instant pay-ins/payouts, and BBPS services for businesses in India.");
    }

    // Scroll Reveal Intersection Observer
    const revealCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const revealObserver = new IntersectionObserver(revealCallback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });

    const elements = document.querySelectorAll('.scroll-reveal');
    elements.forEach(el => revealObserver.observe(el));

    return () => {
      elements.forEach(el => revealObserver.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(slideTimer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="page-fade-in">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Background Blobs for Fintech Feel */}
        <div className="hero-bg-blob hero-bg-blob-1"></div>
        <div className="hero-bg-blob hero-bg-blob-2"></div>

        <div className="container" style={{ position: 'relative' }}>
          {/* Arrow Controls */}
          <button className="slider-arrow slider-arrow-prev" onClick={prevSlide} aria-label="Previous Slide">
            <i className="fas fa-chevron-left"></i>
          </button>
          <button className="slider-arrow slider-arrow-next" onClick={nextSlide} aria-label="Next Slide">
            <i className="fas fa-chevron-right"></i>
          </button>

          <div className="hero-slider-wrapper">
            {slides.map((slide, index) => {
              const isActive = index === currentSlide;
              return (
                <div 
                  key={index} 
                  className={`hero-grid slide-item ${isActive ? 'slide-active' : ''}`}
                >
                  <div className="hero-content">
                    <span className="hero-badge">{slide.badge}</span>
                    <h1 className="hero-title italic-black">
                      {slide.title}
                    </h1>
                    <p className="hero-description">
                      {slide.description}
                    </p>
                    <div className="hero-ctas">
                      <Link to={slide.cta1Link} className="btn btn-primary">
                        {slide.cta1Text}
                      </Link>
                      <Link to={slide.cta2Link} className="btn btn-outline">
                        {slide.cta2Text}
                      </Link>
                    </div>
                  </div>
                  <div className="hero-image-wrapper float-animation">
                    <img 
                      src={slide.image} 
                      alt="Secured Payment Gateway Interface" 
                      className="hero-img" 
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Dots Indicator */}
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === currentSlide ? 'dot-active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Stats Strip */}
      <div className="trust-strip">
        <div className="container stats-container">
          <div className="stat-item scroll-reveal reveal-fade-in-up">
            <span className="italic-black stat-number">
              <AnimatedCounter target={5000} prefix="₹" suffix="+ Cr" />
            </span>
            <span className="stat-label">Annual Volume</span>
          </div>
          <div className="stat-item scroll-reveal reveal-fade-in-up delay-100">
            <span className="italic-black stat-number">
              <AnimatedCounter target={15000} suffix="+" />
            </span>
            <span className="stat-label">Active Merchants</span>
          </div>
          <div className="stat-item scroll-reveal reveal-fade-in-up delay-200">
            <span className="italic-black stat-number">
              <AnimatedCounter target={100} suffix="+" />
            </span>
            <span className="stat-label">Payment Modes</span>
          </div>
          <div className="stat-item scroll-reveal reveal-fade-in-up delay-300">
            <span className="italic-black stat-number">
              <AnimatedCounter target={99.6} suffix="%" decimals={1} />
            </span>
            <span className="stat-label">Success Rate</span>
          </div>
        </div>
      </div>

      {/* Expertise / Features Section */}
      <section className="section-padding container">
        <div className="section-header scroll-reveal reveal-fade-in-up">
          <h2 className="section-title italic-black">
            Complete <span className="highlight">Payment</span> Infrastructure For Modern Business
          </h2>
          <p className="section-subtitle">
            Accept credit cards, wallets, netbanking, and UPI seamlessly with developer-friendly systems.
          </p>
        </div>

        <div className="services-grid">
          {/* Card 1 */}
          <div className="service-card scroll-reveal reveal-fade-in-up hover-lift delay-100">
            <div className="service-icon-box icon-orange">
              <i className="fas fa-credit-card"></i>
            </div>
            <h3 className="italic-black service-card-title">Payment Gateway Integrations</h3>
            <p className="service-card-desc">
              Integration of leading payment aggregators like Stripe, Razorpay, and Paytm. Experience building checkout flows, handling webhook callbacks, and creating reconciliation scripts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="service-card scroll-reveal reveal-fade-in-up hover-lift delay-200">
            <div className="service-icon-box icon-blue">
              <i className="fas fa-lock"></i>
            </div>
            <h3 className="italic-black service-card-title">UPI & QR Code Payments</h3>
            <p className="service-card-desc">
              Seamless UPI, static/dynamic QR codes, and pay-by-link integrations. Features include real-time transaction monitoring and instant credit notifications.
            </p>
          </div>

          {/* Card 3 */}
          <div className="service-card scroll-reveal reveal-fade-in-up hover-lift delay-300">
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

      {/* About & Core Advantages Section */}
      <section className="bg-gray-section section-padding" style={{ borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Overview, Vision, Mission */}
            <div className="scroll-reveal reveal-slide-in-left">
              <span className="hero-badge" style={{ animation: 'none' }}>About Infycore Payments</span>
              <h2 className="italic-black" style={{ fontSize: '32px', marginBottom: '20px', color: 'var(--color-navy-dark)' }}>
                India's Most Trusted Payment Infrastructure
              </h2>
              <p style={{ color: 'var(--color-text-gray)', fontSize: '15px', marginBottom: '24px', lineHeight: '1.7' }}>
                Infycore Payment Private Limited is an innovative fintech company providing secure, seamless, and scalable digital payment solutions. We help businesses of all sizes accept payments, route transactions, and manage payouts dynamically.
              </p>
              
              <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
                <div style={{ padding: '20px', backgroundColor: 'var(--color-bg-card)', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 className="italic-black" style={{ color: 'var(--color-orange)', fontSize: '16px', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Our Vision
                  </h4>
                  <p style={{ color: 'var(--color-text-gray)', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                    To become India's most trusted and innovative payment infrastructure company, offering secure, seamless, and scalable digital payment solutions.
                  </p>
                </div>
                
                <div style={{ padding: '20px', backgroundColor: 'var(--color-bg-card)', borderRadius: '16px', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
                  <h4 className="italic-black" style={{ color: 'var(--color-orange)', fontSize: '16px', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Our Mission
                  </h4>
                  <ul style={{ color: 'var(--color-text-gray)', fontSize: '14px', paddingLeft: '20px', margin: 0, lineHeight: '1.7' }}>
                    <li>Make digital payments simple, fast, and accessible across India.</li>
                    <li>Provide reliable and secure payment infrastructure for modern business.</li>
                    <li>Help businesses grow through easy integrations and real-time analytics.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Key Advantages & Industries */}
            <div className="scroll-reveal reveal-fade-in-up delay-200" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              <div>
                <h3 className="italic-black" style={{ fontSize: '24px', marginBottom: '20px', color: 'var(--color-navy-dark)', textTransform: 'uppercase' }}>
                  Key Advantages
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { title: "Bank-Grade Security", desc: "Fully PCI-DSS Level 1 compliant infrastructure with high-end encryption." },
                    { title: "High-Speed Processing", desc: "Intelligent transaction routing ensuring a 99.6% success rate." },
                    { title: "Smart Dashboard", desc: "Manage payments, track settlements, and issue refunds from one unified portal." },
                    { title: "Instant Pay-In & Payout", desc: "Move funds instantly with auto-reconciliation, vendor payouts, and salary disbursements." }
                  ].map((adv, idx) => (
                    <div key={idx} className="advantage-item" style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                      <div className="advantage-icon-box" style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: 'rgba(243, 121, 33, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--color-orange)', flexShrink: 0, marginTop: '2px' }}>
                        <i className="fas fa-check" style={{ fontSize: '12px' }}></i>
                      </div>
                      <div>
                        <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--color-navy-dark)', marginBottom: '2px' }}>{adv.title}</h4>
                        <p style={{ color: 'var(--color-text-gray)', fontSize: '13px', margin: 0 }}>{adv.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="italic-black" style={{ fontSize: '24px', marginBottom: '16px', color: 'var(--color-navy-dark)', textTransform: 'uppercase' }}>
                  Industries We Serve
                </h3>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {["E-Commerce & Retail", "Education", "Healthcare", "Travel & Hospitality", "SaaS Platforms", "Subscription Services", "Marketplaces", "Startups", "Enterprises"].map((ind, idx) => (
                    <span key={idx} className="project-tag interactive-tag" style={{ padding: '8px 16px', borderRadius: '30px', fontSize: '12px', fontWeight: '600', backgroundColor: 'var(--color-bg-card)', border: '1px solid var(--color-border)' }}>
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Promo Style CTA */}
      <section className="container">
        <div className="promo-banner scroll-reveal reveal-scale-in">
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
