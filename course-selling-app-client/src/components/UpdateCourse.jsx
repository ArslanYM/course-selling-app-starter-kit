import { Container, Typography, Grid, Button, TextField } from "@mui/material";
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
    <div>
      <Container maxWidth="xs">
        <div>
          <Typography variant="h4" align="center">
            Update Course
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="New Title"
                variant="outlined"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="New Description"
                variant="outlined"
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="New Image Link"
                variant="outlined"
                onChange={(e) => setImageLink(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                onClick={handleUpdate}
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
              >
                Update Course
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
};
