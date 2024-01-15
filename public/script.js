//carousel items
let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalSlides - 1;
    } else if (currentIndex >= totalSlides) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = 'translateX(' + translateValue + ')';
}

//side navigation fixed/scroll toggle
window.addEventListener('scroll', function () {
    var fixedItem = document.getElementById('fixedItem');

    // Adjust the scroll threshold based on your needs
    var scrollThreshold = 800;

    if (window.scrollY > scrollThreshold) {
        fixedItem.classList.add('hide');
    } else {
        fixedItem.classList.remove('hide');
    }
});

//button clicks
function scrollToProject() {
    var targetSection = document.getElementById('box3');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}
function scrollToContact() {
    var targetSection = document.getElementById('box4');
    targetSection.scrollIntoView({ behavior: 'smooth' });
}

