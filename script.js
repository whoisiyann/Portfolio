// Day Schedule
function showDay(day){
    let tables = document.querySelectorAll(".schedule-table");
    let buttons = document.querySelectorAll(".tab-btn");

    tables.forEach(table => table.classList.remove("active"));
    buttons.forEach(btn => btn.classList.remove("active"));

    document.getElementById(day).classList.add("active");
    event.target.classList.add("active");
}

const darkModeSwitch = document.getElementById('darkModeSwitch');

darkModeSwitch.addEventListener('change', () => {
    document.body.classList.toggle('dark-mode');
});

// Profile
const profilePic = document.getElementById('profilePic');
let clicked = false;

profilePic.addEventListener('mouseenter', () => {
    if (!clicked) {
        profilePic.querySelector('.hover').style.opacity = '1';
        profilePic.querySelector('.default').style.opacity = '0';
        profilePic.querySelector('.click').style.opacity = '0';
    }
});

profilePic.addEventListener('mouseleave', () => {
    if (clicked) {

        clicked = false;
    }
    profilePic.querySelector('.default').style.opacity = '1';
    profilePic.querySelector('.hover').style.opacity = '0';
    profilePic.querySelector('.click').style.opacity = '0';
});

profilePic.addEventListener('click', () => {
    if (!clicked) {
        clicked = true;
        profilePic.querySelector('.click').style.opacity = '1';
        profilePic.querySelector('.default').style.opacity = '0';
        profilePic.querySelector('.hover').style.opacity = '0';
    } else {

        clicked = false;
        if (profilePic.matches(':hover')) {
            profilePic.querySelector('.hover').style.opacity = '1';
            profilePic.querySelector('.default').style.opacity = '0';
        } else {
            profilePic.querySelector('.default').style.opacity = '1';
            profilePic.querySelector('.hover').style.opacity = '0';
        }
        profilePic.querySelector('.click').style.opacity = '0';
    }
});

// Gallery
const gallery = document.querySelector('.gallery');
const wrapper = document.querySelector('.gallery-wrapper');
const prevBtn = document.querySelector('.gallery-btn.prev');
const nextBtn = document.querySelector('.gallery-btn.next');

let scrollPosition = 0;
let speed = 1.0;
let galleryWidth;

function updateGalleryWidth() {
    galleryWidth = gallery.scrollWidth / 2;
}

updateGalleryWidth();
window.addEventListener('resize', updateGalleryWidth);

function animate() {
    scrollPosition += speed;

    if (scrollPosition >= galleryWidth) {
        scrollPosition = 0;
    }

    if (scrollPosition < 0) {
        scrollPosition = galleryWidth;
    }

    gallery.style.transform = `translateX(-${scrollPosition}px)`;
    requestAnimationFrame(animate);
}

animate();

wrapper.addEventListener('mouseenter', () => speed = 0);
wrapper.addEventListener('mouseleave', () => speed = 0.5);

nextBtn.addEventListener('click', () => {
    scrollPosition += 300;
});

prevBtn.addEventListener('click', () => {
    scrollPosition -= 300;
});
