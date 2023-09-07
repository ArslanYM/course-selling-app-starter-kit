import { useEffect, useState } from "react";
import { CourseCard } from "../../components/CourseCard";
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
      });
    });
  }, []);
  return (
    <>
      {isLoading ? (
        <div>
          <h1>Loading.......</h1>
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          {courses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
        </div>
      )}
    </>
  );
};
