import React from "react";
import "./Nav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="header__nav-item">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        // <ul className="header__nav-list">
        //   <li className="header__nav-item">
        //     <Link to="/login">Artists</Link>
        //   </li>
        //   <li className="header__nav-item">
        //     <Link to="/aboutUs">About</Link>
        //   </li>
        //   <li className="header__nav-item">
        //     <Link to="/contactUs">Contact</Link>
        //   </li>
        //   <li className="header__nav-item">
        //     <Link to="/login">Login</Link>
        //   </li>
        // </ul>
        <div className="navbar">
          <div className="dropdown">
            <button className="dropbtn">Artists</button>
            <div className="dropdown-content">
              <Link to="/Keramel">Keramel</Link>
              <Link to="/TF-Marz">TF Marz</Link>
            </div>
          </div>
          <Link to="/login">Login</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>
      );
    }
  }

  return (
    <header className="navbar">
      <h1>
        <Link to="/">Software Sherpas</Link>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;

// function Nav({handlePageChange}) {
//   return (
//     <div className="navbar">
//       <h1>Sherpa Records</h1>
//       <nav>
//         <ul className="header__nav-list">
//           <li className="header__nav-item">
//             <button className="header__nav-button" onClick={() => handlePageChange("shop")}>
//               Shop
//             </button>
//           </li>
//           <li className="header__nav-item">
//             <button className="header__nav-button" onClick={() => handlePageChange("artists")}>
//               Artists
//             </button>
//           </li>
//           <li className="header__nav-item">
//             <button className="header__nav-button" onClick={() => handlePageChange("aboutUs")}>
//               About
//             </button>
//             <li className="header__nav-item">
//             <button className="header__nav-button" onClick={() => handlePageChange("contactUs")}>
//               Contact
//             </button>
//           </li>
//           <li className="header__nav-item">
//             <button className="header__nav-button" onClick={() => handlePageChange("login")}>
//               Login
//             </button>
//           </li>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Nav;
