import {
  getAllMagazines,
  getImageSrcFromPost,
  WordPressMagazine,
} from "@/lib/wordpress";
import SimplePageLayout from "../components/simple-page-layout";
import WordPressImage from "../components/wordpress-image";

export default async function MagazineLibrary() {
  const res = await getAllMagazines();

  if (!res.ok) {
    return "Loading magazines";
  }

  const data = res.data.magazines.nodes;

  return (
    <SimplePageLayout title="SUSU Magazine Library">
      <section className="grid grid-cols-3 gap-5">
        {data.map((magazine) => (
          <Magazine key={magazine.magazineDetails.year} magazine={magazine} />
        ))}
      </section>
    </SimplePageLayout>
  );
}

function Magazine({ magazine }: { magazine: WordPressMagazine }) {
  const img = getImageSrcFromPost(magazine);

  return (
    <a href={magazine.magazineDetails.link}>
      <div className="w-60">
        <div className="w-60 h-80 relative">
          <WordPressImage img={img} fill objectFit="cover" />
        </div>
        <h3 className="text-center font-bold text-xl mt-4 text-primary-500">
          {magazine.magazineDetails.year}
        </h3>

      </div>
    </a>
  );
}
