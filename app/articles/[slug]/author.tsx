import { WordPressAuthor } from "@/lib/wordpress";

export default function Author({ author }: { author: WordPressAuthor }) {
  if (!author.firstName) {
    return;
  }

  return (
    <div>
      <span>
        By{" "}
        <span className="font-bold">
          {author.firstName} {author.lastName}
        </span>
      </span>
    </div>
  );
}
