import React, { useState } from "react";
import { Typography, Box } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
// import Popover from '@mui/material/Popover';
// import { Link } from "react-router-dom";

const fontStyle = { fontFamily: "Raleway", fontWeight: "Bold", fontSize: "12px", color: "white", textAlign: "center" }

export default function Activities2() {
    // For the popover of the google maps
    // const [anchorEl, setAnchorEl] = React.useState(null);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    // For the Carousel of the activities
    const [activate, setActivate] = useState("bato")

    // onClick event
    const onNext = () => {
        if (activate === "bato") {
            setActivate("falls")
        } else if (activate === "falls") {
            setActivate("turil")
        } else {
            setActivate("bato")
        }
    }

    const onPrev = () => {
        if (activate === "bato") {
            setActivate("turil")
        } else if (activate === "falls") {
            setActivate("bato")
        } else {
            setActivate("falls")
        }
    }

    return (
        <div style={{ backgroundColor: "#efefef" }}>
            {/* Title */}
            <Grid item xs={12}>
                <Typography align='center' style={{ fontFamily: "Raleway", fontWeight: "bold", fontSize: "1rem", letterSpacing: "1px", paddingTop: "5rem" }}>
                    ADVENTURE
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography align='center' style={{ fontFamily: "Kaisei HarunoUmi", fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "10%", paddingTop: "1.7rem", marginBottom: "4rem" }}>
                    SEEK AND EXPLORE DRT’S BEST <br />NATURE GETAWAY
                </Typography>
            </Grid>

            <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex", padding: "0% 2% 8rem 10%", width: "90%", alignItems: "center" }}>
                {activate === "bato" ?
                    <Grid item xs={12} md={6} >
                        <Box className='boxStyle' style={{ display: "flex" }}>
                            <Box style={{ padding: "1rem" }} className='boxStyleActivate' id="bato">
                                <Typography sx={fontStyle} >PUNSONG BATO</Typography>
                            </Box>
                            <Box style={{ padding: "1rem" }} className='boxStyleDeactivate' id="falls"  >
                                <Typography sx={fontStyle}>TUMUTULO FALLS</Typography>
                            </Box>
                            <Box style={{ padding: "1rem" }} className='boxStyleDeactivate' id="turil" >
                                <Typography sx={fontStyle} >BATONG TURIL</Typography>
                            </Box>
                        </Box>
                    </Grid> : <div></div>}
                {activate === "falls" ?
                    <Grid item xs={12} md={6}>
                        <Box className='boxStyle' style={{ display: "flex" }}>
                            <Box style={{ padding: "1rem" }} className='boxStyleDeactivate' id="bato">
                                <Typography sx={fontStyle} >PUNSONG BATO</Typography>
                            </Box>
                            <Box style={{ padding: "1rem" }} className='boxStyleActivate' id="falls"  >
                                <Typography sx={fontStyle}>TUMUTULO FALLS</Typography>
                            </Box>
                            <Box style={{ padding: "1rem" }} className='boxStyleDeactivate' id="turil" >
                                <Typography sx={fontStyle} >BATONG TURIL</Typography>
                            </Box>
                        </Box>
                    </Grid> : <div></div>}
                {activate === "turil" ?
                    <Grid item xs={12} md={6}>
                        <Box className='boxStyle' style={{ display: "flex" }}>
                            <Box style={{ padding: "1rem" }} className='boxStyleDeactivate' id="bato">
                                <Typography sx={fontStyle} >PUNSONG BATO</Typography>
                            </Box>
                            <Box style={{ padding: "1rem" }} className='boxStyleDeactivate' id="falls"  >
                                <Typography sx={fontStyle}>TUMUTULO FALLS</Typography>
                            </Box>
                            <Box style={{ padding: "1rem" }} className='boxStyleActivate' id="turil" >
                                <Typography sx={fontStyle} >BATONG TURIL</Typography>
                            </Box>
                        </Box>
                    </Grid> : <div></div>}

                <Grid item xs={8}>
                    <div id="carousel" className="carousel slide carousel-fade" data-interval="false">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/static/images/act-img/punsongbato.jpg" height="450px" style={{ objectFit: "cover", objectPosition: "0% 77%" }} className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/static/images/act-img/falls.jpg" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/static/images/act-img/turil.jpg" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button id="prev" className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev" onClick={onPrev} >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button id="next" className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next" onClick={onNext}>
                            <span className="carousel-control-next-icon" aria-hidden="true" ></span>
                            <span className="visually-hidden" >Next</span>
                        </button>
                    </div>
                </Grid>

                {/* Text of the carousel */}
                {activate === "bato" ?
                    <Grid item xs={4}>
                        <Typography variant="h4" style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "bold", textAlign: "left" }}>
                            PUNSONG BATO
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "3rem" }}>
                            One of the best river in Doña Remedios Trinidad with crystal clear water and beautiful rock formations.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "3rem", display: "flex", alignItems: "center" }}>
                            <DirectionsCarIcon style={{ marginRight: "1rem" }} />
                            3 minutes drive via Tanawan Road
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "1rem", display: "flex", alignItems: "center" }}>
                            <DirectionsWalkIcon style={{ marginRight: "1rem" }} />
                            15 minutes walk via Tanawan Road
                        </Typography>
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginTop: "2rem", width: "100%", borderRadius: "0px", background: "#14102A", fontFamily: "Raleway", fontWeight: "bold" }}>
                            GET DIRECTIONS
                        </button>
                        <div class="modal fade" id="staticBackdrop" style={{ width: "600", height: "450" }} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Punsong Bato</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14754.131717123286!2d121.07694256606861!3d14.962106112399244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x339709e2fd07d72b%3A0xdfa27254bf20c1e9!2sDRT%20house%20(Diamante%20Reyes%20Transient%20House)%2C%20Tanawan%2C%20pulong%20sampaloc%2C%20Do%C3%B1a%20Remedios%20Trinidad%2C%20Bulacan!3m2!1d14.9646368!2d121.0859603!4m5!1s0x3397073cc9de49b1%3A0xbe4c929bb79a13b1!2sPunsong%20Bato%20DRT%2C%20Do%C3%B1a%20Remedios%20Trinidad%2C%20Bulacan!3m2!1d14.9587396!2d121.07774599999999!5e1!3m2!1sen!2sph!4v1670073527670!5m2!1sen!2sph" width="465" height="465" style={{ border: "0" }} allowfullscreen="" title="punsongbato" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid> : <div></div>}
                {activate === "falls" ?
                    <Grid item xs={4}>
                        <Typography variant="h4" style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "bold", textAlign: "left" }}>
                            TUMUTULO FALLS
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "3rem" }}>
                            One of the best river in Doña Remedios Trinidad with crystal clear water and beautiful rock formations.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "3rem", display: "flex", alignItems: "center" }}>
                            <DirectionsCarIcon style={{ marginRight: "1rem" }} />
                            11 minutes drive via Tanawan Road
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "1rem", display: "flex", alignItems: "center" }}>
                            <DirectionsWalkIcon style={{ marginRight: "1rem" }} />
                            54 minutes walk via Tanawan Road
                        </Typography>
                        {/* <Button aria-describedby={id} onClick={handleClick} variant="contained" style={{ marginTop: "2rem", width: "100%", borderRadius: "0px", background: "#14102A", fontFamily: "Raleway", fontWeight: "bold" }}>
                            GET DIRECTIONS
                        </Button> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginTop: "2rem", width: "100%", borderRadius: "0px", background: "#14102A", fontFamily: "Raleway", fontWeight: "bold" }}>
                            GET DIRECTIONS
                        </button>
                        <div class="modal fade" id="staticBackdrop" style={{ width: "600", height: "450" }} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Tumutulo Falls</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <iframe title="tumutulo falls" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14334.531052648654!2d121.07714927816515!3d14.955811933231239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x339709e2fd07d72b%3A0xdfa27254bf20c1e9!2sDRT%20house%20(Diamante%20Reyes%20Transient%20House)%2C%20Tanawan%2C%20pulong%20sampaloc%2C%20Do%C3%B1a%20Remedios%20Trinidad%2C%20Bulacan!3m2!1d14.9646368!2d121.0859603!4m5!1s0x33970979523299dd%3A0x48ee315bffcb11ab!2sTumutulo%20Falls%2C%20Do%C3%B1a%20Remedios%20Trinidad%2C%20Bulacan!3m2!1d14.9450957!2d121.0931389!5e1!3m2!1sen!2sph!4v1669905400736!5m2!1sen!2sph" width="465" height="465" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid> : <div></div>}
                {activate === "turil" ?
                    <Grid item xs={4}>
                        <Typography variant="h4" style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "bold", textAlign: "left" }}>
                            BATONG TURIL
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "3rem" }}>
                            One of the best river in Doña Remedios Trinidad with crystal clear water and beautiful rock formations.
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "3rem", display: "flex", alignItems: "center" }}>
                            <DirectionsCarIcon style={{ marginRight: "1rem" }} />
                            10 minutes drive via Camachile Road
                        </Typography>
                        <Typography variant="subtitle2" style={{ fontFamily: "Raleway", textAlign: "left", marginTop: "1rem", display: "flex", alignItems: "center" }}>
                            <DirectionsWalkIcon style={{ marginRight: "1rem" }} />
                            49 minutes walk via Camachile Road
                        </Typography>
                        {/* <Button aria-describedby={id} onClick={handleClick} variant="contained" style={{ marginTop: "2rem", width: "100%", borderRadius: "0px", background: "#14102A", fontFamily: "Raleway", fontWeight: "bold" }}>
                            GET DIRECTIONS
                        </Button> */}
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ marginTop: "2rem", width: "100%", borderRadius: "0px", background: "#14102A", fontFamily: "Raleway", fontWeight: "bold" }}>
                            GET DIRECTIONS
                        </button>
                        <div class="modal fade" id="staticBackdrop" style={{ width: "600", height: "450" }} data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true" >
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Batong Turil</h1>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <iframe title="batong turil" src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d14333.466374340416!2d121.06766727816827!3d14.971734783070142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x339709e2fd07d72b%3A0xdfa27254bf20c1e9!2sDRT%20house%20(Diamante%20Reyes%20Transient%20House)%2C%20Tanawan%2C%20pulong%20sampaloc%2C%20Do%C3%B1a%20Remedios%20Trinidad%2C%20Bulacan!3m2!1d14.9646368!2d121.0859603!4m5!1s0x33970741167ad927%3A0x66deb2007152da8b!2sBatong%20Turil%2C%20Camachile%2C%20Do%C3%B1a%20Remedios%20Trinidad%2C%20Bulacan!3m2!1d14.9788331!2d121.0797006!5e1!3m2!1sen!2sph!4v1669905933264!5m2!1sen!2sph" width="465" height="465" style={{ "border": 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Grid> : <div></div>}
            </Grid>
        </div>
    )
}