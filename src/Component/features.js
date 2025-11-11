"use client";
import { IMAGE_DOMAINS } from "@/constants/config";
import FallbackImage from "@/constants/common";
export default function Features({features}) {
  // const featuresList = [
  //   {
  //     title: "Large number of services provided",
  //     desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
  //     delay: "0.1s",
  //   },
  //   {
  //     title: "25+ years of professional experience",
  //     desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
  //     delay: "0.2s",
  //   },
  //   {
  //     title: "A large number of grateful customers",
  //     desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
  //     delay: "0.3s",
  //   },
  //   {
  //     title: "Always reliable and affordable prices",
  //     desc: "Magna sea eos sit dolor, ipsum amet ipsum lorem diam",
  //     delay: "0.4s",
  //   },
  // ];

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Text */}
          <div className="col-lg-6 wow " data-aos="fade-up"  data-aos-delay="0.1s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-body text-uppercase mb-2">Why Choose Us!</h6>
              <h1 className="display-6 mb-0">
              {features.section_title}
              </h1>
            </div>
            <p className="mb-5">
            {features.section_sub_title}
            </p>

            <div className="row gy-5 gx-4">
              {features?.features .map((feature, index) => (
                <div
                  className="col-sm-6 "
                  data-aos="fade-up"
                  key={index}
                >
                  <div className="d-flex align-items-center mb-3">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">{feature.title}</h6>
                  </div>
                  <span>{feature.description}</span>
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
              <FallbackImage
                className="position-absolute w-100 h-100"
                src={ IMAGE_DOMAINS(features.section_image) }
                alt="Feature"
                fill
                style={{ objectFit: "cover" }}
              />
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
