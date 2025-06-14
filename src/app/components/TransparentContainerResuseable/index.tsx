import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function TransparentContainerResuseable({ children }: Props) {
  return (
    <div className="w-full max-w-4xl bg-black/40 backdrop-blur-md rounded-xl p-10 border border-white/20 shadow-xl">
      {children}
    </div>
  );
}