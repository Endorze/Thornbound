'use client';

import Image from "next/image";

const CreditsSection = () => {
  return (
    <section className="w-full bg-black/40 backdrop-blur-md text-white px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        <div className="w-full lg:w-1/2 text-base md:text-lg leading-relaxed font-vollkorn text-justify space-y-6">
          <p>
            In addition to the assets created by our artists, assets from online marketplaces such as Fab and CGtrader were used to further assist our artists, in regards to both characters and props.
          </p>
          <p>

            These assets sourced from the marketplace have been used in a way where the artists alter the meshes or textures in order to fit the art direction of the game and to keep the involvement of the artists throughout the whole production process.
          </p>
          
        </div>

        <div className="w-full lg:w-[532px] flex justify-center">
          <Image
            src="/images/barry.png"
            alt="Credits illustration"
            width={532}
            height={375}
            className="object-contain w-full h-auto rounded-xl shadow-lg"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default CreditsSection;
