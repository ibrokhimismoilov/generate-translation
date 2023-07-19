import { memo } from "react";
import classes from "./Header.module.scss";

interface IHeader {}

const Header = memo(({}: IHeader) => {
  return (
    <header className={classes.header}>
      <h1>Header</h1>
    </header>
  );
});

export default Header;
