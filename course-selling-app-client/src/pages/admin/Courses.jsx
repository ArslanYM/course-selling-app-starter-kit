import { useEffect, useState } from "react";
import { CourseCard } from "../../components/CourseCard";
import { Container, Typography, Grid } from "@mui/material";
export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setIsLoading(false);
        setCourses(data.courses);
        console.log(courses);
      });
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading.......</h1>
          {console.log("Please sign in ")}
        </div>
      ) : (
        <div>
          <Container maxWidth="lg">
            <Typography
              variant="h4"
              align="center"
              style={{ marginTop: "2rem" }}
            >
              Welcome to the courses section , Here are some of our best courses
            </Typography>
            <Grid container spacing={3} style={{ marginTop: "2rem" }}>
              {courses.map((course, index) => {
                return <CourseCard key={index} course={course} />;
              })}
            </Grid>
          </Container>
        </div>
      )}
    </>
  );
};
``;
