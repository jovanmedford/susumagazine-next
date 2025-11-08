import Container from "../container";
import HorizontalSeparator from "../horizontal-separator";
import HeaderLink from "./header-link";

export default function HeaderNavbar() {
  return (
    <>
      <HorizontalSeparator />
      <Container as="nav">
        <ul className="w-full justify-center-safe overflow-auto flex gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <HeaderLink href={link.href}>{link.label}</HeaderLink>
            </li>
          ))}
        </ul>
      </Container>
      <HorizontalSeparator />
    </>
  );
}

const links: LinkData[] = [
  {
    href: "#",
    label: "Corporate Governance",
  },
  {
    href: "#",
    label: "FSC",
  },
  {
    href: "#",
    label: "BCCUL",
  },
  {
    href: "#",
    label: "Finance",
  },
  {
    href: "#",
    label: "Education",
  },
  {
    href: "#",
    label: "Small Business",
  },
];

interface LinkData {
  href: string;
  label: string;
}
