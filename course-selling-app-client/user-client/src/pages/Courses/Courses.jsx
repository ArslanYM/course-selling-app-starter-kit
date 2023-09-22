import React from "react";
import { CourseCard } from "./components/CourseCard";

export const Courses = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-col text-center w-full mb-20">
          <h1 class="text-2xl font-medium title-font mb-4 text-white">
            OUR COURSES
          </h1>
          <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably heard
            of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          <CourseCard />
        </div>
      </div>
    </section>
  );
};
