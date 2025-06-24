'use client';

import LoreSection from "../components/LoreSection/LoreSection";
import MaxWidthContainer from "../components/MaxWidthContainer/MaxWidthContainer";
import ReusableHero from "../components/ReusableHero/ReusableHero";
import { useLanguage, useTranslatedData } from "../../contexts/LanguageContext";

export default function LorePage() {
  const { t } = useLanguage();
  const { LoreItems } = useTranslatedData();

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <ReusableHero title={t('pages.lore')} mainHero={false} />
      <MaxWidthContainer>
        <LoreSection loreItems={LoreItems} />
      </MaxWidthContainer>
    </div>
  );
}