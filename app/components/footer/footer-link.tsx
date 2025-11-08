import SusuLink from "../susu-link";
import { SusuLinkProps } from "../susu-link/susu-link";

export default function FooterLink({
  className = "",
  ...props
}: SusuLinkProps) {
  return (
    <SusuLink className={`text-background ${className}`} {...props}></SusuLink>
  );
}
