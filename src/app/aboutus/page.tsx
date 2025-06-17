
import ReusableHero from "@/app/components/ReusableHero/ReusableHero";
import FeatureReusableCredits from "@/app/components/FeatureReusableCredits/FeatureReusableCredits";
import AboutusRoles from "../components/AboutusRoles";

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
