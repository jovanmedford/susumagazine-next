import { getAuthorFromPost, getLinkFromPost } from "@/lib/wordpress";
import Link from "next/link";
import { CardProps } from "./types";
import WordPressImage from "../wordpress-image";

export default function OpinionCard({ post, className = "" }: CardProps) {
  const url = getLinkFromPost(post);
  const author = getAuthorFromPost(post);
  return (
    <Link href={url}>
      <div
        className={`${className} flex flex-col gap-0.5 h-60 md:h-80 justify-between`}
      >
        <div>
          <h3 className="font-serif text-xl h-24 md:text-2xl font-bold">
            {post.title}
          </h3>
          <span className="font-bold text-primary-500 font-serif text-2xl">
            {author.firstName} {author.lastName}
          </span>
        </div>
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
