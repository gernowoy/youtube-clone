import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
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
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
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
