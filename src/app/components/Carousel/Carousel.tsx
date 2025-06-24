'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { useLanguage } from '../../../contexts/LanguageContext';

import 'swiper/css';
import 'swiper/css/navigation';

// type ImageData = {
//   src: string;
//   alt: string;
// };

type Props = {
  images: string[];
  title: string,
  text1: string,
  text2: string,
};

const ImageCarousel = ({ images, title, text1, text2 }: Props) => {
  const { t } = useLanguage();

  return (
    <>
      <div className="hidden lg:flex flex-col w-full max-w-5xl pt-12 pb-12">
        <div className='flex justify-center w-full'>
          <h2 style={{ fontSize: "72px" }}>{title}</h2>
        </div>
        <div className='flex flex-col gap-6'>
          <div>
            {text1}
          </div>
          <div>
            {text2}
          </div>
        </div>

        <Swiper
          centeredSlides
          slidesPerView={3}
          spaceBetween={30}
          navigation
          loop
          modules={[Navigation]}
          className="w-full h-[400px]"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index} className="flex! justify-center">
              <img
                src={src}
                alt={`${title} ${t('ui.image')} ${index + 1}`}
                className="rounded-xl w-full object-cover h-[200px] m-auto"
              />
            </SwiperSlide>
          ))}

        </Swiper>
      </div>

      <div className="flex flex-col w-full max-w-5xl px-4 justify-center text-center pt-4 pb-12 lg:hidden">
        <div className="flex justify-center w-full">
          <h2 style={{ fontSize: "48px" }}>{title}</h2>
        </div>
        <div className="flex flex-col gap-6">
          <div>{text1}</div>
          <div>{text2}</div>
        </div>

        <div className="w-full flex justify-center mt-6">
          <Swiper
            centeredSlides
            slidesPerView={1}
            loop
            modules={[Pagination]}
            className="w-full max-w-[400px]"
          >
             {images.map((src, index) => (
            <SwiperSlide key={index} className="flex! justify-center">
              <img
                src={src}
                alt={`${title} ${t('ui.image')} ${index + 1}`}
                className="rounded-xl w-full object-cover h-[200px] m-auto"
              />
            </SwiperSlide>
          ))}

        </Swiper>
        </div>
      </div>

    </>
  );
};

export default ImageCarousel;
