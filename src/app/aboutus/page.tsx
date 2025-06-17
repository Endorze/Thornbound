
import ReusableHero from "@/app/components/ReusableHero/ReusableHero";
import FeatureReusableCredits from "@/app/components/FeatureReusableCredits/FeatureReusableCredits";

export default function AboutUs() {
  return (
    <main>
     
      <ReusableHero mainHero={false} title="ABOUT US" />

     
      <FeatureReusableCredits />
    </main>
  );
}
