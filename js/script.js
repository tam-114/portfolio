$(document).ready(function() {
    $( ".ml-auto .nav-item" ).bind( "click", function() {
        var clickedItem = $( this );
        $( ".ml-auto .nav-item" ).each( function() {
            $( this ).removeClass( "active" );
        });
        clickedItem.addClass( "active" );
    });

// Get the modal
var modalERA = document.getElementById("myModalERA");
var modalFG = document.getElementById("myModalFG");
var modalKO = document.getElementById("myModalKO");
var modalMENU = document.getElementById("myModalMENU");

// Get the button that opens the modal
var btnFG = document.getElementById("myBtnFG");
var btnERA = document.getElementById("myBtnERA");
var btnKO = document.getElementById("myBtnKO");
var btnMENU = document.getElementById("myBtnMENU");

// Get the <span> element that closes the modal
var span0 = document.getElementsByClassName("close")[0];
var span1 = document.getElementsByClassName("close")[1];
var span2 = document.getElementsByClassName("close")[2];
var span3 = document.getElementsByClassName("close")[3];


// When the user clicks the button, open the modal 
btnFG.onclick = function() {
  modalFG.style.display = "block";
}

btnERA.onclick = function() {
  modalERA.style.display = "block";
}

btnKO.onclick = function() {
  modalKO.style.display = "block";
}

btnMENU.onclick = function() {
  modalMENU.style.display = "block";
}

//closing the modal

span0.onclick = function() {
	modalERA.style.display = "none";
}

span1.onclick = function() {
	modalFG.style.display = "none";
}

span2.onclick = function() {
	modalKO.style.display = "none";
}

span3.onclick = function() {
	modalMENU.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalERA) {
    modalERA.style.display = "none";
  }
   if (event.target == modalFG) {
    modalFG.style.display = "none";
  }
  if (event.target == modalKO) {
    modalKO.style.display = "none";
  }
   if (event.target == modalMENU) {
    modalMENU.style.display = "none";
  }
}
});

