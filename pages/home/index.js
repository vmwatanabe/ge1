import Header from "../../components/Header";
import { BASE_URL } from "../../config";

function Home({ data }) {
  console.log(data);

  return (
    <div className="home">
      <Header />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(BASE_URL);
  const data = await res.json();

  return { props: { data } };
}

export default Home;
