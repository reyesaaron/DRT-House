import React from "react";
import { Typography, Box } from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { CardMedia } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';

export default function Activities1() {
    return (
        <Box style={{ paddingBottom: "6rem"}}>
            <Typography variant="h3" style={{ textAlign: "center", paddingTop: "250px", fontFamily: "Kaisei HarunoUmi", letterSpacing: "10px" }}>
                ACTIVITIES
            </Typography>
            <Typography variant="subtitle2" style={{ textAlign: "center", letterSpacing: "2px", paddingTop: "60px", fontFamily: "Raleway", fontWeight: "regular" }}>
                EXPERIENCES AT DRT HOUSE
            </Typography>
            <Grid container>
                <Grid xs={12}>
                    {/* Added Cards in the Activities */}
                    <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center", paddingTop: "80px", gap: "5rem" }}>

                        {/* DRT KIDS CARD */}
                        <Card sx={{ maxWidth: 345, borderRadius: 0, boxShadow: 4 }}>
                            <CardMedia
                                component="img"
                                alt="DRT KIDS"
                                height="265"
                                image="/static/images/act-img/kids.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" style={{ textAlign: "center", fontFamily: "Kaisei HarunoUmi" }}>
                                    DRT KIDS
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ textAlign: "center", paddingTop: "1rem", fontSize: "12px", fontFamily: "Raleway", fontWeight: "medium" }}>
                                    Children will enjoy our complimentary activities at DRT House, designed to give
                                    them enjoyable place to play and keep them engaged
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* KARAOKE ON! CARD */}
                        <Card sx={{ maxWidth: 345, borderRadius: 0, boxShadow: 4 }}>
                            <CardMedia
                                component="img"
                                alt="DRT KIDS"
                                height="265"
                                image="/static/images/act-img/karaoke.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" style={{ textAlign: "center", fontFamily: "Kaisei HarunoUmi" }}>
                                    KARAOKE-ON!
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ textAlign: "center", paddingTop: "1rem", fontSize: "12px", fontFamily: "Raleway", fontWeight: "medium" }}>
                                    Filipinos are one of the best singers in the world and their vacation is not complete without
                                    Karaoke! You can rent this Videoke and enjoy at DRT House!
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ textAlign: "center", paddingTop: "2.5rem", fontSize: "12px" }}>
                                    Rent this Videoke in your stay for only ₱500.00
                                </Typography>
                            </CardContent>
                        </Card>

                        {/* INFINITY POOL CARD */}
                        <Card sx={{ maxWidth: 345, borderRadius: 0, boxShadow: 4 }}>
                            <CardMedia
                                component="img"
                                alt="DRT KIDS"
                                height="265"
                                image="/static/images/act-img/pool.jpg"
                            />
                            <CardContent>
                                <Typography variant="h5" component="div" style={{ textAlign: "center", fontFamily: "Kaisei HarunoUmi" }}>
                                    INFINITY POOL
                                </Typography>
                                <Typography variant="body2" color="text.secondary" style={{ textAlign: "center", paddingTop: "1rem", fontSize: "12px", fontFamily: "Raleway", fontWeight: "medium" }}>
                                    Plunge into DRT House Infinity pool and experience the greater view of
                                    Doña Remedios Trinidad mountain view. Our pool experiences charm our guests
                                    leaving them with endless reason to stay in the water.
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                </Grid>
            </Grid>
        </Box>

    )
}