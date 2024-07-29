import { Box, Grid, Link, Typography, Stack } from "@mui/material";
import picture1 from "../../../assets/PopularTours/1.jpg";
import picture2 from "../../../assets/PopularTours/2.jpg";
import picture3 from "../../../assets/PopularTours/3.jpg";
import picture4 from "../../../assets/PopularTours/4.jpg";

const PopularTours = () => {
  const ListofTours = [
    {
      name: "Talin-Stockholm-Riga",
      image: picture1,
      link: "#",
    },
    {
      name: "Talin-Stockholm-Riga",
      image: picture2,
      link: "#",
    },
    {
      name: "Talin-Stockholm-Riga",
      image: picture3,
      link: "#",
    },
    {
      name: "Talin-Stockholm-Riga",
      image: picture4,
      link: "#",
    },
  ];
  return (
    <Box sx={{ position: "absolute", top: "830px", width: "100%" }}>
      <Grid container spacing={2} justifyContent="center">
        {ListofTours.map((tour) => (
          <Grid item xs={12} sm={6} md={3} key={tour.index}>
            <Link href={tour.link}>
              <Stack
                sx={{
                  borderRadius: "5px",
                  padding: 0,
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "20px",
                }}
              >
                <img
                  src={tour.image}
                  alt={tour.name}
                  sx={{ width: "100%", height: "300px", objectFit: "cover" }}
                />
                <Typography
                  sx={{ color: (theme) => theme.typography.customBlue }}
                >
                  {tour.name}
                </Typography>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default PopularTours;
