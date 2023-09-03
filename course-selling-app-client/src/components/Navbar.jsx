import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import { Link } from "react-router-dom";
//import { BrowserRouter as useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          <Typography variant={"h6"}> Course App</Typography>
        </Button>
      </div>
      <div style={{ display: "flex" }}>
        <Button
          onClick={() => {
            navigate("/signin");
          }}
          variant="contained"
          color="primary"
        >
          Login
        </Button>
        <span style={{ padding: 10 }}></span>
        <Button
          onClick={() => {
            navigate("/signup");
          }}
          variant="contained"
          color="primary"
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}
