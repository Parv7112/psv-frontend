import Link from "next/link";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark" | "outlineLight";
  className?: string;
};

function getClasses(variant: NonNullable<CommonProps["variant"]>) {
  switch (variant) {
    case "primary":
      return "bg-amber-400 text-zinc-950 shadow-lg shadow-amber-500/20 hover:bg-amber-300 hover:shadow-xl hover:shadow-amber-500/25 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98]";
    case "secondary":
      return "bg-white text-zinc-900 ring-2 ring-zinc-900/10 shadow-sm hover:bg-zinc-50 hover:ring-zinc-900/20 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:scale-[0.98]";
    case "ghost":
      return "bg-transparent text-zinc-900 ring-2 ring-transparent hover:bg-zinc-900/5 hover:-translate-y-0.5 active:translate-y-0";
    case "dark":
      return "bg-zinc-950 text-white shadow-lg hover:bg-zinc-900 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 active:scale-[0.98]";
    case "outlineLight":
      return "border-2 border-white/40 bg-white/5 text-white backdrop-blur-sm hover:bg-white/15 hover:border-white/60 active:scale-[0.98]";
  }
}

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-200 ease-out",
        getClasses(variant),
        className ?? "",
      ].join(" ")}
    >
      {children}
    </Link>
  );
}

export function Button({
  type = "button",
  children,
  variant = "primary",
  className,
  disabled,
  onClick,
}: CommonProps & {
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={[
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold tracking-wide transition-all duration-200 ease-out disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0",
        getClasses(variant),
        className ?? "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
