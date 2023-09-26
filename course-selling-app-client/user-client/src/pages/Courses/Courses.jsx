import { useEffect, useState } from "react";
import { CourseCard } from "./components/CourseCard";
import { BASE_URL } from "../../config";
import axios from "axios";
export const Courses = () => {
  const [courses, setCourses] = useState([]);
  const init = async () => {
    const response = await axios.get(`${BASE_URL}/user/courses`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    setCourses(response.data.courses);
    console.log(courses);
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white">
            OUR COURSES
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably heard
            of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {courses.map((course, index) => {
            return <CourseCard key={index} course={course} />;
          })}
        </div>
      </div>
    </section>
  );
};
