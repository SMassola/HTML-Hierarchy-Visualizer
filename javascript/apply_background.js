var head = document.head;
var counter = 0;

var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('colors.css');
head.appendChild(link);

document.body.className += " red-background";

function applyBackground(elements, depth) {

  let colors = [
    "red-background",
    "vermillion-background",
    "orange-background",
    "amber-background",
    "yellow-background",
    "chartreuse-background",
    "green-background",
    "teal-background",
    "blue-background",
    "violet-background",
    "purple-background",
    "magenta-background"
  ];

  let length = colors.length;
  depth += 1;

  for (let i = 0; i < elements.length; i++) {
    elements[i].className += ` ${colors[depth%length]}`;

    if (elements[i].children) {
      applyBackground(elements[i].children, depth);
    }
  }
}

applyBackground(document.body.children, counter);
