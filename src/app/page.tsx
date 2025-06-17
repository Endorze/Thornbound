import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";
import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import CreditsSection from "./components/005-credits-section";
import H2Title from "./components/H2Title/H2Title";
import ReusableTextImage from "./components/Resusable-Text-Image";
import ReversedTextImage from "./components/ReversedImageText";
import ReusableH3Title from "./components/ReusableH3Title/ReusableH3Title";
import Features from "./components/Features";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-black text-white px-6 sm:px-18 py-10 space-y-12 overflow-hidden">



        <div className="space-y-10 relative z-10">
          <ReusableHero mainHero={true} />

          <ImageCarousel
            images={images}
            title="Kravia Manor"
            text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"
            text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"
          />

          <H2Title text="This is Yasmines test title" size="72px" />
          <TransparentContainerReusable className="relative max-w-4xl w-full text-center p-10">
             {/* Inner glow */}
           <div className="absolute inset-0 bg-blue-400/10 rounded-xl blur-2xl z-0"></div>
           <h2 className="relative z-10 text-3xl font-semibold text-white">
               This is inside the transparent container
                     </h2>
            </TransparentContainerReusable>

          <ReusableTextImage
            title="Thornbound (developer)"
            text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad ipsum expedita facere, dignissimos, autem dolor odit consectetur sapiente saepe aliquam?"
            image="/image.png"
          />

          <ReversedTextImage />
          <ReusableH3Title text="Lorem Ipsum" size="28px" />
        </div>

        <ReusableTextImage
          title="Thornbound (developer)"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam ad ipsum expedita facere, dignissimos, autem dolor odit consectetur sapiente saepe aliquam?"
          image="/image.png"
          reversed={true}
        />

        <Features />
        <CreditsSection />
      </div>
    </>
  );
}
