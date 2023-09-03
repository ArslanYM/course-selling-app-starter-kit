import { TextField, Button, Typography, Card } from "@mui/material";
import { useState } from "react";
export const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const [price, setPrice] = useState(0);

  function handleClick() {
    fetch("http://localhost:3000/admin/courses", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
        price: price,
        imageLink: imageLink,
        published: "true",
      }),
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  }
  return (
    <div>
      <Card variant="outlined">
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
          <TextField
            onChange={(e) => {
              setImageLink(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            label="Image link"
          />
          <TextField
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            margin="normal"
            required
            fullWidth
            label="Price in $"
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
      </Card>
    </div>
  );
};
