import stylesSpecial from "../styles/Home.module.css";

import HeroBanner from "../components/HeroBanner";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div>
      <HeroBanner
        backgroundImage={stylesSpecial.topBackground}
        alignArticle={stylesSpecial.alignLeft}
      />

      <Posts />

      <HeroBanner
        backgroundImage={stylesSpecial.bottomBackground}
        alignArticle={stylesSpecial.alignRight}
      />
    </div>
  );
};

export default Home;
