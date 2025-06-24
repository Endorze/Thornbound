'use client';

import ReusableTextImage from "../006-Resusable-Text-Image";
import { useTranslatedData } from "../../../contexts/LanguageContext";
import { DataFileProp } from "../../../data/dataFile";

const AboutusRoles = () => {
  const { IndividualsData } = useTranslatedData();

  return (
    <>
      {IndividualsData.map((feature: DataFileProp, index: number) => (
        <ReusableTextImage
          key={feature.name || index}
          name={feature.name}
          description={feature.description}
          image={feature.image || "/images/thornbound.png"}
        />
      ))}
    </>
  );
};

export default AboutusRoles;