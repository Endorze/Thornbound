

import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import H2Title from "./components/H2Title/H2Title";
import H1Title from "./components/H1Title";
import ReusableTextImage from "./components/Resusable-Text-Image";
import ReversedTextImage from "./components/ReversedImageText";
import ReusableH3Title from "./components/ReusableH3Title/ReusableH3Title";
import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";
import Features from "./components/Features";


export default function Home() {
  return (
     <>
     <div className="min-h-screen bg-black  px-6 sm:px-18 py-10 space-y-12">


      <H1Title text="Thornbound" size="100px" />

         <TransparentContainerReusable className="bg-black/40">
        <div className="space-y-10">

        <ReusableHero mainHero={true} />
        <ImageCarousel images={images} title="Kravia Manor" text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla" text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla" />
        <H2Title text="This is Yasmines test title" size="72px" />
        <ReusableTextImage title="Thornbound(developer)" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad ipsum expedita facere, dignissimos, autem dolor odit consectetur sapiente saepe aliquam? Praesentium ratione, natus laudantium temporibus itaque quam quibusdam soluta?" image="./image.png"/>
        <ReversedTextImage/>
          <ReusableH3Title text="Lorem Ipsum" size="28px" />
      </div>
        </TransparentContainerReusable>

          <ReusableTextImage
            title="Thornbound(developer)"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad ipsum expedita facere, dignissimos, autem dolor odit consectetur sapiente saepe aliquam? Praesentium ratione, natus laudantium temporibus itaque quam quibusdam soluta?"
            image="/image.png"
            reversed={true}
          />
        </div>

        <Features />

        </>




  );
}
