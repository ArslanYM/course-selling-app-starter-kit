import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import MenuIcon from "@mui/icons-material/Menu";

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
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Coursera
          </Typography>

          <>
            {!userEmail ? (
              <>
                <Button
                  onClick={() => {
                    navigate("/signin");
                  }}
                  color="inherit"
                >
                  Login
                </Button>
                <Button
                  onClick={() => {
                    navigate("/signup");
                  }}
                  color="inherit"
                >
                  SignUp
                </Button>{" "}
              </>
            ) : (
              <>
                <Button color="inherit">{userEmail}</Button>
                <Button
                  color="inherit"
                  onClick={() => {
                    localStorage.setItem("token", null);
                    window.location = "/";
                  }}
                >
                  Logout
                </Button>
              </>
            )}
          </>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
