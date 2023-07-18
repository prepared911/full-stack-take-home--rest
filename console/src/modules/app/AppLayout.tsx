import { AppBar, Box, Button, styled } from "@mui/material";
import { NavLink, NavLinkProps, Outlet } from "react-router-dom";

import { Logo } from "~src/modules/prepared";

const NavButton = styled(Button)(({ theme }) => ({
  color: theme.palette.grey[500],
  border: `1px solid transparent`,
  padding: theme.spacing(0.25, 2),
  ".active &": {
    color: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
  },
}));

export const AppLayout: React.FC = () => {
  const navLinkClassName: NavLinkProps["className"] = ({ isActive }) =>
    isActive ? "active" : "";

  return (
    <Box
      position="absolute"
      display="flex"
      flexDirection="column"
      sx={{ inset: 0 }}
    >
      <AppBar
        position="static"
        sx={{ flex: 0, flexDirection: "row", alignItems: "center", padding: 1 }}
      >
        <Logo />
        <Box display="flex" alignItems="center" gap={1} marginLeft={2}>
          <NavLink to="/chatrooms" className={navLinkClassName}>
            <NavButton size="small">Chatrooms</NavButton>
          </NavLink>
          <NavLink to="/archive" className={navLinkClassName}>
            <NavButton size="small">Archive</NavButton>
          </NavLink>
        </Box>
      </AppBar>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        paddingY={4}
        sx={{ overflowY: "auto" }}
      >
        <Outlet />
      </Box>
    </Box>
  );
};
