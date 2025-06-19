import AboutusRoles from "../components/AboutusRoles";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";
import FeatureAboutUs from "../components/FeatureAboutUs/FeatureAboutUs";

export default function AboutUsPage() {
    return (
       <div className="flex flex-col justify-center items-center w-full">
        <ReusableHero title="About Us" mainHero={false}/>
        <MaxWidthContainer>
        <FeatureAboutUs />
        <AboutusRoles />
        </MaxWidthContainer>
       </div>
    )
}