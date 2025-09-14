"use client";

export default function Features() {
  const featuresList = [
    {
      title: "Large number of services provided",
      desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
      delay: "0.1s",
    },
    {
      title: "25+ years of professional experience",
      desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
      delay: "0.2s",
    },
    {
      title: "A large number of grateful customers",
      desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
      delay: "0.3s",
    },
    {
      title: "Always reliable and affordable prices",
      desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
      delay: "0.4s",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Text */}
          <div className="col-lg-6 wow " data-aos="fade-up"  data-aos-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Why Choose Us!</h6>
              <h1 className="display-6 mb-0">
                Our Specialization And Company Features
              </h1>
            </div>
            <p className="mb-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>

            <div className="row gy-5 gx-4">
              {featuresList.map((feature, index) => (
                <div
                  className="col-sm-6 "
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                  key={index}
                >
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">{feature.title}</h6>
                  </div>
                  <span>{feature.desc}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="col-lg-6 wow fadeInUp" data-aos='fade-up' data-aos-delay="0.5s">
            <div
              className="position-relative overflow-hidden ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src="/img/feature.jpg"
                alt="Feature"
                style={{ objectFit: "cover" }}
              />
              <div
                className="position-absolute top-0 start-0 bg-white pe-3 pb-3"
                style={{ width: "200px", height: "200px" }}
              >
                <div className="d-flex flex-column justify-content-center text-center bg-primary h-100 p-3">
                  <h1 className="text-white">25</h1>
                  <h2 className="text-white">Years</h2>
                  <h5 className="text-white mb-0">Experience</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
