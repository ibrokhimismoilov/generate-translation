import { memo } from "react";
import classes from "./Footer.module.scss";

interface IFooter {}

const Footer = memo(({}: IFooter) => {
  return (
    <footer className={classes.footer}>
      <h1>Footer</h1>
    </footer>
  );
});

export default Footer;
