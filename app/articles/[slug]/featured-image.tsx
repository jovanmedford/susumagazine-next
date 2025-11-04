import { WordPressImage } from "@/lib/wordpress";
import Image from "next/image";

export function FeaturedImage({ img }: { img: WordPressImage }) {
  return (
    <Image
      loading="eager"
      src={img.sourceUrl}
      alt={img.altText}
      width={1600}
      height={900}
    />
  );
}
