import React from "react";
import IconButton from "@material-ui/core/IconButton";
import MicOff from "@material-ui/icons/MicOff";
import Message from "../types/Message";

/* global chrome */

function Meet({meet}) {
  function checkFeature() {

  }

  function toggleFeature(messageType) {
    const message = {
      messageType: messageType
    }
    chrome.tabs.sendMessage(meet.id, message);
  }

  return (
    <div>
      <span>{meet.name}</span>
      <IconButton onClick={() => toggleFeature(Message.ToggleMic)}><MicOn/></IconButton>
      <IconButton onClick={() => toggleFeature(Message.ToggleMic)}><MicOff/></IconButton>
    </div>
  );
}
export default Meet;
