document.addEventListener("DOMContentLoaded", handleLoaded);

function handleLoaded() {
  document.getElementById("applyBackground").addEventListener('click', handleApplyBackgroundClick);
  document.getElementById("applyBorder").addEventListener('click', handleApplyBorderClick);
  document.getElementById("removeBackground").addEventListener('click', handleRemoveBackgroundClick);
  document.getElementById("removeBorder").addEventListener('click', handleRemoveBorderClick);
}

function handleApplyBackgroundClick() {
  document.getElementById("applyBackground").removeEventListener('click', handleApplyBackgroundClick);
  chrome.tabs.query({"active": true, "currentWindow": true}, handleApplyBackgroundScript);
}

function handleApplyBorderClick() {
  document.getElementById("applyBorder").removeEventListener('click', handleApplyBorderClick);
  chrome.tabs.query({"active": true, "currentWindow": true}, handleApplyBorderScript);
}

function handleRemoveBackgroundClick() {
  document.getElementById("applyBackground").addEventListener('click', handleApplyBackgroundClick);
  chrome.tabs.query({"active": true, "currentWindow": true}, handleRemoveBackgroundScript);
}

function handleRemoveBorderClick() {
  document.getElementById("applyBorder").addEventListener('click', handleApplyBorderClick);
  chrome.tabs.query({"active": true, "currentWindow": true}, handleRemoveBorderScript);
}

function handleApplyBackgroundScript(tab) {
  chrome.tabs.executeScript(null, {file: "./javascript/apply_background.js"});
}

function handleApplyBorderScript(tab) {
  chrome.tabs.executeScript(null, {file: "./javascript/apply_border.js"});
}

function handleRemoveBackgroundScript(tab) {
  chrome.tabs.executeScript(null, {file: "./javascript/remove_background.js"});
}

function handleRemoveBorderScript(tab) {
  chrome.tabs.executeScript(null, {file: "./javascript/remove_border.js"})
}
