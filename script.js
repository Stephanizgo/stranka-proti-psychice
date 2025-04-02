// Register GSAP and ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Step 1: Wrap every letter in a span for animation (for ML6)
var textWrapper = document.querySelector('.ml6 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// Step 2: Using GSAP ScrollTrigger for the photo and text animations
gsap.from(".text-overlay", {
   y: 50,
   opacity: 0,
   duration: 0.2,  // Much shorter duration for faster animation
   ease: "easeOutExpo",
   scrollTrigger: {
     trigger: ".photo",
     start: "top 100%", // Trigger when the element enters the viewport (100% means fully in view)
     once: true,  // Only trigger once
   }
});

// Animation for ML6 letters
gsap.from(".ml6 .letter", {
   opacity: 0,
   y: 100,
   duration: 0.2,  // Much shorter duration for faster animation
   ease: "easeOutExpo",
   stagger: 0.03,  // Much shorter stagger for quicker effect
   scrollTrigger: {
     trigger: ".ml6",
     start: "top 100%", // Trigger when the element enters the viewport
     once: true,  // Only trigger once
   }
});

// Animation for the sliding text
gsap.from(".sliding-text", {
   y: 50,
   opacity: 0,
   duration: 0.6,  // Faster animation (fixed to 0.6)
   ease: "easeOutExpo",
   scrollTrigger: {
     trigger: ".sliding-text",
     start: "top 100%", // Trigger when the element enters the viewport
     once: true,  // Only trigger once
   }
});

// Step 3: Animations for photo sliding in and fading in on page load
gsap.from(".photo", {
   x: "-100%", // Move the photo from left
   opacity: 0,
   duration: 0.8,  // Faster duration
   easing: "easeOutExpo",
   delay: 0.2, // Optional delay before the animation starts
   scrollTrigger: {
     trigger: ".photo",  // Make sure the photo section triggers the animation
     start: "top 100%", // Trigger when the element enters the viewport
     once: true,  // Only trigger once
   }
});

// Animation for the footer sliding up on page load
gsap.from(".footer", {
   y: 100,  // Move the footer from below
   opacity: 0,
   duration: 0.6,  // Faster duration
   ease: "easeOutExpo",
   delay: 0.2,
   scrollTrigger: {
     trigger: ".footer",  // Make sure the footer triggers the animation
     start: "top 100%", // Trigger when the footer enters the viewport
     once: true,  // Only trigger once
   }
});


gsap.from(".zahlavi", {
  y: 100,  // Move the footer from below
  opacity: 0,
  duration: 0.6,  // Faster duration
  ease: "easeOutExpo",
  delay: 0.2,
  scrollTrigger: {
    trigger: ".zahlavi",  // Make sure the footer triggers the animation
    start: "top 100%", // Trigger when the footer enters the viewport
    once: true,  // Only trigger once
  }
});
// Animation for the text overlay sliding up on page load
gsap