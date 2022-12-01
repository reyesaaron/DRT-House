import * as React from 'react'
import { Link } from "react-router-dom";
import { Stack } from '@mui/system';
import "./Nav.css"

function Nav() {

  // React.useEffect(()=> {
  //   window.addEventListener('scroll', () => console.log(window.scrollY))
  // }, []);

  return (

    <nav className="navbar navbar-expand-lg navbar-dark sticky-top" style={{ backgroundColor: "rgba(0,0,0,0.5)", width: "100%", position: "fixed" }}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown" style={{ textAlign: "center", justifyContent: "center" }}>
          <Stack direction="column">
            <a className="navbar-brand " href="/" data-bs-toggle="collapse">
              <img src='/static/images/logo3-nobg.png' alt="logo" width="150px" height="150px" />
            </a>
            <ul className="navbar-nav" style={{ background: "transparent" }}>
              <li className="nav-item">
                <a className="nav-link active linkStyle" aria-current="page" href="/">DRT HOUSE</a>
              </li>
              <li className="nav-item">
                <a className="nav-link linkStyle" href="/accomodation">ACCOMODATION</a>
              </li>
              <li className="nav-item">
                <a className="nav-link linkStyle" href="/activities">ACTIVITIES</a>
              </li>
              <li className="nav-item">
                <a className="nav-link linkStyle" href="/tour">TOUR</a>
              </li>
              <li className="nav-item">
                <a className="nav-link linkStyle" href="/protocol">COVID PROTOCOL</a>
              </li>
              <li className="nav-item">
                <a className="nav-link linkStyle" href="/contacts">CONTACT US</a>
              </li>
              <li className="nav-item">
                <Link to="/booking" className='linkStyle'>
                  <button type="button" className="btn btn-bd-primary">BOOK NOW</button>
                </Link>
              </li>
            </ul>
          </Stack>
        </div>

      </div>
    </nav>
  )
}

export default Nav