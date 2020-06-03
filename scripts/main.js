// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("myModal1");
var modal_img1 = document.getElementById("modal_img1");
var modal_img2 = document.getElementById("modal_img2");
var modal_img3 = document.getElementById("modal_img3");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn_img1 = document.getElementById("btn_img1");
var btn_img2 = document.getElementById("btn_img2");
var btn_img3 = document.getElementById("btn_img3");
// Get the <span> element that closes the modal
//var span = document.getElementsByClassName("close")[0];
//var span1 = document.getElementsByClassName("close1")[0];
var span = document.getElementById("close");
var spanA = document.getElementById("closeA");
var span1 = document.getElementById("close1");
var span1A = document.getElementById("close1A");
// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn1.onclick = function() {
  modal1.style.display = "block";
}
btn_img1.onclick = function() {
  modal_img1.style.display = "block";
}
btn_img2.onclick = function() {
  modal_img2.style.display = "block";
}
btn_img3.onclick = function() {
  modal_img3.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
spanA.onclick = function() {
  modal.style.display = "none";
}
span1.onclick = function() {
  modal1.style.display = "none";
}
span1A.onclick = function() {
  modal1.style.display = "none";
}
modal_img1.onclick = function() {
  modal_img1.style.display = "none";
}
modal_img2.onclick = function() {
  modal_img2.style.display = "none";
}
modal_img3.onclick = function() {
  modal_img3.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
  else if (event.target === modal1) {
    modal1.style.display = "none";
  }
  else if (event.target === modal_img1) {
    modal_img1.style.display = "none";
  }
  else if (event.target === modal_img2) {
    modal_img2.style.display = "none";
  }
  else if (event.target === modal_img3) {
    modal_img3.style.display = "none";
  }
}