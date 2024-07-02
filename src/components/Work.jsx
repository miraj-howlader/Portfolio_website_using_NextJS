"use client";
import { Button } from "./ui/button";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {Swiper,  SwiperSlide } from "swiper/react";

const projectData = [
  {
    image: "/work/1.png",
    category: "react js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "next js",
    name: "Tic Tac to Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "ecomerce Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "react js",
    name: "Count Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "react js",
    name: "Weather App Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/3.png",
    category: "react js",
    name: "Todo Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "Fullstack js",
    name: "Nexa Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "Fullstack js",
    name: "Bycyle Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "Fullstack js",
    name: "Car Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, beatae.",
    link: "/",
    github: "/",
  },
];
const Work = () => {
  return (
    <section className=" relative mb-12 xl:mb-48">
      <div className="container mx-auto ">
        {/* Text  */}
        <div className="  max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px]
        flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>

        {/* Slider  */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
            <Swiper className=" h-[480px]"
            slidesPerView={1} breakpoints={{
                640:{slidesPerView:2}
            }} spaceBetween={30} modules={[Pagination]}
            pagination={{clickable:true}}>
                {/* show only first 4 slide  */}
                {projectData.slice(0.4).map((project,index)=>{
                    return <SwiperSlide key={index}>
                        <ProjectCard project={project}/>
                    </SwiperSlide>
                })}
            </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
