import React, { useState, useEffect } from "react";
import { LinearProgress } from "@mui/material";

const HorizontalLinearProgress = ({ value }) => {
  const [invertedProgress, setInvertedProgress] = React.useState(value);
  const [color, setColor] = useState("");

  useEffect(() => {
    const backgroundChangeHandler = () => {
      switch (true) {
        case value <= 25:
          setColor("#12cd7c");

          break;
        case value >= 25 && value <= 50:
          setColor("#f2bf30");

          break;
        case value >= 50 && value <= 75:
          setColor("#ff4243");
          break;
        case value >= 75:
          setColor("red");
          break;

        default:
          setColor("");
      }
    };
    backgroundChangeHandler();
  }, [value]);

  return (
    <div
      style={{
        flexGrow: 1,
        height: 50,
        gap: 10,
        display: "flex",
        padding: 10,
      }}
    >
      <LinearProgress
        sx={{
          width: 10,
          height: "95%",
          bgcolor: color,
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#C0C0C0	",
          },
          "& span.MuiLinearProgress-bar": {
            transform: `translateY(-${invertedProgress}%) !important`, //has to have !important
          },
        }}
        value={invertedProgress}
        variant="determinate"
      />
    </div>
  );
};

export default HorizontalLinearProgress;
