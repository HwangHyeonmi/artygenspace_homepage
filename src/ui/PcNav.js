import { Grid, makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const useStyles = makeStyles((theme) => ({
  navGrid: {
    lineHeight: 3,
    position: "relative",
  },
  aTag: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  },
}));

const PcNav = ({ moveToContentPosition, getContactVal }) => {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid
        className={`${classes.navGrid} navText`}
        item
        xs={3}
        onClick={() => {
          moveToContentPosition("work");
        }}
      >
        <span
          className={classes.aTag}
          style={{
            cursor: "pointer",
          }}
        >
          Work
        </span>
      </Grid>

      <Grid
        className={`${classes.navGrid} navText`}
        item
        xs={3}
        onClick={() => {
          moveToContentPosition("specialize");
        }}
      >
        <span
          className={classes.aTag}
          style={{
            cursor: "pointer",
          }}
        >
          About
        </span>
      </Grid>

      <Grid
        className={`${classes.navGrid} navText`}
        item
        xs={3}
        onClick={() => {
          /*  moveToContentPosition("footer"); */
          getContactVal(true);
        }}
      >
        <span
          className={classes.aTag}
          style={{
            cursor: "pointer",
          }}
        >
          Contact
        </span>
      </Grid>

      <Grid className={`${classes.navGrid} navText`} item xs={3}>
        <Link
          color="secondary"
          style={{
            cursor: "pointer",
          }}
          to="/location"
          /*  onClick={() => {}} */
        >
          Location
        </Link>
      </Grid>
    </Grid>
  );
};

export default PcNav;
