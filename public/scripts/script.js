/* global chrome */

const EventType = {
  ToggleMute: "toggle-mute"
}

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message.eventType === EventType.ToggleMute) {
    toggleMute();
  }
});

function toggleMute() {
  const onButton = document.querySelector('[data-tooltip="Turn on microphone (⌘ + d)"]');
  const offButton = document.querySelector('[data-tooltip="Turn off microphone (⌘ + d)"]');
  if (!!onButton) {
    onButton.click();
  }
  if (!!offButton) {
    offButton.click();
  }
}
