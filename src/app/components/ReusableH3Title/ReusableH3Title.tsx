

interface ReusableH3TitleProps {
  children: React.ReactNode;
  className?: string;
}

const ReusableH3Title = ({ children, className = "" }: ReusableH3TitleProps) => {
  return (
    <h3 className={`text-[36px] font-normal font-[Almendra] text-white ${className}`}>
      {children}
    </h3>
  );
};

export default ReusableH3Title;