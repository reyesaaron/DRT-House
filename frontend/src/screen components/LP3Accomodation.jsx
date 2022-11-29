import { Box, CssBaseline, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React, { useEffect } from 'react'
import Grid from '@mui/material/Grid';
// import { useState } from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';

function Accomodation() {
  // const [holder, setHolder] = useState("home")

  const carouselActivate = {
    backgroundColor: "#14102B",
    
  }

  const carouselDeactivate = {
    backgroundColor: "#8FBDF2",
    
  }

  const array = ["home", "nipa", "pool"]
  let i = 0

  const nextClick = () => {
    if (i >= 2) {
      document.getElementById(array[i - i]).style.backgroundColor = "#14102B"
      document.getElementById(array[i]).style.backgroundColor = "#8FBDF2"
      i = 0
    } else {
      document.getElementById(array[i + 1]).style.backgroundColor = "#14102B"
      document.getElementById(array[i]).style.backgroundColor = "#8FBDF2"
      i += 1
    }

    console.log(i);
  }


  const prevClick = () => {
    if (i === 0) {
      document.getElementById(array[i + 2]).style.backgroundColor = "#14102B"
      document.getElementById(array[i]).style.backgroundColor = "#8FBDF2"
      i = 2
    } else {
      document.getElementById(array[i - 1]).style.backgroundColor = "#14102B"
      document.getElementById(array[i]).style.backgroundColor = "#8FBDF2"
      i -= 1
    }
  }


  useEffect(() => {
    document.getElementById("next").addEventListener("click", nextClick)
    document.getElementById("prev").addEventListener("click", prevClick)
  })


  return (
    <>
      <CssBaseline />
      <Container maxWidth="false"
        id="lp3"
        sx={{
          backgroundColor: "#efefef",
          width: 1,
          padding: "50px 0"
        }}>
        <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex", padding: "0% 10%" }}>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: "center", fontFamily: "Raleway", fontWeight: "Bold", fontSize: "15px" }}>ACCOMODATION</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ textAlign: "center", fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "40px" }}>YOUR SECOND HUMBLE HOME</Typography>
          </Grid>
          <Grid item xs={6}>
            <Box sx={{ display: "flex", maxWidth: "400px" }}>
              <Box sx={carouselActivate} id="home">
                <Typography sx={{ fontFamily: "Raleway", fontWeight: "Bold", fontSize: "12px", color: "white" }} >HOME</Typography>
              </Box>
              <Box sx={carouselDeactivate} id="nipa"  >
                <Typography sx={{ fontFamily: "Raleway", fontWeight: "Bold", fontSize: "12px", color: "white" }}>NIPA/TEEPEE</Typography>
              </Box>
              <Box sx={carouselDeactivate} id="pool" >
                <Typography sx={{ fontFamily: "Raleway", fontWeight: "Bold", fontSize: "12px", color: "white" }} >POOL</Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={8}>
            <div id="carousel" className="carousel slide carousel-fade" data-bs-ride="true">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/static/images/LP3images/House.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px"}}>Home</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/static/images/LP3images/Nipa.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px"}}>Nipa / Teepee Huts</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src="/static/images/LP3images/Pool.jpg" className="d-block w-100" alt="..." />
                  <div className="carousel-caption d-none d-md-block">
                    <h5 style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px"}}>Pool</h5>
                    <p>Some representative placeholder content for the second slide.</p>
                  </div>
                </div>
              </div>
              <button id="prev" className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button id="next" className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                <span className="visually-hidden" >Next</span>
              </button>
            </div>
          </Grid>

          <Grid item xs={4}>
            <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px"}}>Home</Typography>
            <Typography sx={{ fontFamily: "Raleway", fontSize: "12px", color:"#454545"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis fuga modi animi, asperiores at nobis quos quis suscipit laborum possimus eaque quo voluptatem quaerat, unde labore porro incidunt saepe! <br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minima sapiente nihil sequi nostrum, ipsum quidem magnam voluptate optio provident voluptas quo accusamus similique rem aperiam dolorem repellendus eligendi magni?</Typography>
            <Button variant="contained" sx={{backgroundColor: "#14102A", borderRadius: "0px", fontFamily: "Raleway", fontWeight: "500", fontSize: "14px", width: "100%" }}>VIEW ALL ACCOMMODATION</Button>
          </Grid>
        </Grid>
      </Container>

      <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex", padding: "5% 5%", textAlign: "center",
          backgroundImage: `url(/static/images/LP3images/lp3bg.png)`,
          backgroundSize:"cover", 
          justifyContent:"center"
        }}>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
          <Typography sx={{fontFamily:"Kaisei HarunoUmi", fontSize:"45px"}}>90%</Typography>
          </Grid>
          <Grid item xs={12}>
          <Typography sx={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "14px", color:"#454545"}}>of our guest <br/>would recommend this transient</Typography><hr></hr>
          </Grid>
          <Grid item xs={6}>
          <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{fontFamily:"Raleway", fontSize:"14px"}}>SERVICE</Typography>
          </Grid>
          <Grid item xs={6}>
          <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{fontFamily:"Raleway", fontSize:"14px"}}>LOCATION</Typography>
          </Grid>
          <Grid item xs={6}>
          <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid item xs={6}>
          <Typography sx={{fontFamily:"Raleway", fontSize:"14px"}}>VALUE</Typography>
          </Grid>
        </Grid>
        <Grid item xs={6}>
          <Typography sx={{fontFamily:"Raleway", fontSize:"12px", fontWeight:"600"}}>IN THEIR WORDS</Typography>
          <Typography sx={{fontFamily:"Raleway", fontSize:"12px", color:"#454545"}}>Just spend a day at DRT House! Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
          <hr></hr>
          <Typography>Wilfredo Casiño</Typography>
        </Grid>
      </Grid>

    </>
  )
}

export default Accomodation