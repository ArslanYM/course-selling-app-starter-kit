import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
//import { BrowserRouter as useNavigate } from "react-router-dom";
export default function Navbar() {
  const [userEmail, setUserEmail] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setUserEmail(data.username);
      });
    });
  }, []);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <>
        {userEmail ? (
          <>
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
              <Typography variant="subtitle2">{userEmail}</Typography>
              <Button
                onClick={() => {
                  localStorage.setItem("token", null);
                  window.location = "/";
                }}
                variant="contained"
                color="primary"
              >
                Logout
              </Button>
            </div>
          </>
        ) : (
          <>
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
              <span style={{ marginRight: "10px" }}></span>
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
          </>
        )}
      </>
    </div>
  );
}
