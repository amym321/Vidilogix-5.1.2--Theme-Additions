window.onload = function(){ 

  var modal = document.getElementById("why-buy-popup");
  var btn = document.getElementById("why-buy-btn");
  var span = document.getElementsByClassName("close-why-popup")[0];

  btn.onclick = function() {
    modal.style.display = "flex";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

}