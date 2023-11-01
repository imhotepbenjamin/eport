const backgroundImage = document.getElementById('home-background');
const images = [
  'img/ep1.png',
  'img/ultra-hd-eport-background.png',
  'img/',
  'img/ep2.png',
  'img/abstract-for-ib-eport1.png'
];
let currentIndex = 0;

function changeBackgroundImage() {
  backgroundImage.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackgroundImage, 5000);

document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('contact-modal');
  const modalLink = document.getElementById('contact-me');
  const closeModal = document.getElementById('close-modal');
  const submitButton = document.getElementById('submit-button');
  const contactForm = document.getElementById('contact-form');

  modalLink.addEventListener('click', function () {
    modal.style.display = 'block';
  });

  closeModal.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  submitButton.addEventListener('click', function () {
    // Your submit button logic goes here
  });

  function sendFormDataToEmail() {
    // Implement your form data submission logic here
  }
});

document.getElementById('next').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
};

document.getElementById('prev').onclick = function () {
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
};

// Create an object to store YouTube player instances
const players = {};

function onYouTubeIframeAPIReady() {
  // Initialize YouTube player instances
  const playerIds = ['run', 'hype', 'time', 'battle', 'driveway', 'richer'];

  playerIds.forEach((id) => {
    players[id] = new YT.Player(id, {
      events: {
        'onStateChange': onPlayerStateChange
      }
    });
  });
}

// Track the currently playing video
let currentVideo = null;

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    if (currentVideo && currentVideo !== event.target) {
      currentVideo.pauseVideo();
    }
    currentVideo = event.target;
  }
}

// Select elements for image activation
const image = document.querySelector('.hero img');
const reset = () => image.classList.remove('fadeIn');

function activate(e) {
  if (e.target.matches('.btns img')) {
    image.src = e.target.src;
    image.classList.add('fadeIn');
  }
}

document.addEventListener('click', activate, false);
document.addEventListener('animationend', reset, false);