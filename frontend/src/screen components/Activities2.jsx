import React from "react";
import { Typography } from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';

export default function Activities2() {
    return (
        <div style={{ backgroundColor: "rgb(255,255,255)" }}>
            <Typography align='center' style={{ fontFamily: "Roboto", fontSize: "1rem", letterSpacing: "1px", paddingTop: "5rem" }}>
                ADVENTURE
            </Typography>
            <Typography align='center' style={{ fontFamily: "Times New Roman", fontSize: "2.5rem", fontWeight: "bold", letterSpacing: "10%", paddingTop: "1.7rem" }}>
                SEEK AND EXPLORE DRT’S BEST <br />NATURE GETAWAY
            </Typography>
            <center>
                <Grid container spacing={9}>

                    <div style={{ paddingTop: "12rem", display: "flex", margin: "0 10rem 0 7rem" }}>
                        <Grid lg={12}>
                            <img src="/static/images/activities-img/pool.jpg" alt="Punsong Bato" width={"100%"} />
                        </Grid>
                        <Grid lg={8}>
                            <div style={{ marginTop: "10rem" }}>
                                <Typography variant="h4" style={{ fontFamily: "Times New Roman", fontWeight: "bold", textAlign: "left" }}>
                                    PUNSONG BATO
                                </Typography>
                                <Typography variant="subtitle2" style={{ fontFamily: "Arial", textAlign: "left", marginTop: "5rem" }}>
                                    One of the best river in Doña Remedios Trinidad with crystal clear water and beautiful rock formations.
                                </Typography>
                            </div>
                        </Grid>

                    </div>

                </Grid>
            </center>
        </div>
    )
}