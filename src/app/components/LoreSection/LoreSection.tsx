'use client';

import Image from "next/image";
import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";

export default function LoreSection() {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <div className="max-w-4xl mx-auto">
        <TransparentContainerReusable className="p-6 sm:p-10 shadow-lg text-white flex flex-col items-center gap-8" opacity={100}>

          {/* Top paragraph */}
          <div className="text-gray-300 text-base sm:text-lg leading-relaxed text-center max-w-2xl">
            <p>
              In a cabin deep in a forest you find Zerim, a once renowned adventuring mage whose granddaughter Elira has fallen gravely ill. 
              With no remedy working, he embarks on a final journey to find the rare healing flower Virellis, located deep within the walls of Castle Kravia. 
              With its design built around the flower and its inhabitants compelled to protect it, Zerim will need to use his rusty skills to get out alive 
              and save his granddaughter Elira.
            </p>
          </div>

          {/* Image centered below */}
          <div className="w-full max-w-xl rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/images/general.png"
              alt="Zerim's story illustration"
              width={800}
              height={900}
              className="w-full h-auto object-cover rounded-md"
              priority
            />
          </div>

        </TransparentContainerReusable>
      </div>
    </div>
  );
}
