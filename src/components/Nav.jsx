import { Link } from "react-router-dom";
import { useState } from "react";
export default function Nav() {
  const [menuOn, setMenuOn] = useState(false);

  return (
    <nav>
      <Link to={`/`}>
        <div className="logo-side">
          <h1>MOXTIL</h1>
        </div>
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search" />
        <i className="bx bx-search"></i>
      </div>
      <ul
        className="cart-side"
        style={menuOn ? { maxHeight: "500px" } : { maxHeight: "0px" }}
      >
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Shopping"}>
            Shooping <i className="bx bx-cart"></i>
          </Link>
        </li>
        <li>
          <Link to={"/Offers"}>Offers</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
      <i
        className={
          menuOn ? "bx bx-collapse-horizontal" : "bx bx-expand-horizontal"
        }
        id="menu-btn"
        onClick={() => {
          menuOn ? setMenuOn(false) : setMenuOn(true);
        }}
      ></i>
    </nav>
  );
}
