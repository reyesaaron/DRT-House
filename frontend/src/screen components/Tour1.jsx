import { CssBaseline, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Grid from '@mui/material/Grid'
import React, { useState } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

function Tour1() {
    const [activate, setActivate] = useState(true)

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
                                    style={{
                                        margin: "1rem", width: "200px", height: "60px", backgroundColor: "#14102A",
                                        color: "white", fontFamily: "Raleway", fontSize: "16px", fontWeight: "600", border: "0px"
                                    }}>IMAGE TOUR</button>
                                <button type="submit" onClick={onClickVideo}
                                    style={{
                                        margin: "1rem", width: "200px", height: "60px", backgroundColor: "#8FBDF2",
                                        color: "white", fontFamily: "Raleway", fontSize: "16px", fontWeight: "600", border: "0px"
                                    }}>VIDEO TOUR</button>
                            </div> :
                            <div>
                                <button type="submit" onClick={onClickImage}
                                    style={{
                                        margin: "1rem", width: "200px", height: "60px", backgroundColor: "#8FBDF2",
                                        color: "white", fontFamily: "Raleway", fontSize: "16px", fontWeight: "600", border: "0px"
                                    }}>IMAGE TOUR</button>
                                <button type="submit" onClick={onClickVideo}
                                    style={{
                                        margin: "1rem", width: "200px", height: "60px", backgroundColor: "#14102A",
                                        color: "white", fontFamily: "Raleway", fontSize: "16px", fontWeight: "600", border: "0px"
                                    }}>VIDEO TOUR</button>
                            </div>}
                        <hr></hr>
                    </Grid>

                    {activate ?
                        <div>
                            <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/BahayKubo.jpg"
                                            alt="Bahay kubo"
                                            data-bs-toggle="modal"
                                            data-bs-target="#bahaykubomodal" />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                BAHAY KUBO
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/DiningArea.jpg"
                                            alt="Dining Area"
                                            data-bs-toggle="modal"
                                            data-bs-target="#diningareamodal"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                DINING AREA
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/LivingRoom.jpeg"
                                            alt="Living Room"
                                            data-bs-toggle="modal"
                                            data-bs-target="#livingroommodal"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                LIVING ROOM
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "0" }}>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/MountainView.jpg"
                                            alt="Mountain View"
                                            data-bs-toggle="modal"
                                            data-bs-target="#mountainviewmodal"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                MOUNTAIN VIEW
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/TeepeeHuts.jpg"
                                            alt="Teepee Hut"
                                            data-bs-toggle="modal"
                                            data-bs-target="#teepeemodal"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                TEEPEE HUT
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/BahayKubo.jpg"
                                            alt="Bahay Kubo"
                                            data-bs-toggle="modal"
                                            data-bs-target="#bahaykubomodal"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                BAHAY KUBO
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </div>
                        : <div>
                            <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/BahayKubo.jpg"
                                            alt="Bahay Kubo"
                                            data-bs-toggle="modal"
                                            data-bs-target="#bahaykubovideomodal"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                VIDEO BAHAY KUBO
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/DiningArea.jpg"
                                            alt="Dining Area"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                VIDEO DINING AREA
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/LivingRoom.jpeg"
                                            alt="Living Room"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                VIDEO LIVING ROOM
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>

                            <Grid item xs={12} sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center", padding: "0" }}>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/MountainView.jpg"
                                            alt="Mountain View"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                VIDEO MOUNTAIN VIEW
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/TeepeeHuts.jpg"
                                            alt="Teepee Hut"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                VIDEO TEEPEE HUT
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                                <Card sx={{ maxWidth: 345, margin: "1rem" }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            image="/static/images/TourImages/BahayKubo.jpg"
                                            alt="Bahay Kubo"
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                                VIDEO BAHAY KUBO
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>
                        </div>
                    }
                </Grid>
                {/* MODAL CODE */}
                <div class="modal fade" id="bahaykubomodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">BAHAY KUBO</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="/static/images/TourImages/BahayKubo.jpg" alt="bahay kubo" style={{ width: "-webkit-fill-available" }} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="diningareamodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">DINING AREA</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="/static/images/TourImages/DiningArea.jpg" alt="dining area" style={{ width: "-webkit-fill-available" }} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="livingroommodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">lIVING ROOM</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="/static/images/TourImages/LivingRoom.jpeg" alt="Living Room" style={{ width: "-webkit-fill-available" }} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="teepeemodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">TEEPEE HUT</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="/static/images/TourImages/TeepeeHuts.jpg" alt="Teepee Hut" style={{ width: "-webkit-fill-available" }} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="mountainviewmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">MOUNTAIN VIEW</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <img src="/static/images/TourImages/MountainView.jpg" alt="Mountain View" style={{ width: "-webkit-fill-available" }} />
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal fade" id="bahaykubovideomodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">BAHAY KUBO</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <video width="500px" height="500px" controls>
                                    <source src="/static/videos/TourVideos/MountainView.mp4" type="video/mp4" />
                                </video>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Tour1