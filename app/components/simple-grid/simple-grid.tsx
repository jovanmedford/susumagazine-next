import { WordPressPost } from "@/lib/wordpress";
import { FC } from "react";
import { CardProps } from "../card";

export default function SimpleGrid({
  articles,
  card: Card,
  className = "",
}: {
  className?: string;
  articles: WordPressPost[];
  card: FC<CardProps>;
}) {
  return (
    <ul className={className}>
      {articles.map((article) => (
        <li key={article.id}>
          <Card post={article} />
        </li>
      ))}
    </ul>
  );
}
