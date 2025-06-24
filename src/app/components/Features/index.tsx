'use client';

import ReusableTextImage from "../006-Resusable-Text-Image";
import { useLanguage, useTranslatedData } from "../../../contexts/LanguageContext";
import { DataFileProp } from "../../../data/dataFile";

const Features = () => {
  const { t } = useLanguage();
  // Get the features data (Spells, Stealth, Puzzles) from translated data
  const { FeaturesItems } = useTranslatedData();

  const featuresList = FeaturesItems.slice(1);

  return (
    <section className="w-full py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
      <h2 className="text-4xl md:text-6xl font-bold text-center">{t('features.title')}</h2>
        {featuresList.map((feature: DataFileProp, index: number) => (
          <ReusableTextImage
            key={feature.name || index}
            name={feature.name}
            description={feature.description}
            image={feature.image || "/images/thornbound.png"}
            reversed={index % 2 === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
