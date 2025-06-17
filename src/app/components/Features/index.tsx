import ReusableTextImage from "../006-Resusable-Text-Image";
import H1Title from "../H1Title";
import { DataFile } from "../../../data/images";

const Features = () => {
  // Get the features data (Spells, Stealth, Puzzles) from DataFile
  const featuresData = DataFile.filter(({name}) => name === "Spells" || name === "Stealth" || name === "Puzzles");

  return (
    <>
      <div className="text-center">
        <H1Title text="Features" size="60px" />
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
