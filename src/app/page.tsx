import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";
import ReusableH3Title from "./components/ReusableH3Title/ReusableH3Title";
import ImageCarousel from "./components/Carousel/Carousel";
import images from "@/data/images";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import H2Title from "./components/H2Title/H2Title";

export default function Home() {
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
        {/* Top Title */}
        <h1>Sex laxar i en laxask</h1>

        {/* Background Section with Transparent Container */}
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-8 overflow-hidden text-white">
          <div className="relative z-10 max-w-4xl mx-auto flex items-center justify-center min-h-[80vh]">
            <TransparentContainerReusable className="p-10 shadow-2xl opacity-50 bg-black/50 border border-white/30 rounded-xl">
              <h1 className="text-4xl font-bold text-center">
                Sex laxar i en laxask
              </h1>
            </TransparentContainerReusable>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full p-2 flex flex-col items-center justify-center">
          <ReusableHero mainHero={true} />
          <ImageCarousel
            images={images}
            title="Kravia Manor"
            text1="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"
            text2="lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla lorem ipsum blablabla"
          />
          <H2Title text="Test title" size="64px" />
        </div>
      </div>
    </>
  );
}
