import { CssBaseline, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'

function Tour1() {
    const [activate, setActivate] = useState(true)

    const cardStyle = {
        width: "18rem",
        margin: "1rem"
    }

    const onClickVideo = () => {
        setActivate(false)
    }

    const onClickImage = () => {
        setActivate(true)
    }


  return (
    <>
    <CssBaseline />
    <Container maxWidth="false" id="tour1" sx={{ width: 1, padding: "12% 0 3% 0", textAlign: "center" }}>
                <Grid container spacing={{ xs: 4 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "bold", fontSize: "40px" }}>DRT House Tour</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontFamily: "Raleway", fontSize: "14px" }}>Take a Virtual Tour around DRT House. Explore the best looking mountain view transient house in <br />Doña Remedious Trinidad, and discover the comforting rooms, bahay kubo and teepee huts  </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        {activate ? 
                        <div>
                        <button type="submit" onClick={onClickImage} 
                        style={{margin:"1rem", width:"200px", height:"60px", backgroundColor:"#14102A", 
                        color:"white", fontFamily:"Raleway", fontSize:"16px", fontWeight:"600", border: "0px"}}>IMAGE TOUR</button>
                        <button type="submit" onClick={onClickVideo}
                        style={{margin:"1rem", width:"200px", height:"60px", backgroundColor:"#8FBDF2", 
                        color:"white", fontFamily:"Raleway", fontSize:"16px", fontWeight:"600", border: "0px"}}>VIDEO TOUR</button>
                        </div> : 
                        <div>
                        <button type="submit" onClick={onClickImage} 
                        style={{margin:"1rem", width:"200px", height:"60px", backgroundColor:"#8FBDF2", 
                        color:"white", fontFamily:"Raleway", fontSize:"16px", fontWeight:"600", border: "0px"}}>IMAGE TOUR</button>
                        <button type="submit" onClick={onClickVideo}
                        style={{margin:"1rem", width:"200px", height:"60px", backgroundColor:"#14102A", 
                        color:"white", fontFamily:"Raleway", fontSize:"16px", fontWeight:"600", border: "0px"}}>VIDEO TOUR</button>
                        </div>}
                        <hr></hr>
                    </Grid>

                    {activate ?         
                    <div>
                        <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/BahayKubo.jpg" classNameName="card-img-top" alt="Bahay Kubo" />
                            <div className="card-body">
                                <h5 className="card-title">Bahay Kubo</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/DiningArea.jpg" classNameName="card-img-top" alt="Dining Area" />
                            <div className="card-body">
                                <h5 className="card-title">Dining Area</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/LivingRoom.jpeg" classNameName="card-img-top" alt="Living Room" />
                            <div className="card-body">
                                <h5 className="card-title">Living Room</h5>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding:"0" }}>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/MountainView.jpg" classNameName="card-img-top" alt="Mountain View" />
                            <div className="card-body">
                                <h5 className="card-title">Mountain View</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/TeepeeHuts.jpg" classNameName="card-img-top" alt="Teepee Huts" />
                            <div className="card-body">
                                <h5 className="card-title">Teepee Huts</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/BahayKubo.jpg" classNameName="card-img-top" alt="Bahay Kubo" />
                            <div className="card-body">
                                <h5 className="card-title">Bahay Kubo</h5>
                            </div>
                        </div>
                    </Grid>
                    </div>     
                    : <div>
                    <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/BahayKubo.jpg" classNameName="card-img-top" alt="Bahay Kubo" />
                            <div className="card-body">
                                <h5 className="card-title">Video Bahay Kubo</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/DiningArea.jpg" classNameName="card-img-top" alt="Dining Area" />
                            <div className="card-body">
                                <h5 className="card-title">Video Dining Area</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/LivingRoom.jpeg" classNameName="card-img-top" alt="Living Room" />
                            <div className="card-body">
                                <h5 className="card-title">Video Living Room</h5>
                            </div>
                        </div>
                    </Grid>

                    <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding:"0" }}>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/MountainView.jpg" classNameName="card-img-top" alt="Mountain View" />
                            <div className="card-body">
                                <h5 className="card-title">Video Mountain View</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/TeepeeHuts.jpg" classNameName="card-img-top" alt="Teepee Huts" />
                            <div className="card-body">
                                <h5 className="card-title">Video Teepee Huts</h5>
                            </div>
                        </div>
                        <div className="card" style={cardStyle}>
                            <img src="/static/images/TourImages/BahayKubo.jpg" classNameName="card-img-top" alt="Bahay Kubo" />
                            <div className="card-body">
                                <h5 className="card-title">Video Bahay Kubo</h5>
                            </div>
                        </div>
                    </Grid>
                    </div>
                    }
                </Grid>
            </Container>
    </>
  )
}

export default Tour1