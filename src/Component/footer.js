"use client";

import Link from "next/link";
import { logo ,APP_NAME } from "@/constants/config";
import { useState } from "react";
import { API_ENDPOINTS } from "@/constants/config";
export default function Footer() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleSubscribe = async () => {
    if (!email.trim()) {
      setMessage({ type: "error", text: "Please enter your email address." });
      return;
    }
    setLoading(true);
    setMessage(null);
    try {
      const res = await fetch(API_ENDPOINTS.Newsletter, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage({ type: "success", text: "Subscribed successfully! Thank you." });
        setEmail("");
      } else {
        setMessage({ type: "error", text: data.message || "Subscription failed. Try again." });
      }
    } catch (err) {
      setMessage({ type: "error", text: "Something went wrong. Please try again later." });
    } finally {
      setLoading(false);
    }
  };


  return (
    <div
      className="container-fluid bg-dark footer mt-5 pt-5 " data-aos="fade-up"
      data-aos-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row g-5">
          {/* Logo + Socials */}

          
          <div className="col-lg-3 col-md-6">
            
            
          <div className="footer-brand text-white">
    <img
      src={logo}
      alt="Inventomatic Seals India Logo"
      height={120}
      className="img-fits mb-2"
      style={{  width: "100%",
        maxWidth: "180px", // optional limit
        height: "auto",
        objectFit: "contain", }}
    />
    <h5 className="fw-semibold text-light mb-1">Inventomatic Seals India</h5>
    <p className="mb-0 text-light opacity-75">Precision in motion</p>
  </div>



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
                href="https://www.linkedin.com/company/inventomatic/"
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
              <i className="fa fa-map-marker-alt me-3"></i>PLOT NO-4, NEAR FATIMA APT, WESTERN PARK, KASHIMIRA, MIRA ROAD (EAST), THANE 401107
            </p>
            <p>
              <i className="fa fa-phone-alt me-3"></i>+91 99872 53602
            </p>
            <p>
              <i className="fa fa-envelope me-3"></i>info@inventomaticseals.com
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
            <Link href="/product" className="btn btn-link">
             Products
            </Link>
            <Link href="/blog" className="btn btn-link">
            Blog
            </Link>
          </div>

          {/* Newsletter */}
          <div className="col-lg-3 col-md-6">
      <h4 className="text-light mb-4">Newsletter</h4>
      <p>Stay updated with our latest innovations and sealing solutions. Subscribe now!</p>

      <div className="position-relative mx-auto" style={{ maxWidth: 400 }}>
        <input
          className="form-control bg-transparent w-100 py-3 ps-4 pe-5 text-light"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={loading}
          required
        />
        <button
          type="button"
          onClick={handleSubscribe}
          className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
          disabled={loading}
        >
          {loading ? "..." : "Subscribe"}
        </button>
      </div>

      {message && (
        <p
          className={`mt-2 small ${
            message.type === "success" ? "text-success" : "text-danger"
          }`}
        >
          {message.text}
        </p>
      )}
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
