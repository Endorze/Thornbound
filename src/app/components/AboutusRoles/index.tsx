import ReusableTextImage from "../006-Resusable-Text-Image";

import { IndividualsData } from "../../../data/dataFile";

const AboutusRoles = () => {

  const targetNames = ["LEON", "ALEJANDRO", "SIMON", "GHAZALEH", "ILYA", "EVANGELIA", "BARRY", "SHENGAN", "ERIC", "BRIAN", "DORUK", "GALINA", "JAMIE", "AIDA", "OLA", "LOTTEN"];
  const featuresData = IndividualsData.filter(({ name }) => targetNames.includes(name));

  return (
    <>

      {featuresData.map((feature) => (
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