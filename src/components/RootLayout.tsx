import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Navbar from "./Navigation";

const RootLayout = () => {
  
  return (
    <Box sx={{ backgroundColor: "#181A20" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}

export default RootLayout