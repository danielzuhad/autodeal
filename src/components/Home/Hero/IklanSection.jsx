import Iklan from "./Iklan";
import IklanKosong from "./IklanKosong";

const IklanSection = () => {
  return (
    <>
      <div className="mt-[24px] w-full ">
        <div className=" border border-zinc-800" />

        <h3 className="my-[24px] text-xl  text-white">Iklan Saya</h3>

        <div className="flex h-[124px] w-full items-center justify-between md:h-[178px]">
          {/* Isi Iklan */}
          <Iklan />

          {/* Kosong */}
          <IklanKosong />
        </div>
      </div>
    </>
  );
};

export default IklanSection;
