import Features from "./components/Features";
import MaxWidthContainer from "./components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import CreditsSection from "./components/005-credits-section";
import H2Title from "./components/H2Title/H2Title";
import ReusableTextImage from "./components/Resusable-Text-Image";
import ReversedTextImage from "./components/ReversedImageText";
import ReusableH3Title from "./components/ReusableH3Title/ReusableH3Title";
import Features from "./components/Features";
import FeatureReusableCredits from "./components/FeatureReusableCredits/FeatureReusableCredits";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
          <ReusableHero mainHero={true}/>
          <MaxWidthContainer>
          <Features />
          </MaxWidthContainer>
      </div>
    </>
      );
}
