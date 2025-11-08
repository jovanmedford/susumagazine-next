import Link from "next/link";
import { ComponentProps } from "react";

export default function SusuLink({
  href,
  className = "",
  children,
}: SusuLinkProps) {
  return (
    <Link href={href} className={`text-nowrap hover:border-b-2 ${className}`}>
      {children}
    </Link>
  );
}

export interface SusuLinkProps extends ComponentProps<typeof Link> {}
