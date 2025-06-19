


import AboutusRoles from "../components/AboutusRoles";
import FeatureReusableCredits from "../components/FeatureReusableCredits/FeatureReusableCredits";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";



export default function AboutUsPage() {
    return (
      <>

       <div className="flex flex-col justify-center items-center w-full">
        <ReusableHero title="About Us" mainHero={false}/>
        <MaxWidthContainer>
        <FeatureReusableCredits />
        <AboutusRoles />
        </MaxWidthContainer>
       </div>
       </>
    )
}

