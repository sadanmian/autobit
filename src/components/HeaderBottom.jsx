import { Add, Fingerprint } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Switch,
  Typography,
} from "@mui/material";
import React from "react";

function HeaderBottom() {
  return (
    <Box>
      <Typography
        style={{ textAlign: "center" }}
        variant="body2"
        sx={{ color: "red", marginBottom: "8px" }}
      >
        Public News: For Support, Call +91 9180805080 (WhatsApp ONLY)
      </Typography>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          //   padding: "16px",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Button
          //   variant="outlined"
          startIcon={
            <IconButton
              style={{ backgroundColor: "#1976d2", color: "white" }}
              aria-label="fingerprint"
            >
              <Add />
            </IconButton>
          }
          sx={{
            flex: 1,
            // marginRight: "8px",
            color: "#000",
            padding: "16px",
            // borderColor: "#1976d2",
            // backgroundColor: "#fff",
            textTransform: "none",
            fontSize: "14px",
          }}
        >
          Press and hold to select script
        </Button>
        <Divider orientation="vertical" flexItem />
        <Button
          //   variant="outlined"
          startIcon={
            <IconButton
              style={{ backgroundColor: "#1976d2", color: "white" }}
              aria-label="fingerprint"
            >
              <Add />
            </IconButton>
          }
          sx={{
            flex: 1,
            marginRight: "8px",
            color: "#000",
            padding: "16px",
            // borderColor: "#1976d2",
            // backgroundColor: "#fff",
            textTransform: "none",
            fontSize: "14px",
          }}
        >
          Press and hold to select script
        </Button>
      </Box>

      <Box
        sx={{
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "#000", marginRight: "8px" }}
          >
            Pro View
          </Typography>
          <Switch
            defaultChecked
            sx={{ "& .MuiSwitch-thumb": { backgroundColor: "#fff" } }}
          />
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Typography
            variant="body2"
            sx={{ color: "#000", marginRight: "8px" }}
          >
            One Click Trade
          </Typography>
          <Switch
            defaultChecked
            sx={{ "& .MuiSwitch-thumb": { backgroundColor: "#fff" } }}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default HeaderBottom;
