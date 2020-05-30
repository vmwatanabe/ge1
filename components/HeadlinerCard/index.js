import "./HeadlinerCard.scss";

const HeadlinerCard = ({ title, description, url, urlToImage }) => {
  return (
    <div className="headliner-card">
      <img className="headliner-card__image" src={urlToImage} />
      <div className="headliner-card-content">
        <div className="headliner-card-content__title">{title}</div>
        <div className="headliner-card-content__description">{description}</div>
      </div>
    </div>
  );
};

export default HeadlinerCard;
