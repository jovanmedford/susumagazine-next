import {
  getExcerptFromPost,
  getImageSrcFromPost,
  getLinkFromPost,
} from "@/lib/wordpress";
import Link from "next/link";
import FeaturedImage from "../wordpress-image";
import { CardProps } from "./types";

export default function FeaturedCard({ post, className = "" }: CardProps) {
  const url = getLinkFromPost(post);
  const img = getImageSrcFromPost(post);
  const excerpt = getExcerptFromPost(post);
  return (
    <Link href={url} className={`flex flex-col gap-2 ${className}`}>
      <FeaturedImage img={img} width={583} height={313} />
      <h2 className="font-serif text-2xl md:text-3xl font-bold">
        {post.title}
      </h2>
      <p className="font-serif">{excerpt}</p>
    </Link>
  );
}
