document.addEventListener("DOMContentLoaded", handleLoaded);
let displayBorder = false;
let displayBackground = false;

function handleLoaded() {
  document.getElementById("Background").addEventListener('click', handleBackgroundClick);
  document.getElementById("Border").addEventListener('click', handleBorderClick);
}

function handleBackgroundClick() {
  if (displayBackground) {
    displayBackground = false;
    document.getElementById("Background").innerHTML = "Apply Backgrounds!";
    chrome.tabs.query({"active": true, "currentWindow": true}, handleRemoveBackgroundScript);
  } else {
    displayBackground = true;
    document.getElementById("Background").innerHTML = "Remove Backgrounds!";
    chrome.tabs.query({"active": true, "currentWindow": true}, handleApplyBackgroundScript);
  }
}

function handleBorderClick() {
  if (displayBorder) {
    displayBorder = false;
    document.getElementById("Border").innerHTML = "Apply Borders!";
    chrome.tabs.query({"active": true, "currentWindow": true}, handleRemoveBorderScript);
  } else {
    displayBorder = true;
    document.getElementById("Border").innerHTML = "Remove Borders!";
    chrome.tabs.query({"active": true, "currentWindow": true}, handleApplyBorderScript);
  }
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
  chrome.tabs.executeScript(null, {file: "./javascript/remove_border.js"});
}
