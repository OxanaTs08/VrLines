import { createTheme, ThemeProvider } from "@mui/material";
import AppRouter from "./AppRouter";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
  },
  typography: {
    customBlue: {
      color: "rgba(72, 101, 145, 1)",
    },
    sectionTitle: {
      // width: "100%",
      maxHeight: "max-content",
      fontSize: "2.5rem",
      fontWeight: 600,
      lineHeight: 3,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "rgba(255, 255, 255, 0.5)",
          "&:hover": {
            color: "rgba(255, 255, 255, 0.8)",
            textDecoration: "none",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: "#171717",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
