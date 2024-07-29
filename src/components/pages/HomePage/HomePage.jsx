import { Box } from "@mui/material";
import HomePagebgd from "../../../assets/HomePagebgd.jpg";
import MenuSectionHomePage from "./MenuSectionHomePage/MenuSectionHomePage";
import SearchTourSection from "./SearchTourSection/SearchToursection";
import PopularTours from "./PopularTours";

const HomePage = () => {
  return (
    <Box
      sx={{
        position: "relative",
        margin: 0,
      }}
    >
      <Box
        sx={{
          "&:before": {
            content: "''",
            position: "absolute",
            top: "-100px",
            left: "-150px",
            right: "-150px",
            bottom: "-200px",
            backgroundImage: `url(${HomePagebgd})`,
            backgroundHeight: "800px",
            backgroundSize: "cover",
            backgroundPosition: "center",
            zIndex: -1,
          },
        }}
      />
      <MenuSectionHomePage />
      <SearchTourSection />
      <PopularTours />
    </Box>
  );
};

export default HomePage;
