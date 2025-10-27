"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { logo ,APP_NAME } from "@/constants/config";

export default function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();

  // Helper to check active route
  const isActive = (path) => (pathname === path ? "active" : "");

  // Close mobile menu when navigating
  const handleNavClick = () => setMobileOpen(false);

  return (
    <>
      {/* Topbar */}
      <div className="container-fluid bg-light p-0">
        <div className="row gx-0 d-none d-lg-flex">
          <div className="col-lg-7 px-5 text-start">
            <div className="h-100 d-inline-flex align-items-center border-start border-end px-3">
              <small className="fa fa-phone-alt me-2"></small>
              <small>+91 9987253602</small>
            </div>
            <div className="h-100 d-inline-flex align-items-center border-end px-3">
              <small className="far fa-envelope-open me-2"></small>
              <small>info@inventomaticseals.com</small>
            </div>
            
          </div>
          <div className="col-lg-5 px-5 text-end">
            <div className="h-100 d-inline-flex align-items-center">
              <a className="btn btn-square border-end border-start" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-square border-end" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-square border-end" href="https://www.linkedin.com/company/inventomatic/">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-square border-end" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <Link 
    href="/" 
    className="navbar-brand d-flex align-items-center" 
    onClick={handleNavClick}
  >
    <img 
      width={80} 
      height={80} 
      src={logo} 
      alt="Inventomatic Seals India Logo" 
      className="me-2"
    />
    <h1 
      className="m-0 fw-bold text-primary fs-4 d-none d-sm-block"
      style={{ whiteSpace: 'nowrap' }}
    >
      Inventomatic Seals India
    </h1>
  </Link>

        {/* Mobile toggle */}
        <button
          className="navbar-toggler"
          type="button"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible menu */}
        <div className={`collapse navbar-collapse ${mobileOpen ? "show" : ""}`}>
          <div className="navbar-nav ms-auto py-3 py-lg-0">
            <Link href="/" className={`nav-item nav-link ${isActive("/")}`} onClick={handleNavClick}>
              Home
            </Link>
            <Link href="/about" className={`nav-item nav-link ${isActive("/about")}`} onClick={handleNavClick}>
              About Us
            </Link>
            <Link href="/service" className={`nav-item nav-link ${isActive("/service")}`} onClick={handleNavClick}>
              Our Services
            </Link>

            {/* Dropdown */}
            <div className="nav-item dropdown">
              <a
                href="#"
                className="nav-link dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }}
              >
                Pages
              </a>
              <div className={`dropdown-menu bg-light m-0 ${dropdownOpen ? "show" : ""}`}>
                <Link href="/feature" className="dropdown-item">Features</Link>
                <Link href="/appointment" className="dropdown-item">Appointment</Link>
                <Link href="/testimonial" className="dropdown-item">Testimonial</Link>
                <Link href="/blog" className="dropdown-item">Blogs</Link>
                <Link href="/product" className="dropdown-item">Product Page</Link>
              </div>
            </div>

            <Link href="/contact" className={`nav-item nav-link ${isActive("/contact")}`} onClick={handleNavClick}>
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
