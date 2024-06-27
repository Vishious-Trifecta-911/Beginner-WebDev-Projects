alert("This is a layout");

function toggleMode() {
  var body = document.querySelector("body");
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
  } else {
    body.classList.add("dark-mode");
  }
  var button = document.querySelector("button");
  if (button.classList.contains("btn-dark")) {
    button.classList.remove("btn-dark");
  } else {
    button.classList.add("btn-dark");
  }
}
