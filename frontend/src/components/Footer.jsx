import React from 'react'
import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import Grid from '@mui/material/Unstable_Grid2';

function Footer() {
    return (
        <footer>
            <Grid container columns={{ xs: 4, sm: 8, md: 12 }} sx={{ display: "flex"}}>
                <Grid xs={12}>
                    <div style={{ height: "150px", background: "#332D2D" }}>
                        <Typography textAlign="center" style={{ fontFamily: "Raleway", fontWeight: "regular", fontSize: "12px", color: "white", paddingTop: "1rem" }}>
                            Get in touch
                        </Typography>
                        <Typography textAlign="center" style={{ paddingTop: "5px" }}>
                            <FacebookIcon sx={{ color: "white", fontSize: "30px", paddingLeft: "5px", paddingRight: "5px" }} />
                            <TwitterIcon sx={{ color: "white", fontSize: "30px", paddingLeft: "5px", paddingRight: "5px" }} />
                            <InstagramIcon sx={{ color: "white", fontSize: "30px", paddingLeft: "5px", paddingRight: "5px" }} />
                        </Typography>
                        <Typography textAlign="center" style={{ fontFamily: "Kaisei HarunoUmi", fontWeight: "regular", fontSize: "24px", color: "white" }}>
                            DRT House
                        </Typography>
                        <Typography textAlign="center" style={{ fontFamily: "Raleway", fontWeight: "regular", fontSize: "12px", color: "white" }}>
                            &copy; 2022 DRT House. All Rights reserved | General | Privacy Policy | Terms & Condition | DRT Floor Map
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </footer>
    )
}

export default Footer