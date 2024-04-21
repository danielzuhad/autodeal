"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categoryItems = [
  { scr: "/icons/semua.png", alt: "semua" },
  { scr: "/icons/properti.png", alt: "properti" },
  { scr: "/icons/mobil.png", alt: "mobil" },
  { scr: "/icons/motor.png", alt: "motor" },
  { scr: "/icons/gadget.png", alt: "gadget" },
  { scr: "/icons/elektronik.png", alt: "gadget" },
  { scr: "/icons/olahraga.png", alt: "olahraga" },
  { scr: "/icons/pawprint.png", alt: "pawprint" },
  { scr: "/icons/pawprint.png", alt: "pawprint" },
  { scr: "/icons/pawprint.png", alt: "pawprint" },
  { scr: "/icons/pawprint.png", alt: "pawprint" },
  { scr: "/icons/pawprint.png", alt: "pawprint" },
  { scr: "/icons/pawprint.png", alt: "pawprint" },
];

const CategoriesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const swiperRef = useRef();

  return (
    <>
      <div className="mt-[20px] flex !justify-between">
        {/* Categories  */}
        <Swiper
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentIndex(swiper.activeIndex);
          }}
          pagination
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            330: { slidesPerView: 2 },
            400: { slidesPerView: 3 },
            540: { slidesPerView: 4 },
            800: { slidesPerView: 5 },
            1275: { slidesPerView: 8 },
          }}
          className="  w-[100%] overflow-x-hidden pr-5"
        >
          {categoryItems.map((item, index) => (
            <SwiperSlide
              key={index}
              className=" !flex  w-max items-center !justify-center gap-1 rounded-lg bg-[#282828] py-2 text-[14px] text-white "
            >
              <Image src={item.scr} alt={item.alt} width={20} height={20} />
              <h5 className="text-xs capitalize lg:text-sm">{item.alt}</h5>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Arrow Button */}
        <div
          className={`z-0 flex items-center gap-[6px] max-lg:hidden ${
            categoryItems.length < 10 && "hidden"
          }`}
        >
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className={`${currentIndex !== 0 && "active:scale-95"}`}
          >
            <Image
              width={40}
              height={40}
              alt="arrow-kiri"
              src={
                currentIndex === 0
                  ? "/svgs/arrow-kiri.svg"
                  : "/svgs/arrow-kanan.svg"
              }
              className={`rounded-full object-contain ${currentIndex !== 0 && "rotate-180"}`}
            />
          </button>

          <button
            onClick={() => swiperRef.current.slideNext()}
            className={`${categoryItems.length - 8 !== currentIndex && "active:scale-95"}`}
          >
            <Image
              width={40}
              height={40}
              alt="arrow-kanan"
              src={
                currentIndex === categoryItems.length - 8
                  ? "/svgs/arrow-kiri.svg"
                  : "/svgs/arrow-kanan.svg"
              }
              className={`rounded-full object-contain ${currentIndex === categoryItems.length - 8 ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CategoriesSection;
