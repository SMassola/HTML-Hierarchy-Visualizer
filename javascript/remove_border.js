var counter = 0;
document.body.className = document.body.className.replace(" red-border", "");

function removeBorder(elements, depth) {

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

    let color = " " + colors[depth%length];
    if (typeof elements[i].className === 'string') {
      elements[i].className = elements[i].className.replace(color, "");
    }
    
    if (elements[i].children) {
      removeBorder(elements[i].children, depth);
    }
  }
}

removeBorder(document.body.children, counter);
