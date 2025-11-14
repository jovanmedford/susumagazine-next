import { ComponentProps } from "react";
import { WordPressImageData } from "@/lib/wordpress";
import Image from "next/image";

export default function WordPressImage({
  img,
  ...delegated
}: WordPressImageProps) {
  return (
    <Image
      src={img.sourceUrl}
      alt={img.altText ?? "Featured Image"}
      {...delegated}
    />
  );
}

export interface WordPressImageProps extends ImageWithoutAltSrc {
  img: WordPressImageData;
}

type ImageWithoutAltSrc = Omit<ComponentProps<typeof Image>, "src" | "alt">;
