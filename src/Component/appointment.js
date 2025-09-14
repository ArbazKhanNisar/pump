"use client";


export default function Appointment() {


  return (
    <div className="container-fluid appointment my-5 py-5" data-aos="fade-up" data-aos-delay="100">
      <div className="container py-5">
        <div className="row g-5">
          {/* Left Text */}
          <div className="col-lg-5 col-md-6" data-aos="fade-right" data-aos-delay="300">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-white text-uppercase mb-2">Appointment</h6>
              <h1 className="display-6 text-white mb-0">
                A Company Involved In Service And Maintenance
              </h1>
            </div>
            <p className="text-white mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
          </div>

          {/* Form */}
          <div className="col-lg-7 col-md-6" data-aos="fade-left" data-aos-delay="500">
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control bg-dark border-0" id="gname" placeholder="Your Name" />
                    <label htmlFor="gname">Your Name</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="email" className="form-control bg-dark border-0" id="gmail" placeholder="Your Email" />
                    <label htmlFor="gmail">Your Email</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control bg-dark border-0" id="cname" placeholder="Your Mobile" />
                    <label htmlFor="cname">Your Mobile</label>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-floating">
                    <input type="text" className="form-control bg-dark border-0" id="cage" placeholder="Service Type" />
                    <label htmlFor="cage">Service Type</label>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-dark border-0"
                      placeholder="Leave a message here"
                      id="message"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="message">Message</label>
                  </div>
                </div>

                <div className="col-12">
                  <button className="btn btn-primary w-100 py-3" type="submit">
                    Get Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
