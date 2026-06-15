import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = () => {
      const storedUser = localStorage.getItem('user');
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };

    checkUser();

    // Listen to authentication changes
    window.addEventListener('authChange', checkUser);
    return () => {
      window.removeEventListener('authChange', checkUser);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    closeMobileMenu();
    navigate('/');
  };

  return (
    <>
      {/* Top partner ribbon inspired by infycorepay.com */}
      <div className="top-ribbon">
        <div className="ribbon-content">
          <i className="fas fa-handshake mr-1"></i>
          <span>PREMIUM BANK PARTNERS</span>
          <span className="mx-2">✦</span>
          <span>SBI • HDFC • ICICI • AXIS • YES BANK</span>
          <i className="fas fa-university ml-1"></i>
        </div>
      </div>

      <header className="navbar-wrapper">
        <div className="container navbar-container">
          {/* Logo */}
          <NavLink to="/" className="logo-link" onClick={closeMobileMenu}>
            <i className="fas fa-shield-halved logo-icon"></i>
            <span className="italic-black logo-text">Infycore Payments</span>
          </NavLink>

          {/* Desktop Nav Links */}
          <nav className="nav-links">
            <NavLink to="/" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Home
            </NavLink>
            <NavLink to="/products" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Products
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-item active" : "nav-item"}>
              Contact
            </NavLink>
          </nav>

          {/* Nav CTA */}
          <div className="nav-cta" style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            {user ? (
              <>
                <span className="nav-item" style={{ textTransform: 'none', cursor: 'default' }}>Hi, {user.name}</span>
                <button onClick={handleLogout} className="btn btn-secondary" style={{ padding: '8px 16px' }}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-secondary" style={{ padding: '8px 16px' }}>
                  Sign In
                </NavLink>
                <NavLink to="/contact" className="btn btn-primary">
                  <i className="fas fa-rocket mr-1"></i> Apply Now
                </NavLink>
              </>
            )}
          </div>

          {/* Hamburger Menu Icon */}
          <button className="hamburger" onClick={toggleMobileMenu} aria-label="Toggle navigation">
            <i className={isMobileMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Panel */}
      <div className={`mobile-nav-panel ${isMobileMenuOpen ? 'open' : ''}`}>
        <button className="mobile-nav-close" onClick={closeMobileMenu} aria-label="Close navigation">
          <i className="fas fa-times"></i>
        </button>
        <div className="mobile-nav-links">
          <NavLink to="/" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} onClick={closeMobileMenu}>
            Home
          </NavLink>
          <NavLink to="/products" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} onClick={closeMobileMenu}>
            Products
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? "mobile-nav-item active" : "mobile-nav-item"} onClick={closeMobileMenu}>
            Contact
          </NavLink>
          {user ? (
            <>
              <span className="mobile-nav-item" style={{ textTransform: 'none', marginTop: '20px' }}>Hi, {user.name}</span>
              <button onClick={handleLogout} className="btn btn-secondary" style={{ marginTop: '10px' }}>
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-secondary" style={{ marginTop: '20px' }} onClick={closeMobileMenu}>
                Sign In
              </NavLink>
              <NavLink to="/contact" className="btn btn-primary" style={{ marginTop: '10px' }} onClick={closeMobileMenu}>
                <i className="fas fa-rocket mr-1"></i> Apply Now
              </NavLink>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
