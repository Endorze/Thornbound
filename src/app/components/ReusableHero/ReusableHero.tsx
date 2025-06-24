'use client';

import DownloadButton from "../DownloadButton/DownloadButton";
import { useLanguage } from "../../../contexts/LanguageContext";

type Props = {
    title?: string,
    mainHero: boolean,
}

const ReusableHero = ({ title, mainHero }: Props) => {
    const { t } = useLanguage();

    return (
        <div className="flex bg-[url('/herolotus.png')] bg-cover bg-center w-full h-[700px] text-white justify-center relative pt-12 pb-24 px-12">
            {mainHero ? (
                <div className="max-w-[900px] flex flex-col justify-center items-center">
                    <img src={"/images/thornlogo.png"} className="lg:max-w-[701px] h-auto" />
                    <p className="mb-12">
                        {t('hero.mainDescription')}
                    </p>
                    <DownloadButton />
                    <h1 className="">{t('hero.downloadTitle')}</h1>
                </div>
            ) : (
                <h1 className="flex items-center text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px]">{title}</h1>
            )}
        </div>
    )
}

export default ReusableHero;
