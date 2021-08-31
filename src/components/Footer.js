import React, { useEffect, useRef } from "react";

import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "100%",
    textAlign: "center",
    padding: "50px",
    backgroundColor: theme.palette.primary.main,
    color: "#fff",
  },
}));

export default function Footer({ getPosition }) {
  const classes = useStyles();
  const footer = useRef();

  useEffect(() => {
    let position =
      window.pageYOffset + footer.current.getBoundingClientRect().top - 100;
    getPosition("footer", position);
  });
  return (
    <Box ref={footer} className={`${classes.box} footer`}>
      <div>{"Copyright © "} ArtygenSpace Company</div>
      <div>All rights reserved.</div>
    </Box>
  );
}
