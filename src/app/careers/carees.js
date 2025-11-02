
"use client";
import Link from "next/link";
import { FaCogs, FaUserTie, FaIndustry, FaUsers, FaGraduationCap, FaCheckCircle } from "react-icons/fa";
import { useState } from "react";
import emailjs from "emailjs-com";
export default function CareersPage() {


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
    <main>
      {/* ====== Hero / Breadcrumb Section ====== */}
      <div
      className="container-fluid page-header py-5 mb-5 text-center text-white"
      style={{ background: "linear-gradient(rgba(0, 0, 0, .65), rgba(0, 0, 0, .65)),url('/img/carousel-1.jpg') center/cover no-repeat" }}
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <div className="container py-5">
        <h1
          className="display-4 text-white mb-4"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Careers
        </h1>
        <nav
          aria-label="breadcrumb"
          className="d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Home
              </a>
            </li>
            <li className="breadcrumb-item">
              <a className="text-white" href="#">
                Pages
              </a>
            </li>
            <li
              className="breadcrumb-item text-primary active"
              aria-current="page"
            >
              Careers
            </li>
          </ol>
        </nav>
      </div>
    </div>

      {/* ====== Introduction ====== */}
      

      <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Image */}
          <div className="col-lg-6" data-aos="fade-up">
            <div
              className="position-relative overflow-hidden ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="/img/about.jpg"
                alt="About"
                style={{ objectFit: "cover" }}
              />
             
            </div>
          </div>

          {/* Right Text */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="h-100">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">Join Our Team</h6>
                <h1 className="display-6 mb-0">
                Build Your Future with a Company That <span className="text-warning">Seals Success</span>
                </h1>
              </div>
              <p>
              At <strong>Inventomatic Seals India</strong>, we don’t just build mechanical seals — 
                  we build engineering careers, global partnerships, and technology-driven growth.
                  As a proud part of the <strong>GRP Group</strong>, we are committed to nurturing 
                  talent and fostering innovation across mechanical engineering, industrial sealing, 
                  and precision manufacturing.
              </p>
             

              <div className="border-top mt-4 pt-4">
                <div className="row g-4">
                  <div className="col-sm-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">Quality Growth</h6>
                  </div>
                  <div className="col-sm-4 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">Global Exposure</h6>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

      {/* ====== Why Work With Us ====== */}
      <section className="py-5">
        <div className="container text-center">
          <h5 className="text-uppercase text-primary fw-semibold mb-2">Why Work With Us</h5>
          <h2 className="fw-bold text-dark mb-5">Empowering Engineers, Building Excellence</h2>

          <div className="row g-4">
            {[
              {
                icon: <FaIndustry size={40} className="text-warning mb-3" />,
                title: "Engineering Innovation",
                desc: "Work on advanced sealing systems and rotary joints used in pharma, refineries, and heavy industries.",
              },
              {
                icon: <FaUserTie size={40} className="text-warning mb-3" />,
                title: "Career Development",
                desc: "We offer structured growth paths, learning opportunities, and promotions from within.",
              },
              {
                icon: <FaUsers size={40} className="text-warning mb-3" />,
                title: "Global Exposure",
                desc: "Collaborate with clients across international markets and global industrial standards.",
              },
              {
                icon: <FaCogs size={40} className="text-warning mb-3" />,
                title: "Inclusive Culture",
                desc: "We value teamwork, innovation, and integrity—every role matters at Inventomatic.",
              },
            ].map((item, i) => (
              <div key={i} className="col-md-3">
                <div className="p-4 border rounded-3 bg-white shadow-sm h-100">
                  {item.icon}
                  <h5 className="fw-semibold">{item.title}</h5>
                  <p className="text-muted small">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====== Departments Section ====== */}
      <section className="py-5 bg-light">
        <div className="container">
          <h5 className="text-uppercase text-primary fw-semibold text-center mb-2">We’re Hiring</h5>
          <h2 className="fw-bold text-center text-dark mb-5">Departments Open for Recruitment</h2>

          <div className="row g-4">
            {[
              "Mechanical Design & CAD Engineering",
              "Production & Assembly (Seals & Rotary Joints)",
              "Quality Control & Quality Assurance",
              "Sales & Marketing (Domestic & International)",
              "Customer Support & Technical Service",
              "Procurement & Supply Chain Management",
              "Accounts, Admin & HR",
            ].map((dept, i) => (
              <div key={i} className="col-md-4">
                <div className="p-4 bg-white border-start border-4 border-warning rounded shadow-sm h-100">
                  <h6 className="fw-semibold mb-2">{dept}</h6>
                  <p className="text-muted small mb-0">
                    Join our growing team and play a key role in shaping the next generation of industrial sealing solutions.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

   {/* ====== Apply Now Section ====== */}
 

<div className="container-fluid appointment my-5 py-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Text */}
          <div className="col-lg-5 col-md-6" data-aos="fade-right" data-aos-delay="300">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-white text-uppercase mb-2">Apply Now</h6>
              <h1 className="display-6 text-white mb-0">
              Build Your Career with Inventomatic Seals India
              </h1>
            </div>
            <p className="text-white mb-0">
            Join a team of innovators shaping the future of mechanical seals and
          precision engineering. At Inventomatic, your expertise drives global
          industrial excellence.
            </p>
            <p className="fw-semibold mb-1">
          📧 careers@inventomaticseals.com / map@inventomatic.in
        </p>
        <p className="fw-semibold mb-4">📞 +91-9987253602</p>
          </div>

          {/* Form */}
          <div className="col-lg-7 col-md-6" data-aos="fade-left" data-aos-delay="500">
            <form 
             onSubmit={handleSubmit}
            >
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

                {/* <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark border-0"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      placeholder="Role Applying For"
                    />
                    <label htmlFor="service">Role Applying For</label>
                  </div>
                </div> */}

<div className="col-sm-6">
  <div className="form-floating">
    <select
      className="form-select bg-dark border-0 text-white"
      id="service"
      name="service"
      value={formData.service}
      onChange={handleChange}
    >
      <option value="">Select Role</option>
      <option value="Mechanical Design & CAD Engineering">Mechanical Design & CAD Engineering</option>
      <option value="Production & Assembly (Seals & Rotary Joints)">Production & Assembly (Seals & Rotary Joints)</option>
      <option value="Quality Control & Quality Assurance">Quality Control & Quality Assurance</option>
      <option value="Sales & Marketing (Domestic & International)">Sales & Marketing (Domestic & International)</option>
      <option value="Customer Support & Technical Service">Customer Support & Technical Service</option>
      <option value="Procurement & Supply Chain Management">Procurement & Supply Chain Management</option>
      <option value="Accounts, Admin & HR">Accounts, Admin & HR</option>
    </select>
    <label htmlFor="service" className="text-white">
      Role Applying For
    </label>
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



      {/* ====== Internship Section ====== */}
<section className="py-5 bg-light">
  <div className="container">
    <div className="row align-items-center g-5">
      {/* Left Content */}
      <div className="col-lg-7" data-aos="fade-right" data-aos-delay="100">
        <div className="border-start border-5 border-warning ps-4 mb-4">
          <h6 className="text-uppercase text-secondary fw-semibold mb-2">
            Internship Opportunities
          </h6>
          <h2 className="fw-bold text-dark mb-0">
            Grow with Real-World Experience
          </h2>
        </div>

        <p className="text-muted mb-3">
          At Inventomatic Seals India, we collaborate with leading engineering
          colleges and technical institutes to offer <strong>internships</strong> and
          <strong> campus placement</strong> opportunities for aspiring professionals.
          Our program provides hands-on exposure to real industrial processes and technologies.
        </p>

        <ul className="text-muted mb-4 ps-3">
          <li>Mechanical Product Design &amp; CAD Drafting</li>
          <li>Industrial Production Processes</li>
          <li>Quality Testing &amp; ISO Documentation</li>
          <li>R&amp;D and Application Engineering</li>
        </ul>

        <p className="fw-semibold mb-1">
          📧 Email your resume to:{" "}
          <span className="text-warning">map@inventomatic.in</span>
        </p>
        <p className="small text-secondary">
          *Include your specialization and preferred internship duration in the email.
        </p>
      </div>

      {/* Right Image */}
      <div className="col-lg-5" data-aos="fade-left" data-aos-delay="200">
        <div
          className="position-relative rounded overflow-hidden shadow-lg"
          style={{ minHeight: "400px" }}
        >
          <img
            src="/img/about.jpg"
            alt="Internship at Inventomatic"
            className="w-100 h-100"
            style={{
              objectFit: "cover",
              filter: "brightness(0.85)",
            }}
          />
          {/* <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "linear-gradient(to bottom right, rgba(10,26,47,0.6), rgba(18,56,91,0.6))",
            }}
          ></div> */}

          {/* Floating Badge
          <div
            className="position-absolute bottom-0 start-0 bg-warning text-dark fw-semibold py-2 px-4"
            style={{
              borderTopRightRadius: "8px",
            }}
          >
            Empowering Young Engineers 🚀
          </div> */}
        </div>
      </div>
    </div>
  </div>
</section>


      {/* ====== Closing Section ====== */}
      {/* <section className="py-5 text-center " >
        <div className="container">
          <h2 className="fw-bold mb-3">Join the Team That Powers Industrial Performance</h2>
          <p className="lead mb-0">
            At Inventomatic, your ideas create impact — your skills drive results. <br />
            “Every seal you help build… seals your success too.”
          </p>
        </div>
      </section> */}
    </main>
  );
}
