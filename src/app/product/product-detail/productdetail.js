"use client";

import React, { useMemo, useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./productdetailstyle.css";
import ReCAPTCHA from "react-google-recaptcha";
import { Site_Key } from "@/constants/config";
import { API_ENDPOINTS } from "@/constants/config";
import Link from "next/link";
const relatedProducts = [
  {
    id: 1,
    title: "Title 11111",
    model: "Model11 111111",
    type: "Type11 111111111",
    drive: "Drive1111111111",
    image:
      "https://ghostwhite-alligator-811158.hostingersite.com/storage/product/1758746380_3.sm.webp",
  },
  {
    id: 2,
    title: "Title 22222",
    model: "Model22 222222",
    type: "Type22 222222222",
    drive: "Drive2222222222",
    image:
      "https://ghostwhite-alligator-811158.hostingersite.com/storage/product/1758746963_2.sm.webp",
  },
  {
    id: 3,
    title: "Title 33333",
    model: "Model33 333333",
    type: "Type33 333333333",
    drive: "Drive3333333333",
    image:
      "https://ghostwhite-alligator-811158.hostingersite.com/storage/product/1758926060_2.sm.webp",
  },
];

export default function ProductDetailProductDetail({ product }) {
  const [activeTab, setActiveTab] = useState("description");
  const [isOpen, setIsOpen] = useState(false);
  const [captchaValue, setCaptchaValue] = useState(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (e) => {
    const { type, value } = e.target;
    const field = e.target.type === "textarea" ? "message" : e.target.type;
    setFormData((prev) => ({
      ...prev,
      [e.target.type === "text" ? "name" : field]: value,
    }));
  };

  // Better: handle by id or name (clearer)
  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("⚠️ Please complete the CAPTCHA before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_ENDPOINTS.PRODUCT_Enquiry, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          product_id: product.id,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Inquiry sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCaptchaValue(null);
        closeModal();
      } else {
        alert(`❌ Failed to send inquiry: ${data.message || "Server error"}`);
      }
    } catch (error) {
      console.error("Error submitting inquiry:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  function AutoLinkText({ text = "" }) {
    // Ensure text is always a string
    if (typeof text !== "string") return null;

    const parts = text.split(/(\s+)/).map((word, i) => {
      const isLink = /^(https?:\/\/[^\s]+)$/.test(word);
      if (isLink) {
        return (
          <Link
            key={i}
            href={word}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline"
          >
            {word}
          </Link>
        );
      }
      return word;
    });

    return <p>{parts}</p>;
  }
  const [selectedImage, setSelectedImage] = useState(product.image);
  const allImages = [product.image, ...(product?.images || [])];

  const thumbsRef = useRef(null);

  // Allow vertical wheel to scroll horizontally (handy for mouse wheel)
  const onThumbsWheel = (e) => {
    const el = thumbsRef.current;
    if (!el) return;
    // only when horizontal overflow exists
    if (el.scrollWidth > el.clientWidth) {
      e.preventDefault();
      el.scrollLeft += e.deltaY;
    }
  };

  // Auto-scroll the selected thumbnail into view when selectedImage changes
  useEffect(() => {
    const el = thumbsRef.current;
    if (!el) return;
    // find the selected child (by comparing img srcs)
    const children = Array.from(el.children);
    const selectedChild = children.find((c) => {
      const img = c.querySelector("img");
      return (
        img?.src === selectedImage || img?.getAttribute("src") === selectedImage
      );
    });
    if (selectedChild) {
      // scroll so the selected thumb is centered (if possible)
      const childLeft = selectedChild.offsetLeft;
      const childWidth = selectedChild.offsetWidth;
      const containerWidth = el.clientWidth;
      const targetScrollLeft = childLeft - containerWidth / 2 + childWidth / 2;
      el.scrollTo({ left: targetScrollLeft, behavior: "smooth" });
    }
  }, [selectedImage]);

  return (
    <div className="container">
      <main className="product-detail">
        <div className="product-header">
          <h1>{product.title}</h1>
          <div className="product-model">Model: {product.model}</div>
        </div>

        <div className="row g-4 align-items-start">
          <div className="row g-4 align-items-start">
            {/* Product Gallery Section */}
            <div className="col-12 col-md-6">
              <div className="product-gallery text-center">
                {/* Main Image */}
                <div className="main-image mb-3">
                  <img
                    src={selectedImage}
                    alt={product.title}
                    className="img-fluid rounded shadow-sm w-100"
                    style={{
                      objectFit: "cover",
                      maxHeight: "450px",
                    }}
                    onError={(e) => {
                      e.currentTarget.src = "/assets/img/blog/blog-post-3.webp";
                    }}
                  />
                </div>

                {/* Thumbs container with arrows */}
                <div
                  className="d-flex align-items-center justify-content-center gap-2"
                  style={{ position: "relative" }}
                >
                  {/* Left arrow — only show if scrolling is needed */}
                  {allImages.length > 3 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-light"
                      onClick={() => {
                        const el = thumbsRef.current;
                        if (el) el.scrollBy({ left: -220, behavior: "smooth" });
                      }}
                      aria-label="Scroll left"
                    >
                      ‹
                    </button>
                  )}

                  {/* Scrollable thumbnails */}
                  <div
                    ref={thumbsRef}
                    onWheel={onThumbsWheel}
                    className={`thumbnail-images d-flex flex-nowrap gap-2 py-2 justify-content-center ${
                      allImages.length <= 3 ? "flex-wrap" : ""
                    }`}
                    style={{
                      overflowX: allImages.length > 3 ? "auto" : "visible",
                      overflowY: "hidden",
                      WebkitOverflowScrolling: "touch",
                      scrollbarWidth: "thin",
                      flex: 1,
                      maxWidth: "100%",
                    }}
                  >
                    {allImages.map((img, idx) => (
                      <div
                        key={idx}
                        data-index={idx}
                        className={`thumb-wrapper flex-shrink-0 border rounded p-1 ${
                          selectedImage === img
                            ? "border-primary"
                            : "border-light"
                        }`}
                        style={{
                          cursor: "pointer",
                          width: "80px",
                          height: "80px",
                          overflow: "hidden",
                        }}
                        onClick={() => {
                          setSelectedImage(img);
                        }}
                      >
                        <img
                          src={img}
                          alt={`Thumbnail ${idx + 1}`}
                          className="w-100 h-100"
                          style={{ objectFit: "cover", display: "block" }}
                          onError={(e) => {
                            e.currentTarget.src =
                              "/assets/img/blog/blog-post-3.webp";
                          }}
                        />
                      </div>
                    ))}
                  </div>

                  {/* Right arrow — only show if scrolling is needed */}
                  {allImages.length > 3 && (
                    <button
                      type="button"
                      className="btn btn-sm btn-light"
                      onClick={() => {
                        const el = thumbsRef.current;
                        if (el) el.scrollBy({ left: 220, behavior: "smooth" });
                      }}
                      aria-label="Scroll right"
                    >
                      ›
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Product Info Section */}
            <div className="col-12 col-md-6">
              <div className="product-info">
                {/* Specs Section */}
                <div className="specs-highlight mb-3">
                  <div className="spec-item d-flex justify-content-between  py-2">
                    <span className="spec-label fw-semibold">Model:</span>
                    <span className="spec-value">{product.model}</span>
                  </div>
                  <div className="spec-item d-flex justify-content-between  py-2">
                    <span className="spec-label fw-semibold">Type:</span>
                    <span className="spec-value">{product.type}</span>
                  </div>
                  <div className="spec-item d-flex justify-content-between  py-2">
                    <span className="spec-label fw-semibold">Drive:</span>
                    <span className="spec-value">{product.drive}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="action-section mt-4">
                  <div className="price-container mb-2">
                    <div className="price-note text-muted small">
                      Depending on configuration and materials
                    </div>
                  </div>

                  <div className="cta-buttons d-flex flex-wrap gap-2">
                    <button
                      className="btn btn-primary flex-fill"
                      onClick={openModal}
                    >
                      Contact Sales
                    </button>
                    <button
                      className="btn btn-outline-primary flex-fill"
                      onClick={openModal}
                    >
                      Download Brochure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isOpen && (
            <div className="action-section">
              <div className="price-container">
                <div className="price-note">
                  Depending on configuration and materials
                </div>
              </div>

              <div className="cta-buttons">
                <button className="btn-primary" onClick={openModal}>
                  Contact Sales
                </button>
                <button className="btn-outline">Download Brochure</button>
              </div>

              {isOpen && (
                <div
                  className="modern-modal-overlay"
                  onClick={(e) => {
                    // Close only if user clicks the overlay (not inside the modal)
                    if (e.target.classList.contains("modern-modal-overlay")) {
                      closeModal();
                    }
                  }}
                >
                  <div className="modern-modal">
                    <button className="close-btn" onClick={closeModal}>
                      &times;
                    </button>

                    <h2 className="modal-title">Contact Our Sales Team</h2>
                    <p className="modal-subtitle">
                      Fill out the form below and our team will get in touch
                      with you shortly.
                    </p>

                    <form className="modern-form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label>Your Name</label>
                        <input
                          type="text"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleFieldChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="john@example.com"
                          required
                          value={formData.email}
                          onChange={handleFieldChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Phone Number</label>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="+91 9876543210"
                          required
                          value={formData.phone}
                          onChange={handleFieldChange}
                        />
                      </div>

                      <div className="form-group">
                        <label>Your Message</label>
                        <textarea
                          name="message"
                          placeholder="Tell us how we can help..."
                          rows="4"
                          required
                          value={formData.message}
                          onChange={handleFieldChange}
                        />
                      </div>

                      <div className="form-group captcha-container">
                        <ReCAPTCHA
                          sitekey={Site_Key}
                          onChange={(value) => setCaptchaValue(value)}
                        />
                      </div>

                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Inquiry"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button
              className={activeTab === "description" ? "tab-active" : ""}
              onClick={() => setActiveTab("description")}
            >
              Description
            </button>
            <button
              className={activeTab === "specifications" ? "tab-active" : ""}
              onClick={() => setActiveTab("specifications")}
            >
              Specifications
            </button>
            <button
              className={activeTab === "applications" ? "tab-active" : ""}
              onClick={() => setActiveTab("applications")}
            >
              Applications
            </button>
            <button
              className={activeTab === "features" ? "tab-active" : ""}
              onClick={() => setActiveTab("features")}
            >
              Model Features
            </button>
            <button
              className={activeTab === "resources" ? "tab-active" : ""}
              onClick={() => setActiveTab("resources")}
            >
              Resources
            </button>
          </div>

          <div className="tabs-content">
            {activeTab === "description" && (
              <div
                className="tab-panel"
                dangerouslySetInnerHTML={{ __html: product.description }}
              />
            )}

            {activeTab === "specifications" && (
              <div className="tab-panel">
                <h2>Technical Specifications</h2>
                <div className="specs-table">
                  {product.product_specifications.map((spec) => (
                    <div key={spec.id} className="spec-row">
                      <div className="spec-name">{spec.name}</div>
                      <div className="spec-value"> {spec.value}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "applications" && (
              <div className="tab-panel">
                <h2>Applications</h2>
                {product.product_applications.map((app) => (
                  <div key={app.id} className="application-category">
                    <h3>{app.title}</h3>
                    <ul>
                      {app.points.map((point, i) => (
                        <li key={i}>
                          {" "}
                          <AutoLinkText text={point} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {activeTab === "features" && (
              <div className="tab-panel">
                <h2>Model Features</h2>
                <ul>
                  {product.product_model_features.map((f) => (
                    <li key={f.id}>{f.title}</li>
                  ))}
                </ul>
              </div>
            )}

            {activeTab === "resources" && (
              <div className="tab-panel">
                <h2>Resources</h2>
                {product.product_resources.map((res) => (
                  <div key={res.id} className="resource-item">
                    <h3>{res.title}</h3>
                    <ul>
                      {res.points.map((p, i) => (
                        <li key={i}>
                          <AutoLinkText text={p} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="related-products">
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map((product) => (
              <div key={product.id} className="related-item">
                <img
                  src={product.image}
                  alt={product.title}
                  onError={(e) => {
                    e.currentTarget.src = "/assets/img/blog/blog-post-3.webp";
                  }}
                />
                <div className="related-info">
                  <h4>{product.title}</h4>
                  <p>Model: {product.model}</p>
                  {/* <p>Type: {product.type}</p>
            <p>Drive: {product.drive}</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
