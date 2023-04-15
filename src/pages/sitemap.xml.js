import { getServerSideSitemap } from "next-sitemap";

export async function getServerSideProps(ctx) {
  const fields = [
    {
      loc: process.env.HOST, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];

  return getServerSideSitemap(ctx, fields);
}

export default function () {
  return;
}
