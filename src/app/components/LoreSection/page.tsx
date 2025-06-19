'use client';

import Image from "next/image";
import TransparentContainerReusable from "@/app/components/TransparentContainerReusable";

export default function LoreSection() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
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
      </TransparentContainerReusable>
    </div>
  );
}
