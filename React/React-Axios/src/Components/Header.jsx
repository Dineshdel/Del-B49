import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!"></a>
          <ul className="navbar-nav ms-auto mb-lg-0 mx-4 fs-5 ">
            <li className="nav-item ">
              <Link className="text-black fs-4" to="/">
                <i class="fas fa-home"></i>
              </Link>
            </li>
          </ul>

          <Link className="text-black fs-3" to="/ListPages">
            <i class="fa-solid fa-list"></i>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Header;
