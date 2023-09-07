// import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function handleSignUp() {
    console.log("sending fetch req");
    fetch("http://localhost:3000/admin/signup", {
      method: "POST",
      body: JSON.stringify({
        username: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json",
      },
    }).then((res) => {
      res.json().then((data) => {
        localStorage.setItem("token", data.token);
        alert("Admin has been signed up");
        window.location = "/";
        navigate("/courses");
      });
    });
  }
  return (
    <div
      style={{
        paddingTop: "100px",
        // alignContent:"center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <div
        style={{
          maxWidth: "70%",
          maxheight: "70",
        }}
      >
        <Card>
          <h1>Welcome to Course App</h1>
          <TextField
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            onClick={handleSignUp}
            type="submit"
            fullWidth
            variant="contained"
          >
            Sign Up
          </Button>
        </Card>
      </div>
    </div>
  );
};
