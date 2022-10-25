import React, { useState } from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
import Tree from "./../assets/Tree.png";
import { makeStyles } from "@mui/styles";

import { styled } from "@mui/material/styles";

const useStyles = makeStyles({
  root: {
    width: "100vw",
    minHeight: "90vh",
    display: "flex",
    alignItems: "flex-end",
    backgroundColor: "#12cd7c",
    paddingBottom: 50,
  },
  container: {
    marginBottom: 50,
    minWidth: "100vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "&:hover label": {
    fontWeight: 600,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#0da418",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0da418",
      borderWidth: 3,
    },
    "&:hover fieldset": {
      borderColor: "#097110",
      borderWidth: 3,
    },
    "&.Mui-focused fieldset": {
      borderColor: "#097110",
      borderWidth: 3,
    },
  },
});

const Search = ({ searchHandler }) => {
  const [input, setInput] = useState("");
  const classes = useStyles();

  const searchInputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (input.length === 0) {
      return;
    }

    searchHandler(input);
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img
          style={{ width: "20%", height: "20%", marginBottom: -10 }}
          src={Tree}
          alt="tree-logo"
        />
        <Typography
          color="common.white"
          fontSize={35}
          fontWeight={800}
          gutterBottom
        >
          Check Air Quality in your City!
        </Typography>
        <Typography
          style={{ width: "28%" }}
          color="common.white"
          fontSize={15}
          fontWeight={600}
          gutterBottom
        >
          Just type-in any desired City and check air quality conditions. Stay
          safe and be aware!
        </Typography>
        <form
          style={{
            minWidth: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <StyledTextField
            sx={{ m: 2, width: "20%" }}
            variant="outlined"
            label="search city"
            value={input}
            onChange={searchInputHandler}
          />
          <Button
            onClick={submitHandler}
            color="warning"
            sx={{ width: "13%" }}
            variant="contained"
          >
            Search!
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Search;
