const backgroundImage = document.getElementById('home-background');
const images = [
  'img/ep1.png',
  'img/ultra-hd-eport-background.png',
  'img/eport2.png',
  'img/ep2.png',
  'img/abstract-for-ib-eport1.png'
];

let currentIndex = 0;

function changeBackgroundImage() {
  backgroundImage.style.backgroundImage = `url(${images[currentIndex]})`;
  currentIndex = (currentIndex + 1) % images.length;
}


// Change the background image every X seconds (e.g., every 5 seconds)
setInterval(changeBackgroundImage, 5000);

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contact-modal");
  const modalLink = document.getElementById("contact-me");
  const closeModal = document.getElementById("close-modal");
  const submitButton = document.getElementById("submit-button");
  const contactForm = document.getElementById("contact-form");

  modalLink.addEventListener("click", function () {
      modal.style.display = "block";
  });

  closeModal.addEventListener("click", function () {
      modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
      if (event.target === modal) {
          modal.style.display = "none";
      }
  });

  submitButton.addEventListener("click", function () {
      // Handle form submission and send data to imhotepbenjamin@gmail.com
      // You can use XMLHttpRequest or fetch API to send the form data
      // Example: sendFormDataToEmail();
  });

  // Define the function to send form data to the specified email
  function sendFormDataToEmail() {
      // Implement your code to send the form data to the email address
      // This can be done using server-side scripting or third-party email services.
  }
});




  /*const backgroundImage = document.getElementById('home-background');
  const images = ['img/ultra-hd-eport-background.png', 'img/eport2.png', 'img/ultra-hd-eport-background22.png','img/abstract-for-ib-eport1.png'];
  let currentIndex = 0;
  
  function changeBackgroundImage() {
    backgroundImage.style.backgroundImage = `url(${images[currentIndex]})`;
    currentIndex = (currentIndex + 1) % images.length;
}
// Change the background image every X seconds (e.g., every 5 seconds)
setInterval(changeBackgroundImage, 5000);*/






/*const bodyBackgroundImage = document.getElementById('body-background');
const bodyImages = [
  'img/eport back5.png', 
  'img/eport back2.png', 
  'img/eport back3.pngg',
  'img/eport back4.png'
];
let bodyCurrentIndex = 0;
  
function changeBodyBackgroundImage() {
  bodyBackgroundImage.style.bodyBackgroundImage = `url(${bodyImages[bodyCurrentIndex]})`;
  bodyCurrentIndex = (bodyCurrentIndex + 1) % bodyImages.length;
}
// Change the background image every X seconds (e.g., every 5 seconds)
setInterval(changeBodyBackgroundImage, 5000);*/



document.getElementById('next').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
  let lists = document.querySelectorAll('.item');
  document.getElementById('slide').prepend(lists[lists.length - 1]);
}
