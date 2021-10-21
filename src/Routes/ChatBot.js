/* import React from 'react';
import ReactDOM from 'react-dom';
import ChatBot from 'react-simple-chatbot';
import '../Styles/Chatbot.css'
// ========================================
function tick() {

  const element = (
    <div className="App">


      <div className="App-header">
        <ChatBot
          steps={[
            {
              id: 'name',
              message: 'What is your name?',
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
              message: ' how can i help you! ',
              trigger: '5',
            },
            {
              id: '5',
              user: true,
              trigger: '6',
            },

            {
              id: '6',
              message: 'sorry ',
              trigger: '7',
            },
            
            {
              id: '7',
              message: 'u choose yes ',
              trigger: '10',
            },
            {
              id: '9',
              message: 'u choose no ',
              trigger: '10',
            },

            {
              id: '10',
              message: 'ok',
              end: true,

            },
          ]}
        />
      </div>
    </div>
  );



ReactDOM.render(
  element,
  document.getElementById('root')); 
}

setInterval(tick, 1000);
export default ChatBot */