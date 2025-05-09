import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { IconButton } from "@mui/material";
import {
  Add,
  ExpandLess,
  History,
  ImportExport,
  KeyboardArrowUp,
  StackedBarChart,
} from "@mui/icons-material";

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);
  return (
    <div
      style={
        {
          // position: "fixed",
          // bottom: 0,
          // width: "100%",
          // right: "0",
          // left: "0",
          // zIndex: 1000,
        }
      }
    >
      <BottomNavigation
        sx={{ backgroundColor: "#f5f5f5", padding: "15px" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{
            "& .MuiBottomNavigationAction-label": {
              fontSize: "12px",
              color: "red",
            },
            "& .MuiBottomNavigationAction-label.Mui-selected": {
              color: "red",
            },
          }}
          label="Quotes"
          icon={
            <IconButton style={{ color: "red" }}>
              <ImportExport />
            </IconButton>
          }
        />
        <BottomNavigationAction label="Deals" icon={<StackedBarChart />} />
        <BottomNavigationAction
          //   label="Favorites"
          icon={
            <IconButton
              style={{ backgroundColor: "red", color: "white" }}
              aria-label="fingerprint"
            >
              <KeyboardArrowUp />
            </IconButton>
          }
        />
        <BottomNavigationAction label="New Deals" icon={<StackedBarChart />} />
        <BottomNavigationAction label="History" icon={<History />} />
      </BottomNavigation>
    </div>
  );
}

export default SimpleBottomNavigation;
