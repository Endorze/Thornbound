'use client';

import ReusableTextImage from "../Resusable-Text-Image";
import { CreditsItems } from "../../../data/dataFile"; 

const CreditsSection = () => {
  const descriptionParagraphs = [
    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
    "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?",
    "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
  ];

  const combinedText = descriptionParagraphs.join("\n\n");  

  return (
    <section className="w-full bg-black/40 backdrop-blur-md text-white px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {CreditsItems.map((item, index) => (
          <ReusableTextImage
            key={index}
            title={item.name}
            image={item.image || "/image.png"}
            text={item.description}
            reversed={index % 2 !== 0}

          />
        ))}
      </div>
    </section>
  );
};

export default CreditsSection;
