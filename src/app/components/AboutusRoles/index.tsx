import ReusableTextImage from "../006-Resusable-Text-Image";

import { DataFile } from "../../../data";

const AboutusRoles = () => {

  const targetNames = ["LEON", "ALEJANDRO", "SIMON", "GHAZALEH", "ILYA",  "EVANGELIA", "BARRY", "SHENGAN", "ERIC", "BRIAN", "DORUK", "GALINA", "JAMIE", "AIDA", "OLA", "LOTTEN"];
  const featuresData = DataFile.filter(({name}) => targetNames.includes(name));

  return (
    <>

      {featuresData.map((feature) => (
        <ReusableTextImage
          key={feature.name}
          title={feature.name}
          text={feature.description}
          image={feature.image || "/images/thornbound.png"}
        />
      ))}

    </>
  );
};

export default AboutusRoles;