import { Box, Link, Typography, Stack, Divider } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import MainButton from "../../../atoms/MainButton/MainButton";

function Label({ componentName, valueType }) {
  const content = (
    <span>
      <strong>{componentName}</strong> for {valueType} editing
    </span>
  );
  return content;
}

const SearchTourSection = () => {
  const ListofTours = [
    {
      name: "Popular",
      link: "#",
    },
    {
      name: "Tours From Berlin",
      link: "#",
    },
    {
      name: "Tours From Munich",
      link: "#",
    },
    {
      name: "Tours From Stuttgart",
      link: "#",
    },
    {
      name: "Tours From Dresden",
      link: "#",
    },
  ];
  return (
    <Stack
      sx={{
        marginTop: "500px",
        padding: "20px 18px",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
        backgroundColor: "rgba(255, 255, 255)",
      }}
    >
      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          gap: "119px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontWeight: "bold",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            Date of Departure
          </Typography>
          <Typography sx={{ color: "rgb(128,128,128)" }}>
            From Berlin
          </Typography>
        </Box>

        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={["DatePicker"]}>
            <DemoItem>
              <DatePicker label={"From"} />
            </DemoItem>
            <DemoItem>
              <DatePicker label={"To"} />
            </DemoItem>
            <MainButton buttonText={"Choose Your Tour"} />
          </DemoContainer>
        </LocalizationProvider>
      </Stack>

      <Divider flexItem />

      <Stack
        sx={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
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
    </Stack>
  );
};

export default SearchTourSection;
