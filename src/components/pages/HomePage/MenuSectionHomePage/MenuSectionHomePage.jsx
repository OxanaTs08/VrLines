import { Stack, Link, Typography } from "@mui/material";

const MenuSectionHomePage = () => {
  const ListofTours = [
    {
      name: "Plain Tickets",
      link: "#",
    },
    {
      name: "Ferry Tickets",
      link: "#",
    },
    {
      name: "Bus Tours",
      link: "#",
    },
  ];
  return (
    <Stack
      sx={{
        height: "50px",
        padding: "17px 18px",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "end",
        gap: "38px",
        backgroundColor: "rgba(255, 255, 255)",
      }}
    >
      {ListofTours.map((tour) => (
        <Link href={"tour.link"}>
          <Typography sx={{ color: (theme) => theme.typography.customBlue }}>
            {tour.name}
          </Typography>
        </Link>
      ))}
    </Stack>
  );
};

export default MenuSectionHomePage;
