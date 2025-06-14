type Props = {
  text: string;
  size?: string; 
};

const ReusableH3Title = ({ text, size = "36px" }: Props) => {
  return (
    <h3
      style={{ fontSize: size }}
      className="text-white font-normal font-[Almendra]"
    >
      {text}
    </h3>
  );
};

export default ReusableH3Title;


