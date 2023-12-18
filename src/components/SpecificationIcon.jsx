import Image from "next/image"

export default function SpecificationIcon({ icon = "car", text = "car" }) {
  return (
    <div className="flex items-center gap-1 md:gap-2 ">
      <Image
        width={20}
        height={20}
        alt=".."
        src={`/svgs/${icon}.svg`}
        className="bg-transparent"
      />
      <p className="text-[10px] md:text-xs">{text}</p>
    </div>
  )
}
