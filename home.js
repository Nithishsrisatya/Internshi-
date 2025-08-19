document.querySelectorAll('.instrument-link').forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.querySelector('.instrument-card').classList.add('flipped');
            });

            link.addEventListener('mouseleave', () => {
                link.querySelector('.instrument-card').classList.remove('flipped');
            });
        });

        const navigationItems = document.querySelectorAll('.navigation ul li');
        const indicator = document.querySelector('.indicator');

        navigationItems.forEach((item, index) => {
            item.addEventListener('click', () => {
                navigationItems.forEach((li) => li.classList.remove('active'));
                item.classList.add('active');
                indicator.style.transform = `translateX(calc(70px * ${index}))`;
            });
        });
function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    window.location.href = "index.html"; // Redirect to login page
}