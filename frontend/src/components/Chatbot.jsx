import React from 'react'
import {Helmet} from 'react-helmet'
import Fab from '@mui/material/Fab';
import ModeCommentIcon from '@mui/icons-material/ModeComment';

function Chatbot() {
  return (

    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support">
              <div className="chatbox__header">
                  <div className="chatbox__image--header">
                      <img src="https://img.icons8.com/color/48/000000/circled-user-female-skin-type-5--v1.png" alt="logo" />
                  </div>
                  <div className="chatbox__content--header">
                      <h4 className="chatbox__heading--header">Chat support</h4>
                      <p className="chatbox__description--header">Hi. My name is DRT House. How can I help you?</p>
                  </div>
              </div>
              <div className="chatbox__messages">
                  <div>
                      <input type="button" value="What is DRT House?" className="btn" />
                      <input type="button" value="Where are you located?" className="btn" />
                      <input type="button" value="How can I reserve?" className="btn" />
                      <input type="button" value="How much?" className="btn" />
                  </div>
              </div>
              <div className="chatbox__footer">
                  <input type="text" placeholder="Write a message..." className="message" />
                  <button className="chatbox__send--footer send__button">Send</button>
              </div>
        </div>
          <div className="chatbox__button">
            <Fab color="primary" aria-label="add">
              <ModeCommentIcon />
            </Fab>
              
          </div>
      </div>
        <Helmet>
            <script src="/static/app.js" type="text/javascript" />
        </Helmet>
    </div>

  )
}

export default Chatbot