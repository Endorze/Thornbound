import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import H1Title from "./components/H1Title";

export default function Home() {
  return (
    <>
    <H1Title text="Thornbound" size="100px" />
    <div className="w-full p-2 flex flex-col items-center justify-center">
        <ImageCarousel images={images} title="Kravia Manor" text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla" text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"/>
      </div>
    </>
  );
}
