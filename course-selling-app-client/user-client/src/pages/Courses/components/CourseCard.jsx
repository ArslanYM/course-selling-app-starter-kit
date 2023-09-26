import axios from "axios";
import { useNavigate } from "react-router-dom";
export const CourseCard = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img
            className="h-40 rounded w-full object-cover object-center mb-6"
            src={props.course.imageLink ? props.course.imageLink : ""}
            alt="courseImage"
          />
          <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
            {props.course.title}
          </h3>
          <p className="leading-relaxed text-base">
            {props.course.description}
          </p>
          <button
            onClick={async () => {
              const response = await axios.post(
                `http://localhost:3000/user/courses/${props.course._id}`,
                {
                  headers: {
                    "Content-type": "application/json",
                    Authorization: "Bearer " + localStorage.getItem("token"),
                  },
                }
              );
              console.log(response.data);
              alert("Course bought successfully ");
            }}
            className="text-md text-white font-medium title-font mb-4"
          >
            Buy Now
          </button>
        </div>
      </div>
    </>
  );
};
