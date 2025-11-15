import {
  getAuthorFromPost,
  getLinkFromPost,
} from "@/lib/wordpress";
import Link from "next/link";
import { CardProps } from "./types";
import WordPressImage from "../wordpress-image";

export default function OpinionCard({ post, className = "" }: CardProps) {
  const url = getLinkFromPost(post)
  const author = getAuthorFromPost(post);
  return (
    <Link href={url}>
      <div
        className={`${className} flex flex-col gap-0.5 h-50 md:h-60 justify-between`}
      >
        <h3 className="font-serif text-xl md:text-2xl font-bold">
          {post.title}
        </h3>
        <div className="flex justify-end pr-4">
          <WordPressImage
            className={"rounded-full"}
            img={author.avatar}
            width={100}
            height={100}
          />
        </div>
      </div>
    </Link>
  );
}
