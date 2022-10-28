import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  navbarLink: {
    margin: 10,
    color: "white",
    "&:hover": {
      color: "#0e5158",
    },
    textDecoration: "none",
    cursor: "pointer",
    padding: 10,
  },
});

const Navbar = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color="primary" position="static">
        <Toolbar>
          <Link style={{ textDecoration: "none" }} to="/">
            <Typography
              className={classes.navbarLink}
              variant="h6"
              component="div"
            >
              Homepage
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/about">
            <Typography
              className={classes.navbarLink}
              variant="h6"
              component="div"
            >
              About
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/more-info">
            <Typography
              className={classes.navbarLink}
              variant="h6"
              component="div"
            >
              More info
            </Typography>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/contact">
            <Typography
              className={classes.navbarLink}
              variant="h6"
              component="div"
            >
              Contact
            </Typography>
          </Link>
          <Box sx={{ flexGrow: 1 }} />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
