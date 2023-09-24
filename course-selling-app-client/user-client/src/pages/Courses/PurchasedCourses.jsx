import axios from "axios";
import { PurchasedCourse } from "./components/PurchasedCourse";
import { BASE_URL } from "../../config";
import { useEffect, useState } from "react";

export const PurchasedCourses = () => {
  const [purchasedCourses, setPurchasedCourses] = useState([]);
  const init = async () => {
    const response = await axios.get(`${BASE_URL}/user/purchasedcourses`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setPurchasedCourses(response.data.purchasedCourses);
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                Continue Learning...
              </h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably t
              heard of them man bun deep jianbing selfies heirloom prism food
              truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            {purchasedCourses.map((course, index) => {
              return <PurchasedCourse course={course} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
};
