import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navigation = () => {
  return (
    <Stack
      p={2}
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
        backgroundColor: "#181A20",
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={55} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navigation;
