import { Card, Typography } from "@mui/material";
export const CourseCard = (props) => {
  return (
    <>
      <Card
        style={{
          margin: 10,
          width: 300,
          minHeight: 200,
        }}
        variant="outlined"
      >
        <Typography variant="h5">{props.course.title}</Typography>
        <Typography variant="subtitle1">{props.course.description}</Typography>
        <img src={props.course.imageLink} />
      </Card>
    </>
  );
};
