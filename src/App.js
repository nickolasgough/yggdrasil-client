import React, { useState } from "react";
import "./App.css";
import Meets from "./components/Meets"

/* global chrome */

function App() {
  const [meets, setMeets] = useState([]);
  chrome.tabs.query({
    url: "https://meet.google.com/*"
  }, (tabs) => {
    if (tabs.length > 0) {
      setMeets(() => {
        return tabs.map(tab => {
          return {
            id: tab.id,
            name: tab.title,
          }
        });
      });
    }
  });

  return (
    <div className="extension">
      <Meets meets={meets}/>
    </div>
  );
}

export default App;
