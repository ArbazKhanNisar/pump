"use client";
import { IMAGE_DOMAINS } from "@/constants/config";

export default function About({data}) {
 

  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5">
          {/* Left Image */}
          <div className="col-lg-6" data-aos="fade-up">
            <div
              className="position-relative overflow-hidden ps-5 pt-5 h-100"
              style={{ minHeight: "400px" }}
            >
              <img
                className="position-absolute w-100 h-100"
                src={IMAGE_DOMAINS(data.image)}
                alt="About"
                style={{ objectFit: "cover" }}
              />
             
            </div>
          </div>

          {/* Right Text */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <div className="h-100">
              <div className="border-start border-5 border-primary ps-4 mb-5">
                <h6 className="text-body text-uppercase mb-2">About Us</h6>
                <h1 className="display-6 mb-0">
                 {data.title}
                </h1>
              </div>
              <p>
                {data.description}
              </p>
             

              <div className="border-top mt-4 pt-4">
                <div className="row g-4">
                  <div className="col-sm-4 d-flex" data-aos="fade-up" data-aos-delay="100">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">Ontime at services</h6>
                  </div>
                  <div className="col-sm-4 d-flex" data-aos="fade-up" data-aos-delay="300">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">24/7 hours services</h6>
                  </div>
                  <div className="col-sm-4 d-flex" data-aos="fade-up" data-aos-delay="500">
                    <i className="fa fa-check fa-2x text-primary flex-shrink-0 me-3"></i>
                    <h6 className="mb-0">Verified professionals</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

