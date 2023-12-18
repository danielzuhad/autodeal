"use client"

import ProductCard from "@/components/ProductCard"
import Image from "next/image"
import DetailProfil from "./_components/DetailProfil"
import LayananPenjual from "./_components/LayananPenjual"
import Deskripsi from "./_components/Deskripsi"
import Title from "./_components/Title"
import { FotoProduk } from "./_components/FotoProduk"
import Product from "./_components/Product"

export default function DetailIklan() {
  return (
    <div className="mt-[135px] font-inter md:mt-36">
      {/* Breadcrumb */}
      <div className="mx-5 my-[10px] flex gap-2 pt-0 md:my-4 md:pt-4  lg:mx-0">
        <Image
          src="/svgs/home.svg"
          width={13}
          height={13}
          alt="Home"
          className="cursor-pointer"
        />
        <p className="cursor-pointer text-[10px] md:text-xs">
          <span className="text-[10px] font-[500] text-[#AAAAAA] ">/</span>{" "}
          Kategori Mobil
        </p>
        <p className="cursor-pointer text-[10px] font-[500] md:text-xs">
          <span className="text-[#AAAAAA]">/</span> Mobil
        </p>
        <p className="cursor-pointer text-[10px] font-[500] text-[#AAAAAA] md:text-xs">
          <span className="text-[#AAAAAA]">/</span> Mobil
        </p>
      </div>
      <FotoProduk />
      {/* content */}
      <div className="mx-5 mt-5 flex flex-col gap-[10px] font-quicksand md:flex-row lg:mx-0">
        <div className="flex h-fit w-full flex-col gap-[10px] rounded-xl  md:w-[850px]">
          {/* title */}
          <Title />
          <LayananPenjual />
          <Deskripsi />
        </div>
        {/* aside profile */}
        <DetailProfil />
      </div>
      {/* iklan */}
      <div className="mt-8 w-full px-5 lg:px-0">
        <p className="font-quicksand text-xl font-semibold">Iklan Terkait</p>
        <div className="mt-5 flex flex-wrap gap-[10px]  md:gap-5">
          {Array.from({ length: 4 }).map((_, index) => (
            <Product key={index} />
          ))}
        </div>
      </div>
      <div className="mb-[70px] mt-10 flex items-center justify-center md:mb-0">
        <button className="rounded-lg bg-[#ECECEC] px-6 py-[13px] font-[500] text-[#AAA] hover:bg-[#e9e9e9]">
          Lihat lebih banyak
        </button>
      </div>
    </div>
  )
}
