import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    document.title = "Contact Us | Connect with Infycore Payment Experts";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "Get in touch with Infycore Payments support team or schedule a consultation with our fintech experts at our Gautam Buddha Nagar office.");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      setStatus('error');
      setStatusMessage('Please fill out all fields.');
      return;
    }

    setStatus('loading');
    setStatusMessage('');

    try {
      const apiBase = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1'
        ? 'http://localhost:5000/api/contact'
        : '/api/contact';

      const response = await fetch(apiBase, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setStatusMessage(data.message || 'Thank you! Your message has been saved to MongoDB.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Server returned an error.');
      }
    } catch (err) {
      console.error('API Contact submission error:', err);
      // Show error message when backend call fails
      setStatus('error');
      setStatusMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <div className="contact-page-wrapper">
      <section className="section-padding container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title italic-black">
            Connect with <span className="highlight">Infycore</span> Expert
          </h2>
          <p className="section-subtitle">
            Have a question about payment integrations, API architectures, or custom software? Drop a message.
          </p>
        </div>

        <div className="contact-layout">
          {/* Contact info column */}
          <div className="contact-info animate-slide-in-left">
            <h3 className="italic-black contact-info-title">Let's start a conversation</h3>
            <p className="contact-info-desc">
              We are eager to hear about your business goals and design a customized, robust, and secure payment processing solution.
            </p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon-box">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="info-item-text">
                  <h4>Email Support</h4>
                  <p>support@infycorepay.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="info-item-text">
                  <h4>Phone Support</h4>
                  <p>+91 96670 27009</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <i className="fas fa-clock"></i>
                </div>
                <div className="info-item-text">
                  <h4>Working Hours</h4>
                  <p>09:00 AM - 06:00 PM (Mon - Fri)</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon-box">
                  <i className="fas fa-location-dot"></i>
                </div>
                <div className="info-item-text">
                  <h4>Office Location</h4>
                  <p>NX-One, 10th Floor, Tower-3, Office No. B-1006, Techzone IV, Amrapali Dream Valley, Gautam Buddha Nagar, Uttar Pradesh – 201318</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form column */}
          <div className="contact-form-box animate-fade-in-up delay-200">
            <form onSubmit={handleSubmit}>
              {status === 'success' && (
                <div className="submit-alert alert-success">
                  <i className="fas fa-circle-check mr-2"></i> {statusMessage}
                </div>
              )}
              {status === 'error' && (
                <div className="submit-alert alert-error">
                  <i className="fas fa-triangle-exclamation mr-2"></i> {statusMessage}
                </div>
              )}

              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  placeholder="Enter email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-control"
                  placeholder="e.g. Payment Gateway Project"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  placeholder="Explain details of your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                style={{ width: '100%', padding: '14px', borderRadius: '12px' }}
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <i className="fas fa-spinner fa-spin mr-1"></i> Saving message...
                  </>
                ) : (
                  <>
                    <i className="fas fa-paper-plane mr-1"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
