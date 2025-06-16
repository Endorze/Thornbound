import ReusableTextImage from "../Resusable-Text-Image";
import H1Title from "../H1Title";

const Features = () => {
  return (
    <>
      <div className="text-center">
        <H1Title text="Features" size="60px" />
      </div>

        <ReusableTextImage
          title="Headline"
          text="Embark on a perilous journey through the cursed Thornbound realm, where ancient magic and dark forces intertwine. Master powerful abilities, forge alliances with mysterious beings, and uncover the secrets of a world teetering on the edge of destruction.

            Embark on a perilous journey through the cursed Thornbound realm, where ancient magic and dark forces intertwine. Master powerful abilities, forge alliances with mysterious beings, and uncover the secrets of a world teetering on the edge of destruction

            "
          image="/thornbound.png"
        />

        <ReusableTextImage
          title="Headline"
          text="Embark on a perilous journey through the cursed Thornbound realm, where ancient magic and dark forces intertwine. Master powerful abilities, forge alliances with mysterious beings, and uncover the secrets of a world teetering on the edge of destruction.

            Embark on a perilous journey through the cursed Thornbound realm, where ancient magic and dark forces intertwine. Master powerful abilities, forge alliances with mysterious beings, and uncover the secrets of a world teetering on the edge of destruction

            "
          image="/thornbound.png"
        />

        <ReusableTextImage
          title="Headline"
          text="Embark on a perilous journey through the cursed Thornbound realm, where ancient magic and dark forces intertwine. Master powerful abilities, forge alliances with mysterious beings, and uncover the secrets of a world teetering on the edge of destruction.

            Embark on a perilous journey through the cursed Thornbound realm, where ancient magic and dark forces intertwine. Master powerful abilities, forge alliances with mysterious beings, and uncover the secrets of a world teetering on the edge of destruction

            "
          image="/thornbound.png"
          reversed={true}
        />

    </>
  );
};

export default Features;
