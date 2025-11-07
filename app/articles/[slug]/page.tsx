import {
  getAuthorFromPost,
  getCategoryFromPost,
  getImageSrcFromPost,
  getPostBySlug,
} from "@/lib/wordpress";
import { FeaturedImage } from "./featured-image";
import Author from "./author";
import styles from "./article.module.css";
import HorizontalSeparator from "@/app/components/horizontal-separator";
import Container from "@/app/components/container";
import Header from "@/app/components/header/header";

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let res = await getPostBySlug(slug);

  if (!res.ok) {
    return (
      <div>
        <h1>An Error Occured</h1>
        <p>{res.message}</p>
      </div>
    );
  }

  const { postBy: post } = res.data;
  const category = getCategoryFromPost(post);
  const img = getImageSrcFromPost(post);
  const author = getAuthorFromPost(post);
  return (
    <section>
      <Header />
      <Container>
        <div className="flex flex-col gap-2">
          <span className="font-bold block text-primary-500">{category}</span>
          <h1 className="text-2xl font-serif font-bold">{post.title}</h1>
          <Author author={author} />
        </div>
        <HorizontalSeparator />
        <FeaturedImage img={img} />
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
    </section>
  );
}
