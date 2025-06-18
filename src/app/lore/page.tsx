import ImageCarousel from "../components/Carousel/Carousel";
import { LoreItems } from "@/data/dataFile";

export default function LorePage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold"> Welcome to the Lore</h1>
            <ImageCarousel
                images={LoreItems[0]?.images ?? []}
                title={LoreItems[0]?.name ?? "Unknown"}
                text1={LoreItems[0]?.description ?? ""}
                text2=""
            />
            <ImageCarousel
                images={LoreItems[1]?.images ?? []}
                title={LoreItems[1]?.name ?? "Unknown"}
                text1={LoreItems[1]?.description ?? ""}
                text2=""
            />
            <ImageCarousel
                images={LoreItems[2]?.images ?? []}
                title={LoreItems[2]?.name ?? "Unknown"}
                text1={LoreItems[2]?.description ?? ""}
                text2=""
            />

        </div>
    )
}