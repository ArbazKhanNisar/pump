"use client";

import Carousel from "@/Component/Carousel";
import Facts from "@/Component/facts";
import About from "@/Component/about";
import Features from "@/Component/features";
import Services from "@/Component/service";
import Appointment from "@/Component/appointment";
import Team from "@/Component/team";
import Testimonial from "@/Component/testimonial";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // once=true = animate only first time
  }, []);
  return (
    <>

    <Carousel/>
    <About/>
    <Facts/>
    <Features/>
    <Services/>
    <Appointment/>
    <Team/>
    <Testimonial/>
 
  
    </>
   
  );
}
