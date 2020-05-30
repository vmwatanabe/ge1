import Header from "../../components/Header";
import HeadlinerMosaic from "../../components/HeadlinerMosaic";
import MainContainer from "../../components/MainContainer";
import { BASE_URL } from "../../config";
import "./Home.scss";

function Home({ data }) {
  const { articles } = data;

  return (
    <div className="home">
      <Header />
      <MainContainer>
        <HeadlinerMosaic articles={articles} />
      </MainContainer>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return { props: { data } };
}

export default Home;
