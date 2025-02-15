import React from "react";
import logosound from "../assets/logo/logo-sound.png"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img src={logosound} alt="Logo do Sound" />
      </Link>

      <Link to="/" className="header__link">
        <h1>Sound Music</h1>
      </Link>
    </div>
  );
};

export default Header;
