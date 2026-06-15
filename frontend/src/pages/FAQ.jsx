import React, { useState, useEffect } from 'react';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  useEffect(() => {
    document.title = "FAQs | Infycore Payments Aggregator Queries";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Find answers to frequently asked questions about Infycore Payments integration timelines, settlement cycles, security compliances, and support.");
    }
  }, []);

  const faqData = [
    {
      question: "How long does it take to integrate Infycore Payments?",
      answer: "Integration is designed to be developer-friendly and takes less than 30 minutes. We provide robust SDKs for React, Node.js, Python, and pre-built checkout integrations. You can start testing in our sandbox environment instantly upon signup."
    },
    {
      question: "What is the typical settlement cycle?",
      answer: "Standard settlements are processed on a T+2 basis (Transaction day + 2 business days). For qualified businesses, we offer Express Settlements (T+1) and Instant Settlements to keep your cash flow smooth and uninterrupted."
    },
    {
      question: "Which payment modes are supported?",
      answer: "We support over 100+ payment methods. This includes all domestic and international Credit & Debit Cards (Visa, Mastercard, RuPay, Amex), UPI (Intent, QR, and Autopay), 50+ Netbanking portals, and leading digital wallets."
    },
    {
      question: "Is Infycore Payments secure and compliant?",
      answer: "Absolutely. Infycore Payments is fully PCI-DSS Level 1 Certified, which is the highest security standard in the payments industry. All transactions are processed over encrypted SSL layers, and card tokenization is implemented securely."
    },
    {
      question: "Are there any setup fees or annual maintenance charges?",
      answer: "No, we believe in transparent pricing. There are zero setup fees and zero annual maintenance charges. You only pay a flat percentage per successful transaction, with no hidden costs."
    },
    {
      question: "How do I handle refunds and customer disputes?",
      answer: "Refunds can be processed instantly or in batches directly from your merchant dashboard or programmatically via our Payout APIs. We offer real-time dispute alerts and dedicated chargeback support to protect your business."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-page-wrapper">
      <div className="faq-page section-padding">
        <div className="container" style={{ maxWidth: '800px' }}>
          <div className="section-header animate-fade-in-up">
            <h1 className="section-title italic-black" style={{ fontSize: '36px', color: 'var(--color-navy-dark)' }}>
              Frequently Asked <span className="highlight">Questions</span>
            </h1>
            <p className="section-subtitle">
              Find quick answers to common queries about our payment gateway integrations, settlements, pricing, and security.
            </p>
          </div>

          <div className="faq-list">
            {faqData.map((item, index) => {
              const isOpen = activeIndex === index;
              const delayClass = `delay-${Math.min((index + 1) * 100, 500)}`;
              return (
                <div 
                  key={index} 
                  className={`faq-item animate-fade-in-up ${delayClass} ${isOpen ? 'active' : ''}`}
                  style={{
                    backgroundColor: 'var(--color-bg-card)',
                    borderRadius: '16px',
                    marginBottom: '16px',
                    border: '1px solid var(--color-border)',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
                    transition: 'all 0.3s ease',
                    overflow: 'hidden'
                  }}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    style={{
                      width: '100%',
                      padding: '24px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      background: 'none',
                      border: 'none',
                      textAlign: 'left',
                      cursor: 'pointer',
                      fontFamily: 'var(--font-primary)'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <i className="faq-icon fas fa-info-circle" style={{ marginRight: '8px', color: isOpen ? 'var(--color-orange)' : 'var(--color-text-gray)' }}></i>
                      <span style={{ 
                        fontSize: '16px', 
                        fontWeight: '700', 
                        color: isOpen ? 'var(--color-orange)' : 'var(--color-navy-dark)',
                        transition: 'color 0.2s ease'
                      }}>
                        {item.question}
                      </span>
                    </div>
                    <i 
                      className={`fas fa-chevron-down`}
                      style={{
                        color: isOpen ? 'var(--color-orange)' : 'var(--color-text-gray)',
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.3s ease, color 0.3s ease',
                        fontSize: '14px'
                      }}
                    ></i>
                  </button>
                  
                  <div
                    style={{
                      maxHeight: isOpen ? '200px' : '0px',
                      transition: 'max-height 0.3s cubic-bezier(0, 1, 0, 1)',
                      overflow: 'hidden'
                    }}
                  >
                    <p style={{ 
                      padding: '0 24px 24px 24px', 
                      margin: '0', 
                      color: 'var(--color-text-gray)', 
                      fontSize: '14px',
                      lineHeight: '1.6'
                    }}>
                      {item.answer}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
