import { Box, useTheme } from "@mui/material";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import DataTableComp from "./components/DataTableComp";

// Constants for reusable values
const MAX_WIDTH = 600;
const BOTTOM_NAV_HEIGHT = 7;

function App() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        maxWidth: MAX_WIDTH,
        margin: "0 auto",
        height: "100vh",
        backgroundColor: theme.palette.background.default,
        overflowX: "hidden",
        boxShadow: 3,
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header />

      <Box
        component="main"
        sx={{
          flex: 1,
          overflowY: "auto",
          pb: BOTTOM_NAV_HEIGHT,
        }}
      >
        <DataTableComp />
      </Box>

      <Box
        component="nav"
        sx={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          zIndex: theme.zIndex.appBar,
        }}
      >
        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
}

export default App;
