import React from "react";
import { Box } from "@mui/system";
import Navbar from "../navbar/navbar";
import backgroundImage from "assets/O.R.R.A-topo-map-blk.png";

const HomePage = () => {

  return (
    <Box
    sx={{
      backgroundImage: `url(${backgroundImage})`, // set background image
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      minHeight: "100vh",
      display: "flex",
      flexDirection:"column",
    }}
    >
      <Navbar />

      </Box>
     
);
};
export default HomePage;
