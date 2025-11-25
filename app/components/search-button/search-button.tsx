import { Search } from "lucide-react";
import Button from "../button";
import { ButtonProps } from "../button/button";

export default function SearchButton({ ...delegated }: ButtonProps) {
  return (
    <Button {...delegated} icon={Search}>
      Search
    </Button>
  );
}
