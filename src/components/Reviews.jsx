'use client'
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import {Swiper,  SwiperSlide } from "swiper/react";

import { Card,CardDescription,CardHeader,CardTitle } from "./ui/card"
import Image from "next/image";

const reviewsData = [
  {
    avatar:'/reviews/avatar-1.png',
    name:"Richard Thompson",
    job:"Chef",
    review:"      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.",
  },
  {
    avatar:'/reviews/avatar-2.png',
    name:"Evelyn Anderson",
    job:"Interior Designer",
    review:"      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.",
  },
  {
    avatar:'/reviews/avatar-3.png',
    name:"John Doe",
    job:"Game Developer",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.",
  },
  {
    avatar:'/reviews/avatar-4.png',
    name:"Emily Smith",
    job:"Therapist",
    review:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.",
  },
  {
    avatar:'/reviews/avatar-5.png',
    name:"Oliver Taylor",
    job:"Engineer",
    review:"      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.",
  },
  {
    avatar:'/reviews/avatar-6.png',
    name:"Mason Wilson",
    job:"Video Editor",
    review:"      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, voluptas.",
  },
]
const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
      {/* Slider  */}
      <Swiper slidesPerView={1}
      breakpoints={{
        640:{slidesPerView:2},
        1400:{slidesPerView:3},
      }}
      spaceBetween={30}
      modules={[Pagination]}
      pagination={{clickable:true}}
      className=" h-[350px]"
      >
        {reviewsData.map((item,index)=>{
          return <SwiperSlide key={index}>
               <Card className='bg-gray-200 dark:bg-secondary/40 p-8 min-h-[300px]'>
                
                <CardHeader className='p-0 mb-10'>
                      <div className=" flex items-center gap-x-4">
                        {/* Image  */}
                        <Image
                        src={item.avatar}
                        width={70}
                        height={70}
                        alt=""
                        priority
                         />
                         {/* Name  */}
                         <div className=" flex flex-col">
                          <CardTitle className='text-black'>{item.name}</CardTitle>
                              <p className='text-black'>{item.job}</p>
                         </div>
                      </div>
                </CardHeader>
                <CardDescription className='text-lg font-semibold text-muted-foreground'>
                  {item.review}
                  </CardDescription>
               </Card>
          </SwiperSlide>
        })}
      </Swiper>
      </div>
    </section>
  )
}

export default Reviews
