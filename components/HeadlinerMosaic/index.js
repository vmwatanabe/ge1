import HeadlinerCard from "../HeadlinerCard";

import "./HeadlinerMosaic.scss";

const HeadlinerMosaic = ({ articles }) => {
  return (
    <div className="headliner-mosaic">
      <HeadlinerCard {...articles[0]} />
      <HeadlinerCard {...articles[1]} />
    </div>
  );
};

export default HeadlinerMosaic;
