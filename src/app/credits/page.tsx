import { CreditsItems } from "@/data/dataFile";
import CreditsSection from "../components/005-credits-section";

export default function CreditsPage() {
    return (
        <div className="flex flex-col text-center items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold"> Welcome to the Credits</h1>
            <CreditsSection />
        </div>
    )
}