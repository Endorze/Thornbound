import Features from "./components/Features";
import MaxWidthContainer from "./components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "./components/ReusableHero/ReusableHero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
        <ReusableHero mainHero={true} />
        <MaxWidthContainer>
          <Features />
        </MaxWidthContainer>
      </div>
    </>
  );
}
