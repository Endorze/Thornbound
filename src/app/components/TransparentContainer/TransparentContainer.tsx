type TransparentContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const TransparentContainer = ({ children, className = "" }: TransparentContainerProps) => {
  return (
    <div className={`bg-white/10 p-6 rounded-xl flex flex-col ${className}`}>
      {children}
    </div>
  );
};

export default TransparentContainer;  



