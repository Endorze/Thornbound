import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TransparentContainer({ children }: Props) {
  return (
    <div className="flex flex-col bg-white/10 backdrop-blur-md p-9 rounded-xl border border-white/20 text-gray-300">
      {children}
    </div>
  );
}
