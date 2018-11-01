import React from "react";
import "./Nav.css"

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark navBg">
    <a className="navbar-brand" href="/">
      React NYT Search
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a className="nav-item nav-link" href="/saved">
          Saved Articles
        </a>
      </div>
    </div>
  </nav>
);

export default Nav;
