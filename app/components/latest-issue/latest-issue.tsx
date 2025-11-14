import Image from "next/image";

export default function LatestIssue() {
  return (
    <a href="https://online.fliphtml5.com/bkdcf/ygwe/#p=1">
      <div className="py-10 px-2" style={{ background: "#DCE7ED" }}>
        <div className="text-center font-serif">
          <Image
            className="mx-auto shadow-xl"
            src="/latest-issue.webp"
            alt="SUSU 2025 Issue"
            width={109}
            height={152}
          ></Image>
          <h2 className="font-bold text-xl mt-10">SUSU 2025 is here.</h2>
          <p className="mt-4">See what we have in store for you this year</p>
        </div>
        <div className="text-center mt-15">
          <p>Read the latest edition</p>
        </div>
      </div>
    </a>
  );
}
