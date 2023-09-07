import { TextField } from "@mui/material";
import { Button , Card} from "@mui/material";
export const SignIn = () => {
  return (
    <div 
    style={{
      paddingTop: "100px",
      // alignContent:"center",
      justifyContent: "center",
      display: "flex"
    }}
    >
      <div
        style={{
          maxWidth:"70%",
          maxheight:"70"
        }}
      >
      <Card>
      <h1>Continue your learning, Login</h1>
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
        <Button type="submit" fullWidth variant="contained" >
          Sign In
        </Button>
      </Card>
        
      </div>
    </div>
  );
};
