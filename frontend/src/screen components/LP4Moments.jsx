import { CssBaseline, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import Grid from '@mui/material/Grid';
import React from 'react'

function LP4Moments() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="false"
        id="lp4"
        sx={{
          backgroundColor: "#efefef",
          width: 1,
          padding:"5% 0"
        }}>

        <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex" }}>

          <Grid item xs={12} sx={{textAlign:"center", padding:"0", margin:"2rem 0"}}>
            <Typography sx={{fontFamily:"Raleway", fontWeight:"bold", fontSize:"15px"}}>FOLLOW US</Typography>
            <Typography sx={{fontFamily:'Kaisei HarunoUmi', fontWeight:"bold", fontSize:"40px"}}>YOUR DRT HOUSE MOMENTS</Typography>
          </Grid>
            <Grid item xs={12} sx={{display:"flex", justifyContent:"center", flexWrap:'wrap'}}>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"#14102A", padding:"2%"}}>
                <Typography sx={{fontFamily:"Raleway", fontSize:"15px", color:"white"}}>CAPTURED BY YOU</Typography>
                <Typography sx={{fontFamily:"Raleway", fontSize:"15px", color:"white"}}>Share your memories with @DRTHouseee</Typography>
                <br></br>
                <Typography sx={{fontFamily:"Raleway", fontSize:"15px", color:"white"}}>SEE MORE</Typography>
              </Box>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"blue"}}>
                <img src='/static/images/LP4images/moments1.png' alt='moments1' style={{width:"100%"}}/>
              </Box>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"purple"}}>
               <img src='/static/images/LP4images/moments2.png' alt='moments2' style={{width:"100%"}}/>
              </Box>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"orange"}}>
              <img src='/static/images/LP4images/moments3.png' alt='moments3' style={{width:"100%"}}/>
              </Box>
            </Grid>

            <Grid item xs={12} sx={{display:"flex", justifyContent:"center", flexWrap:'wrap', paddingTop:"0"}}>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"pink"}}>
                <img src='/static/images/LP4images/moments4.png' alt='moments4' style={{width:"100%"}}/>
              </Box>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"yellow"}}>
              <img src='/static/images/LP4images/moments5.png' alt='moments5' style={{width:"100%"}}/>
              </Box>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"red"}}>
              <img src='/static/images/LP4images/moments7.png' alt='moments6' style={{width:"100%"}}/>
              </Box>
              <Box sx={{width:"300px", height:"300px", backgroundColor:"black"}}>
              <img src='/static/images/LP4images/moments6.png' alt='moments7' style={{width:"100%"}}/>
              </Box>
            </Grid>
        </Grid> 
      </Container>
    </>
  )
}


export default LP4Moments