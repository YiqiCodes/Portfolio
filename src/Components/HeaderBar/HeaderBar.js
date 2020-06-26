import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./HeaderBar.styles";

const HeaderBar = () => {
  return (
    <HeaderContainer>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/portfolio">Portfolio</Link>
      <a
        href="https://www.yiqizhangphotography.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Photography
      </a>
    </HeaderContainer>
  );
};

export default HeaderBar;
