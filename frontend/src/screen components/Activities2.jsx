import React from "react";
import { Button, Typography, } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

export default function Activities2() {
    return (
        <div style={{ backgroundColor: "rgb(255,255,255)" }}>
            <div style={{ paddingBottom: "12rem" }}>
                <Typography align='center' style={{ fontFamily: "Raleway", fontWeight: "bold", fontSize: "1rem", letterSpacing: "1px", paddingTop: "5rem" }}>
                    ADVENTURE
                </Typography>
                <Typography align='center' style={{ fontFamily: "Kaisei HarunoUmi", fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "10%", paddingTop: "1.7rem" }}>
                    SEEK AND EXPLORE DRT’S BEST <br />NATURE GETAWAY
                </Typography>
            </div>
            <center>
                <Grid container spacing={9} display="flex" justifyContent="center" direction="row" wrap="wrap" alignItems="center" width="90%" paddingBottom="6rem">
                    <Grid lg={7} sx={12} md={12}>
                        <div>
                            <img src="/static/images/act-img/punsongbato.jpg" alt="Punsong Bato" height="650px" width="100%" style={{ objectFit: "cover", objectPosition: "0% 75%" }} />
                        </div>
                    </Grid>
                    <Grid lg={5} sx={12} md={12}>
                        <div>
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
                            <Button variant="contained" style={{ marginTop: "2rem", width: "100%", borderRadius: "0px", background: "#14102A", fontFamily: "Raleway", fontWeight: "bold" }}>
                                GET DIRECTIONs
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </center>
        </div>
    )
}