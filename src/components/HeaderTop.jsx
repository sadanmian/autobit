import {
  Add,
  Edit,
  EditSquare,
  Menu,
  MenuBook,
  StarBorder,
} from "@mui/icons-material";
import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";

function HeaderTop() {
  return (
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <IconButton sx={{ color: "gray" }}>
        <Menu />
      </IconButton>
      <Typography
        variant="h6"
        sx={{
          flexGrow: 1,
          textAlign: "center",
          color: "#000",
          fontWeight: "bold",
        }}
      >
        Quotes
      </Typography>
      <div>
        <IconButton sx={{ color: "gray" }}>
          <StarBorder />
        </IconButton>
        <IconButton sx={{ color: "gray" }}>
          <Add />
        </IconButton>
        <IconButton sx={{ color: "gray" }}>
          <EditSquare />
        </IconButton>
      </div>
    </Toolbar>
  );
}

export default HeaderTop;
