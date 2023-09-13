// import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button, Typography, Grid, Container } from "@mui/material";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const navigate = useNavigate();

  async function handleSignUp() {
    const response = await axios.post(
      "http://localhost:3000/admin/signup",
      {
        username: email,
        password: password,
      },
      {
        headers: {
          "content-type": "application/json",
        },
      }
    );
    localStorage.setItem("token", response.data.token);
    window.location = "/courses";
  }
  return (
    <>
      <div>
        <Container maxWidth="xs">
          <div style={{ marginTop: "2rem" }}>
            <Typography variant="h4" align="center">
              Sign Up
            </Typography>

            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="email"
                  required
                  fullWidth
                  label="Email"
                  variant="outlined"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  onClick={handleSignUp}
                  fullWidth
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>
    </>
  );
};
