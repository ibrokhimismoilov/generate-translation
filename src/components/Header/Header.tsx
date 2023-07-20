import React from "react";
import classes from "./Header.module.scss";
import { Container } from "../Shared";

const Header = () => {
  return (
    <header className={classes.header}>
      <Container>
        <div className={classes.inner}>
          <div className={classes.logo}>
            <span>Logo</span>
          </div>

          <div className={classes.right}>
            <div>menu</div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
