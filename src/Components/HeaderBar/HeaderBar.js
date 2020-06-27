import React from "react";
import { Link } from "react-router-dom";

import { HeaderContainer } from "./HeaderBar.styles";

const HeaderBar = () => {
  return (
    <HeaderContainer>
      <Link to="/" style={{ color: "#111111" }}>
        Home
      </Link>
      <Link to="/about" style={{ color: "#111111" }}>
        About
      </Link>
      <Link to="/projects" style={{ color: "#111111" }}>
        Projects
      </Link>
      <a
        href="https://www.yiqizhangphotography.com"
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: "#111111" }}
      >
        Photography
      </a>
    </HeaderContainer>
  );
};

export default HeaderBar;
