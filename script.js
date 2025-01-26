gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable);

// 1. Manuální rozdělení textu na písmena
function splitTextToSpans(textElement) {
    const text = textElement.textContent;
    const characters = text.split('');
    textElement.innerHTML = characters.map(char => `<span class="char">${char}</span>`).join('');
}

// Rozdělení nadpisu na jednotlivá písmena
const titleElement = document.querySelector('.title');
splitTextToSpans(titleElement);

// Animace jednotlivých písmen
gsap.to(".char", {
    opacity: 1,
    y: 0,
    duration: 0.8,
    stagger: 0.05,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: ".title-section",
        start: "top center",
        toggleActions: "play none none reverse"
    }
});