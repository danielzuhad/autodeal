import Image from "next/image"

export default function LayananPenjual() {
  return (
    <div className="flex flex-col gap-5 rounded-xl bg-white p-5">
      <div className="w-full border-b border-[#E5E5E5]">
        <p className="mb-5 text-[10px] font-[500] text-[#AAAAAA] md:text-xs">
          LAYANAN PENJUAL
        </p>
      </div>
      <div className="flex gap-[18px] md:justify-between">
        <div className="flex grow flex-col gap-[15px]">
          <div className="flex items-center gap-2">
            <Image src="/svgs/check.svg" height={14} width={14} alt="Check" />
            <p className="font-quicksand text-xs font-[500] leading-[15px] md:text-sm">
              Mobil Bergaransi
            </p>
          </div>
          <div className="flex items-center gap-2 ">
            <Image src="/svgs/check.svg" height={14} width={14} alt="Check" />
            <p className="font-quicksand text-xs font-[500] leading-[15px] md:text-sm">
              Test Drive dari Rumah
            </p>
          </div>
        </div>
        <div className="flex grow flex-col gap-[15px]">
          <div className="flex items-center gap-2">
            <Image src="/svgs/check.svg" height={14} width={14} alt="Check" />
            <p className="font-quicksand text-xs font-[500] leading-[15px] md:text-sm">
              Jaminan Uang Kembali
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Image src="/svgs/check.svg" height={14} width={14} alt="Check" />
            <p className="font-quicksand text-xs font-[500] leading-[15px] md:text-sm">
              Gratis Perawatan
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
