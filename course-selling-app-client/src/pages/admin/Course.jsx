import { useState, useEffect } from "react";
import { CourseCard } from "../../components/CourseCard";
import { useParams } from "react-router-dom";
import { UpdateCourse } from "../../components/UpdateCourse";

export const Course = () => {
  const { courseId } = useParams();
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res) => {
      res.json().then((data) => {
        setCourses(data.courses);
      });
    });
  }, []);

  let course = null;
  for (let i = 0; i < courses.length; i++) {
    if (courses[i].id == courseId) {
      course = courses[i];
    }
  }

  if (!course) {
    return (
      <div>
        <h1>Loading.....</h1>
      </div>
    );
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CourseCard course={course} />
      <UpdateCourse course={course} setCourses={setCourses} courses={courses} />
    </div>
  );
};
