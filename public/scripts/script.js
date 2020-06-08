/* global chrome */

const Message = {
  FeatureStatuses: "feature-statuses",
  ToggleMic: "toggle-mic",
  ToggleCam: "toggle-cam"
}

const switchMicOnTooltip = "Turn on microphone (⌘ + d)";
const switchMicOffTooltip = "Turn off microphone (⌘ + d)";
const switchCamOnTooltip = "Turn on camera (⌘ + e)";
const switchCamOffTooltip = "Turn off camera (⌘ + e)";

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  switch (message.messageType) {
    case Message.FeatureStatuses:
      respond(checkFeatures());
      break;
    case Message.ToggleMic:
      toggleFeature(switchMicOnTooltip, switchMicOffTooltip);
      break;
    case Message.ToggleCam:
      toggleFeature(switchCamOnTooltip, switchCamOffTooltip);
      break;
    default:
  }
});

function checkFeatures() {
  const micStatus = checkFeature(switchMicOnTooltip, switchMicOffTooltip);
  const camStatus = checkFeature(switchCamOnTooltip, switchCamOffTooltip);
  return {
    micOn: micStatus,
    camOn: camStatus
  };
}

function checkFeature(switchFeatureOnTooltip, switchFeatureOffTooltip) {
  const onButton = document.querySelector(`[data-tooltip="${switchFeatureOffTooltip}"]`);
  const offButton = document.querySelector(`[data-tooltip="${switchFeatureOnTooltip}"]`);
  if (!!onButton) {
    return true;
  }
  if (!!offButton) {
    return false;
  }
}

function toggleFeature(switchFeatureOnTooltip, switchFeatureOffTooltip) {
  const onButton = document.querySelector(`[data-tooltip="${switchFeatureOnTooltip}"]`);
  const offButton = document.querySelector(`[data-tooltip="${switchFeatureOffTooltip}"]`);
  if (!!onButton) {
    onButton.click();
  }
  if (!!offButton) {
    offButton.click();
  }
}
