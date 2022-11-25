import React from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

function LandingPage1() {
  return (
    <> 
        <CssBaseline />
        <Container 
        maxWidth="false" 
        sx={{backgroundImage: `url(/static/images/background.jpg)`, 
        height:'100vh', 
        width: 1,
        margin:"0",
        padding:"0"}}> 


            
        </Container>
    </>
  )
}

export default LandingPage1