'use client';

import ReusableTextImage from "../006-Resusable-Text-Image";
import { useTranslatedData, useLanguage } from "../../../contexts/LanguageContext";

const OverviewSection = () => {
    const { FeaturesItems } = useTranslatedData();
    const { t } = useLanguage();

    // Get the first item which contains the video and description
    const overviewData = FeaturesItems[0];

    return (
        <>
            <div className="text-center mb-10 pt-12">
                <h2 className="text-5xl md:text-7xl text-white">{t('features.overview')}</h2>
            </div>

            <ReusableTextImage
                description={overviewData?.description || ""}
                video={overviewData?.video || "/images/video.mp4"}
                reversed={false}
            />
        </>
    );
};

export default OverviewSection;

