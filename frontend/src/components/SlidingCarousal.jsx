import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

export default function SlidingCarousal() {
  return (
    <div className="relative h-full w-full">
    <Swiper
    modules={[Autoplay]}
      spaceBetween={0}
      autoplay={{
        delay: 3000, // Delay between slides in ms
        disableOnInteraction: false, 
      }}
      loop={true}
      breakpoints={{
        640: {
          slidesPerView: 1, // 1 slide for screens >= 640px
        },
        768: {
          slidesPerView: 2, // 2 slides for screens >= 768px
        },
        1024: {
          slidesPerView: 3, // 3 slides for screens >= 1024px
        },
      }}
      className="relative"
    >
      <SwiperSlide>
      <div className="relative h-[25rem] w-full bg-cover bg-left-top" style={{ backgroundImage: "url('https://images.deccanherald.com/deccanherald%2F2024-04%2Fcb2f0d7b-e5c7-40bf-a0d4-a41776bc72c8%2FBNG10_Firsttime_voters_1.jpg?rect=0%2C0%2C1964%2C1105&auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=400&dpr=2')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative h-[25rem] w-full bg-cover bg-top" style={{ backgroundImage: "url('https://bsmedia.business-standard.com/_media/bs/img/article/2023-11/30/full/1701367906-9801.jpg?im=FeatureCrop,size=(826,465')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
         
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="relative h-[25rem] w-full bg-cover bg-top" style={{ backgroundImage: "url('https://images.hindustantimes.com/rf/image_size_800x600/HT/p1/2012/03/03/Incoming/Pictures/820215_Wallpaper2.jpg')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          
        </div>
      </SwiperSlide>


      <SwiperSlide>
      <div className="relative h-[25rem] w-full bg-cover bg-top" style={{ backgroundImage: "url('https://akm-img-a-in.tosshub.com/businesstoday/images/story/201904/up-polls_660_042919090043.jpg')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="relative h-[25rem] w-full bg-cover bg-top" style={{ backgroundImage: "url('https://thedailyguardian.com/wp-content/uploads/2024/05/ghv-1.jpg')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="relative h-[25rem] w-full bg-cover bg-right" style={{ backgroundImage: "url('https://blog.ipleaders.in/wp-content/uploads/2020/09/political-parties-national-list.jpg')" }}>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          
        </div>
      </SwiperSlide>


    </Swiper>
    <div className="absolute inset-0 flex flex-col justify-center items-center z-10">
        <h2 className="text-white text-6xl font-bold"><span className="text-orange-500">Vote</span> Now</h2>
        <p className="text-white text-2xl mt-2">Security Ki Baath, <span className="text-orange-500">VoteSathi</span> Ki Saath!</p>
        <button className="mt-4 px-8 py-2 bg-green-400 hover:bg-green-500 text-white rounded-lg text-lg">Vote</button>
      </div>
    </div>
  );
}
