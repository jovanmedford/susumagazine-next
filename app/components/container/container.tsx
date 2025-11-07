import { ElementType, PropsWithChildren } from "react";

export default function Container({
  as: ContainerTag = "div",
  className,
  children,
}: ContainerProps) {
  return (
    <ContainerTag
      className={`mx-6 lg:max-w-4xl lg:mx-auto xl:max-w-5xl ${className}`}
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
