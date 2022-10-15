import React from "react";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)({
"& label": {
color: "white"
},
"&:hover label": {
fontWeight: 700
},
"& label.Mui-focused": {
color: "white"
},
"& .MuiInput-underline:after": {
borderBottomColor: "#2980B9"
},
"& .MuiOutlinedInput-root": {
"& fieldset": {
borderColor: "#F5B041",

},
"&:hover fieldset": {
borderColor: "#F5B041",
borderWidth: 2
},
"&.Mui-focused fieldset": {
borderColor: "#F5B041"
}
}
});


const Search = () => {
  return (
    <Box
      style={{
        width: "100vw",
        height: "90vh",
        display: "flex",
       
        alignItems: "flex-end",
       
        backgroundColor: '#80A3FF',
        paddingBottom: 50
      }}
    >
      <Box style={{ marginBottom: 50, width: "100vw", display: "flex", flexDirection: "column",  alignItems: "center",}}>
      <Typography color='common.white' fontSize={35} fontWeight={800} gutterBottom>
        Check Air Quality in your City!
      </Typography>
      <Typography style={{width: '28%'}} color='common.white' fontSize={15} fontWeight={600} gutterBottom>
        Just type-in any desired City and check air quality conditions. Stay safe and be aware!
      </Typography>
      <StyledTextField sx={{ m: 2, width: '20%' }} variant="outlined" label="search city" />
      <Button color="secondary" sx={{ width: '13%' }} variant="contained">
        Search!
      </Button>
      </Box>
    </Box>
  );
};

export default Search;
