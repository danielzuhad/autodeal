import SpecificationIcon from "@/components/SpecificationIcon"
import Tags from "@/components/Tags"
import Image from "next/image"

export default function Title() {
  return (
    <div className="flex flex-col rounded-xl bg-white px-5 py-5 font-inter">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex flex-wrap gap-1">
          <Tags text="Jual" />
          <Tags text="Sewa" />
          <Tags text="Baru" />
          <Tags text="Bekas" />
        </div>
        <div className="text-xs font-normal text-[#AAA]">
          <p>
            Diposting tanggal: <span>23/11/2022</span>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <h2 className="text-base font-[500] md:text-xl lg:text-2xl">
          Range Rover Evoque 2013 - Putih Mulus Seperti Baru
        </h2>
        <h3 className="text-2xl font-bold md:text-3xl lg:text-4xl">
          Rp 615.000.000
        </h3>
      </div>
      <div className="my-5 flex flex-wrap items-center gap-5 text-[#AAA]">
        <SpecificationIcon icon="car" text="SUV" />
        <SpecificationIcon icon="transmission" text="Otomatis" />
        <SpecificationIcon icon="gas-station" text="Bensin" />
        <SpecificationIcon icon="KM" text="54128 KM" />
        <SpecificationIcon icon="engine" text="2000 CC" />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex gap-1 font-quicksand">
          <button className="flex items-center justify-center rounded-xl bg-[#F5F5F5] p-[10px] text-center md:px-[26px] md:py-[10px]">
            <div className="flex gap-3">
              <Image
                width={20}
                height={20}
                alt=".."
                src="/svgs/heart-outline-black.svg"
                className="bg-transparent"
              />
              <p className="hidden md:block md:text-xs">Favorit</p>
            </div>
          </button>
          <button className="flex items-center justify-center rounded-xl bg-[#F5F5F5] p-[10px] text-center md:px-[26px] md:py-[10px]">
            <div className="flex gap-3">
              <Image
                width={20}
                height={20}
                alt=".."
                src="/svgs/share-outline-black.svg"
                className="bg-transparent"
              />
              <p className="hidden md:block md:text-xs">Bagikan</p>
            </div>
          </button>
        </div>
        <div>
          <p className="text-[10px] text-[#D7A901] underline md:text-xs">
            Laporkan iklan
          </p>
        </div>
      </div>
    </div>
  )
}
