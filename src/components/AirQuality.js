import React, { useEffect, useState } from "react";
import { Card, Box, CardHeader, Typography, Grid } from "@mui/material";
import Room from "@mui/icons-material/Room";
import IndicatorList from "./IndicatorList";
import SmileyFace from "./../assets/SmileyFace.png";
import ModerateFace from "./../assets/ModerateFace.png";
import UnhappyFace from "./../assets/UnhappyFace.png";
import { makeStyles } from "@mui/styles";
import Recomendations from "./Recomendations";
import { Divider } from "@mui/material";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    display: "flex",
    alignItems: "center",
    minHeight: "100vh",
    justifyContent: "center",
    backgroundColor: "#f7faff",
    flexDirection: "column",
    paddingTop: 50,
  },
  mainTypoBox: {
    width: "60%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    minHeight: "100%",
    flexDirection: "column",
    paddingLeft: 30,
    paddingTop: 30,
    paddingBottom: 30,
  },
  containerBox: {
    display: "flex",
    minHeight: "50%",
  },
  card: {
    width: "60%",
    minHeight: "50vh",
    borderRadius: 10,
  },
  locactionBox: {
    display: "flex",
    alignItems: "center",
  },
  aqiBox: {
    display: "flex",
    alignItems: "flex-start",
    paddingTop: 20,
    justifyContent: "flex-start",
  },
  aqiInnerBox: {
    marginLeft: 15,
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    marginTop: -15,
  },
  faceBox: {
    width: "40%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    minHeight: "100%",
    paddingTop: 30,
    paddingBottom: 30,
  },
  faceImg: {
    width: 120,
    height: 120,
    paddingBottom: 50,
  },
});

const AirQuality = ({ airQuality, weather }) => {
  const [backgroundColor, setBackgroundColor] = useState("");
  const [faceImage, setFaceImage] = useState("");

  const classes = useStyles();

  useEffect(() => {
    if (airQuality === "undefined") {
      return;
    }
    const backgroundChangeHandler = () => {
      const aqi = airQuality.data.aqi;

      switch (true) {
        case aqi <= 50:
          setBackgroundColor("#12cd7c");
          setFaceImage(SmileyFace);
          break;
        case aqi >= 51 && aqi <= 100:
          setBackgroundColor("#f2bf30");
          setFaceImage(ModerateFace);
          break;
        case aqi >= 101 && aqi <= 150:
          setBackgroundColor("#ff9b57");
          setFaceImage(UnhappyFace);
          break;
        case aqi > 150:
          setBackgroundColor("#f65f60");
          break;

        default:
          setBackgroundColor("");
      }
    };
    backgroundChangeHandler();
  }, [airQuality]);

  if (airQuality === "undefined") {
    return;
  }

  const time = airQuality.data.time.s;
  const location = airQuality.data.city.name;
  const geo1 = airQuality.data.city.geo[0];
  const geo2 = airQuality.data.city.geo[1];
  const aqi = airQuality.data.aqi;
  const majorPolutant = airQuality.data.dominentpol.toUpperCase();

  if (weather === "undefined") {
    return;
  }

  const temprature = weather.main.temp.toFixed(1);
  const humidity = weather.main.humidity;
  const pressure = weather.main.pressure;
  const weatherInfo = weather.weather[0].main;
  const wind = weather.wind.speed.toFixed(0);
  console.log(weather);

  return (
    <Box className={classes.root}>
      <Card sx={{ boxShadow: 15 }} className={classes.card}>
        <Box className={classes.containerBox}>
          <Box
            className={classes.mainTypoBox}
            style={{
              backgroundColor: backgroundColor,
            }}
          >
            <Box className={classes.locactionBox}>
              <Room fontSize="large" />
              <Box style={{ marginLeft: 20 }}>
                <Typography fontSize={10}>{time}</Typography>
                <Typography fontSize={20} component="h1" fontWeight={800}>
                  {location}
                </Typography>
                <Typography fontSize={10}>
                  {geo1} {geo2}
                </Typography>
                <Typography fontSize={10}> </Typography>
              </Box>
            </Box>
            <Box className={classes.aqiBox}>
              <Typography fontSize={20} component="h1" fontWeight={800}>
                AQI
              </Typography>
              <Box className={classes.aqiInnerBox}>
                <Typography fontSize={60}>{aqi} </Typography>
                <Typography fontSize={20} component="h1" fontWeight={800}>
                  Moderate
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            style={{ backgroundColor: backgroundColor }}
            className={classes.faceBox}
          >
            <img className={classes.faceImg} src={faceImage} alt="aqi" />
          </Box>
        </Box>
        <CardHeader title="Real time data " subheader="Updated 2 seconds ago" />
        <Box style={{ backgroundColor: "#e6eaef", height: "50%", padding: 30 }}>
          <Grid container spacing={3}>
            <IndicatorList airQuality={airQuality} />
          </Grid>
        </Box>
        {/*  <Box style={{padding: 35 }}>
          <Grid spacing={4} container>
               {Object.keys(airQuality.data.iaqi).map((keyName, i) => (
              <Grid key={i} xs={12} sm={6} md={3} lg={3} xl={3} item>
                <IndicatorItem
                  value={airQuality.data.iaqi[keyName].v}
                  name={keyName}
                />
              </Grid>
            ))} 
          </Grid>
        </Box> */}
        <Box style={{ padding: 30, backgroundColor: "#e6eaef" }}>
          <Typography style={{ fontWeight: 800, fontSize: 20 }}>
            Major Polutant: {majorPolutant}
          </Typography>
        </Box>
        <Box
          style={{
            padding: 30,
            backgroundColor: "#e6eaef",
            display: "flex",
            justifyContent: "center",
            color: "white",
            paddingBottom: 40,
            paddingTop: 20,
          }}
        >
          <Card
            sx={{ boxShadow: 30 }}
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              backgroundColor: "#373b40",
            }}
          >
            <Box
              style={{
                display: "flex",
                flexDirection: "column",
                width: "50%",
                alignItems: "center",
                justifyContent: "center",
                padding: 30,
              }}
            >
              <Typography
                style={{ fontSize: 60, fontWeight: 800, color: "white" }}
              >
                {temprature}°
              </Typography>
              <Typography
                style={{ fontSize: 16, color: "white", fontWeight: 700 }}
              >
                {weatherInfo}
              </Typography>
            </Box>

            <Box style={{ padding: 30 }}>
              <Grid spacing={4} container>
                <Grid
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                >
                  <Typography style={{ fontSize: 12, color: "white" }}>
                    Pressure
                  </Typography>
                  <Typography style={{ fontSize: 22, color: "white" }}>
                    {pressure}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: 12, color: "white" }}>
                    Humidity
                  </Typography>
                  <Typography style={{ fontSize: 22, color: "white" }}>
                    {humidity}%
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={4}
                  sm={4}
                  md={4}
                  lg={4}
                  xl={4}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ fontSize: 12, color: "white" }}>
                    Wind
                  </Typography>
                  <Typography style={{ fontSize: 22, color: "white" }}>
                    {wind}km/h
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Card>
        </Box>
        <Recomendations airQuality={airQuality} />
      </Card>
    </Box>
  );
};

export default AirQuality;
