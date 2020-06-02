import React from 'react';
import './App.css';

/* global chrome */

const EventType = {
  ToggleMute: "toggle-mute"
}

function App() {
  function doSomething() {
    chrome.tabs.query({
      url: "https://meet.google.com/*"
    }, (tabs) => {
      console.log(tabs);
      if (tabs.length > 0) {
        const message = {
          eventType: EventType.ToggleMute
        }
        chrome.tabs.sendMessage(tabs[0].id, message, (response) => {
          console.log("response: ", response);
        });
      }
    });
  }
  return (
    <button onClick={doSomething}>Click me!</button>
  );
}
export default App;
