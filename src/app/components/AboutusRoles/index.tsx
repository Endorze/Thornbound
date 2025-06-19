import ReusableTextImage from "../006-Resusable-Text-Image";

import { IndividualsData } from "../../../data/dataFile";

const AboutusRoles = () => {
  return (
    <>
      {IndividualsData.map((feature) => (
        <ReusableTextImage
          key={feature.name}
          name={feature.name}
          description={feature.description}
          image={feature.image || "/images/thornbound.png"}
        />
      ))}

    </>
  );
};

export default AboutusRoles;