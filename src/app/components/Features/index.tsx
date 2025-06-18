import ReusableTextImage from "../Resusable-Text-Image";
import { FeaturesItems   } from "../../../data/dataFile";

const Features = () => {
  // Get the features data (Spells, Stealth, Puzzles) from DataFile
  const featuresData = FeaturesItems.filter(({name}) => name === "Spells" || name === "Stealth" || name === "Puzzles");

  return (
    <>
      <div className="text-center">
        <h2 className="text-5xl md:text-7xl font-bold">Features</h2>
      </div>

      {featuresData.map((feature, index) => (
        <ReusableTextImage
          key={feature.name}
          title={feature.name}
          text={feature.description}
          image={feature.image || "/images/angel.png"}
          reversed={index === 2}
        />
      ))}

    </>
  );
};

export default Features;
