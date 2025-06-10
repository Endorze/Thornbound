'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useSwiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

type ImageData = {
  src: string;
  alt: string;
};

type Props = {
  images: ImageData[];
  title: string,
  text1: string,
  text2: string,
};

const ImageSlideshow = ({ images, title, text1, text2 }: Props) => {
  return (
    <div className="w-full max-w-5xl">
        <div className='flex justify-center w-full'>
            <h2 style={{fontSize: "72px"}}>{title}</h2>
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
        {images.map((image, index) => (
          <SwiperSlide key={index} className="flex! justify-center">
            <img
              src={image.src}
              alt={image.alt}
              className="rounded-xl w-full object-cover h-[200px] m-auto"
            />
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
};

export default ImageSlideshow;
