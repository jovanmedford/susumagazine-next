import Container from "../container";
import HorizontalSeparator from "../horizontal-separator";
import SusuLink from "../susu-link";

export default function HeaderNavbar() {
  return (
    <>
      <HorizontalSeparator />
      <Container as="nav" className="flex justify-center overflow-auto">
        <ol className="flex gap-4">
          {links.map((link) => (
            <li key={link.label}>
              <SusuLink href={link.href}>{link.label}</SusuLink>
            </li>
          ))}
        </ol>
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
