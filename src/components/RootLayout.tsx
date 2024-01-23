import { Outlet } from "react-router-dom";

import { Box } from "@mui/material";
import Navbar from "./Navigation";

const RootLayout = () => {
  
  return (
    <Box sx={{ backgroundColor: "#0f3" }}>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </Box>
  );
}

export default RootLayout