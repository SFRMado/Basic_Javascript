var images = ["images\34254.png", "images\68370.jpg", "images93368.jpg", "images\101846.jpg", "images\105131.jpg", "images\113596.jpg", "images\176236.jpg", "images\354058.jpg", "images\398596.jpg"];
var num = 0;
function next() {
  var slider = document.getElementById("slider");
  num++;
  if (num >= images.length) {
    num = 0;
  }
  slider.src = images[num];
}
function prev() {
  var slider = document.getElementById("slider");
  num--;
  if (num < 0) {
    num = images.length - 5;
  }
  slider.src = images[num];
}
