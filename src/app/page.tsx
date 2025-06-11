import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import DownloadButton from "./components/DownloadButton/DownloadButton";
import H2Title from "./components/H2Title/H2Title";

export default function Home() {
  return (
    <div className="w-full p-2 flex flex-col items-center justify-center">
      <h1>Sex laxar i en laxask</h1>
      <ImageCarousel images={images} title="Kravia Manor" text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla" text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"/>
      <DownloadButton />
      <H2Title text="This is Yasmines test title" size="72px"/>
    </div>
  );
}
