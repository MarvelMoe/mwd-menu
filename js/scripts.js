
let btn = document.getElementById("toggle"),
    overlay = document.getElementById("overlay")

btn.addEventListener('click', function() {
  this.classList.toggle("active");
    overlay.classList.toggle("open")
})