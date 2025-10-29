"use client";

import { useState, useEffect } from "react";
import { IMAGE_DOMAINS} from "@/constants/config";


export default function Testimonial({testimonial}) {
 

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
             {testimonial.section_sub_title}
            </p>
            <div className="row g-4">
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-users fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0"> {testimonial.happy_clients_count}</h1>
                </div>
                <h5 className="mb-0">Happy Clients</h5>
              </div>
              <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                <div className="d-flex align-items-center mb-2">
                  <i className="fa fa-check fa-2x text-primary flex-shrink-0"></i>
                  <h1 className="ms-3 mb-0">{testimonial.projects_done_count}</h1>
                </div>
                <h5 className="mb-0">Projects Done</h5>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <TestimonialCarousel testimonials={testimonial.testimonials} />
        </div>
      </div>
    </div>
  );
}

const TestimonialCarousel = ({testimonials}) => {
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
            <img className="img-fluid mb-4" src={IMAGE_DOMAINS(testimonial.client_image)} alt={testimonial.client_name} />
            <p className="fs-5">{testimonial.testimonial_quote}</p>
            <div className="bg-primary mb-3" style={{ width: "60px", height: "5px" }}></div>
            <h5>{testimonial.client_name}</h5>
            <span>{testimonial.client_profession}</span>
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
