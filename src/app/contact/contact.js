"use client";

"use client";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Site_Key } from "@/constants/config";
import Link from "next/link";
import { API_ENDPOINTS } from "@/constants/config";
const API_URL = `${API_ENDPOINTS.Contact}`; // 🔹 from .env.local

export default function ContactSection({url}) {
  const [captchaValue, setCaptchaValue] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // 🔹 Handle Input Changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  // 🔹 Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      alert("Please complete the CAPTCHA before submitting.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setCaptchaValue(null);
      } else {
        alert(`❌ Failed to send message: ${data.message || "Server error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* 🔹 Header Section */}
      <div
        className="container-fluid page-header py-5 mb-5 text-center text-white"
        style={{
          background:
            `linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)),url('${url}') center/cover no-repeat`,
        }}
        data-aos="fade-in"
      >
        <div className="container py-5">
          <h1
            className="display-4 text-white mb-4"
            data-aos="fade-down"
            data-aos-delay="200"
          >
            Contact Us
          </h1>
          <nav
            aria-label="breadcrumb"
            className="d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <ol className="breadcrumb mb-0">
              <li className="breadcrumb-item">
                <Link className="text-white" href="/">
                  Home
                </Link>
              </li>
              <li className="breadcrumb-item text-primary active" aria-current="page">
                Contact Us
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* 🔹 Contact Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Google Map */}
            <div
              className="col-lg-6"
              style={{ minHeight: "450px" }}
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              <div className="position-relative h-100">
                <iframe
                  className="position-relative w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1151.5438018942816!2d72.89021772882181!3d19.273008947430316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b106d0305ae7%3A0xe2069ec033ce8956!2sWestern%20Park%20Masjid!5e0!3m2!1sen!2sin!4v1757766038132!5m2!1sen!2sin"
                  frameBorder="0"
                  style={{ minHeight: "450px", border: 0 }}
                  allowFullScreen
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="col-lg-6" data-aos="fade-left" data-aos-delay="400">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Contact Us</h6>
                <h1 className="display-6 mb-0">
                  If You Have Any Query, Please Contact Us
                </h1>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control border-0 bg-light"
                        id="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control border-0 bg-light"
                        id="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phone">Phone</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control border-0 bg-light"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: "150px" }}
                        value={formData.message}
                        onChange={handleChange}
                        required
                      ></textarea>
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>

                  {/* ✅ reCAPTCHA */}
                  <div className="col-12 d-flex justify-content-center mt-2">
                    <ReCAPTCHA
                      sitekey={Site_Key}
                      onChange={(value) => setCaptchaValue(value)}
                    />
                  </div>

                  <div className="col-12 text-center">
                    <button
                      className="btn btn-primary py-3 px-5 mt-3"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

