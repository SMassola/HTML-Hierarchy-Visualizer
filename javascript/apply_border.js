var head = document.head;
var counter = 0;

var link = document.createElement('link');
link.type = 'text/css';
link.rel = 'stylesheet';
link.href = chrome.extension.getURL('colors.css');
head.appendChild(link);

document.body.className += " red-border";

function applyBorder(elements, depth) {

  let colors = [
    "red-border",
    "vermillion-border",
    "orange-border",
    "amber-border",
    "yellow-border",
    "chartreuse-border",
    "green-border",
    "teal-border",
    "blue-border",
    "violet-border",
    "purple-border",
    "magenta-border"
  ];

  let length = colors.length;
  depth += 1;

  for (let i = 0; i < elements.length; i++) {
    elements[i].className += ` ${colors[depth%length]}`;

    if (elements[i].children) {
      applyBorder(elements[i].children, depth);
    }
  }
}

applyBorder(document.body.children, counter);
