import ButtonSelanjutnya from "@/components/Home/ButtonSelanjutnya";
import HeroSection from "@/components/Home/HeroSection";
import IklanDisekitar from "@/components/Home/Iklan/IklanDisekitarSection";
import ProductList from "@/components/ProductList";

export default function Home() {
  return (
    <section className="  w-full max-xl:px-[20px] xl:w-[1280px]">
      <HeroSection />
      <IklanDisekitar />
      <ProductList
        srcImage="/images/new.png"
        textIklan="Iklan Terbaru Lainnya"
      />
      <ButtonSelanjutnya />
    </section>
  );
}
