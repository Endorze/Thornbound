
import Image from "next/image";
'use client';

import Image from "next/image";
import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";

export default function LoreSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="w-full flex flex-col items-center justify-center px-6 py-12 bg-black bg-opacity-50 rounded-xl shadow-lg border border-white">

        <p className="text-lg mb-8 text-gray-400 leading-relaxed">
          In a cabin deep in a forest you find Zerim, a once renowned adventuring mage whose granddaughter Elira has fallen gravely ill. With no remedy working he embarks on a final journey to find the rare healing flower Virellis, located deep within the walls of Castle Kravia. With its design built around the flower and its inhabitants compelled to protect it, Zerim will need to use his rusty skills to get out alive and save his granddaughter Elira.

      <TransparentContainerReusable className="p-10 shadow-lg text-white" opacity={100}>
        <p className="mb-8 text-gray-300 leading-relaxed">
          In a cabin deep in a forest you find Zerim...

        </p>

        <div className="w-full max-w-md rounded-lg overflow-hidden shadow-xl">
          <Image
            src="/image.png"
            alt="Lore illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
          />
        </div>

      </div>

      </TransparentContainerReusable>

    </div>
  );
}
