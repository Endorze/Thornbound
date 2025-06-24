'use client';

import Image from "next/image";
import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";
import ImageCarousel from "../Carousel/Carousel";
import { DataFileProp } from "../../../data/dataFile";
import { useLanguage } from "../../../contexts/LanguageContext";

interface LoreSectionProps {
  loreItems: DataFileProp[];
}

export default function LoreSection({ loreItems }: LoreSectionProps) {
  const { t } = useLanguage();

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-6xl mx-auto">

        <TransparentContainerReusable className="p-6 sm:p-10 shadow-lg text-white flex flex-col items-center gap-8" opacity={100}>

          {/* Top paragraph */}
          <div className="text-gray-300 text-base sm:text-1g leading-relaxed text-center w-full">
            <p>
              {t('lore.subtitle')}
            </p>
          </div>

          {/* Image centered below */}
          <div className="w-full rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/general.png"
              alt={t('lore.storyIllustrationAlt')}
              width={800}
              height={900}
              className="w-full h-auto object-cover rounded-md"
              priority
            />
          </div>

        </TransparentContainerReusable>

        {/* Character sections */}
        {loreItems.map((item, index) => (
          <TransparentContainerReusable key={index} className="mt-8">
            <ImageCarousel
              images={item.images ?? []}
              title={item.name ?? t('ui.unknown')}
              text1={item.description ?? ""}
              text2=""
            />
          </TransparentContainerReusable>
        ))}
      </div>
    </div>
  );
}
