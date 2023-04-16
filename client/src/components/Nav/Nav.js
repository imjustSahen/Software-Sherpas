import React from "react";
import "./Nav.css";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav({ Signup, Login }) {
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
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <Signup />
          </li>
          <li className="header__nav-item">
            <Login />
          </li>
        </ul>
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
