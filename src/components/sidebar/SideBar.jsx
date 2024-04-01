// docs https://github.com/azouaoui-med/react-pro-sidebar
import { useState } from "react";
import { Menu, Sidebar, MenuItem } from "react-pro-sidebar";
import { useProSidebar } from "react-pro-sidebar";

import { Link } from "react-router-dom";
import {
  useTheme,
  Box,
  Typography,
  IconButton,
  InputBase,
} from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SwapVertIcon from "@mui/icons-material/SwapVert";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ViewInArIcon from "@mui/icons-material/ViewInAr";
import { tokens } from "../../theme";
import styles from "./sidebar.module.scss";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{
        color: selected === title ? colors.green["neon"] : colors.grey[100],
        backgroundColor: "transparent",
      }}
      onClick={() => setSelected(title)}
      icon={icon}
      routerLink={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

const MyProSidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [selected, setSelected] = useState("Dashboard");
  const { collapseSidebar, toggleSidebar, collapsed, broken } = useProSidebar();

  return (
    <Box
      sx={{
        position: "sticky",
        display: "flex",
        height: "100vh",
        top: 0,
        bottom: 0,
        zIndex: 10000,
      }}
    >
      <Sidebar breakPoint="md" backgroundColor={"rgba(33, 33, 33, 0.563)"}>
        <Menu iconshape="square">
          <MenuItem
            icon={
              collapsed ? (
                <MenuOutlinedIcon onClick={() => collapseSidebar()} />
              ) : (
                <img
                  src="../../assets/logo.svg"
                  alt="logo"
                  width={"50px"}
                  height={"50px"}
                />
              )
            }
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
              backgroundColor: "transparent",
            }}
          >
            {!collapsed && (
              <div className={styles.logoContainer}>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                  style={{ backgroundColor: "transparent" }}
                >
                  <div className={styles.logoContainer}>
                    <div className={styles.logoHeading}>
                      <h3>Carbon</h3>
                      <p>Cell</p>
                    </div>
                  </div>
                  <IconButton
                    onClick={
                      broken ? () => toggleSidebar() : () => collapseSidebar()
                    }
                  >
                    <MenuOutlinedIcon />
                  </IconButton>
                </Box>
              </div>
            )}
          </MenuItem>
          {!collapsed && (
            <Box display="flex" justifyContent="space-between" p={2}>
              <Box display="flex">
                <Box
                  display="flex"
                  backgroundColor={"rgba(255, 255, 255, 0.242)"}
                  p={0.2}
                  borderRadius={1}
                >
                  <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Search" />
                  <IconButton type="button">
                    <SearchIcon />
                  </IconButton>
                </Box>
              </Box>
            </Box>
          )}
          <Box
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "100px",
            }}
          >
            <Box>
              <Item
                title="Home"
                to="/"
                icon={<HomeOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Organisation"
                to="/team"
                icon={<CorporateFareIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Assets"
                to="/contacts"
                icon={<ViewInArIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Trade"
                to="/invoices"
                icon={<SwapVertIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="History"
                to="/form"
                icon={<HourglassEmptyIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Wallet"
                to="/calendar"
                icon={<AccountBalanceWalletOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
            <Box>
              <MenuItem
                active={selected === "Notification"}
                style={{
                  color:
                    selected === "Notification"
                      ? colors.green["neon"]
                      : colors.grey[100],
                  backgroundColor: "transparent",
                }}
                onClick={() => setSelected("Notification")}
                icon={<NotificationsNoneOutlinedIcon />}
                routerLink={<Link to="/notification" />}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography style={{ margin: "0", verticalAlign: "center" }}>
                    Notification
                  </Typography>
                  <Typography className={styles.notifications}>12</Typography>
                </div>
              </MenuItem>
              <Item
                title="Support"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Settings"
                to="/line"
                icon={<SettingsOutlinedIcon />}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Box>
        </Menu>
      </Sidebar>
    </Box>
  );
};

export default MyProSidebar;
