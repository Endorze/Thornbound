'use client';

import CreditsSection from "../components/005-credits-section";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";
import { useLanguage, useTranslatedData } from "../../contexts/LanguageContext";

export default function CreditsPage() {
  const { t } = useLanguage();
  const { CreditsItems } = useTranslatedData();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ReusableHero title={t('pages.credits')} mainHero={false} />
      <MaxWidthContainer>
        <CreditsSection creditsItems={CreditsItems} />
      </MaxWidthContainer>
    </div>
  );
}