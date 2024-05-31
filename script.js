let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function changeSlide(direction) {
    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }

    updateSlider();
}

function updateSlider() {
    const newTransformValue = -currentSlide * 100 + '%';
    document.querySelector('.video-slider').style.transform = 'translateX(' + newTransformValue + ')';
}

window.onload = function () {
    const firstVideo = document.getElementById('video1');
    firstVideo.querySelector('video').autoplay = true;
};

function requestNotificationPermission() {
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                showNotification('Notification Enabled', 'You will now receive browser notifications.');
            }
        });
    } else {
        showNotification('Notification Already Enabled', 'You already have permission to receive notifications.');
    }

    const element = document.getElementById("notificationButton");
    element.remove();

}

function showNotification(title, body) {
    if (Notification.permission === 'granted') {
        new Notification(title, { body });
    }
}