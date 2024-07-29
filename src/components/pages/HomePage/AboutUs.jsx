import { Stack, Typography, Link, styled } from "@mui/material";
import aboutuslogo from "../../../assets/aboutuslogo.svg";
import { NavLink } from "react-router-dom";

const StyledNavLink = styled(Link)(() => ({
  color: "rgba(40, 40, 40, 1)",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    textDecoration: "underline",
    color: "grey",
  },
}));

const AboutUs = () => {
  return (
    <Stack
      sx={{
        flexDirection: "row",
        marginTop: "630px",
        width: "100%",
        gap: "49px",
      }}
    >
      <Stack sx={{ gap: "20px" }}>
        <Typography variant="h3">Company VR Lines</Typography>
        <Typography>
          {" "}
          Professionally drive exceptional products with dynamic schemas.
          Completely deploy empowered human capital before goal-oriented
          meta-services. Collaboratively monetize backend strategic theme areas
          without holistic e-services. Distinctively network innovative web
          services and fully researched methodologies. Monotonectally implement
          multidisciplinary vortals and holistic testing procedures.
          Professionally drive exceptional products with dynamic schemas.
          Completely deploy empowered human capital before goal-oriented
          meta-services.
        </Typography>
        <Typography>
          {" "}
          Professionally drive exceptional products with dynamic schemas.
          Completely deploy empowered human capital before goal-oriented
          meta-services. Collaboratively monetize backend strategic theme areas
          without holistic e-services. Distinctively network innovative web
          services and fully researched methodologies. Monotonectally implement
          multidisciplinary vortals and holistic testing procedures.
          Professionally drive exceptional products with dynamic schemas.
          Completely deploy empowered human capital before goal-oriented
          meta-services.
        </Typography>
        <Stack sx={{ width: "55%" }}>
          <StyledNavLink src="#">
            <Typography sx={{ color: "black" }}>Licency</Typography>
          </StyledNavLink>
          <StyledNavLink>
            <Typography sx={{ color: "black" }}>For Our Clients</Typography>
          </StyledNavLink>
          <StyledNavLink>
            <Typography sx={{ color: "black" }}>Vacancies</Typography>
          </StyledNavLink>
          <StyledNavLink>
            <Typography sx={{ color: "black" }}>Contacts</Typography>
          </StyledNavLink>
          <StyledNavLink>
            <Typography sx={{ color: "black" }}>Reviews</Typography>
          </StyledNavLink>
        </Stack>
      </Stack>
      <Stack sx={{ width: "400px" }}>
        <img
          src={aboutuslogo}
          alt="LOGO"
          sx={{ width: "181px", height: "400px" }}
        />
      </Stack>
    </Stack>
  );
};

export default AboutUs;
