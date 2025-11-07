import Link from "next/link";
import { ComponentProps } from "react";

export default function SusuLink({ href, children }: SusuLinkProps) {
  return (
    <Link href={href} className="text-primary-500 text-nowrap">
      {children}
    </Link>
  );
}

export interface SusuLinkProps extends ComponentProps<typeof Link> {}
