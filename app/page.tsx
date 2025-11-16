import { getPageBySlug } from "@/lib/wordpress";
import Header from "./components/header";
import FeaturedGrid from "./components/featured-grid";
import AroundTheMovement from "./around-the-movement";
import MajorSection from "./components/major-section";
import SimpleGrid from "./components/simple-grid";
import InformationalCard from "./components/card/informational-card";
import Footer from "./components/footer";
import OpinionCard from "./components/card/opinion-card";

export default async function Home() {
  let res = await getPageBySlug("home");
  if (!res.ok) {
    return "Welcome";
  }

  const data = res.data.dynamicPageBy.pageData.blocks;

  console.log(data);

  return (
    <div>
      <Header />
      <main className="mt-4">
        <FeaturedGrid articles={data?.featured?.nodes} />
        <AroundTheMovement />
        <MajorSection heading="Opinion">
          <SimpleGrid
            className="separator grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 border-foreground-light"
            articles={data.primary?.nodes}
            card={OpinionCard}
          />
        </MajorSection>
        <MajorSection heading="Information">
          <SimpleGrid
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            articles={data.secondary?.nodes}
            card={InformationalCard}
          />
        </MajorSection>
      </main>
      <Footer />
    </div>
  );
}
