import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import { BrowserRouter as Link } from "react-router-dom";
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
          <Link to="">
            <Button variant="contained" color="primary">
              Login
            </Button>
          </Link>
        </div>
        <Link to="/signup">
          <Button variant="contained" color="primary">
            SignUp
          </Button>
        </Link>
      </div>
    </div>
  );
}
