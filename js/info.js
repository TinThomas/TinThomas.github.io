var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
slider.value = localStorage.getItem("waterThreshold");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
  localStorage.setItem("waterThreshold",this.value);
}