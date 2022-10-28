import React from "react";
import { Box } from "@mui/system";
import BackgroundJpg from "./../assets/AboutBackground.png";
import { Divider, Typography } from "@mui/material";
import { Link as SmoothLink } from "react-scroll";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#f7faff",
  },
  img: {
    height: "80%",
    width: "100vw",
  },
  mainBox: {
    display: "flex",
    minHeight: "30vh",
    alignItems: "flex-start",
    backgroundColor: "#0f5157",
    marginTop: -5,
    flexDirection: "column",
  },
  titleBox: {
    display: "flex",
    width: 350,
    height: "auto",
    padding: 30,
    margin: 10,
    marginTop: -150,
    color: "white",
    flexDirection: "column",
  },
  divider: {
    fontSize: 30,
    fontWeight: 800,
  },
  linksBox: {
    paddingTop: 20,
    display: "flex",
    justifyContent: "space-evenly",
    color: "white",
    minWidth: "100%",
  },
  link: {
    cursor: "pointer",
    "&:hover": {
      color: "#f2bf30",
    },
  },
});

const About = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img src={BackgroundJpg} className={classes.img} alt="about" />
      <Box className={classes.mainBox}>
        <Box className={classes.titleBox}>
          <Typography style={{ fontSize: 30, fontWeight: 800 }}>
            Change starts with you!
          </Typography>
          <Divider style={{ height: 3, backgroundColor: "#f2bf30" }} />
          <Typography style={{ fontSize: 15, fontWeight: 600, paddingTop: 15 }}>
            This is an Educational Project build in React! Feel free to contact
            me! Site takes data from over 1600 stations to provide Air Quality
            Data and weather conditions info.
          </Typography>
        </Box>

        <Box className={classes.linksBox}>
          <SmoothLink
            to="search"
            spy={true}
            smooth={true}
            offset={0}
            duration={700}
            className={classes.link}
          >
            <Typography style={{ fontSize: 18, fontWeight: 800 }}>
              Check Air Quality
            </Typography>
          </SmoothLink>
          <Typography style={{ fontSize: 18, fontWeight: 800 }}>
            Read about AQI
          </Typography>
          <Typography style={{ fontSize: 18, fontWeight: 800 }}>
            Contact author
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default About;
