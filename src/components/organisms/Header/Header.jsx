import { AppBar, Typography, Divider, Stack, Toolbar } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Logo from "../../../assets/Logo.svg";

const Header = () => {
  const menuItems = [
    {
      name: "Main",
      link: "Main",
    },
    {
      name: "Tours",
      link: "Tours",
    },
    {
      name: "Tickets",
      link: "Tickets",
    },
    {
      name: "Visas",
      link: "Visas",
    },
    {
      name: "About Company",
      link: "About Company",
    },
    {
      name: "Vacancies",
      link: "Vacancies",
    },
  ];

  return (
    <AppBar
      sx={{
        position: "static",
        backgroundColor: "rgba(255, 255, 255, 0)",
        boxShadow: "none",
        height: "70px",
        marginTop: "30px",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "space-between",
            gap: "15px",
          }}
        >
          <img src={Logo} alt="Logo" />
          <Divider
            variant="middle"
            orientation="vertical"
            flexItem
            sx={{ color: (theme) => theme.palette.primary.main }}
          />
          <Stack>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              +375(29) 135-10-20
            </Typography>
            <Typography sx={{ color: (theme) => theme.palette.primary.main }}>
              +375(29) 135-10-20
            </Typography>
          </Stack>
        </Stack>

        <Stack sx={{ flexDirection: "row", gap: 3 }}>
          {menuItems.map((item) => (
            <ScrollLink to={item.link} smooth={true} duration={500}>
              <Typography
                component="span"
                sx={{
                  color: "white",
                  cursor: "pointer",
                  "&:hover": { color: "grey", textDecoration: "none" },
                }}
              >
                {item.name}
              </Typography>
            </ScrollLink>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
