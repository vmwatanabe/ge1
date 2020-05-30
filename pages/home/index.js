import Header from "../../components/Header";
import HeadlinerMosaic from "../../components/HeadlinerMosaic";
import MainContainer from "../../components/MainContainer";
import NewsList from "../../components/NewsList";
import { TOP_HEADLINES, GENERAL_NEWS } from "../../config";
import "./Home.scss";

function Home({ topHeadlines, generalNews }) {
  const { articles: topArcticles } = topHeadlines;
  const { articles: generalArcticles } = generalNews;

  console.log("generalArcticles", generalArcticles);

  return (
    <div className="home">
      <Header />
      <MainContainer>
        <HeadlinerMosaic articles={topArcticles} />
        <div className="news-container">
          <NewsList articles={generalArcticles} />
          <div className="placeholder"></div>
        </div>
      </MainContainer>
    </div>
  );
}

export async function getServerSideProps() {
  const topHeadlinesRes = await fetch(TOP_HEADLINES);
  const topHeadlines = await topHeadlinesRes.json();
  const generalNewsRes = await fetch(GENERAL_NEWS);
  const generalNews = await generalNewsRes.json();

  console.log(generalNews);

  return { props: { topHeadlines, generalNews } };
}

export default Home;
