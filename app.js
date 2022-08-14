const button = document.getElementById("button");

button.addEventListener("click", runColor);

function runColor(e) {
  e.preventDefault();
  let randomColor = [
    "yellow",
    "red",
    "green",
    "blue",
    "black",
    "orange",
    "pink.",
  ];
  let randomNumber = Math.floor(Math.random() * randomColor.length);
  document.body.style.backgroundColor = randomColor[randomNumber];
}
