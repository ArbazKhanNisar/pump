"use client";

export default function Facts() {
  const facts = [
    {
      id: "01",
      title: "Mechanical Seals",
      desc: "Precision-engineered mechanical seals designed to deliver superior reliability and performance in diverse industrial applications, ensuring leak-free operation and extended equipment life.",
      img: "/img/mechanicalseals.jpeg",
      delay: "0.1s",
    },
    {
      id: "02",
      title: "Rotary Joints",
      desc: "High-quality rotary joints manufactured for efficient transfer of liquids, steam, and gases between stationary and rotating equipment, offering durability and optimized flow control.",
      img: "/img/rotaryjoint.jpeg",
      delay: "0.3s",
    },
    {
      id: "03",
      title: "Mechanical Consultancy",
      desc: "Comprehensive mechanical consultancy services providing expert guidance on troubleshooting, process optimization, and selection of advanced sealing and rotary solutions tailored to client needs.",
      img: "/img/mechanicalseals.jpeg",
      delay: "0.5s",
    },
    {
      id: "04",
      title: "Custom Engineering Solutions",
      desc: "Tailor-made engineering solutions addressing unique industrial challenges — from specialized component fabrication to seamless process integration — driven by deep technical expertise and innovation.",
      img: "/img/mechanicalconsultancy.jpeg",
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
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
