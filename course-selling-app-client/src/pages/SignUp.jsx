// import React from "react";
import { useState } from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
export const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
      });
    });
  }
  return (
    <div>
      <div>
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
      </div>
    </div>
  );
};
