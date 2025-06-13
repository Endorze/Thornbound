
import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import H2Title from "./components/H2Title/H2Title";
import H1Title from "./components/H1Title";
import ReusableTextImage from "./components/006-Resusable-Text-Image";
import TransparentContainer from "@/app/components/TransparentContainer/TransparentContainer";



export default function Home() {
  return (
    <>
      <H1Title text="Thornbound" size="100px" />

      <div className="w-full p-2 flex flex-col items-center justify-center">
        <TransparentContainer>
          <ReusableHero mainHero={true} />
          <ImageCarousel
            images={images}
            title="Kravia Manor"
            text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"
            text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"
          />
          <H2Title text="This is Yasmines test title" size="72px" />
          <ReusableTextImage
            title="Thornbound(developer)"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad ipsum expedita facere, dignissimos, autem dolor odit consectetur sapiente saepe aliquam? Praesentium ratione, natus laudantium temporibus itaque quam quibusdam soluta?"
            image="/image.png"
          />
          <ReusableTextImage
            title="Thornbound(developer)"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad ipsum expedita facere, dignissimos, autem dolor odit consectetur sapiente saepe aliquam? Praesentium ratione, natus laudantium temporibus itaque quam quibusdam soluta?"
            image="/image.png"
            reversed={true}
          />
        </TransparentContainer>
      </div>
    </>
  );
}
