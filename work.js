// // Get the modal
// var modal = document.getElementById("wecare-modal");

// // Get the button that opens the modal
// var btn = document.getElementById("wecare");

var modals = document.getElementsByClassName("modal");
var btns = document.getElementsByClassName("open-modal");
var close = document.getElementsByClassName("close");

for(let i = 0; i < modals.length; i++) {

    btns[i].onclick = function() {
        modals[i].style.display = "block";
    }
    
    close[i].onclick = function () {
        modals[i].style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modals[i]) {
          modals[i].style.display = "none";
        }
      }
}

// function open() {
//     modal.style.display = "block";
// }

// function exit() {
//     modal.style.display = "none";
// }