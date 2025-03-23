 // Register GSAP and ScrollTrigger plugin
 gsap.registerPlugin(ScrollTrigger);

 // Step 1: Wrap every letter in a span for animation (for ML6)
 var textWrapper = document.querySelector('.ml6 .letters');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 // Step 2: Using GSAP ScrollTrigger for the photo and text animations
 gsap.from(".text-overlay", {
   y: 50,
   opacity: 0,
   duration: 1,
   ease: "easeOutExpo",
   scrollTrigger: {
     trigger: ".photo",
     start: "top 80%", // Trigger when 80% of the photo section is in view
     once: true,  // Only trigger once
   }
 });



 // Animation for ML6 letters
 gsap.from(".ml6 .letter", {
   opacity: 0,
   y: 100,
   duration: 1,
   ease: "easeOutExpo",
   stagger: 0.1,
   scrollTrigger: {
     trigger: ".ml6",
     start: "top 80%", // Trigger when the element is 80% visible
     once: true,  // Only trigger once
   }
 });
  // Animation for the sliding text
 gsap.from(".sliding-text", {
   y: 50,
   opacity: 0,
   duration: 1,
   ease: "easeOutExpo",
   scrollTrigger: {
     trigger: ".sliding-text",
     start: "top 80%", // Trigger when 80% of the text section is in view
     once: true,  // Only trigger once
   }
 });

 // Step 3: Animations for photo sliding in and fading in on page load
 gsap.from(".photo", {
   x: "-100%", // Move the photo from left
   opacity: 0,
   duration: 1.5,
   easing: "easeOutExpo",
   delay: 0.5, // Optional delay before the animation starts
 });

 // Animation for the footer sliding up on page load
 gsap.from(".footer", {
   y: 100,  // Move the footer from below
   opacity: 0,
   duration: 1.5,
   ease: "easeOutExpo",
   delay: 0.5,
 });

 // Animation for the text overlay sliding up on page load
 gsap.from(".text-overlay", {
  y: 50,
  opacity: 0,
  duration: 0.4,
  ease: "power2.out",
  delay: 0.3,
});