import React from 'react'
import { Typography, Box } from "@mui/material";
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';
import PoolIcon from '@mui/icons-material/Pool';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import Grid from '@mui/material/Unstable_Grid2';
import SecurityIcon from '@mui/icons-material/Security';

function Covid() {
    return (
        <Box sx={{ backgroundColor: "rgb(255,255,255)", paddingBottom: "6rem" }}>
            <div >
                <Typography variant="h3" style={{ textAlign: "center", paddingTop: "250px", fontFamily: "Kaisei HarunoUmi", letterSpacing: "10px" }}>
                    YOUR HEALTH AND SAFETY <br />
                    IS OUR TOP PRIORITY
                </Typography>
                <Typography variant="subtitle2" style={{ textAlign: "center", letterSpacing: "2px", paddingTop: "60px", fontFamily: "Raleway", fontWeight: "regular" }}>
                    We want to assure you that your health and safety are of paramount importance.
                </Typography>
                <Grid container display="flex" wrap="wrap" direction="row" justifyContent="center" style={{ width: "100%" }}>
                    <Box sx={{ width: "539px", height: "575px", marginTop: "5rem", boxShadow: 3 }}>
                        <Typography style={{ fontFamily: "Raleway", fontWeight: "bold", fontSize: "30px", paddingTop: "2.5rem", textAlign: "center" }}>
                            WELL-PREPARED <br />
                            ON YOUR STAY
                        </Typography>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", alignItems: "center" }}>
                            <Typography style={{ fontFamily: "Raleway", fontSize: "12px", textAlign: "left" }}>
                                Prior to your arrival, DRT House has undergone <br />
                                thorough cleaning and disinfection process.
                            </Typography>
                            <SensorDoorOutlinedIcon style={{ fontSize: "60px", marginLeft: "2rem" }} />
                            <img src="static/images/spray.svg" height="60px" width="60px" alt="spray-icon" style={{ transform: "rotate(-30deg)", marginBottom: "2rem" }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", alignItems: "center" }}>
                            <PoolIcon style={{ fontSize: "78px", marginRight: "2rem" }} />
                            <Typography style={{ fontFamily: "Raleway", fontSize: "12px", textAlign: "right" }}>
                                DRT House make sure that our Inifity Pool is <br />
                                clean and maintained.
                            </Typography>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", alignItems: "center" }}>
                            <Typography style={{ fontFamily: "Raleway", fontSize: "12px", textAlign: "left" }}>
                                Sanitation kits like generic soap and hand <br />
                                sanitizer are provided (Limited only).
                            </Typography>
                            <CleanHandsIcon style={{ fontSize: "78px", marginLeft: "2rem" }} />
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem", alignItems: "center" }}>
                            <SecurityIcon style={{ fontSize: "78px", marginRight: "2rem" }} />
                            <Typography style={{ fontFamily: "Raleway", fontSize: "12px", textAlign: "right" }}>
                                DRT House is secluded and secured by the <br />
                                DRT House owner and home taker.
                            </Typography>
                        </div>
                    </Box>
                </Grid>
            </div>
        </Box>
    )
}

export default Covid