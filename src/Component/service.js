"use client";

export default function Services() {
  const servicesList = [
    {
      title: "Building Construction",
      desc: "Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
      img: "/img/service-1.jpg",
      delay: "0.1s",
    },
    {
      title: "Home Maintainance",
      desc: "Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
      img: "/img/service-2.jpg",
      delay: "0.3s",
    },
    {
      title: "Renovation and Painting",
      desc: "Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
      img: "/img/service-3.jpg",
      delay: "0.5s",
    },
    {
      title: "Wiring and installation",
      desc: "Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
      img: "/img/service-4.jpg",
      delay: "0.1s",
    },
    {
      title: "Tiling and Painting",
      desc: "Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
      img: "/img/service-5.jpg",
      delay: "0.3s",
    },
    {
      title: "Interior Design",
      desc: "Tempor erat elitr rebum at clita dolor diam ipsum sit diam amet diam et eos",
      img: "/img/service-6.jpg",
      delay: "0.5s",
    },
  ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        {/* Header */}
        <div className="row g-5 align-items-end mb-5">
          <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4">
              <h6 className="text-body text-uppercase mb-2">Our Services</h6>
              <h1 className="display-6 mb-0">
                Construction And Renovation Solutions
              </h1>
            </div>
          </div>
          <div className="col-lg-6 text-lg-end"  data-aos="fade-up" data-aos-delay="0.3s">
            <a className="btn btn-primary py-3 px-5" href="">
              More Services
            </a>
          </div>
        </div>

        {/* Service Items */}
        <div className="row g-4 justify-content-center">
          {servicesList.map((service, index) => (
            <div
              className="col-lg-4 col-md-6 " data-aos="fade-up"
              data-aos-delay={service.delay}
              key={index}
            >
              <div className="service-item bg-light overflow-hidden h-100">
                <img className="img-fluid" src={service.img} alt={service.title} />
                <div className="service-text position-relative text-center h-100 p-4">
                  <h5 className="mb-3">{service.title}</h5>
                  <p>{service.desc}</p>
                  <a className="small" href="">
                    READ MORE<i className="fa fa-arrow-right ms-3"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
