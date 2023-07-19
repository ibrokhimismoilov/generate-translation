import React, { ReactNode } from "react";
import classes from "./Container.module.scss";

const Container = ({ children }: { children: ReactNode }) => (
  <div className={classes.container}>{children}</div>
);

export default Container;
