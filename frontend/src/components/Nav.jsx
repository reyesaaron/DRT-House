import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Stack, Typography } from '@mui/material';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed" sx={{bgcolor:"rgba(0,0,0,0.5)"}}>
            <Toolbar>
                <Stack direction={"column"} sx={{width:1}}>
                    <Box sx={{display:"flex", justifyContent:"space-between", width:1, maxHeight:"200px", alignItems:"center"}}>
                        <Box/>
                        <Box sx={{width: "150px", height: "150px"}}>
                            <img src='/static/images/logo-nobg.png' alt="logo" width="100%" height="100%"/>
                        </Box>
                        <Link to="/booking">
                            <Button variant="outlined" color="error" sx ={{height:"40px", borderRadius:"0px"}}>Book Now</Button>
                        </Link>
                        
                    </Box>
                    <Box sx={{display:"flex", height:"0px", width:1, justifyContent:"center", color:"black"}}>
                            <Link to="/"><Typography sx={{margin:"10px"}}>DRT HOUSE</Typography></Link>
                            <Typography sx={{margin:"10px"}}>ACCOMODATION</Typography>
                            {/* linked to activities page */}
                            <Link to="/activities"><Typography sx={{margin:"10px"}}>ACTIVITIES</Typography></Link>
                            <Typography sx={{margin:"10px"}}>TOUR</Typography>
                            <Typography sx={{margin:"10px"}}>COVID PROTOCOL</Typography>
                            <Typography sx={{margin:"10px"}}>CONTACT US</Typography>
                    </Box>
                </Stack>
            </Toolbar>
            
        </AppBar>
    </Box>
  )
}

export default Nav