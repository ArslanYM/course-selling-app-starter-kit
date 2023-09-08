import {
  Typography,
  Card,
  Container,
  Button,
  Grid,
  CardContent,
} from "@mui/material";
export const HomePage = () => {
  const courses = [
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      price: "$99.99",
    },
    {
      id: 2,
      title: "Course 2",
      description: "Description for Course 2",
      price: "$79.99",
    },
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      price: "$99.99",
    },
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      price: "$99.99",
    },
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      price: "$99.99",
    },
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      price: "$99.99",
    },
    {
      id: 1,
      title: "Course 1",
      description: "Description for Course 1",
      price: "$99.99",
    },
    // Add more course data as needed
  ];
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" style={{ marginTop: "2rem" }}>
        Welcome to the Course Selling App
      </Typography>
      <Grid container spacing={3} style={{ marginTop: "2rem" }}>
        {courses.map((course) => (
          <Grid item xs={12} sm={6} md={4} key={course.id}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {course.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {course.description}
                </Typography>
                <Typography variant="h5" style={{ marginTop: "1rem" }}>
                  {course.price}
                </Typography>
              </CardContent>
              <Button variant="contained" color="primary" fullWidth>
                Buy Now
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
