

import AboutusRoles from "../components/AboutusRoles";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";

export default function AboutUs() {
  return (
    
  
       <div className="flex flex-col justify-center items-center w-full">
        <ReusableHero title="About Us" mainHero={false}/>
        <MaxWidthContainer>
        <AboutusRoles />
        </MaxWidthContainer>
       </div>
    )
}
