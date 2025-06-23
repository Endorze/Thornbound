'use client';

import AboutusRoles from "../components/AboutusRoles";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";
import FeatureAboutUs from "../components/FeatureAboutUs/FeatureAboutUs";
import { useLanguage } from "../../contexts/LanguageContext";

export default function AboutUsPage() {
    const { t } = useLanguage();

    return (
       <div className="flex flex-col justify-center items-center w-full">
        <ReusableHero title={t('pages.aboutUs')} mainHero={false}/>
        <MaxWidthContainer>
        <FeatureAboutUs />
        <AboutusRoles />
        </MaxWidthContainer>
       </div>
    )
}