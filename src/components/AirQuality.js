import React from "react";
import { Card, Box, CardHeader } from "@mui/material";

const AirQuality = () => {
  return (
    <Box
      style={{
        width: "100vw",
        display: "flex",
        alignItems: "center",
        height: "100vh",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{ bgcolor: "primary.main" }}
        style={{ width: "100%", height: "80%" }}
      >
        <CardHeader
          title={"Rap Pana Japy Rap"}
          subheader={"Yebac stare baby pogrzebaczem!"}
          style={{
            textAlign: "center",
            paddingTop: 50,
            display: "flex",
            justifyContent: "center",
          }}
        />
      </Card>
    </Box>
  );
};

export default AirQuality;
