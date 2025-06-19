import ImageCarousel from "../components/Carousel/Carousel";
import { LoreItems } from "@/data/dataFile";
import TransparentContainer from "../components/TransparentContainerReusable";
import ReusableHero from "../components/ReusableHero/ReusableHero";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import LoreSection from "../components/LoreSection/LoreSection";


export default function LorePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <ReusableHero mainHero={false} title="Lore" />

               <LoreSection />

            <MaxWidthContainer>

                <TransparentContainer>
                    <ImageCarousel
                        images={LoreItems[0]?.images ?? []}
                        title={LoreItems[0]?.name ?? "Unknown"}
                        text1={LoreItems[0]?.description ?? ""}
                        text2=""
                    />
                </TransparentContainer>
                <TransparentContainer>
                    <ImageCarousel
                        images={LoreItems[1]?.images ?? []}
                        title={LoreItems[1]?.name ?? "Unknown"}
                        text1={LoreItems[1]?.description ?? ""}
                        text2=""
                    />
                </TransparentContainer>
                <TransparentContainer>
                    <ImageCarousel
                        images={LoreItems[2]?.images ?? []}
                        title={LoreItems[2]?.name ?? "Unknown"}
                        text1={LoreItems[2]?.description ?? ""}
                        text2=""
                    />
                </TransparentContainer>
            </MaxWidthContainer>
        </div>
    )
}