document.addEventListener("DOMContentLoaded", function () {
  var imageContainers = document.querySelectorAll(".image-container");
  imageContainers.forEach(function (container) {
    container.style.display = "none";
  });
});

function showImage(id) {
  var container = document.getElementById(id);
  container.style.display = "block";
}

function hideImage(id) {
  var container = document.getElementById(id);
  container.style.display = "none";
}
