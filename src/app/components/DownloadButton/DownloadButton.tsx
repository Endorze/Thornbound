'use client';

import { useLanguage } from "../../../contexts/LanguageContext";

const DownloadButton = () => {
    const { t } = useLanguage();

    return (
        <div className="bg-[#025170] hover:bg-[#01111E] transition duration-200 rounded-md
                        hover:shadow-[0_0_12px_3px_#01111E]">
            <a href="https://futuregames.itch.io/thornbound" target="_blank" rel="noopener noreferrer">
                <img src="/images/downloadtext.png" className="w-full h-[92px]" alt={t('hero.downloadAlt')} />
            </a>
        </div>
    );
}

export default DownloadButton;