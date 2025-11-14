import {
  getCategoryFromPost,
  getExcerptFromPost,
  getLinkFromPost,
} from "@/lib/wordpress";
import Link from "next/link";
import { CardProps } from "./types";

export default function EditorialCard({ post, className = "" }: CardProps) {
  const url = getLinkFromPost(post);
  const excerpt = getExcerptFromPost(post);
  const category = getCategoryFromPost(post);
  return (
    <Link href={url} className={`${className} flex flex-col gap-0.5`}>
      <span className="text-primary-500">{category}</span>
      <h2 className="font-serif text-xl md:text-2xl font-bold">{post.title}</h2>
      <p className="font-serif">{excerpt}</p>
    </Link>
  );
}
