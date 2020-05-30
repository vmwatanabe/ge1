import { FaBars } from "react-icons/fa";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-menu">
        <FaBars className="header-menu__icon" />
        <span className="header-menu__text">Menu</span>
      </div>
      <div className="header__logo">Ge1</div>
      <div className="header__search">Buscar</div>
    </div>
  );
};

export default Header;
