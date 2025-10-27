"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// 🧩 Components
import Carousel from "@/Component/Carousel";
import Facts from "@/Component/facts";
import About from "@/Component/about";
import Features from "@/Component/features";
import Services from "@/Component/service";
import Appointment from "@/Component/appointment";
import Team from "@/Component/team";
import Testimonial from "@/Component/testimonial";

export default function HomeClient({ home, about, features, services, testimonial }) {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);

  return (
    <>
      <Carousel slides={home.banners || []} />
      <About data={about} />
      <Facts />
      <Features features={features} />
      <Services services={services} />
      <Appointment />
      <Testimonial testimonial={testimonial} />
    </>
  );
}
