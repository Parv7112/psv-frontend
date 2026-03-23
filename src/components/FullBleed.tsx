import { ReactNode } from "react";

/** Breaks out of the centered page column to full viewport width. */
export function FullBleed({ children }: { children: ReactNode }) {
  return (
    <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw] overflow-x-hidden">
      {children}
    </div>
  );
}
