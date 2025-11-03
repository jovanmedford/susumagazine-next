import { getPostBySlug } from "@/lib/wordpress";

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

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
}
