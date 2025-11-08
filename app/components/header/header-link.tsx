import SusuLink from "../susu-link";
import { SusuLinkProps } from "../susu-link/susu-link";

export default function HeaderLink({ className="", ...props }: SusuLinkProps) {
  return (
    <SusuLink className={`text-primary-500 ${className}`} {...props}></SusuLink>
  );
}
