import { TextField, Button, Typography, Box } from "@mui/material";
import { useState } from "react";
export const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  function handleClick() {
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        price: "100$",
        imageLink: "https://somelink.com",
        published: "true",
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        localStorage.setItem("token", data.token);
      });
    });
  }
  return (
    <div>
      <Box component="form">
        <div>
          <Typography variant="h4">Add the following details </Typography>
          <TextField
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            label="Title"
            autoFocus
          />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            label="Description"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            onClick={handleClick}
          >
            Add Course{" "}
          </Button>
        </div>
      </Box>
    </div>
  );
};
