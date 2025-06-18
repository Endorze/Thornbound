import ReusableHero from "./components/ReusableHero/ReusableHero";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center">
          <ReusableHero mainHero={true}/>
      </div>
    </>

  );
}
