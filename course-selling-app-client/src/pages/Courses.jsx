import  { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
export const Courses = () => {

  const [courses, setCourses] = useState([]);
  const [isLoading , setIsLoading] = useState(true)
  useEffect( () => {
     fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then((res)=>{
        res.json().then((data)=>{
            setIsLoading(false);
            setCourses(data.courses);
        })
    });
  }, []);
  return(
    <>
        {isLoading? 
        
        <div>
            <h1>
                Loading.......
            </h1>
        </div>
        :
        <div style={{
            paddingTop: "100px"
        }}>
           {
            courses.map((course,index)=>{
                return(
                    <>
                    <div style={{
                        flex: "flex-wrap"
                    }}>
                    <div style={{
                        
                        minHeight:100
                    }} key={index}>
                    <Card variant="outlined">
                     <Typography
                     variant="h5">{course.title}</Typography>
                     <Typography variant="subtitle1">{course.description}</Typography>
                     <img src={course.imageLink}/>
                    </Card>
                        
                    </div>
                    </div>
                    </>
                );
            })
           }
        </div>
        }
    </>
  );
};
