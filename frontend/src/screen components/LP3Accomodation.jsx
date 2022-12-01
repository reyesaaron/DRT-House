import { Box, CssBaseline, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import { useState } from 'react';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import "./LP3Accomodation.css"
import { Link } from "react-router-dom";

const fontStyle = { fontFamily: "Raleway", fontWeight: "Bold", fontSize: "12px", color: "white" }

function Accomodation() {
  const [activate, setActivate] = useState("home")
  const [opinion, setOpinion] = useState("wilfredo")

  const onNext = () => {
    if (activate === "home") {
      setActivate("hut")
    } else if (activate === "hut") {
      setActivate("pool")
    } else {
      setActivate("home")
    }
  }

  const onPrev = () => {
    if (activate === "home") {
      setActivate("pool")
    } else if (activate === "hut") {
      setActivate("home")
    } else {
      setActivate("hut")
    }
  }


  const onNextOpinion = () => {
    if (opinion === "wilfredo") {
      setOpinion("vitto")
    } else if (opinion === "vitto") {
      setOpinion("jerecho")
    } else {
      setOpinion("wilfredo")
    }
  }

  const onPrevOpinion = () => {
    if (opinion === "wilfredo") {
      setOpinion("jerecho")
    } else if (opinion === "vitto") {
      setOpinion("wilfredo")
    } else {
      setOpinion("vitto")
    }
  }

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
            <Typography sx={{ textAlign: "center", fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "40px" }}>YOUR SECOND HUMBLE ABODE</Typography>
          </Grid>

          {activate === "home" ?
            <Grid item xs={12} md={6} >
              <Box className='boxStyle' style={{display:"flex"}}>
                <Box className='boxStyleActivate' id="home">
                  <Typography sx={fontStyle} >HOME</Typography>
                </Box>
                <Box className='boxStyleDeactivate' id="nipa"  >
                  <Typography sx={fontStyle}>HUTS</Typography>
                </Box>
                <Box className='boxStyleDeactivate' id="pool" >
                  <Typography sx={fontStyle} >POOL</Typography>
                </Box>
              </Box>
            </Grid> : <div></div>}
          {activate === "hut" ?
            <Grid item xs={12} md={6}>
              <Box className='boxStyle' style={{display:"flex"}}>
                <Box className='boxStyleDeactivate' id="home">
                  <Typography sx={fontStyle} >HOME</Typography>
                </Box>
                <Box className='boxStyleActivate' id="nipa"  >
                  <Typography sx={fontStyle}>HUTS</Typography>
                </Box>
                <Box className='boxStyleDeactivate' id="pool" >
                  <Typography sx={fontStyle} >POOL</Typography>
                </Box>
              </Box>
            </Grid> : <div></div>}
          {activate === "pool" ?
            <Grid item xs={12} md={6}>
              <Box className='boxStyle' style={{display:"flex"}}> 
                <Box className='boxStyleDeactivate' id="home">
                  <Typography sx={fontStyle} >HOME</Typography>
                </Box>
                <Box className='boxStyleDeactivate' id="nipa"  >
                  <Typography sx={fontStyle}>HUTS</Typography>
                </Box>
                <Box className='boxStyleActivate' id="pool" >
                  <Typography sx={fontStyle} >POOL</Typography>
                </Box>
              </Box>
            </Grid> : <div></div>}


          <Grid item xs={8}>
            <div id="carousel" className="carousel slide carousel-fade" data-interval="false">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="/static/images/LP3images/House.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/static/images/LP3images/Nipa.jpg" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                  <img src="/static/images/LP3images/Pool.jpg" className="d-block w-100" alt="..." />
                </div>
              </div>
              <button id="prev" className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" onClick={onPrev}>
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button id="next" className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" onClick={onNext}>
                <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                <span className="visually-hidden" >Next</span>
              </button>
            </div>
          </Grid>

          {/* Home */}
          {activate === "home" ?
            <Grid item xs={4}>
              <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px", marginTop: "15%" }}>Home</Typography>
              <Typography sx={{ fontFamily: "Raleway", fontSize: "14px", fontWeight: "500", color: "#454545", margin: "5% 0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis fuga modi animi, asperiores at nobis quos quis suscipit laborum possimus eaque quo voluptatem quaerat, unde labore porro incidunt saepe! <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minima sapiente nihil sequi nostrum, ipsum quidem magnam voluptate optio provident voluptas quo accusamus similique rem aperiam dolorem repellendus eligendi magni?</Typography>
              <Link to="/accomodation"><Button variant="contained" sx={{ backgroundColor: "#14102A", borderRadius: "0px", fontFamily: "Raleway", fontWeight: "500", fontSize: "14px", width: "100%" }}>VIEW ALL ACCOMMODATION</Button></Link>
            </Grid> : <div></div>}
          {activate === "hut" ?
            <Grid item xs={4}>
              <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px", marginTop: "15%" }}>Nipa and Teepee Huts</Typography>
              <Typography sx={{ fontFamily: "Raleway", fontSize: "14px", fontWeight: "500", color: "#454545", margin: "5% 0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis fuga modi animi, asperiores at nobis quos quis suscipit laborum possimus eaque quo voluptatem quaerat, unde labore porro incidunt saepe! <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minima sapiente nihil sequi nostrum, ipsum quidem magnam voluptate optio provident voluptas quo accusamus similique rem aperiam dolorem repellendus eligendi magni?</Typography>
              <Link to="/accomodation"><Button variant="contained" sx={{ backgroundColor: "#14102A", borderRadius: "0px", fontFamily: "Raleway", fontWeight: "500", fontSize: "14px", width: "100%" }}>VIEW ALL ACCOMMODATION</Button></Link>
            </Grid> : <div></div>}
          {activate === "pool" ?
            <Grid item xs={4}>
              <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "Bold", fontSize: "30px", marginTop: "5%" }}>Pool</Typography>
              <Typography sx={{ fontFamily: "Raleway", fontSize: "14px", fontWeight: "500", color: "#454545", margin: "5% 0" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita officiis fuga modi animi, asperiores at nobis quos quis suscipit laborum possimus eaque quo voluptatem quaerat, unde labore porro incidunt saepe! <br /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo minima sapiente nihil sequi nostrum, ipsum quidem magnam voluptate optio provident voluptas quo accusamus similique rem aperiam dolorem repellendus eligendi magni?</Typography>
              <ul>
                <li>Size</li>
                <li>Nature View</li>
                <li>Kiddie Friendly</li>
              </ul>
              <Link to="/accomodation"><Button variant="contained" sx={{ backgroundColor: "#14102A", borderRadius: "0px", fontFamily: "Raleway", fontWeight: "500", fontSize: "14px", width: "100%" }}>VIEW ALL ACCOMMODATION</Button></Link>
            </Grid> : <div></div>}
        </Grid>

      </Container>

      <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          display: "flex", padding: "5% 5%", textAlign: "center",
          backgroundImage: `url(/static/images/LP3images/lp3bg.png)`,
          backgroundSize: "cover",
          justifyContent: "center"
        }}>
        <Grid container item xs={12} md={6}>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontSize: "45px" }}>90%</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography sx={{ fontFamily: "Raleway", fontWeight: "400", fontSize: "14px", color: "#454545" }}>of our guest <br />would recommend this transient</Typography><hr></hr>
          </Grid>
          <Grid item xs={6}>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontFamily: "Raleway", fontSize: "14px" }}>SERVICE</Typography>
          </Grid>
          <Grid item xs={6}>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontFamily: "Raleway", fontSize: "14px" }}>LOCATION</Typography>
          </Grid>
          <Grid item xs={6}>
            <Rating name="read-only" value={4} readOnly />
          </Grid>
          <Grid item xs={6}>
            <Typography sx={{ fontFamily: "Raleway", fontSize: "14px" }}>VALUE</Typography>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
          <Grid item xs={12}>
          <Typography sx={{ fontFamily: "Raleway", fontSize: "12px", fontWeight: "600" }}>IN THEIR WORDS</Typography>
          </Grid>
          
          <Grid item xs={2}>
            <button type='button' style={{ border: "0", background: "transparent" }} onClick={onPrevOpinion}><KeyboardArrowLeftIcon /></button>
          </Grid>
          <Grid item xs>
            {opinion === "wilfredo" ?
              <div>
                <Typography sx={{ fontFamily: "Raleway", fontSize: "12px", color: "#454545" }}>Just spend a day at DRT House! Lorem ipsum Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Typography>
                <hr></hr>
                <Typography>Wilfredo Casiño Jr.</Typography>
              </div> : <div></div>}
            {opinion === "vitto" ?
              <div>
                <Typography sx={{ fontFamily: "Raleway", fontSize: "12px", color: "#454545" }}>Ang pogi nung may ari sana ma kiss ko siya sa cheeks mwamwachupchup happy birthday bossing!</Typography>
                <hr></hr>
                <Typography>Christian Vitto</Typography>
              </div> : <div></div>}
            {opinion === "jerecho" ?
              <div>
                <Typography sx={{ fontFamily: "Raleway", fontSize: "12px", color: "#454545" }}>Pack yuu bulbol</Typography>
                <hr></hr>
                <Typography>Jerecho Dalangin</Typography>
              </div> : <div></div>}
          </Grid>
          <Grid item xs={2}>
            <button type='button' style={{ border: "0", background: "transparent" }} onClick={onNextOpinion}><KeyboardArrowRightIcon /></button>
          </Grid>
        </Grid>
      </Grid>

    </>
  )
}

export default Accomodation