import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";

function InputSearch() {
  return (
    <div
      style={{
        margin: "0px 12px",
        padding: "0 0px 0 12px",
        overflow: "hidden",
        border: "1px solid gray",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <IconButton aria-label="fingerprint" color="gray">
        <Search />
      </IconButton>
      <input
        style={{
          width: "100%",
          padding: "12px",
          border: "none",
          borderTopRightRadius: "12px",
          borderBottomRightRadius: "12px",
        }}
        placeholder="Search by Script Name"
      />
    </div>
  );
}

export default InputSearch;
