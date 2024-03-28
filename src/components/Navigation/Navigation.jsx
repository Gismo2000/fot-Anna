import React from 'react';
import styles from "./Navigation.module.css";
import logoImg from "./HeaderImg/logo.svg";
import iconHeart from "./HeaderImg/heart.svg";
import iconBag from "./HeaderImg/icons.png";
import BtnDarkMode from './btnDarkMode/BtnDarkMode';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
<header className={styles}>
      {/* <div className="discount"> */}
        <button1>1 day discount!</button1>
      {/* </div> */}
      
      {/* <div className="header_logo"> */}
        <div className="logo&toggle">
      <img id='lg' src={logoImg} alt="Logo" />
        </div>
      <div className="dark&light">
          <BtnDarkMode />
          </div>
         
      <nav className="header__nav">
        <ul>
          <li><NavLink to="/">Main Page</NavLink></li>
          <li><NavLink to="/categories-goods">Categories</NavLink></li>
          <li><NavLink to="/all_products">All products</NavLink></li>
          <li><NavLink to="/all_sales">All sales</NavLink></li>
          {/* <li className="burger">☰</li> */}
        </ul>
      </nav>

      <div className="header_icons">
        <div className="iconHeart">
          <img src={iconHeart} alt="Icon" />
          <img src={iconBag} alt="Icon" />
        </div>
      </div>
       {/* </div> */}
    </header>
   );
 };
//  export default Header;

//   <nav className="navigation">
//     <ul>
//       <li><NavLink to="/">Home</NavLink></li>
//       <li><NavLink to="/all-goods">All Goods</NavLink></li>
//       <li><NavLink to="/categories-goods">Categories</NavLink></li>
//       <li><NavLink to="/sale-goods">Sale</NavLink></li>
//       <li><NavLink to="/bag">Bag</NavLink></li>
//       <li><NavLink to="/contact">Contact</NavLink></li>
//       <li className="burger">☰</li>
//     </ul>
//   </nav>
// );

export default Navigation;