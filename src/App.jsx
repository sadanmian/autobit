import { Button } from "@mui/material";
import React from "react";
import Header from "./components/Header";
import SimpleBottomNavigation from "./components/SimpleBottomNavigation";
import Table from "./components/Table";

function App() {
  return (
    <div>
      <Header />
      <Table />
      <SimpleBottomNavigation />
    </div>
  );
}

export default App;
