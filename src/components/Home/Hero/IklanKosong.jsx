import Image from "next/image";

const IklanKosong = () => {
  return (
    <div className=" h-full w-[49%] rounded-xl bg-[#282828] px-4 pb-4 opacity-50  hover:cursor-pointer hover:opacity-100 max-md:hidden">
      <dir className=" flex h-[90%] w-full items-center justify-center rounded-xl border-2 border-dashed border-amber-400 border-opacity-25">
        <button>
          <Image width={48} height={48} alt=".." src="/svgs/plus.svg" />
        </button>
      </dir>
    </div>
  );
};

export default IklanKosong;
