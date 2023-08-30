import { useState } from "react";
import { Link } from "react-router-dom";

import { mainMenuItems } from "../constants";
import {
  Avatar,
  HomeIcon,
  Box,
  Button,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  AppBar,
  MenuIcon,
  InfoIcon,
  PhoneIcon,
  CarRepairIcon,
  DirectionsCarIcon,
  deepOrange
} from "../materials";
const Navbar = () => {
  //for account menu
  const [menuItem, setMenuItem] = useState(null);
  const accountBackdropOpen = Boolean(menuItem);
  const handleClick = (e) => {
    setMenuItem(e.currentTarget);
  };
  const handleClose = () => {
    setMenuItem(null);
  };
  //for sideway drawer menu
  const icons = [
    <HomeIcon />,
    <InfoIcon />,
    <PhoneIcon />,
    <CarRepairIcon />,
    <DirectionsCarIcon />,
  ];
  const [showDrawer, setShowDrawer] = useState(false);
  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={() => toggleDrawer()}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
              <Drawer
                anchor="left"
                open={showDrawer}
                onClose={() => toggleDrawer()}
              >
                <Box
                  role="presentation"
                  onClick={() => toggleDrawer()}
                  onKeyDown={() => toggleDrawer()}
                >
                  <List>
                    {mainMenuItems.map((text, index) => (
                      <Link
                        to={`/${text.toLowerCase()}`}
                        className="link"
                        key={text}
                      >
                        <ListItemButton>
                          <ListItemIcon>{icons[index]}</ListItemIcon>
                          <ListItemText primary={text} />
                        </ListItemButton>
                      </Link>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <Link to="/" className="link">
                CarRental
              </Link>
            </Typography>
            <Button
              color="inherit"
              id="basic-button"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ bgcolor: deepOrange[500] }}>A</Avatar>
            </Button>
            <Menu
              anchorEl={menuItem}
              open={accountBackdropOpen}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
