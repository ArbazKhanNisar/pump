"use client";

export default function Team() {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header */}
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Team</h6>
              <h1 className="display-6 mb-0">Our Expert Worker</h1>
            </div>
          </div>
          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="0.3s">
            <p className="mb-0">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 "  data-aos="fade-up" data-aos-delay="0.1s">
            <div className="team-item position-relative">
              <img className="img-fluid" src="/img/team-1.jpg" alt="" />
              <div className="team-text bg-white p-4">
                <h5>Full Name</h5>
                <span>Engineer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0.3s">
            <div className="team-item position-relative">
              <img className="img-fluid" src="/img/team-2.jpg" alt="" />
              <div className="team-text bg-white p-4">
                <h5>Full Name</h5>
                <span>Engineer</span>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="0.5s">
            <div className="team-item position-relative">
              <img className="img-fluid" src="/img/team-3.jpg" alt="" />
              <div className="team-text bg-white p-4">
                <h5>Full Name</h5>
                <span>Engineer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
