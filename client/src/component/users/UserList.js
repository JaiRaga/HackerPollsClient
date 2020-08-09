import React from "react";
import { Grid, Button, Paper, makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: 50,
    margin: "0 25px",
    color: "#fff"
  }
}));

const UserList = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container item justify='center' alignItems='center'>
      <Grid item>
        <Button
          className={classes.btn}
          fullWidth
          onClick={() => history.push(`/profile/123`)}>
          username
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserList;
