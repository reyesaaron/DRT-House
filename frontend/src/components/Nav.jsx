import * as React from 'react'
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import { Stack, Typography } from '@mui/material';
import { Link } from "react-router-dom";

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
  
  const drawerWidth = 240;
  const navItems = ['DRT HOUSE', 'ACCOMODATION', 'ACTIVITIES', 'TOUR', 'COVID PROTOCOL', 'CONTACT US'];
  
  const linkStyle = {
    textDecoration:"none",
    color:"black",
  }

function Nav(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Box sx={{width: "150px", height: "150px", my: 2 }}>
            <img src='/static/images/logo2-nobg.png' alt="logo" width="100%" height="100%"/>
        </Box>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item} disablePadding>
              <ListItemButton sx={{ textAlign: 'center' }}>
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav" position="static" sx={{ position: "fixed", background:"transparent", boxShadow: 0}}>
        <Toolbar sx={{display:"flex", justifyContent:"space-between", width:1, maxHeight:"200px", alignItems:"center" , bgcolor:"rgba(0,0,0,0.5)"}}>
            <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuIcon />

            </IconButton>
            <Box>

            </Box>

            <Box sx={{width: "150px", height: "150px", display: { xs: 'none', sm: 'block' }}}>
                <img src='/static/images/logo3-nobg.png' alt="logo" width="100%" height="100%"/>
            </Box>

            <Link to="/booking" style={{ textDecoration:"none"}}>
                <Button variant="contained" sx ={{height:"40px", backgroundColor:"#8fbdf2", color:"black", borderRadius:"2px"}}>Book Now</Button>
            </Link>

        </Toolbar>

            <Box sx={{ display: { xs: 'none', sm: 'flex' }, justifyContent:"center"}}>
                <Link to="/" style={linkStyle}><Typography sx={{margin:"10px"}}>DRT HOUSE</Typography></Link>
                <Link to="/accomodation" style={linkStyle}><Typography sx={{margin:"10px"}}>ACCOMODATION</Typography></Link>
                <Link to="/activities" style={linkStyle}><Typography sx={{margin:"10px"}}>ACTIVITIES</Typography></Link>
                <Link to="/tour" style={linkStyle}><Typography sx={{margin:"10px"}}>TOUR</Typography></Link>
                <Link to="/protocol" style={linkStyle}><Typography sx={{margin:"10px"}}>COVID PROTOCOL</Typography></Link>
                <Link to="/contactus" style={linkStyle}><Typography sx={{margin:"10px"}}>CONTACT US</Typography></Link>
            </Box>

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
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>

      </Box>

    </Box>
  )
}

export default Nav