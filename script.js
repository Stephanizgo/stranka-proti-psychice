
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Přidá třídu pro animaci
        }
    });
}, { threshold: 0.2 });

document.querySelectorAll('.content').forEach(element => {
    observer.observe(element);
});