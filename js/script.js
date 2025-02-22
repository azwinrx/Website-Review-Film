document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault(); // Mencegah scroll default

        const targetId = this.getAttribute('href'); // Ambil ID tujuan
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2; // Hitung posisi tengah
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});