window.onload = function(){ 

  // Why Buy popup
  var outerModal = document.getElementById("why-buy-popup");
  var btn = document.getElementById("why-buy-btn");   // trigger
  // UPS Map popup
  var mapModal = document.getElementById("map-popup");
  var mapBtn = document.getElementById("map-btn");    // trigger
  var mapBtn2 = document.getElementById("map-btn2");  // trigger

  if (btn != null){
    btn.onclick = function() {
      outerModal.style.display = "flex";
    }
  }

  if (mapBtn != null){
    mapBtn.onclick = function() {
      mapModal.style.display = "flex";
    }
  }

  if (mapBtn2 != null){
    mapBtn2.onclick = function() {
      mapModal.style.display = "flex";
    }
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
    if (outerModal != null){
      outerModal.style.display = "none";
    }
    if (mapModal != null){
      mapModal.style.display = "none";
    }
  }

}