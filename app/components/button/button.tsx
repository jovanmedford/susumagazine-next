import { ComponentProps, FC } from "react";
import styles from "./button.module.css";

export default function Button({
  variant = "default",
  icon: Icon,
  children,
  className,
  ...delegated
}: ButtonProps) {
  const variantClass = variant === "emphasized" ? styles["btn-emphasized"] : "";
  const hideContent = Icon ? "hidden md:block" : "";
  return (
    <button
      className={`py-2 ${variantClass} hover:cursor-pointer hover:opacity-75 font-bold flex gap-1 items-center text-sm md:text-md ${className}`}
      {...delegated}
    >
      {Icon ? <Icon size={iconSize["normal"]}></Icon> : null}
      <span className={hideContent}>{children}</span>
    </button>
  );
}

export interface ButtonProps extends ComponentProps<"button"> {
  icon?: Icon;
  variant?: "emphasized" | "default";
}

const iconSize = {
  normal: 19.2,
};

type Icon = FC<{ size: number }>;
