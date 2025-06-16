import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import CreditsSection from "./components/005-credits-section";


export default function Home() {
  return (
    <>

    <div className="w-full p-2 flex flex-col items-center justify-center">
      <ReusableHero mainHero={true}/>
      <ImageCarousel images={images} title="Kravia Manor" text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla" text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"/>
      <CreditsSection />
    </div>
   </>
  );
}
