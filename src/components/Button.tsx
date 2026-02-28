import Link from "next/link";
import { ReactNode } from "react";

type CommonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "dark";
  className?: string;
};

function getClasses(variant: NonNullable<CommonProps["variant"]>) {
  switch (variant) {
    case "primary":
      return "bg-gradient-to-r from-indigo-600 to-sky-500 text-white hover:from-indigo-500 hover:to-sky-400 shadow-sm shadow-indigo-600/20";
    case "secondary":
      return "bg-white text-slate-900 ring-1 ring-black/10 hover:bg-slate-50";
    case "ghost":
      return "bg-transparent text-slate-900 ring-1 ring-black/10 hover:bg-black/5";
    case "dark":
      return "bg-slate-950 text-white hover:bg-slate-900";
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
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all",
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
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all disabled:cursor-not-allowed disabled:opacity-60",
        getClasses(variant),
        className ?? "",
      ].join(" ")}
    >
      {children}
    </button>
  );
}

