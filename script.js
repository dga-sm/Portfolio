gsap.registerPlugin(ScrollTrigger);

//scroll effect
const timeline = gsap.timeline({scrollTrigger: {
    trigger: 'header',
    start: 'top top', 
    end: 'bottom top', 
    scrub: true,
  }}) 
timeline.to(header, {backgroundColor: '#fff'})
timeline.to('.breadcrumb__link', {color: '#000'})
timeline.to('.logo p', {color: '#000'})
timeline.to('.icons i', {color: '#000'})


//email copy to clipboard
function copyEmail() {
  var emailAddress = "stamariadennis.dev@gmail.com";

  // Create a temporary input element
  var tempInput = document.createElement("input");
  tempInput.style.position = "absolute";
  tempInput.style.left = "-1000px";
  tempInput.value = emailAddress;
  document.body.appendChild(tempInput);

  // Copy the email address to the clipboard
  tempInput.select();
  document.execCommand("copy");
  document.body.removeChild(tempInput);

  //dissappear copy message
  var disappearingText = document.querySelector(".copyText");
  disappearingText.style.display = "inline-block";

  var disappearingText2 = document.querySelector(".copyText-2");
  disappearingText2.style.display = "inline-block";

  // Define the duration in milliseconds after which the text will disappear
  var duration = 3000; // 3000 milliseconds = 3 seconds

  // Schedule the removal of the text after the specified duration
  setTimeout(function() {
    disappearingText.style.display = "none";
  }, duration);

}




//image sliders
$(document).ready(function(){
    $("#image-slider").owlCarousel({
      items: 1, // Number of items shown at a time
      loop: true, // Infinite loop
      autoplayHoverPause: true, // Pause on hover
      nav: true, // Show navigation arrows
      dots: true, // Show navigation dots
    });
  });

  $(document).ready(function(){
    $("#image-slider-2").owlCarousel({
      items: 1, // Number of items shown at a time
      loop: true, // Infinite loop
      autoplayHoverPause: true, // Pause on hover
      nav: true, // Show navigation arrows
      dots: true, // Show navigation dots
    });
  });

