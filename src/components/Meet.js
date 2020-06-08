import React, { useState } from "react";
import "./Meet.css";
import IconButton from "@material-ui/core/IconButton";
import MicOn from "@material-ui/icons/Mic";
import MicOff from "@material-ui/icons/MicOff";
import VideocamOn from "@material-ui/icons/Videocam";
import VideocamOff from "@material-ui/icons/VideocamOff";
import Message from "../types/Message";
import Card from '@material-ui/core/Card';

/* global chrome */

function Meet({meet}) {
  const [features, setFeatures] = useState({
    micOn: true,
    camOn: true
  });
  function checkFeatures() {
    const message = {
      messageType: Message.FeatureStatuses
    }
    chrome.tabs.sendMessage(meet.id, message, response => {
      setFeatures(() => {
        return response;
      })
    });
  }
  function toggleFeature(messageType) {
    const message = {
      messageType: messageType
    }
    chrome.tabs.sendMessage(meet.id, message);
  }

  let mic = {
    color: "primary",
    html: <MicOn/>
  };
  let cam = {
    color: "primary",
    html: <VideocamOn/>
  };
  checkFeatures();
  if (!features.micOn) {
    mic = {
      color: "secondary",
      html: <MicOff/>
    };
  }
  if (!features.camOn) {
    cam = {
      color: "secondary",
      html: <VideocamOff/>
    };
  }

  return (
    <Card className="meet">
      <h3 className="title">{meet.name}</h3>
      <IconButton className="button" color={mic.color} onClick={() => toggleFeature(Message.ToggleMic)}>
        {mic.html}
      </IconButton>
      <IconButton className="button" color={cam.color} onClick={() => toggleFeature(Message.ToggleCam)}>
        {cam.html}
      </IconButton>
    </Card>
  );
}

export default Meet;
