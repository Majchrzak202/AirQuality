import React from "react";
import styled from "@emotion/styled";
import {
  TextField,
  Box,
  Button,
  Grid,
  Container,
  CssBaseline,
  Typography,
} from "@mui/material";

const StyledTextField = styled(TextField)({
  "& label": {
    color: "white",
  },
  "&:hover label": {
    fontWeight: 700,
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "white",
    },
    "&:hover fieldset": {
      borderColor: "white",
      borderWidth: 2,
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const Contact = () => {
  return (
    <Box
      style={{
        minHeight: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      bgcolor="primary.main"
    >
      <Container
        style={{ display: "flex", justifyContent: "center" }}
        component="main"
        id="contact"
      >
        <CssBaseline />
        <Box style={{ width: "35%" }}>
          <Typography
            style={{
              fontSize: 20,
              color: "white",
              fontWeight: 800,
              paddingBottom: 15,
            }}
            component="h1"
            variant="h1"
            align="left"
          >
            Feel free to contact me
          </Typography>
          <Box
            component="form"
            /*  ref={form}
                onSubmit={sendEmail} */
            noValidate
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <StyledTextField
                  variant="outlined"
                  name="from_name"
                  required
                  fullWidth
                  id="from_name"
                  label="Name"
                  type="text"
                  color="primary"
                  inputProps={{
                    style: { color: "white" },
                  }}
                />
              </Grid>

              <Grid item xs={12}>
                <StyledTextField
                  required
                  fullWidth
                  label="Adres E-mail"
                  type="text"
                  name="from_email"
                  id="from_email"
                  variant="outlined"
                  inputProps={{
                    style: { color: "white" },
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <StyledTextField
                  variant="outlined"
                  multiline={true}
                  minRows={4}
                  required
                  fullWidth
                  name="message"
                  label="New message"
                  type="message"
                  id="message"
                  inputProps={{
                    style: { color: "white" },
                  }}
                />
              </Grid>

              <Grid item xs={12}></Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              value="Send"
              sx={{ mt: 3, mb: 2 }}
              bgcolor="warning.main"
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
