import { CssBaseline, Grid, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'

function Tour2() {
  return (
    <>
    <CssBaseline />
    <Container maxWidth="false" id="tour2" sx={{ width: 1, textAlign: "center", backgroundColor:"#F3F5F5", padding: "3% 0" }}>
        <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
            <Grid item xs={12}>
                <Typography sx={{fontFamily:"Raleway", fontWeight:"bold", fontSize:"15px"}}>MAPPING</Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography sx={{fontFamily:"Kaisei HarunoUmi", fontWeight:"bold", fontSize:"40px"}}>TAKE A LOOK AT DRT HOUSE MAP</Typography>
            </Grid>
            <Grid item xs={12}>
                <img src="/static/images/TourImages/FloorPlan.png" class="img-fluid" alt="Floor Plan" width="600px"/>
            </Grid>
        </Grid>
    </Container>
    </>
  )
}

export default Tour2