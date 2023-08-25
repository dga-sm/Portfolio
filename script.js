gsap.registerPlugin(ScrollTrigger);
//header animation and scroll effects
const tl = gsap.timeline({})
  tl.from(".logo img", {y: -200, duration: 1, opacity: 0})
    .from(".logo p", {y: -200, duration: 1, opacity: 0})
    .from(".breadcrumb__item", {y: -200, duration: 1, opacity: 0, stagger: .2})
    .from(".icon", {y: -200, duration: 1, opacity: 0, stagger: .2})
    .from(".banner__text", {x: -200, duration: 1, opacity: 0})
    .from(".banner__img", {duration: 1, opacity: 0})

gsap.from(".skills", {
    x: -200,
    duration: 1,
    opacity: 0,
    scrollTrigger: {
      trigger: ".skills",
      start: "top 60%"
    }
})

gsap.from(".projects h1", {
  x: -200,
  duration: 1,
  opacity: 0,
  scrollTrigger: {
    trigger: ".projects h1",
    start: "top 60%"
  }
})

gsap.from(".project", {
  x: -200,
  duration: 1,
  stagger: 1.5,
  opacity: 0,
  scrollTrigger: {
    trigger: ".project",
    start: "top 60%"
  }
})

gsap.from(".icon-2", {
  x: -200,
  duration: 1,
  stagger: .8,
  opacity: 0,
  scrollTrigger: {
    trigger: ".icon-2"
  }
})

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



//goes to specific section
  function scrollToID(id, offset) {
    var targetElement = document.getElementById(id);
    if (targetElement) {
        var targetPosition = targetElement.getBoundingClientRect().top;
        var offsetPosition = targetPosition + window.scrollY + offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
}