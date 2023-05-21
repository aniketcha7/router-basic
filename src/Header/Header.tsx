import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
const Header = () => {
  const navArr = [
    {
      path: "",
      name: "home",
    },
    {
      path: "/show",
      name: "All User",
    },
  ];

  const allLinks = navArr.map((linkObj: any) => {
    return (
      <li id="test">
        <NavLink
          className={({isActive}) => {return isActive ? 'active-class': ''}}
          to={linkObj.path}
        >
         
          {linkObj.name}
        </NavLink>
      </li>
    );
  });
  return (
    <div>
      <ul>
    {allLinks}
      </ul>
    </div>
  );
};

export default Header;
