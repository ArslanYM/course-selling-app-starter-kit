import { TextField, Grid, Container, Button, Typography } from "@mui/material";
export const SignIn = () => {
  return (
    <>
      <div>
        <Container maxWidth="xs">
          <div style={{ marginTop: "2rem" }}>
            <Typography variant="h4" align="center">
              Sign In
            </Typography>
            <form onSubmit={'/'}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Email"
                    variant="outlined"
                   
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Password"
                    type="password"
                    variant="outlined"
                    
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    type="submit"
                  >
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      </div>
    </>
  );
};
