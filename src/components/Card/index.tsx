import { ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export const Card = ({ children }: CardProps) => {
  return (
  <div 
    className="bg-white dark:bg-neutral-800 rounded-lg shadow-md p-4 w-3/5 mx-auto"
  >
    {children}
  </div>
  );
};