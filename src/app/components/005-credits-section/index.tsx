import ReusableTextImage from "../006-Resusable-Text-Image";
import { CreditsItems } from "../../../data/dataFile"; 

const CreditsSection = () => {
  return (
    <section className="w-full bg-black/40 backdrop-blur-md text-white px-4 py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-12">
        {CreditsItems.map((item, index) => (
          <ReusableTextImage
            key={index}
            name={item.name}
            image={item.image || "/image.png"}
            description={item.description}
            reversed={false}

          />
        ))}
      </div>
    </section>
  );
};

export default CreditsSection;