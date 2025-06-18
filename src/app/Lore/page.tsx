import ReusableHero from "../components/ReusableHero/ReusableHero";




import LoreSection from "../components/LoreSection/page";

export default function Lore() {
  return (
    <section className="relative w-full min-h-screen text-white">

      
      <ReusableHero mainHero={false} title={"LORE"}/>

     
      <LoreSection />
    </section>
  );
}
 