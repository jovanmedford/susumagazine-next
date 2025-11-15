import { ElementType, PropsWithChildren } from "react";

export default function Container({
  as: ContainerTag = "div",
  className = "",
  children,
}: ContainerProps) {
  return (
    <ContainerTag
      className={`mx-6 lg:max-w-5xl lg:mx-auto xl:max-w-6xl 2xl:max-w-7xl ${className}`}
    >
      {children}
    </ContainerTag>
  );
}

interface ContainerProps
  extends PropsWithChildren<{
    as?: ElementType;
    className?: string;
  }> {}
