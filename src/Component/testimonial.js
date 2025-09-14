"use client";

import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    img: "img/testimonial-1.jpg",
    text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "Client Name 1",
    profession: "Profession 1",
  },
  {
    img: "img/testimonial-2.jpg",
    text: "Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum. At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.",
    name: "Client Name 2",
    profession: "Profession 2",
  },
];

export default function Testimonial() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Content */}
          <div className="col-lg-5" data-aos="fade-up" data-aos-delay="100">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Testimonial</h6>
              <h1 className="display-6 mb-0">What Our Happy Clients Say!</h1>
            </div>
            <p className="mb-4">
              Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <div className="row g-4">
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">123+</h1>
                </div>
                <h5 className="mb-0">Happy Clients</h5>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">123+</h1>
                </div>
                <h5 className="mb-0">Projects Done</h5>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <TestimonialCarousel />
        </div>
      </div>
    </div>
  );
}

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="col-lg-7" data-aos="fade-up" data-aos-delay="500">
      <div className="testimonial-carousel position-relative">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className={`testimonial-item ${currentIndex === index ? "active" : "d-none"}`}
          >
            <img className="img-fluid mb-4" src={testimonial.img} alt={testimonial.name} />
            <p className="fs-5">{testimonial.text}</p>
            <div className="bg-primary mb-3" style={{ width: "60px", height: "5px" }}></div>
            <h5>{testimonial.name}</h5>
            <span>{testimonial.profession}</span>
          </div>
        ))}

        {/* Navigation Buttons */}
        <div className="d-flex justify-content: flex-start mt-3">
          <button className="carousel-btn prev-btn" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="carousel-btn next-btn" onClick={nextSlide}>
            &#10095;
          </button>
        </div>
      </div>
    </div>
  );
};
