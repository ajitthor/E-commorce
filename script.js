const bar = document.getElementById('bar'); // Mobile menu button (hamburger icon)
const nav = document.getElementById('navbar'); // Navbar

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.toggle('active'); // Toggles the 'active' class on click
    });
}

document.addEventListener('click', (event) => {
    const isClickInside = nav.contains(event.target) || bar.contains(event.target);

    if (!isClickInside) {
        nav.classList.remove('active'); // Closes the navbar if clicked outside
    }
});
