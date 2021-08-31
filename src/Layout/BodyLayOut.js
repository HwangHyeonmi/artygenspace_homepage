import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    maxWidth: "1560px",
    padding: "0 40px",
    height: "auto",
    /* marginTop: "100px", */
  },
}));

export default function BodyLayOut({ children }) {
  const classes = useStyles();

  return <Container className={classes.box}>{children}</Container>;
}
