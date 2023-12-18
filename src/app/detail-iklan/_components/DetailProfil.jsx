import Image from "next/image"
import Link from "next/link"

export default function DetailProfil() {
  return (
    <div className="flex h-fit w-full flex-col gap-5 rounded-xl bg-white p-5 font-inter md:w-[420px]">
      <p className="text-[10px] font-[500] text-[#AAAAAA] md:text-xs">
        PENJUAL
      </p>
      <div className="flex gap-[21px]">
        <div>
          <Image
            src="/images/woman.png"
            width={76}
            height={76}
            alt="Profil"
            className="rounded-full object-contain"
          />
        </div>
        <div className="flex flex-col gap-[19px]">
          <div className="flex flex-col gap-[2px]">
            <p className="font-quicksand text-lg font-semibold">
              Emanuella Taraka
            </p>
            <p className="text-[10px] font-normal text-[#AAA] md:text-xs">
              Bergabung pada September 2021
            </p>
          </div>
          <Link
            href={"/profile"}
            className="font-quicksand text-[10px] font-[500] text-[#D7A901] underline md:text-xs"
          >
            Lihat profil
          </Link>
        </div>
      </div>
      <button className="flex items-center justify-center gap-[10px] rounded-lg bg-[#F5F5F5] py-3 font-quicksand text-sm font-semibold text-[#333333]">
        <Image src="/svgs/chat.svg" alt="Pesan" width={20} height={20} />
        Kirim Pesan
      </button>
      <div className="flex flex-col gap-5 border-b border-[#E5E5E5]">
        <p className="text-[10px] font-[500] text-[#AAAAAA] md:text-xs">
          KONTAK
        </p>
        <div className="flex items-center gap-[10px]">
          <Image src="/svgs/mail.svg" alt="Email" width={20} height={20} />
          <p className="text-xs font-[500]">e.taraka@example.com</p>
        </div>
        <div className="flex items-center gap-[10px] md:mb-5">
          <Image
            src="/svgs/whatsapp.svg"
            alt="Whatsapp"
            width={20}
            height={20}
          />
          <p className="text-xs font-[500] text-[#30BE2E] underline">
            +6288888888
          </p>
        </div>
        <div className="mb-5 flex items-center  gap-4 md:hidden">
          <div className="rounded-full bg-white p-[10px] shadow">
            <Image src="/svgs/facebook.svg" width={20} height={20} alt="FB" />
          </div>
          <div className="rounded-full bg-white p-[10px] shadow">
            <Image src="/svgs/instagram.svg" width={20} height={20} alt="IG" />
          </div>
          <div className="rounded-full bg-white p-[10px] shadow">
            <Image src="/svgs/youtube.svg" width={20} height={20} alt="YT" />
          </div>
          <div className="rounded-full bg-white p-[10px] shadow">
            <Image src="/svgs/tiktok.svg" width={20} height={20} alt="TT" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <p className="text-[10px] font-[500] text-[#AAAAAA] md:text-xs">
          ALAMAT
        </p>
        <p className="text-sm font-[500] leading-6">
          Pejaten Village Mall P-5, Jl. Warung Jati Barat, RT.01/RW.05, Jati
          Padang, Kecamatan Pasar Minggu, Jakarta Selatan, DKI Jakarta
        </p>
        <div className="flex items-center gap-[10px]">
          <Image src="/svgs/gmaps.svg" alt="Gmaps" width={20} height={20} />
          <p className="cursor-pointer font-quicksand text-xs font-[500] text-[#D7A901] underline">
            Lihat petunjuk &gt;
          </p>
        </div>
      </div>
    </div>
  )
}
