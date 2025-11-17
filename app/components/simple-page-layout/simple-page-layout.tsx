import { ReactNode } from "react";
import Footer from "../footer";
import Header from "../header";
import Container from "../container";

export default function SimplePageLayout({
  title = "Page",
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header />
      <Container>
        <h1 className="font-bold mt-10 mb-10 text-xl">{title}</h1>
        {children}
      </Container>
      <Footer />
    </>
  );
}
