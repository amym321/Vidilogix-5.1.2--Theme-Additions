window.onload = function(){ 

  var modal = document.getElementById("why-buy-popup");
  var btn = document.getElementById("why-buy-btn");
  var span = document.getElementsByClassName("close-why-popup")[0];
  var chat1 = document.getElementById("dummy-chat-button-iframe");
  var chat2 = document.getElementById("shopify-chat-dummy");
  

  btn.onclick = function() {
    modal.style.display = "flex";
    chat1.style.display = "none";
    chat2.style.display = "none";
  }

  span.onclick = function() {
    modal.style.display = "none";
    chat1.style.display = "flex";
    chat2.style.display = "flex";
  }

}