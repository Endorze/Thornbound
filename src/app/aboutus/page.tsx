
import ReusableHero from "@/app/components/ReusableHero/ReusableHero";
import FeatureReusableCredits from "@/app/components/FeatureReusableCredits/FeatureReusableCredits";
import AboutusRoles from "../components/AboutusRoles";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";

<<<<<<< HEAD
export default function AboutUs() {
  return (
    <>
      <ReusableHero mainHero={false} title="ABOUT US" />

      <FeatureReusableCredits />
      <div className="m-8 md:m-20">
      <AboutusRoles />
    </div>
    </>
  );
}
=======
export default function AboutUsPage() {
    return (
       <div className="flex flex-col justify-center items-center w-full">
        <ReusableHero title="About Us" mainHero={false}/>
        <MaxWidthContainer>
        <AboutusRoles />
        </MaxWidthContainer>
       </div>
    )
}
>>>>>>> 91d33497c3654e062196917105da6855f161e661
