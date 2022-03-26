window.onload = function(){ 

  var outerModal = document.getElementById("why-buy-popup");
  var btn = document.getElementById("why-buy-btn");

  btn.onclick = function() {
    outerModal.style.display = "flex";
  }

  document.addEventListener(
    "click",
    function(event) {
      // If user either clicks X button OR clicks outside the modal window, then close modal 
      if (
        event.target.matches(".close-why-popup") ||
        !event.target.closest("#why-modal-inner") && 
        event.target.matches("#why-outer-modal") 
      ) {
        closeModal()
      }
    },
    false
  )
  
  function closeModal() {
    outerModal.style.display = "none";
  }

}