const tagsColor = [
  {
    text: "Jual",
    backgroundColor: "bg-[#E3F8F0]",
    textColor: "text-[#20C997]"
  },
  {
    text: "Baru",
    backgroundColor: "bg-[#E3EFFF]",
    textColor: "text-[#2C99FF]",
    hidden: "hidden md:block"
  },
  {
    text: "Sewa",
    backgroundColor: "bg-[#FFEEDF]",
    textColor: "text-[#FA8B0C]",
    hidden: "hidden md:block"
  },
  {
    text: "Bekas",
    backgroundColor: "bg-[#FFE9F1]",
    textColor: "text-[#FF69A5]"
  }
]

export default function Tags({ text }) {
  const tag = tagsColor.find((item) => item.text === text)

  if (!tag) {
    return (
      <button className="w-14 rounded-lg bg-[#AAA] py-[6px] text-center text-[10px] font-semibold text-[#000] md:w-[68px] md:text-xs">
        {text}
      </button>
    )
  }

  return (
    <button
      className={`${tag.textColor} ${tag.hidden} ${tag.backgroundColor} w-14 rounded-lg py-[6px] text-center text-[10px] font-semibold md:w-[68px] md:text-xs`}
    >
      {text}
    </button>
  )
}
