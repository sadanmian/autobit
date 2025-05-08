import { AppBar } from "@mui/material";
import HeaderTop from "./HeaderTop";
import HeaderBottom from "./HeaderBottom";

function Header() {
  return (
    <AppBar
      style={{ color: "black" }}
      position="static"
      sx={{
        backgroundColor: "#fff",
        boxShadow: "none",
      }}
    >
      <HeaderTop />
      <HeaderBottom />
    </AppBar>
  );
}

export default Header;
