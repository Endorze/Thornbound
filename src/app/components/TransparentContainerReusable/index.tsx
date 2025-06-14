import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function TransparentContainerReusable({ children, className }: Props) {
  return (
    <div
      className={`w-full max-w-4xl bg-black/0 rounded-xl p-10 border border-white/20 shadow-xl ${className}`}
    >
      {children}
    </div>
  );
}
