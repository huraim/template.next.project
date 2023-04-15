import Layout from "../components/layout";
import "../../public/styles/global/global.scss";
import { RecoilRoot } from "recoil";
import { DefaultSeo } from "next-seo";
import seo from "../../lib/seo";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Layout>
        <DefaultSeo {...seo} />
        <div className="wrapper_inner">
          <article className="contents">
            <div className="contents_inner">
              <Component {...pageProps} />
            </div>
          </article>
        </div>
      </Layout>
    </RecoilRoot>
  );
}
