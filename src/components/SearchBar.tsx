import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  useState();
  useNavigate();

  return (
    <Paper
      component="form"
      onSubmit={() => {}}
      sx={{
        mr: { sm: 5 },
        pl: 2,
        border: "1px solid #e3e3e3",
        borderRadius: 20,
        boxShadow: "none",
      }}
    >
      <input
        placeholder="Search..."
        value=""
        onChange={() => {}}
        style={{
          border: "none",
          outline: "none",
          width: "300px",
        }}
      />
      <IconButton type="submit" sx={{ p: "10px", color: "#780000" }}>
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
