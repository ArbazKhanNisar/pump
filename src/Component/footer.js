"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <div
      className="container-fluid bg-dark footer mt-5 pt-5 " data-aos="fade-up"
      data-aos-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Logo + Socials */}
          <div className="col-lg-3 col-md-6">
            <h1 className="text-white mb-4">
              <i className="fa fa-building text-primary me-3"></i>APEX
            </h1>
            <p>
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat
              ipsum et lorem et sit, sed stet lorem sit clita
            </p>
            <div className="d-flex pt-2">
              <Link
                href="#"
                className="btn btn-square btn-outline-primary me-1"
              >
                <i className="fab fa-twitter"></i>
              </Link>
              <Link
                href="#"
                className="btn btn-square btn-outline-primary me-1"
              >
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link
                href="#"
                className="btn btn-square btn-outline-primary me-1"
              >
                <i className="fab fa-youtube"></i>
              </Link>
              <Link
                href="#"
                className="btn btn-square btn-outline-primary me-0"
              >
                <i className="fab fa-linkedin-in"></i>
              </Link>
            </div>
          </div>

          {/* Address */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Address</h4>
            <p>
              <i className="fa fa-map-marker-alt me-3"></i>123 Street, New York,
              USA
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+012 345 67890
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>info@example.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Quick Links</h4>
            <Link href="/about" className="btn btn-link">
              About Us
            </Link>
            <Link href="/contact" className="btn btn-link">
              Contact Us
            </Link>
            <Link href="/service" className="btn btn-link">
              Our Services
            </Link>
            <Link href="/terms" className="btn btn-link">
              Terms & Condition
            </Link>
            <Link href="/support" className="btn btn-link">
              Support
            </Link>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
            <h4 className="text-light mb-4">Newsletter</h4>
            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
              <input
                className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                type="text"
                placeholder="Your email"
              />
              <button
                type="button"
                className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
              >
                SignUp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="container-fluid copyright">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <Link href="#">Your Site Name</Link>, All Right Reserved.
            </div>
            <div className="col-md-6 text-center text-md-end">
              Designed By{" "}
              <a href="https://htmlcodex.com" target="_blank">
                HTML Codex
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
