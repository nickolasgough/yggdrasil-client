/* global chrome */

const Message = {
  MicStatus: "mic-status",
  ToggleMic: "toggle-mic",
  CamStatus: "cam-status",
  ToggleCam: "toggle-cam"
}

const switchMicOnTooltip = "Turn on microphone (⌘ + d)";
const switchMicOffTooltip = "Turn off microphone (⌘ + d)";
const switchCamOnTooltip = "Turn on camera (⌘ + e)";
const switchCamOffTooltip = "Turn on camera (⌘ + e)";

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  let status;
  switch (message.messageType) {
    case Message.MicStatus:
      status = checkFeature(switchMicOffTooltip, switchMicOffTooltip);
      respond(status);
      break;
    case Message.ToggleMic:
      toggleFeature(switchMicOffTooltip, switchMicOffTooltip);
      break;
    case Message.CamStatus:
      status = checkFeature(switchCamOffTooltip, switchCamOffTooltip);
      respond(status);
      break;
    case Message.ToggleCam:
      toggleFeature(switchCamOffTooltip, switchCamOffTooltip);
      break;
    default:
  }
});

function checkFeature(switchOnTooltip, switchOffTooltip) {
  const onButton = document.querySelector(`[data-tooltip="${switchOnTooltip}"]`);
  const offButton = document.querySelector(`[data-tooltip="${switchOffTooltip}"]`);
  if (!!onButton) {
    return true;
  }
  if (!!offButton) {
    return false;
  }
}

function toggleFeature(switchOnTooltip, switchOffTooltip) {
  const onButton = document.querySelector(`[data-tooltip="${switchOnTooltip}"]`);
  const offButton = document.querySelector(`[data-tooltip="${switchOffTooltip}"]`);
  if (!!onButton) {
    onButton.click();
  }
  if (!!offButton) {
    offButton.click();
  }
}
