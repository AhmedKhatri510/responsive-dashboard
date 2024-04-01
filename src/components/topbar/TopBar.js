import React from "react";
import { useContext } from "react";

// components
import { ColorModeContext, tokens } from "../../theme";
import { useTheme, Box, IconButton, Typography } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";

// hooks
import { useProSidebar } from "react-pro-sidebar";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const { toggleSidebar, broken, rtl } = useProSidebar();

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box display="flex">
        {broken && !rtl && (
          <IconButton
            style={{ width: "fit-content", height: "fit-content" }}
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
        <Box display="flex" flexDirection="column">
          <Typography fontSize="30px">
            Hello,{" "}
            <span style={{ color: colors.green["neon"] }}>
              Brooklyn Simmons 👋
            </span>
          </Typography>
          <Typography fontSize="20px">
            Welcome to{" "}
            <span style={{ color: colors.green["neon"] }}>Spot trading !</span>
          </Typography>
        </Box>
      </Box>
      <Box display="flex">
        <Box display="flex" gap="10px">
          <IconButton
            style={{
              backgroundColor: colors.green["neon"],
              width: "fit-content",
              height: "40px",
              borderRadius: "5px",
            }}
          >
            <Typography>Start trading</Typography>
          </IconButton>
          <IconButton
            style={{ width: "fit-content", height: "fit-content" }}
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "dark" ? (
              <LightModeOutlinedIcon />
            ) : (
              <DarkModeOutlinedIcon />
            )}
          </IconButton>
        </Box>

        {broken && rtl && (
          <IconButton
            sx={{ margin: "0 6 0 2" }}
            onClick={() => toggleSidebar()}
          >
            <MenuOutlinedIcon />
          </IconButton>
        )}
      </Box>
    </Box>
  );
};

export default Topbar;
