import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../theme";
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const handleToggleColorMode = () => {
    colorMode.toggleColorMode(); // Toggle color mode when the icon is clicked
  };

  return (
    <Box
      display="flex"
      justifyContent="flex-end" // Align items to the start of the flex container (left)
      alignItems="center" // Center items vertically within the flex container
      p={1} // Add padding for spacing
    >
      <IconButton onClick={handleToggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon />
        )}
      </IconButton>
    </Box>
  );
};

export default Topbar;
