import React from 'react';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
import TextField from '@mui/material/TextField';

function Contact() {
    return (
        <div style={{ marginBottom: "5rem" }}>
            <Typography variant="h3" style={{ textAlign: "center", paddingTop: "250px", fontFamily: "Kaisei HarunoUmi", fontWeight: "bold", letterSpacing: "10px" }}>
                CONTACT US
            </Typography>
            <center>
                <div style={{ width: "60%", margin: "2rem 0 3rem 0" }}>
                    <hr style={{ height: '3px', background: "black" }} />
                </div>
            </center>
            <center>
                <Grid container rowSpacing={4} display="flex" justifyContent="center" direction="row" wrap="wrap" alignItems="center" width="85%">
                    <Grid item xs={12} md={6} lg={5}>
                        <Typography style={{ textAlign: "left", fontFamily: "Kaisei HarunoUmi", fontSize: "24px", fontWeight: "medium", paddingBottom: "10px" }}>
                            DRT House Contact Details
                        </Typography>
                        <Typography style={{ textAlign: "left", fontFamily: "Raleway", fontWeight: "semi-bold", fontSize: "15px", paddingBottom: "10px" }}>
                            <b>Address:</b> Sitio Kutad, Tanawan St. Pulong Sampaloc DRT Bulacan
                        </Typography>
                        <Typography style={{ textAlign: "left", fontFamily: "Raleway", fontWeight: "semi-bold", fontSize: "15px", paddingBottom: "10px" }}>
                            <b>Mobile Number:</b> (+63)9 326515696
                        </Typography>
                        <Typography style={{ textAlign: "left", fontFamily: "Raleway", fontWeight: "semi-bold", fontSize: "15px", paddingBottom: "10px" }}>
                            <b>Reservation:</b>
                        </Typography>
                        <Typography style={{ textAlign: "left", fontFamily: "Raleway", fontWeight: "semi-bold", fontSize: "15px" }}>
                            <b>Email:</b> drthouse@business-email.com
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                        <TextField id="standard-basic" label="Name" variant="outlined" size="small" style={{ width: "100% ", paddingBottom: "15px" }} />
                        <TextField id="standard-basic" label="Email" variant="outlined" size="small" style={{ width: "100% ", paddingBottom: "15px" }} />
                        <TextField id="standard-basic" label="Phone Number" variant="outlined" size="small" style={{ width: "100% ", paddingBottom: "15px" }} />
                        <TextField id="standard-basic" label="Country" variant="outlined" size="small" style={{ width: "100% ", paddingBottom: "15px" }} />
                        <TextField id="standard-basic" label="Message" multiline rows={4} variant="outlined" size="small" style={{ width: "100% ", paddingBottom: "15px" }} />
                        <Button variant='contained' style={{borderRadius:"0px", background:"#8FBDF2", width:"125px"}}>Send</Button>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography>Map & Location</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4853.034160979476!2d121.08377161529076!3d14.964641972062282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x339709e2fd07d72b%3A0xdfa27254bf20c1e9!2sDRT%20house%20(Diamante%20Reyes%20Transient%20House)!5e1!3m2!1sen!2sph!4v1669699583372!5m2!1sen!2sph" width="100%" height="500px" title='DRT House' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </Grid>
                </Grid>
            </center>
        </div>
    )
}

export default Contact