import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import User from "../users/User";

const useStyles = makeStyles((theme) => ({}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Grid container direction='columns' justify='center' alignItems='center'>
      <Grid item>
        <User />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
