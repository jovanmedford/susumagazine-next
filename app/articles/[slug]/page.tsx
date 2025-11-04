import {
  getAuthorFromPost,
  getCategoryFromPost,
  getImageSrcFromPost,
  getPostBySlug,
} from "@/lib/wordpress";
import { FeaturedImage } from "./featured-image";
import Author from "./author";

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
    <div>
      <div className="flex flex-col gap-2">
        <span className="font-bold block">{category}</span>
        <h1 className="text-2xl font-serif font-bold">{post.title}</h1>
        <Author author={author} />
      </div>
      <FeaturedImage img={img} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
