import { TextField, Button, Typography, Container, Grid } from "@mui/material";
import { useState } from "react";
import axios from "axios";
export const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState(0);

  async function handleClick() {
    await axios.post(
      "http://localhost:3000/admin/courses",
      {
        title,
        description,
        price: price,
        imageLink: imageLink,
        published: "true",
      },
      {
        headers: {
          "Content-type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      }
    );
  }
  return (
    <div>
      <Container maxWidth="xs">
        <div style={{ marginTop: "2rem" }}>
          <Typography variant="h4" align="center">
            Add a new course
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Title"
                variant="outlined"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                fullWidth
                label="Description"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setImageLink(e.target.value);
                }}
                fullWidth
                type="url"
                label="Image link"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
                fullWidth
                label="Price in $"
                type="number"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Add course
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
