import { Card, Button, TextField } from "@mui/material";
import { useState } from "react";
export const UpdateCourse = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageLink, setImageLink] = useState("");
  const course = props.course;

  function handleUpdate() {
    fetch("http://localhost:3000/admin/courses/" + course.id, {
      method: "PUT",
      body: JSON.stringify({
        title,
        description,
        imageLink,
        published: "true",
      }),
      headers: {
        "content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        let updatedCourses = [];
        for (let i = 0; i < props.courses.length; i++) {
          if (props.courses[i].id == course.id) {
            updatedCourses.push({
              id: course.id,
              title,
              description,
              imageLink,
            });
          } else {
            updatedCourses.push(props.courses[i]);
          }
        }
        alert("Course has been updated");
        props.setCourses(updatedCourses);
      });
    });
  }
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card
        style={{
          width: 400,
          padding: 20,
        }}
        variant="elevation"
      >
        <TextField
          margin="normal"
          required
          label="Title"
          autoFocus
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <TextField
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          margin="none"
          fullWidth
          required
          label="description"
          autoFocus
        />
        <TextField
          onChange={(e) => {
            setImageLink(e.target.value);
          }}
          margin="normal"
          required
          label="Image Link"
          fullWidth
          autoFocus
        />
        <Button
          onClick={handleUpdate}
          type="submit"
          variant="contained"
          fullWidth
        >
          Update Course
        </Button>
      </Card>
    </div>
  );
};
