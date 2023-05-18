import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import backgroundImage from "assets/O.R.R.A-jumbtron-color.png";


const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
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
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" fontSize="32px" color="black">
          O.R.R.A
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem" 
        backgroundColor={theme.palette.background.alt}
        textAlign="center"
      >
        <Typography fontWeight="500" variant="h3"  color="#abc504"
        sx={{ 
          mb: "1.5rem"
          }}>
          GET UNSTUCK! 
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;