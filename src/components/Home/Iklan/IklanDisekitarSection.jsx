"use client";
import ProductList from "@/components/ProductList";
import Image from "next/image";
import { useState } from "react";

const IklanDisekitarSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log({ currentIndex });

  return (
    <>
      <ProductList
        srcImage="/svgs/new.svg"
        textIklan="Iklan Terbaru Disekitarmu"
        setCurrentIndex={setCurrentIndex}
      />

      {/* swiper */}
      <div className="relative mt-[30px] flex h-[30px] w-full items-start justify-center">
        <div className="relative h-1.5 w-28 rounded-lg bg-[#E5E5E5] ">
          <div
            className="absolute h-full w-[37.5px] rounded-lg bg-[#448C74]"
            style={{ left: `${currentIndex * 37.5}px` }}
            draggable="true"
          />
        </div>

        <button className="active:scale-95">
          <Image
            alt=".."
            src="/svgs/plus.svg"
            width={50}
            height={50}
            className="absolute right-[-2em]"
          />
        </button>
      </div>
    </>
  );
};

export default IklanDisekitarSection;
