import { getAuthorFromPost, getLinkFromPost } from "@/lib/wordpress";
import Link from "next/link";
import { CardProps } from "./types";

export default function InformationalCard({ post, className = "" }: CardProps) {
  const url = getLinkFromPost(post);
  const author = getAuthorFromPost(post);
  return (
    <Link href={url}>
      <div
        className={`${className} flex flex-col justify-between p-6 h-50 md:h-80 bg-secondary-300 rounded`}
      >
        <h2 className="font-serif text-xl font-bold">
          {post.title}
        </h2>
        <span className="font-serif">
          By {author.firstName} {author.lastName}
        </span>
      </div>
    </Link>
  );
}
