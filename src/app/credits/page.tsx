import ReusableHero from "../components/ReusableHero/ReusableHero";

export default function CreditsPage() {
    return (
        <div className="flex flex-col text-center items-center justify-center">
            <ReusableHero title="Credits" mainHero={false}/>
        </div>
    )
}