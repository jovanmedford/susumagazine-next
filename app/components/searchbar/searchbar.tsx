import { useState, FormEvent, ComponentProps } from "react";
import Button from "../button";
import styles from "./searchbar.module.css";
import { Search, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Searchbar({ ...delegated }: SearchbarProps) {
  const [value, setValue] = useState("");
  const router = useRouter();

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (value) {
      router.push(`/search?query=${value}`);
    }
  }

  return (
    <div {...delegated} className={styles.searchbar}>
      <form
        onSubmit={handleSubmit}
        className="flex border focus-within:outline-1 pl-2"
      >
        <input
          id="search"
          name="search"
          placeholder="Search for stories or topics"
          className="focus:outline-0"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <Button
          type="reset"
          className="py-4 px-3"
          icon={X}
          onClick={() => setValue("")}
        ></Button>
        <Button className="py-4 px-3" icon={Search} type="submit"></Button>
      </form>
    </div>
  );
}

interface SearchbarProps extends ComponentProps<"div"> {}
