"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

import { FaUnlockKeyhole } from "react-icons/fa6"
import NavbarMenu from "./KategoriMenu"
import KategoriMenu from "./KategoriMenu"

const Navbar = () => {
  const pathname = usePathname()

  return (
    <header className="fixed z-10 flex w-screen flex-col justify-center">
      <nav className="flex w-screen flex-col   items-center justify-center bg-white  font-quicksand">
        {/* Navbar Content */}
        <div className="relative w-full max-w-[1280px]  items-center justify-between py-[18px]   max-lg:px-[20px] max-md:flex-col md:flex">
          {/* Title */}
          <div className=" flex justify-between">
            <Link href="/">
              <Image src="/images/logo.png" alt="" width={158} height={28} />
            </Link>

            {/* Hamburger Icon */}
            <button>
              <Image
                width={22}
                height={22}
                className="sticky md:hidden"
                alt="hamburger"
                src="/svgs/menu.svg"
              />
            </button>
          </div>

          {/* Search */}
          <form
            action=""
            className="flex w-full gap-[2px] max-md:mt-[10px] md:w-[400px] xl:w-[634px]"
          >
            {/* Cari Lokasi */}
            <div className=" flex items-center rounded-bl-lg rounded-tl-lg bg-[#F4F5F7] text-xs">
              <div className="flex h-full items-center px-[10px]">
                <Image
                  width={20}
                  height={20}
                  className="h-5 w-full object-contain"
                  alt="map"
                  src="/svgs/map.svg"
                />
              </div>
              <input
                className=" h-11 w-full bg-[#F4F5F7]  pl-2 text-sm font-light"
                type="text"
                placeholder="Indonesia"
              />
            </div>

            {/* Cari  Barang */}
            <div className=" flex w-full items-center gap-[2px] max-sm:rounded-br-lg max-sm:rounded-tr-lg">
              <input
                className="h-11 w-full bg-[#F4F5F7] pl-[16px] text-sm font-light max-sm:rounded-br-lg max-sm:rounded-tr-lg "
                type="text"
                placeholder="Cari yang kamu mau di sini..."
              />
              <div className="flex h-full items-center  rounded-br-lg rounded-tr-lg bg-[#F4F5F7] px-[16px] max-sm:hidden">
                <Image
                  width={22}
                  height={22}
                  className="w-full object-contain"
                  alt="search"
                  src="/svgs/search.svg"
                />
              </div>
            </div>
          </form>

          {/* Login Button */}
          <div className="max-md:hidden">
            <button
              className="flex items-center justify-center gap-2 rounded-lg bg-[#FCD02F]  p-[12px]  text-[14px] text-black"
              type="submit"
            >
              <FaUnlockKeyhole />
              <h5 className="text-sm font-semibold">Masuk/Daftar</h5>
            </button>
          </div>
        </div>
      </nav>
      {pathname !== "/" && <KategoriMenu />}
    </header>
  )
}

export default Navbar
