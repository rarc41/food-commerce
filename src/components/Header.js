import React from "react";

const Header = () => {
  return (
    <header>
      <nav>
        <div className="hamburger">=</div>

        <div className="logo">Chukwudi</div>
      </nav>

      <input className="header-input" type="text" placeholder="Search" />
    </header>
  );
};

export default Header;
