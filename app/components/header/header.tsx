import Image from "next/image";
import Button from "../button";
import MenuButton from "../menu-button";
import SearchButton from "../search-button";
import HeaderNavbar from "./header-navbar";
import Container from "../container";

export default function Header() {
  return (
    <>
      <Container as="header" className="flex justify-between items-center mt-3">
        <div className="flex gap-4 flex-1">
          <MenuButton />
          <SearchButton />
        </div>
        <div className="flex-1 flex justify-center">
          <Image width={80} height={42} src="/SUSU.svg" alt="SUSU Logo" />
        </div>

        <div className="flex-1 flex justify-end">
          <Button variant="emphasized">Subscribe</Button>
        </div>
      </Container>
      <HeaderNavbar />
    </>
  );
}
