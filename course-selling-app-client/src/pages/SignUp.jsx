// import React from "react";
import { TextField } from "@mui/material";
import { Button } from "@mui/material";
export const SignUp = () => {
  return (
    <div>
      <div
        style={{
          display: "grid",
        }}
      >
        <h1>Welcome to Course App</h1>
        <TextField
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
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
        <Button type="submit" fullWidth variant="contained">
          Sign Up
        </Button>
      </div>
    </div>
  );
};
