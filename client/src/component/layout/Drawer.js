import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import DehazeIcon from "@material-ui/icons/Dehaze";
import AdjustIcon from "@material-ui/icons/Adjust";
import TwitterIcon from "@material-ui/icons/Twitter";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import { Link, Redirect } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  },
  display: {
    [theme.breakpoints.down("md")]: {
      display: "flex"
    },
    [theme.breakpoints.up("md")]: {
      display: "none"
    }
  },
  grid: {
    color: "white"
  },
  link: {
    textDecoration: "none",
    color: "#1976d2"
  },
  icons: {
    color: "#1976d2",
    minWidth: "35px",
    paddingRight: 20
  },
  hamburger: {
    color: "white"
  },
  title: {
    fontWeight: "800",
    padding: "5px 16px"
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false
  });
  //   const dispatch = useDispatch();

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ [anchor]: open });
  };

  const links = (
    <Fragment>
      <Typography className={classes.title} color='primary' variant='body1'>
        Account Info
      </Typography>
      <Divider />
      <List className={classes.list}>
        <Link to='/profile' className={classes.link}>
          <ListItem button>
            {/* <ListItemIcon className={classes.icons}>
              <TwitterIcon />
            </ListItemIcon> */}
            {/* <SideProfile /> */}
            {/* <ListItemText primary='Twitter' /> */}
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List className={classes.right}>
        <Link to='/' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary='Home' />
          </ListItem>
        </Link>

        <Link to='/profile' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <PersonPinIcon />
            </ListItemIcon>
            <ListItemText primary='Profile' />
          </ListItem>
        </Link>

        {/* <Link to='/setting' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <AdjustIcon />
            </ListItemIcon>
            <ListItemText primary='Setting' />
          </ListItem>
        </Link>

        <Link to='/landing' className={classes.link}>
          <ListItem button>
            <ListItemIcon className={classes.icons}>
              <DirectionsRunIcon />
            </ListItemIcon>
            <ListItemText primary='Logout' />
          </ListItem>
        </Link> */}
      </List>
    </Fragment>
  );

  //   const { isAuthenticated } = useSelector((state) => state.auth);

  const list = (anchor) => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}>
      {links}
    </div>
  );
  return (
    <AppBar position='static' color='transparent' className={classes.display}>
      <Toolbar>
        <IconButton
          className={classes.hamburger}
          onClick={toggleDrawer("left", true)}>
          <DehazeIcon />
        </IconButton>
        <Typography className={classes.grid} variant='h6'>
          Hacker Polls
        </Typography>
        <SwipeableDrawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
          onOpen={toggleDrawer("left", true)}>
          {list("left")}
        </SwipeableDrawer>
      </Toolbar>
    </AppBar>
  );
}
