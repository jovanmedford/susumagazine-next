import { ReactNode } from "react";
import Container from "../container";

export default function MajorSection({
  heading = "New Section",
  children,
}: MajorSectionProps) {
  return (
    <Container as="section" className="mt-12">
      <hr className="h-0.5 bg-primary-300 mb-2 border-0" />
      <h2 className="text-2xl mb-12 font-bold">{heading}</h2>
      {children}
    </Container>
  );
}

export interface MajorSectionProps {
  heading: string;
  children: ReactNode;
}
