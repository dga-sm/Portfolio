gsap.registerPlugin(ScrollTrigger);

// gsap.to(header, {
//   backgroundColor: '#fff', 
//   scrollTrigger: {
//     trigger: 'header',
//     start: 'top top', 
//     end: 'bottom top', 
//     scrub: true,
//   }
// });

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