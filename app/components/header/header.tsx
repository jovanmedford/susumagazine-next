import Image from "next/image";
import Button from "../button";
import MenuButton from "../menu-button";
import HeaderNavbar from "./header-navbar";
import Container from "../container";
import Link from "next/link";
import SearchPopover from "../search-popover";

export default function Header() {
  return (
    <>
      <Container as="header" className="flex justify-between items-center mt-3">
        <div className="flex gap-4 flex-1">
          <MenuButton />
          <SearchPopover />
        </div>
        <Link href="/" className="flex-1 flex justify-center">
          <Image width={80} height={42} src="/SUSU.svg" alt="SUSU Logo" />
        </Link>

        <div className="flex-1 flex justify-end">
          <Button variant="emphasized">Subscribe</Button>
        </div>
      </Container>
      <HeaderNavbar />
    </>
  );
}
