'use client';

import Image from "next/image";
import { CreditsItems } from "../../../data/dataFile"; 

const CreditsSection = () => {
  return (
    <section className="relative w-full bg-cover bg-center text-white py-24 px-6" style={{ backgroundImage: "url('/images/flower-bg.jpg')" }}>
      <div className="absolute inset-0 bg-black/50 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto space-y-16">
        {CreditsItems.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row items-center justify-between bg-black/60 backdrop-blur-md border border-white rounded-xl shadow-lg p-8 gap-8"
          >
            <div className="flex-1 text-gray-300 font-vollkorn text-base leading-relaxed text-justify">
              <p className="text-xl text-white font-semibold mb-4">{item.name}</p>
              <p>{item.description}</p>
            </div>

            <div className="flex justify-center items-center w-full md:w-[300px] h-[300px] bg-white/10 border border-white rounded-lg overflow-hidden">
              <Image
                src="/images/barry.png"
                alt={item.name}
                width={300}
                height={300}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CreditsSection;
