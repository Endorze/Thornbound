import { DataFileProp } from './dataFile';
import * as enData from './dataFile';
import * as svData from './dataFileSV';

export type Language = 'en' | 'sv';

export interface TranslatedData {
  IndividualsData: DataFileProp[];
  FeaturesItems: DataFileProp[];
  CreditsItems: DataFileProp[];
  LoreItems: DataFileProp[];
}

export function getDataByLanguage(language: Language): TranslatedData {
  switch (language) {
    case 'sv':
      return {
        IndividualsData: svData.IndividualsData,
        FeaturesItems: svData.FeaturesItems,
        CreditsItems: svData.CreditsItems,
        LoreItems: svData.LoreItems,
      };
    case 'en':
    default:
      return {
        IndividualsData: enData.IndividualsData,
        FeaturesItems: enData.FeaturesItems,
        CreditsItems: enData.CreditsItems,
        LoreItems: enData.LoreItems,
      };
  }
}