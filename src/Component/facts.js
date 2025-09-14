"use client";

export default function Facts() {
  const facts = [
    {
      id: "01",
      title: "Construction",
      desc: "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
      img: "/img/fact-1.jpg",
      delay: "0.1s",
    },
    {
      id: "02",
      title: "Mechanical",
      desc: "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
      img: "/img/fact-2.jpg",
      delay: "0.3s",
    },
    {
      id: "03",
      title: "Architecture",
      desc: "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
      img: "/img/fact-3.jpg",
      delay: "0.5s",
    },
    {
      id: "04",
      title: "Interior Design",
      desc: "Aliqu diam amet diam et eos erat ipsum lorem stet lorem sit clita duo justo erat amet",
      img: "/img/fact-4.jpg",
      delay: "0.7s",
    },
  ];

  return (
    <div className="container-fluid my-5 p-0">
      <div className="row g-0">
        {facts.map((fact, index) => (
          <div
            key={index}
            className="col-xl-3 col-sm-6"
            data-aos="fade-up"
            data-aos-delay={fact.delay} // 👈 AOS instead of wow
          >
            <div className="position-relative">
              <img
                className="img-fluid w-100"
                src={fact.img}
                alt={fact.title}
              />
              <div className="facts-overlay">
                <h1 className="display-1">{fact.id}</h1>
                <h4 className="text-white mb-3">{fact.title}</h4>
                <p className="text-white">{fact.desc}</p>
                <a className="text-white small" href="#">
                  READ MORE <i className="fa fa-arrow-right ms-3"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
