import {
  getAuthorFromPost,
  getCategoryFromPost,
  getExcerptFromPost,
  getImageSrcFromPost,
  getPostBySlug,
} from "@/lib/wordpress";
import FeaturedImage from "@/app/components/wordpress-image";
import Author from "./author";
import styles from "./article.module.css";
import HorizontalSeparator from "@/app/components/horizontal-separator";
import Container from "@/app/components/container";
import Header from "@/app/components/header/header";
import Footer from "@/app/components/footer";
import { Metadata } from "next";
import site from "@/site";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  let res = await getPostBySlug(slug);

  if (!res.ok || !res.data?.postBy) {
    notFound();
  }

  const { postBy: post } = res.data;
  const title = post.title ?? site.title;
  const description = getExcerptFromPost(post);
  const author = getAuthorFromPost(post);
  const img = getImageSrcFromPost(post);
  const canonical = `${site.url}/articles/${slug}`;

  return {
    metadataBase: new URL(site.url),
    title,
    description,
    publisher: "SUSU Magazine",
    authors: [{ name: `${author.firstName} ${author.lastName}` }],
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      images: [{ url: img.sourceUrl, width: 800, height: 600 }],
    },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  let res = await getPostBySlug(slug);

  if (!res.ok || !res.data?.postBy) {
    notFound();
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
        <FeaturedImage img={img} loading="eager" width={1600} height={900} />
        <div
          className={styles.article}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </Container>
      <Footer />
    </section>
  );
}
