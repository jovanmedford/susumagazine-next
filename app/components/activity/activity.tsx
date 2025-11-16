import Image from "next/image";
import Link from "next/link";

export default function Activity({ activity }: ActivityProps) {
  return (
    <Link href={activity.to}>
      <div className="flex gap-4 pr-4">
        <div className="relative w-20 h-20 round-full">
          <Image
            src={activity.imgSrc}
            alt={activity.imgAlt}
            fill
            objectFit="contain"
          />
        </div>
        <div>
          <h3 className="font-bold">{activity.title}</h3>
          <p className="font-serif">{activity.description}</p>
        </div>
      </div>
    </Link>
  );
}

export interface ActivityProps {
  activity: ActivityData;
}

export interface ActivityData {
  to: string;
  title: string;
  description: string;
  imgSrc: string;
  imgAlt: string;
}
