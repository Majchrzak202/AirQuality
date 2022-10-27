import React from "react";
import { Box } from "@mui/system";
import BackgroundJpg from "./../assets/AboutBackground.png";
import { Paper } from "@mui/material";

const styles = {
  paperContainer: {
    backgroundImage: BackgroundJpg,
  },
};

const About = () => {
  return (
    <Paper style={styles.paperContainer}>
      <img src={BackgroundJpg} style={{ height: "80%", width: "100vw" }} />
      <Box
        style={{
          display: "flex",
          minHeight: "50vh",
          alignItems: 'flex-start',
          backgroundColor: "#0f5157",
          marginTop: -5,
        }}
      >
        <Box
          style={{
            backgroundColor: "red",
            display: "flex",
            width: "auto",
            height: "auto",
            padding: 30,
            margin: 10,
            marginTop: -150,
            color: 'white'
          }}
        >
          Papa
        </Box>
      </Box>
    </Paper>
  );
};

export default About;
