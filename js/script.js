//Smooth Scroll
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;
            window.scrollTo({
                top: targetElement.offsetTop - offset,
                behavior: 'smooth'
            });
        }
    });
});

document.querySelectorAll('#Home a').forEach(link => {
  link.addEventListener('click', function(e) {
      e.preventDefault();

      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
          const offset = window.innerHeight / 2 - targetElement.offsetHeight / 2;
          window.scrollTo({
              top: targetElement.offsetTop - offset,
              behavior: 'smooth'
          });
      }
  });
});

//Slide Image Gameplay
const images = [
    "assets/gameplay-1.png",
    "assets/gameplay-2.png",
    "assets/gameplay-3.png",
    "assets/gameplay-4.png",
    "assets/gameplay-5.png",
    "assets/gameplay-6.png",
    "assets/gameplay-7.png",
    "assets/gameplay-8.png",
];
  
  let currentIndex = 0;
  
  function showSlide(index) {
    const imgElement = document.getElementById("gameplay-image");
    if (index >= images.length) {
      currentIndex = 0;
    } else if (index < 0) {
      currentIndex = images.length - 1;
    } else {
      currentIndex = index;
    }
    imgElement.src = images[currentIndex];
  }
  
  function nextSlide() {
    showSlide(currentIndex + 1);
  }
  
  function prevSlide() {
    showSlide(currentIndex - 1);
  }
  
  //Hamburger Menu
  function toggleMenu() {
    document.querySelector('.nav-links').classList.toggle('show');
}

