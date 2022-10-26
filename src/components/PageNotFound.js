import React from "react";
import { Box } from "@mui/system";
import Page404 from "./../assets/PageNotFound.png";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <Box
      bgcolor="primary.main"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Box style={{ display: "flex" }}>
        <img
          style={{ width: "50%", height: "50%" }}
          src={Page404}
          alt="page not found"
        />
        <Typography
          style={{
            color: "white",
            fontSize: 60,
            fontWeight: 800,
            paddingTop: 40,
          }}
        >
          404
        </Typography>
      </Box>

      <Typography style={{ color: "white", fontSize: 20, fontWeight: 800 }}>
        Sorry we couldn't find what your'e looking for...
      </Typography>
      <Typography component='div' style={{ color: "white", fontSize: 20, fontWeight: 800 }}>
        Go back to <Link style={{textDecoration:'none', color: '#097110'}} to="/">Main Page</Link>
      </Typography>
    </Box>
  );
};

export default PageNotFound;
