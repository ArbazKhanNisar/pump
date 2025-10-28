"use client";

import { useState, useEffect } from "react";
import { IMAGE_DOMAINS } from "@/constants/config";
export default function HomePage({slides}) {
  // const slides = [
  //   {
  //     img: "/img/carousel-1.jpg",
  //     subtitle: "Welcome to Apex",
  //     title: "A Construction & Renovation Company",
     
     
  //   },
  //   {
  //     img: "/img/carousel-2.jpg",
  //     subtitle: "Welcome to Apex",
  //     title: "Professional Tiling & Painting Services",
     
  //   },
  // ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    console.log(slides)
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goPrev = () =>
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="container-fluid p-0 mb-5 position-relative" style={{ height: "700px" }}>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`position-absolute top-0 start-0 w-100 h-100 ${
            idx === activeIndex ? "d-block" : "d-none"
          }`}
        >
          <img
            src={IMAGE_DOMAINS(slide.image)}
            alt={`Slide ${idx + 1}`}
            className="w-100 h-100"
            style={{ objectFit: "cover" }}
          />
          <div className="carousel-caption d-flex flex-column justify-content-center h-100">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-12 col-lg-10 text-center">
                  <h5 className="text-light text-uppercase mb-3 slide-in-down">Welcome to Inventomatic Seals</h5>
                  <h1 className="display-2 text-light mb-3 slide-in-down">{slide.title}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        onClick={goPrev}
        style={{ top: "50%", transform: "translateY(-50%)", position: "absolute", left: "15px" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        onClick={goNext}
        style={{ top: "50%", transform: "translateY(-50%)", position: "absolute", right: "15px" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      {/* Animations CSS */}
      <style jsx>{`
        .slide-in-down {
          animation: slideInDown 1s ease-out;
        }
        @keyframes slideInDown {
          0% {
            opacity: 0;
            transform: translateY(-50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
