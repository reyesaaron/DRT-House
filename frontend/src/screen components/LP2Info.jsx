import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import BungalowIcon from '@mui/icons-material/Bungalow';

const date = new Date()
const time = date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })

function LP2Info() {

  return (
    <> 
    <CssBaseline />
    <Container 
    maxWidth="false"
    sx={{backgroundImage: `url(/static/images/LP2BG.png)`, 
    width: 1,
    padding:"50px 0",
    backgroundSize:"cover"
    }}> 

      <Grid container spacing={{ xs: 2, md: 3, lg:5}} columns={{ xs: 4, sm: 8, md: 12 }} sx={{display:"flex", padding:"0% 10%"}}>
        <Grid item xs={12}>
          <Typography sx={{textAlign:"center", fontFamily:"Raleway", fontWeight:"Bold"}}>DRT HOUSE</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography sx={{textAlign:"center", fontFamily:"Kaisei HarunoUmi", fontWeight:"Bold", fontSize:"40px"}}>THE BEST TRANSIENT HOUSE IN THE <br/>DOÑA REMEDIOS TRINIDAD <br/>WHERE NATURE AND SECLUSION COMBINE</Typography>
        </Grid>
        <Grid item xs={6}>
          <Box>
              <img src="/static/images/LP2images/image.JPG" alt="drt house" width="100%" height="100%" />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{marginBottom:"20px", fontFamily:"Raleway", fontWeight:"600"}}>LOCAL TIME {time} | WEATHER 31'C 87.8'F</Typography>
          <Typography sx={{fontFamily:"Raleway", fontWeight:"500", color:"#454545"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum ratione quo voluptate a eligendi deleniti, ipsum unde, veniam explicabo repellat odit sapiente mollitia magnam quod? Molestiae dolore numquam odit! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero possimus labore quisquam ea! Consectetur reprehenderit, itaque voluptates saepe officiis corporis placeat sunt dolores perferendis? Distinctio expedita saepe culpa optio officia?</Typography>
          <br></br>
          <Typography sx={{fontFamily:"Raleway", fontWeight:"500", color:"#454545"}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis voluptatum ratione quo voluptate a eligendi deleniti, ipsum unde, veniam explicabo repellat odit sapiente mollitia magnam quod? Molestiae dolore numquam odit!</Typography>
          <br/><hr/><br/>
        <a href="https://www.facebook.com/DRTHouseee/reviews" target="blank" style={{textDecoration:"none", color:"black"}}><Typography sx={{fontFamily:"Raleway", fontWeight:"600", color:"Black"}}>READ REVIEWS</Typography></a>

        </Grid>
        <Grid item xs={8}>
          <Typography>AT A GLIMPSE</Typography>
          <ul>
            <li>Private with Infinity Pool</li>
            <li>Breathtaking nature</li>
            <li>No-menu dining concept</li>
          </ul>
        </Grid>
        <Grid container item xs={6} spacing={2}>
          <Grid item xs={12}>
            <Typography><AccessTimeIcon/> CHECK-IN 4:00 PM | CHECK-OUT 2:00PM</Typography>
          </Grid>
          
          <Grid item xs={6}>
            <Typography><HouseSidingIcon/>  Bahay Kubo</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography><BungalowIcon />  Teepee Huts</Typography>
          </Grid>
        </Grid>
      </Grid>

    </Container>
</>
  )
}

export default LP2Info