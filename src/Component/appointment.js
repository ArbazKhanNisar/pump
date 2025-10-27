"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function Appointment() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    service: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    // Your EmailJS keys
    const SERVICE_ID = "service_ojy1eor";
    const TEMPLATE_ID = "template_uj0dgmm";
    const PUBLIC_KEY = "Z3asPQzPOE4j5y9n-";

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          service: formData.service,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      setSuccess(true);
      setFormData({ name: "", email: "", mobile: "", service: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("Failed to send email. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container-fluid appointment my-5 py-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Text */}
          <div className="col-lg-5 col-md-6" data-aos="fade-right" data-aos-delay="300">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-white text-uppercase mb-2">Appointment</h6>
              <h1 className="display-6 text-white mb-0">
                A Company Involved In Mechanical Seals and Rotary Joints.
              </h1>
            </div>
            <p className="text-white mb-0">
            At Inventomatic Seals India, we do more than just manufacture mechanical seals — we build long-term partnerships by 
            delivering smart, application-driven sealing solutions that reduce downtime and enhance operational efficiency.
            </p>
          </div>

          {/* Form */}
          <div className="col-lg-7 col-md-6" data-aos="fade-left" data-aos-delay="500">
            <form onSubmit={handleSubmit}>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark border-0"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      required
                    />
                    <label htmlFor="name">Your Name</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-dark border-0"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                    <label htmlFor="email">Your Email</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark border-0"
                      id="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Your Mobile"
                    />
                    <label htmlFor="mobile">Your Mobile</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark border-0"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="Service Type"
                    />
                    <label htmlFor="service">Service Type</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-dark border-0"
                      id="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Leave a message here"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit" disabled={loading}>
                    {loading ? "Sending..." : "Get Appointment"}
                  </button>
                </div>

                {success && (
                  <div className="text-success text-center mt-3">
                    ✅ Email sent successfully!
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
