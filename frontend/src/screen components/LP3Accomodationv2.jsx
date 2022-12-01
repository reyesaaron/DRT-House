import { CssBaseline, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import GroupsIcon from '@mui/icons-material/Groups';
import AddHomeIcon from '@mui/icons-material/AddHome';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';
import BungalowIcon from '@mui/icons-material/Bungalow';

function LP3Accomodationv2() {
    return (
        <>

            <CssBaseline />
            <Container
                maxWidth="false"
                id="lp3"
                sx={{
                    backgroundColor: "#f3f5f5",
                    width: 1,
                    padding: "13% 0"
                }}>
                <Grid container spacing={{ xs: 2, md: 3, lg: 5 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex" }}>
                    <Grid item xs={12}>
                        <Typography sx={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "bold", fontSize: "40px", textAlign: "center" }}>ACCOMODATION</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography sx={{ fontFamily: "Raleway", fontSize: "14px", textAlign: "center" }}>DISCOVER OUR LUXURIOUS ACCOMMODATION IN DRT HOUSE</Typography>
                    </Grid>
                    <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                        <Card sx={{ maxWidth: 918 }}>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    image="/static/images/background.jpg"
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Grid container xs={12}>
                                        <Grid item xs={12} md={5} sx={{ padding: "10px 40px" }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kaisei HarunoUmi", fontSize: "20px" }}>
                                                WEEKDAY
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <GroupsIcon /> Up to 20 person
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <AddHomeIcon />  Home Amenities
                                            </Typography><br></br>
                                            <ul>
                                                <li style={{ fontFamily: "Raleway", fontSize: "12px" }}>Paronamic mountain views</li>
                                                <li style={{ fontFamily: "Raleway", fontSize: "12px" }}>Infinity Pool</li>
                                            </ul>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px", fontWeight: "bold" }}>
                                                AMENITIES INCLUDES
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <HouseSidingIcon />  Bahay Kubo
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <BungalowIcon />  Teepee Huts
                                            </Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <div className="d-flex" style={{ height: "100%", justifyContent: "center" }}>
                                                <div className="vr"></div>
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} md={5} sx={{ padding: "10px 40px" }}>
                                            <Typography gutterBottom variant="h5" component="div" sx={{ fontFamily: "Kaisei HarunoUmi", fontSize: "20px" }}>
                                                WEEKEND
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <GroupsIcon /> Up to 20 person
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <AddHomeIcon />  Home Amenities
                                            </Typography><br></br>
                                            <ul>
                                                <li style={{ fontFamily: "Raleway", fontSize: "12px" }}>Paronamic mountain views</li>
                                                <li style={{ fontFamily: "Raleway", fontSize: "12px" }}>Infinity Pool</li>
                                            </ul>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px", fontWeight: "bold" }}>
                                                AMENITIES INCLUDES
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <HouseSidingIcon />  Bahay Kubo
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary" sx={{ fontFamily: "Raleway", fontSize: "12px" }}>
                                                <BungalowIcon />  Teepee Huts
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                    <Grid container item xs={12}>
                                        <Grid item xs={6}>
                                            <Typography>PHP 6500</Typography>
                                        </Grid>
                                        <Grid item xs={6}>
                                            <Typography>PHP 7500</Typography>
                                        </Grid>
                                    </Grid>

                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Share
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default LP3Accomodationv2