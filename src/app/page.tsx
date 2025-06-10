import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1>Sex laxar i en laxask</h1>
      <ImageCarousel images={images} title="Kravia Manor" text1="lorem ipsum blablabla" text2="lorem ipsum blablabla"/>
    </div>
  );
}
