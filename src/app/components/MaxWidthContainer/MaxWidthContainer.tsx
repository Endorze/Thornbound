const MaxWidthContainer = ({ children }: { children: React.ReactNode }) => (
  <div className="relative max-w-[1200px] w-full mx-auto p-4">
    {children}
  </div>
);

export default MaxWidthContainer;