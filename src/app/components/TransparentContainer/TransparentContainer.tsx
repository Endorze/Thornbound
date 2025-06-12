type TransparentContainerProps = {
  title?: string;
  paragraph?: string;
  imageSrc?: string; // optional image
  className?: string;
  children?: React.ReactNode;
};

const TransparentContainer = ({
  title,
  paragraph,
  imageSrc,
  className = "",
  children,
}: TransparentContainerProps) => {
  return (
    <div
      className={`bg-white/10 p-6 rounded-xl flex flex-col gap-4 ${className}`}
    >
      {title && <h2 className="text-[#0DEFFF] text-2xl font-semibold">{title}</h2>}

      {paragraph && (
        <p className="text-[#D1D5DB] text-sm leading-relaxed">
          {paragraph}
        </p>
      )}

      {imageSrc && (
        <div className="w-full h-64 bg-[#1F3657] rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={imageSrc}
            alt="Illustration"
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Optional custom children */}
      {children}
    </div>
  );
};

export default TransparentContainer;
