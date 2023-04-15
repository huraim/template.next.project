module.exports = {
  siteUrl: process.env.HOST,
  generateRobotsTxt: true, // default: false, true 라고 설정해야 robots.txt 생성
  exclude: ["/sitemap.xml"], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.HOST}/sitemap.xml`, // <==== Add here
    ],
  },
};
