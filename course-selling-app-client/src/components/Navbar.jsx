import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
// import { Link } from "react-router-dom";
//import { BrowserRouter as useNavigate } from "react-router-dom";
export default function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <Typography variant={"h6"}> Course App</Typography>
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ marginRight: "10px" }}>
          <Button
            onClick={() => {
              window.location.href = "https://localhost:5173/signin";
            }}
            variant="contained"
            color="primary"
          >
            Login
          </Button>
        </div>

        <Button
          onClick={() => {
            window.location.href = "https://localhost:5173/signup";
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
