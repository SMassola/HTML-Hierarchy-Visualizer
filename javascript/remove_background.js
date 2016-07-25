var counter = 0;
document.body.className = document.body.className.replace(" red-background", "");

function removeBackground(elements, depth) {

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

    let color = " " + colors[depth%length];
    if (typeof elements[i].className === 'string') {
      elements[i].className = elements[i].className.replace(color, "");
    }

    if (elements[i].children) {
      removeBackground(elements[i].children, depth);
    }
  }
}

removeBackground(document.body.children, counter);
