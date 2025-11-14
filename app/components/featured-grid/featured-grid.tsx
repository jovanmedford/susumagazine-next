import { WordPressPost } from "@/lib/wordpress";
import Container from "../container";
import styles from "./section.module.css";
import FeaturedCard from "../card/featured-card";
import EditorialCard from "../card/editorial-card";
import SimpleCard from "../card/simple-card";
import LatestIssue from "../latest-issue";

export default function FeaturedGrid({
  articles,
}: {
  articles: WordPressPost[];
}) {
  let featured = articles[0];
  let secondary = articles.slice(1, 3);
  let tertiary = articles.slice(3);

  return (
    <Container>
      <div className={styles["featured-container"]}>
        <div className={`${styles["featured-post-container"]} pb-5`}>
          <FeaturedCard post={featured} />
        </div>
        <div className={`${styles["side"]} md:h-full pb-5`}>
          <LatestIssue />
        </div>
        <div
          className={`${styles["secondary-post-container"]} border-foreground-light lg:border-r lg:border-l`}
        >
          <SecondarySection posts={secondary} />
        </div>
        <div className={`${styles["tertiary-post-container"]}`}>
          <TertiarySection posts={tertiary} />
        </div>
      </div>
    </Container>
  );
}

function SecondarySection({ posts }: { posts: WordPressPost[] }) {
  return (
    <ul
      className="flex flex-col border-foreground-light border-t border-b
                  md:grid md:grid-cols-2 md:gap-10 
                  lg:flex lg:gap-0 lg:flex-col lg:border-t-0 lg:border-b-0"
    >
      {posts.map((post) => (
        <li
          key={post.id}
          className={`w-full md:flex-1  ${styles["secondary-separator"]}`}
        >
          <EditorialCard
            className="py-5 lg:py-0 lg:px-5 lg:pt-0"
            post={post}
          ></EditorialCard>
        </li>
      ))}
    </ul>
  );
}

function TertiarySection({ posts }: { posts: WordPressPost[] }) {
  return (
    <ul className="flex flex-col gap-2 md:grid md:grid-cols-3 md:gap-10 lg:border-t border-foreground-light">
      {posts.map((post) => (
        <li key={post.id} className={styles["tertiary-separator"]}>
          <SimpleCard post={post} className="pt-5"></SimpleCard>
        </li>
      ))}
    </ul>
  );
}
