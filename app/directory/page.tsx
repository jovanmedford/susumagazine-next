import directoryListings from "@/data/directory-data";
import SimplePageLayout from "../components/simple-page-layout";
import { DirectoryListing } from "../types";

export default function Directory() {
  return (
    <SimplePageLayout title="Barbados Credit Union Directory">
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {directoryListings.map((listing) => (
          <DirectoryListItem
            listing={listing}
            key={listing.name}
          ></DirectoryListItem>
        ))}
      </section>
    </SimplePageLayout>
  );
}

function DirectoryListItem({ listing }: { listing: DirectoryListing }) {
  return (
    <article className="opacity-80 hover:opacity-100">
      <h3 className="font-bold">{listing.name}</h3>
      <address>
        {listing.addressLineOne} <br />
        {listing.addressLineTwo} <br />
        <p>
          <a
            className="text-primary-500"
            href={`tel:+1246${listing.phoneNumber.replaceAll("-", "")}`}
          >
            {listing.phoneNumber}
          </a>
          <br />
          <a className="text-primary-500" href={`mailto:${listing.email}`}>
            {listing.email}
          </a>
        </p>
      </address>
    </article>
  );
}
