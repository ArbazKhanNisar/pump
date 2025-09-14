"use client";

export default function ContactSection() {
  return (
    <>
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
              Contact Us
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5">
        {/* Team Member 1 */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <img className="img-fluid rounded" src="/img/team-1.jpg" alt="Team Member" />
            </div>
            <div className="col-sm-6">
              <h3 className="mb-0">Full Name</h3>
              <p>Head of Sales</p>
              <h6>Contact Details</h6>
              <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
              <p className="mb-0">📞 +012 345 6789</p>
              <p className="mb-0">✉️ sales@example.com</p>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
          <div className="row g-4 align-items-center">
            <div className="col-sm-6">
              <img className="img-fluid rounded" src="/img/team-2.jpg" alt="Team Member" />
            </div>
            <div className="col-sm-6">
              <h3 className="mb-0">Full Name</h3>
              <p>Head of Marketing</p>
              <h6>Contact Details</h6>
              <p>Lorem ipsum dolor sit amet conse elit sed eiu smod lab ore.</p>
              <p className="mb-0">📞 +012 345 6789</p>
              <p className="mb-0">✉️ marketing@example.com</p>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="col-lg-6" style={{ minHeight: "450px" }} data-aos="zoom-in" data-aos-delay="300">
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
            <h1 className="display-6 mb-0">If You Have Any Query, Please Contact Us</h1>
          </div>
          <p className="mb-4">
            The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes.{" "}
            <a href="https://htmlcodex.com/contact-form" target="_blank">Download Now</a>.
          </p>
          <form>
            <div className="row g-3">
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" id="name" placeholder="Your Name" />
                  <label htmlFor="name">Your Name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <input type="email" className="form-control border-0 bg-light" id="email" placeholder="Your Email" />
                  <label htmlFor="email">Your Email</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <input type="text" className="form-control border-0 bg-light" id="subject" placeholder="Subject" />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control border-0 bg-light" placeholder="Leave a message here" id="message" style={{ height: "150px" }}></textarea>
                  <label htmlFor="message">Message</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary py-3 px-5" type="submit">Send Message</button>
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

