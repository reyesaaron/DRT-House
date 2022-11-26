import React from 'react'
import {Helmet} from 'react-helmet'
import Fab from '@mui/material/Fab';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import SendIcon from '@mui/icons-material/Send';

function Chatbot() {
  return (

    <div className="container">
      <div className="chatbox">
        <div className="chatbox__support">
              <div className="chatbox__header">
                  <div className="chatbox__image--header">
                      <img src="/static/images/bot.png" alt="logo" width="60px" height="60px"/>
                  </div>
                  <div className="chatbox__content--header">
                      <h4 className="chatbox__heading--header">Chat support</h4>
                      <p className="chatbox__description--header">Hi. My name is DRT House. How can I help you?</p>
                  </div>
              </div>
              <div className="chatbox__messages">
              </div>
              <div className="chatbox__footer">
                  <input type="text" placeholder="Write a message..." className="message" />
                  <button className="chatbox__send--footer send__button"><SendIcon /></button>
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