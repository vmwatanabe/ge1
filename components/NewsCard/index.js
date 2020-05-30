import "./NewsCard.scss";

const NewsCard = ({ title, description, urlToImage, publishedAt, source }) => {
  return (
    <div className="news-card">
      <div className="news-card__image">
        <img src={urlToImage} />
      </div>
      <div className="news-card-content">
        <div className="news-card-content__title">{title}</div>
        <div className="news-card-content__description">{description}</div>
        <div className="news-card-content__footer">
          {publishedAt} - {source.name}
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
