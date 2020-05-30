import "./MainContainer.scss";

const MainContainer = ({ children, className }) => {
  return <div className={`main-container ${className || ""}`}>{children}</div>;
};

export default MainContainer;
