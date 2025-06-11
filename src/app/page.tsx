import TextImage from "./components/014-Feature/Text-Image";
import Reversed from "./components/017-ReversedText-Image";
import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";


export default function Home() {
  return (
    <div className="w-full p-2 flex flex-col items-center justify-center">
      <ImageCarousel images={images} title="Kravia Manor" text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla" text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"/>
     <TextImage/>
     <Reversed/>
    </div>
  );
}
