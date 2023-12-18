"use client"

import Image from "next/image"
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"

export function FotoProduk() {
  const [disablePrevButton, setDisablePrevButton] = useState(true)
  const [disableNextButton, setDisableNextButton] = useState(false)
  const swiperRef = useRef()

  const productImages = [
    {
      src: "/images/detail1.jpg",
      alt: "detail-1"
    },
    {
      src: "/images/detail2.jpg",
      alt: "detail-2"
    },
    {
      src: "/images/detail3.jpg",
      alt: "detail-3"
    },
    {
      src: "/images/detail1.jpg",
      alt: "detail-1"
    },
    {
      src: "/images/detail2.jpg",
      alt: "detail-2"
    },
    {
      src: "/images/detail3.jpg",
      alt: "detail-3"
    }
  ]

  return (
    <div className="relative mx-5 flex max-w-[1280px] gap-x-3 overflow-hidden lg:mx-0">
      <Swiper
        className="relative flex w-full overflow-x-hidden"
        spaceBetween={12}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        slidesPerView={1}
        breakpoints={{
          368: {
            slidesPerView: 1
          },
          453: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10
          },
          // when window width is >= 640px
          1024: {
            slidesPerView: 3,
            spaceBetween: 12
          }
        }}
        onSlideChange={(swiper) => {
          setDisablePrevButton(swiper.isBeginning)
          setDisableNextButton(swiper.isEnd)
        }}
      >
        {productImages.map((product, index) => (
          <SwiperSlide
            key={index}
            className="max-w-full rounded-xl lg:max-w-[420px]"
          >
            <Image
              src={product.src}
              width={420}
              height={352}
              alt={product.alt}
              className="object-contain"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute right-3 top-3 flex h-[34px] w-[86px] cursor-pointer items-center gap-[10px] rounded-lg bg-[#33333399] px-3 py-2 md:w-[96px]">
        <Image src="/svgs/gallery.svg" width={12} height={12} alt="galerry" />
        <p className="text-xs font-semibold text-white md:text-[14px]">
          {productImages.length} Foto
        </p>
      </div>
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className={
          disablePrevButton
            ? "hidden"
            : "absolute left-3 top-1/2  -translate-y-1/2"
        }
      >
        <Image
          src="/svgs/arrow-right-glass.svg"
          width={40}
          height={40}
          alt="arrow-right"
          className="rotate-180 rounded-full object-contain"
        />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className={
          disableNextButton
            ? "hidden"
            : "absolute right-3 top-1/2  -translate-y-1/2"
        }
      >
        <Image
          src="/svgs/arrow-right-glass.svg"
          width={40}
          height={40}
          alt="arrow-right"
          className="rounded-full object-contain"
        />
      </button>
    </div>
  )
}
