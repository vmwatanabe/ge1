import NewsCard from "../NewsCard";
import "./NewsList.scss";

const NewsList = ({ articles }) => {
  if (!articles) {
    return false;
  }

  return (
    <div className="news-list">
      {articles.map((elem) => (
        <NewsCard {...elem} />
      ))}
    </div>
  );
};

export default NewsList;
