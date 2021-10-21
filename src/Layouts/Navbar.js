import React, { useState } from 'react'
import '../Styles/Navbar.css'
import Bot from '../images/Sparrow.png'
import Bot2 from '../images/favicon.png'
import { Link, useHistory } from 'react-router-dom'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import ChatBot from 'react-simple-chatbot';
import '../Styles/Chatbot.css'

function Navbar() {

  const [isActive, setActive] = useState(false);
  return (
    <div >
      <ul>
        <a className='logo-txt'><h1 href="#">Maxeon</h1></a>
        <div class="text-block">
          <h4>Where</h4>
          <h4>words</h4>
          <h4>fail,</h4>
          <h4>Music</h4>
          <h4>speaks.</h4>
        </div>
        <li>
          <Link to='/' ><a>Products</a></Link>
        </li>
        <li>
          <Link to=''><a>Features</a></Link>
        </li>
        <li>
          <Link to='/' ><a>Use Cases</a></Link>
        </li>
        <li>
          <Link to='/' ><a>Pricing</a></Link>
        </li>
        <li>
          <Link to='/' ><a>Login</a></Link>
        </li>
      </ul>
      <div class="bottom-right">
        <ChatBubbleOutlineIcon className='chat-btn' onClick={() => setActive(!isActive)} />
        {isActive ?
          <div className="App-header">
            <ChatBot
              steps={[
                {
                  id: 'name',
                  message: 'Hi There, Can i Know your name',
                  trigger: '2',
                },
                {
                  id: '2',
                  user: true,
                  trigger: '3',
                },
                {
                  id: '3',
                  message: 'Hi nice metting you {previousValue}! ',
                  trigger: '4',
                },
                {
                  id: '4',
                  message: ' Ask us Anything.  ',
                  trigger: '5',
                },
                {
                  id: '5',
                  user: true,
                  trigger: '6',
                },

                {
                  id: '6',
                  message: 'we have different types of music ',
                  trigger: '7',
                },

                {
                  id: '7',
                  message: 'what is your favorite type? ',
                  trigger: '8',
                },
                {
                  id: '8',
                  user: true,
                  trigger: '9',
                },
                {
                  id: '9',
                  message: 'ok got it, let me suggest you some songs ',
                  trigger: '10',
                },
                {
                  id: '10',
                  message: 'song 1, song2, song3',
                  trigger: '11',
                },
                {
                  id: '11',
                  user: true,
                  trigger: '12',
                },
                {
                  id: '12',
                  message: 'did you like it?',
                  trigger: '13',
                },

                {
                  id: '13',
                  message: 'ok, do you want to subscribe?',
                  end: true,
                },
              ]}
            />
          </div> : null}
        {/* {isActive ?
          <img className={isActive} src={Bot} alt='bot' width="70" height="70" />

          : null} */}
      </div>
    </div>
  )
}
export default Navbar
