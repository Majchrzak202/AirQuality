import React from "react";
import { Grid, Typography, Box } from "@mui/material";

const Info = () => {
  return (
    <Box
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 50,
        backgroundColor: '#e2e6cf'
      }}
    >
      <Box>
        <Grid style={{ width: "100vw" }} container spacing={5}>
          <Grid sm={4} md={4} lg={4} style={{ padding: 50 }} item>
            <Typography
              align="center"
              gutterBottom
              fontSize={25}
              fontWeight={700}
            >
              Air Quality
            </Typography>
            <Typography align="justify" fontSize={14}>
              AQI information is obtained by averaging readings from an air
              quality sensor, which can increase due to vehicle traffic, forest
              fires, or anything that can increase air pollution. Pollutants
              tested include ozone, nitrogen dioxide, sulphur dioxide, among
              others.
            </Typography>
          </Grid>
          <Grid sm={4} md={4} lg={4} style={{ padding: 50 }} item>
            <Typography
              align="center"
              fontSize={25}
              fontWeight={700}
              gutterBottom
            >
              Major Polutants
            </Typography>
            <Typography fontSize={14} align="justify">
              EPA establishes an AQI for five major air pollutants regulated by
              the Clean Air Act. Each of these pollutants has a national air
              quality standard set by EPA to protect public health: ground-level
              ozone particle pollution (also known as particulate matter,
              including PM2.5 and PM10) carbon monoxide sulfur dioxide nitrogen
              dioxide
            </Typography>
          </Grid>
          <Grid  sm={4} md={4} lg={4} gutterBottom style={{ padding: 50 }} item>
            <Typography fontSize={25} align='center' fontWeight={700}>
              6 levels of AQI
            </Typography>
            <Typography fontSize={14} align="justify">
              Think of the AQI as a yardstick that runs from 0 to 500. The
              higher the AQI value, the greater the level of air pollution and
              the greater the health concern. For example, an AQI value of 50 or
              below represents good air quality, while an AQI value over 300
              represents hazardous air quality.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Info;
