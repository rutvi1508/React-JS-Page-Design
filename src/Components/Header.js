import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Slider from "react-slick";
import logo from "../Images/logo.png";
import cart from "../Images/cart.png";
import { Grid, TextField } from "@mui/material";
import "../Style/Home.scss";
import "../Style/Header.scss";
import "../Style/Footer.scss";
import PropTypes from "prop-types";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const Search = styled("Box")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));
  
  const SearchIconWrapper = styled("Box")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));
  
  const drawerWidth = 240;
  
  const navItems = [
    "Home",
    "About us",
    "Subscription Options",
    "Sample Tests",
    "Testimonials",
    "Contact",
  ];
  
  function Header(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
        {/*  <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Boxider /> */}
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container =
      window !== undefined ? () => window().document.body : undefined;



  return (
    <div>
 {/*  Menu bar Section  */}
 <Box className="head_container">
        <Grid container className="head-grid">
          <Box>
            <AppBar component="nav">
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ mr: 2, display: { sm: "none" } }}
                >
                  <MenuIcon />
                </IconButton>
                <Stack >
                        <Avatar alt="Remy Sharp" variant="square" src={logo} className="logo" />
                      </Stack>
                <Grid container spacing={0} className="menu-grid">
                  <Box sx={{ display: { xs: "none", sm: "block" } }}>
                    {navItems.map((item) => (
                      <Button key={item} sx={{ color: "#fff" }}>
                        {item}
                      </Button>
                    ))}
                  </Box>
                  <Grid item>
                    <Search className="search_icon">
                      <SearchIconWrapper>
                        <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search???"
                        inputProps={{ "aria-label": "search" }}
                      />
                    </Search>
                  </Grid>
                  <Grid item>
                    <Stack >
                        <Avatar alt="Remy Sharp" variant="square" src={cart} />
                      </Stack>
                  </Grid>
                  <Grid item>
                    <Button variant="contained" className="login_btn">
                      Log in / Sign up
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
            <Box component="nav">
              <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                  display: { xs: "block", sm: "none" },
                  "& .MuiDrawer-paper": {
                    boxSizing: "border-box",
                    width: drawerWidth,
                  },
                }}
              >
                {drawer}
              </Drawer>
            </Box>
            <Box component="main" sx={{ p: 3 }}>
              <Toolbar />
            </Box>
          </Box>
        </Grid>
      </Box>
      {/* Menu bar section Over */}
    </div>
  )
}
Header.propTypes = {
    window: PropTypes.func,
  };
export default Header