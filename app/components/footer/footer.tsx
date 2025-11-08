import Container from "../container";
import { SusuLinkProps } from "../susu-link/susu-link";
import FooterLink from "./footer-link";
import { Copyright } from "lucide-react";

export default function Footer() {
  const copyrightYear = new Date().getFullYear();
  return (
    <footer className="bg-foreground text-background py-6 mt-12">
      <Container>
        <FooterSections />
        <div className="text-center mt-4">
          <span className="flex justify-center">
            SUSU Magazine {copyrightYear} <Copyright size={12} />
          </span>
        </div>
      </Container>
    </footer>
  );
}

function FooterSections() {
  return (
    <nav>
      {sections.map((section) => (
        <div key={section.title}>
          <h2 className="font-bold">{section.title}</h2>
          <SectionLinks links={section.links} />
        </div>
      ))}
    </nav>
  );
}

function SectionLinks({ links }: { links: SusuLinkProps[] }) {
  return (
    <ul className="flex flex-col">
      {links.map((link, index) => (
        <li key={index}>
          <FooterLink href={link.href}>{link.children}</FooterLink>
        </li>
      ))}
    </ul>
  );
}

const companyLinks: SusuLinkProps[] = [
  { href: "/about", children: "About Us" },
  { href: "/magazine-library", children: "Magazine Library" },
  { href: "/contact-us", children: "Contact Us" },
];

const sections: Section[] = [{ title: "Company", links: companyLinks }];

interface Section {
  title: string;
  links: SusuLinkProps[];
}
