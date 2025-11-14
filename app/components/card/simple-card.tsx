import {
  getAuthorFromPost,
  getImageSrcFromPost,
  getLinkFromPost,
} from "@/lib/wordpress";
import { CardProps } from "./types";
import Link from "next/link";
import WordPressImage from "../wordpress-image";

export default function SimpleCard({ post, className = "" }: CardProps) {
  const url = getLinkFromPost(post);
  const img = getImageSrcFromPost(post);
  const author = getAuthorFromPost(post);
  return (
    <Link href={url}>
      <div className={`flex flex-row-reverse md:flex-col gap-1 ${className}`}>
        <div className="relative w-1/3 md:w-full h-32 md:h-40">
          <WordPressImage loading="lazy" objectFit="cover" img={img} fill />
        </div>

        <div className="flex-1 mt-1">
          <h2 className="font-serif font-bold mb-2">{post.title}</h2>
          <p className="font-serif">
            By {author.firstName} {author.lastName}
          </p>
        </div>
      </div>
    </Link>
  );
}
