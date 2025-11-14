import { getPageBySlug } from "@/lib/wordpress";
import Header from "./components/header";
import FeaturedGrid from "./components/featured-grid";
import AroundTheMovement from "./around-the-movement";

export default async function Home() {
  let res = await getPageBySlug("home");
  if (!res.ok) {
    return "Welcome";
  }

  const data = res.data.dynamicPageBy.pageData.blocks;

  return (
    <div>
      <Header />
      <main className="mt-4">
        <FeaturedGrid articles={data?.featured?.nodes} />
        <AroundTheMovement />
      </main>
    </div>
  );
}
