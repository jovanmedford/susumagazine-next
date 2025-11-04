import {
  getCategoryFromPost,
  getImageSrcFromPost,
  getPostBySlug,
} from "@/lib/wordpress";
import { FeaturedImage } from "./featured-image";

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
  return (
    <div>
      <span className="font-bold my-2 block">{category}</span>
      <h1 className="text-2xl font-serif font-bold">{post.title}</h1>
      <FeaturedImage img={img} />
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
