
import Features from "./components/Features";
import MaxWidthContainer from "./components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "./components/ReusableHero/ReusableHero";
import OverviewSection from "./components/003-FeatureOverviewSection";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <ReusableHero mainHero={true} />
        <MaxWidthContainer>
          <OverviewSection />
          <Features />
        </MaxWidthContainer>
      </div>
    </>
  )

}
