import * as React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  Button,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;

// Main navigation items
const navItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Ongoing Projects", path: "/ongoing-projects" },
  { label: "Services", path: "/services" },
  { label: "Contact Us", path: "/contact" },
];

// Pages always visible in mobile view
const alwaysVisibleItems = [
  { label: "Home", path: "/" },
  { label: "Projects", path: "/projects" },
  { label: "Contact", path: "/contact" },
];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const [selected, setSelected] = React.useState(null);

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", alignItems: "center" }}>
    <Typography
      variant="h6"
      component="div"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: { xs: "1rem", sm: "1.5rem" },
        width: "100%",
      }}
    >
      <img
        src="https://res-console.cloudinary.com/dhbvmqhmg/media_explorer_thumbnails/9153a42e5668632086f7fac15acc65a5/detailed"
        alt="Logo"
        style={{
          width: "50%",
          height: "50%",
          objectFit: "cover",
          display: "block",
          margin: "0 auto",
        }}
      />
    </Typography>

    <Divider />

    <List>
      {navItems.map((item) => (
        <ListItem key={item.label} disablePadding>
          <ListItemButton
            component={Link}
            to={item.path}
            onClick={() => setSelected(item.label)} // Set the selected item
            sx={{
              textAlign: "center",
              backgroundColor: selected === item.label ? "#00853E" : "transparent", // Change color when selected
              color: selected === item.label ? "#fff" : "inherit", // Change text color
              borderRadius: "5px",
              "&:hover": {
                backgroundColor: "#00853E",
                color: "#fff",
              },
            }}
          >
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  </Box>
  
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="sticky"  sx={{
    backgroundColor: "white",
    color:"black", // Default background color
    transition: "background-color",
    "&:hover": {
      backgroundColor: "#00853E",
      color: "white", // Change background color on hover
    },
  }}  >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* Left side: Logo & Menu Button */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 1, display: { xs: "block", sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo with reduced size */}
            <Typography
  variant="h6"
  component="div"
  sx={{
    display: "flex",
    alignItems: "center",
    fontSize: { xs: "1rem", sm: "1.5rem" },
  }}
>
  <img
    src="https://res-console.cloudinary.com/dhbvmqhmg/media_explorer_thumbnails/9153a42e5668632086f7fac15acc65a5/detailed"
    alt="Logo"
    style={{
      width: "100px", // Default width
      height: "auto",
      objectFit: "cover",
    }}
  />
</Typography>

          </Box>

          {/* Right side: Navigation */}
          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 2 }}>
            {navItems.map((item) => (
              <Button key={item.label} color="inherit" component={Link} to={item.path}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Mobile View: Smaller buttons for Home, Projects, Contact */}
          <Box sx={{ display: { xs: "flex", sm: "none" }, gap: 1 }}>
            {alwaysVisibleItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                component={Link}
                to={item.path}
                sx={{ fontSize: "0.75rem", padding: "4px 8px" }} // Smaller font for better fit
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobile Drawer Navigation */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  window: PropTypes.func,
};

export default Navbar;
