import React, { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';


function LandingPage1() {
  const [activate, setActivate] = useState(true)


  window.addEventListener("resize", () => {
    if(window.screen.width <= 600){
      setActivate(false)
    } else{
      setActivate(true)
    }
  })

  return (
    <> 
        <CssBaseline />
        <Container 
        className="bg-image"
        maxWidth="false" 
        sx={{backgroundImage: activate ? `url(/static/images/background.jpg)` : `url(/static/images/mobileBackground.jpg)` , 
        backgroundPosition: "center",
        height:'100vh', 
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        width: 1,
        margin:"0",
        padding:"0"}}> 
        </Container>
    </>
  )
}

export default LandingPage1