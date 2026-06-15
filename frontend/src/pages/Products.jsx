import React, { useState, useEffect } from 'react';

// Fallback products representing actual financial services offered
const FALLBACK_PRODUCTS = [
  {
    title: 'Infycore Payment Gateway',
    description: 'Accept credit/debit cards, net banking, UPI, and wallets on your website or mobile app with 99.6% success rates and instant routing.',
    category: 'Payment Gateway',
    tags: ['Cards', 'NetBanking', 'Wallets', 'UPI'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  },
  {
    title: 'Dynamic UPI & QR Codes',
    description: 'Generate transaction-specific dynamic QR codes for your retail stores or web checkout to receive instant bank-to-bank payments.',
    category: 'UPI & QR',
    tags: ['UPI', 'Dynamic QR', 'Static QR', 'Soundbox'],
    image: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  },
  {
    title: 'Payouts & Vendor Settlements',
    description: 'Process instant payouts, vendor payments, and customer refunds 24/7 even on bank holidays with simple API calls.',
    category: 'Payout Links',
    tags: ['IMPS', 'NEFT', 'RTGS', 'UPI Payout'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  },
  {
    title: 'Secure Payin Links',
    description: 'Request payments easily from customers via SMS, Email, or WhatsApp using secure, branded billing checkout links.',
    category: 'Payin Links',
    tags: ['SMS Pay', 'Web Checkout', 'Billing Links'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: '#'
  }
];

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const apiBase = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
          ? 'http://localhost:5000/api/projects'
          : '/api/projects';

        const response = await fetch(apiBase);
        if (response.ok) {
          const data = await response.json();
          if (data && data.length > 0) {
            setProducts(data);
            setFilteredProducts(data);
            setIsLive(true);
          } else {
            setProducts(FALLBACK_PRODUCTS);
            setFilteredProducts(FALLBACK_PRODUCTS);
          }
        } else {
          throw new Error('API request failed');
        }
      } catch (err) {
        console.warn('Backend API connection failed, using local fallback data.', err);
        setProducts(FALLBACK_PRODUCTS);
        setFilteredProducts(FALLBACK_PRODUCTS);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleFilterClick = (category) => {
    setActiveFilter(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(product => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  const categories = ['All', 'Payment Gateway', 'UPI & QR', 'Payout Links', 'Payin Links'];

  return (
    <section className="section-padding container">
      <div className="section-header">
        <h2 className="section-title italic-black">
          Smart <span className="highlight">Payment</span> Products & Services
        </h2>
        <p className="section-subtitle">
          Explore our suite of transaction management solutions built to automate, secure, and accelerate commerce.
          {isLive ? (
            <span style={{ display: 'block', color: '#10b981', fontSize: '12px', marginTop: '8px', fontWeight: 'bold' }}>
              <i className="fas fa-circle-check"></i> Infycore Payments Network Active (Live Connection)
            </span>
          ) : (
            <span style={{ display: 'block', color: '#f37921', fontSize: '12px', marginTop: '8px', fontWeight: 'bold' }}>
              <i className="fas fa-circle-info"></i> Backup Payments Network Active (Offline Mode)
            </span>
          )}
        </p>
      </div>

      {/* Filter Buttons */}
      <div className="filter-container">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => handleFilterClick(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <i className="fas fa-spinner fa-spin" style={{ fontSize: '30px', color: 'var(--color-orange)' }}></i>
          <p style={{ marginTop: '12px', color: 'var(--color-text-gray)' }}>Loading products list...</p>
        </div>
      ) : (
        <div className="projects-grid">
          {filteredProducts.map((product, idx) => (
            <div className="project-card" key={product._id || idx}>
              <div className="project-image-box">
                <img src={product.image} alt={product.title} className="project-img" />
                <span className="project-badge">{product.category}</span>
              </div>
              <div className="project-body">
                <h3 className="italic-black project-title">{product.title}</h3>
                <p className="project-desc">{product.description}</p>
                <div className="project-tags">
                  {product.tags.map((tag, tagIdx) => (
                    <span className="project-tag" key={tagIdx}>{tag}</span>
                  ))}
                </div>
                <a href={product.demoUrl} className="project-link">
                  Learn More <i className="fas fa-arrow-right"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Products;
