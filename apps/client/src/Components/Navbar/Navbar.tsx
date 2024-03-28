import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { routePaths, routes } from "../../Routes/Routes";
import logo from "../../assets/postify-logo.png";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../features/Auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const user = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    console.log("open");
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = (path: string) => {
    navigate(path);
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href={routePaths.home}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="PostifyLogo" src={logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {routes.map((route) => {
                if (
                  !user.user &&
                  (route.title === "Login" || route.title === "Sign Up")
                ) {
                  return (
                    <MenuItem
                      key={route.title}
                      onClick={() => handleCloseNavMenu(route.path)}
                    >
                      <Typography textAlign="center">{route.title}</Typography>
                    </MenuItem>
                  );
                } else if (user.user && route.title === "Logout") {
                  return (
                    <MenuItem
                      key={route.title}
                      onClick={() => {
                        dispatch(logout());
                        localStorage.removeItem("user");
                      }}
                    >
                      <Typography textAlign="center">{route.title}</Typography>
                    </MenuItem>
                  );
                } else if (
                  route.title !== "Login" &&
                  route.title !== "Sign Up" &&
                  route.title !== "Logout"
                ) {
                  return (
                    <MenuItem
                      key={route.title}
                      onClick={() => handleCloseNavMenu(route.path)}
                    >
                      <Typography textAlign="center">{route.title}</Typography>
                    </MenuItem>
                  );
                }
              })}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href={routePaths.home}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img className="PostifyLogo" src={logo} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {routes.map((route) => {
              if (
                !user.user &&
                (route.title === "Login" || route.title === "Sign Up")
              ) {
                return (
                  <Button
                    key={route.title}
                    onClick={() => handleCloseNavMenu(route.path)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {route.title}
                  </Button>
                );
              } else if (user.user && route.title === "Logout") {
                return (
                  <Button
                    key={route.title}
                    onClick={() => {
                      dispatch(logout());
                      localStorage.removeItem("user");
                    }}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {route.title}
                  </Button>
                );
              } else if (
                route.title !== "Login" &&
                route.title !== "Sign Up" &&
                route.title !== "Logout"
              ) {
                return (
                  <Button
                    key={route.title}
                    onClick={() => handleCloseNavMenu(route.path)}
                    sx={{ my: 2, color: "white", display: "block" }}
                  >
                    {route.title}
                  </Button>
                );
              }
            })}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
