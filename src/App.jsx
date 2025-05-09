import Header from "./components/Header";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import DataTableComp from "./components/DataTableComp";
import { Box } from "@mui/material";

function App() {
  return (
    <Box
      sx={{
        maxWidth: 600, // Typical mobile max width
        margin: "0 auto", // Center horizontally
        height: "100vh", // Full viewport height
        backgroundColor: "#ffffff", // Optional background color
        overflowX: "hidden", // Prevent horizontal scroll
        boxShadow: 3, // Optional shadow for mobile-like effect
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      <Header />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          pb: 7, // Add padding bottom equal to bottom navigation height
        }}
      >
        <DataTableComp />
      </Box>
      <Box
        sx={{
          position: "sticky",
          bottom: 0,
          width: "100%",
          zIndex: 1000, // Ensure it's above other content
        }}
      >
        <SimpleBottomNavigation />
      </Box>
    </Box>
  );
}

export default App;
