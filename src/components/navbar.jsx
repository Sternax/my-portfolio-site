import React from "react";
import { Link } from "gatsby";
import "../styles/navbar.scss";

const Navbar = ({ menuItems = [] }) => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">
        <img src="/site-icon.png" alt="Site Icon" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          {menuItems.map((item) => (
            <li className="nav-item" key={item.label}>
              <Link
                className="nav-link"
                activeClassName="active"
                to={
                  item.page.pageSlug === "home" ? "/" : `/${item.page.pageSlug}`
                }
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
