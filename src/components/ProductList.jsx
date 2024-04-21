"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./ProductCard";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useRef } from "react";

const ProductList = ({ textIklan, lihatSemua, srcImage, setCurrentIndex }) => {
  const swiperRef = useRef();

  return (
    <>
      <div className="flex justify-between font-quicksand">
        <div className="flex gap-2">
          {srcImage && (
            <Image
              src={srcImage}
              alt=""
              width={24}
              height={24}
              className="object-contain"
            />
          )}
          <h2 className="text-xl font-semibold text-[#333333]">{textIklan}</h2>
        </div>

        <a href="">{lihatSemua}</a>
      </div>

      <div className="mt-[30px] flex flex-wrap justify-between md:gap-[20px]">
        {/* Map */}
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
            800: { slidesPerView: 4 },
            1275: { slidesPerView: 4 },
          }}
          className="my-4"
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default ProductList;
