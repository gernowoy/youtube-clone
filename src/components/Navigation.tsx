import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import { logo } from "../utils/constants";

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
        backgroundColor: "#000",
      }}
    >
      <Link to='/' style={{display: 'flex', alignItems: 'center'}}>
        <img src={logo} alt="logo" height={45} />
      </Link>
      this is Navigation
    </Stack>
  );
};

export default Navigation;
