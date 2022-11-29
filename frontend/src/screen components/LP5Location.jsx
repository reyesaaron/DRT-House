import { CssBaseline, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function LP5Location() {
  return (
    <>
    <CssBaseline/>
    <Container       
        maxWidth="false"
        id="lp5"
        sx={{
          width: 1,
          height:"100vh", 
        }}>
        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex",padding:"5% 10%"  }}>
            <Grid item xs={12}>
                <Typography sx={{fontFamily:"Raleway", fontWeight:"bold", fontSize:"15px", textAlign:"center"}}>LOCATION</Typography>
            </Grid>
            <Grid item xs={12} sx={{padding:"30px 0"}}>
             <Typography sx={{fontFamily:"Kaisei HarunoUmi", fontWeight:"bold", fontSize:"40px", textAlign:"center"}}>YOUR DRT HOUSE ADVENTURES</Typography>
            </Grid>
            <Grid item xs={8}>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4853.034160979476!2d121.08377161529076!3d14.964641972062282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339709e2fd07d72b%3A0xdfa27254bf20c1e9!2sDRT%20house%20(Diamante%20Reyes%20Transient%20House)!5e1!3m2!1sen!2sph!4v1669699583372!5m2!1sen!2sph" width="100%" height="500px" title='DRT House' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </Grid>
            <Grid item xs={4}>
                <Box sx={{width:"100%", height:"100%", backgroundColor:"#14102A", padding:"15% 10%"}}>
                    <Typography sx={{fontFamily:"Kaisei HarunoUmi", fontWeight:"bold", fontSize:"18px", color:"white"}}>DRT HOUSE</Typography>
                    <Typography sx={{fontFamily:"Raleway", fontWeight:"bold", fontSize:"12px", color:"white" }}><LocationOnIcon /> DRT House with infinity pool Located at Sitio Kutad, Tanawan St. Pulong Sampaloc DRT Bulacan</Typography>
                    <br></br>
                    <hr style={{border:"1px solid white", opacity:"1"}}/>
                </Box>
            </Grid>
        </Grid>
        
    </Container>
    </>
  )
}

export default LP5Location