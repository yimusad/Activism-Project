// Query for button with an id "theme-button"
const darkMode = document.getElementById('theme-button');

// toggleDarkMode function
const toggleDarkMode = () => {

    // Write your code to manipulate the DOM here
    document.body.classList.toggle("dark-mode");

}

//Register a 'click' event listener for the theme button
// Set toggleDarkMode as the callback function.
darkMode.addEventListener('click', toggleDarkMode)


// Add your query for the sign now button here
const signNowButton = document.querySelector("#sign-now-button");


const addSignature = (person) => {

  // Create new signature element
  const newSignature = document.createElement("p");
  newSignature.textContent = `🖊️ ${person.name} from ${person.hometown} supports this.`;

  const signaturesSection = document.querySelector(".signatures");
  signaturesSection.appendChild(newSignature);
  
  // Reset form inputs
  //person.name = "";
  person.hometown = "";
  person.email = "";
}


// form validation!
const validateForm = () => {

  let containsErrors = false;
  let petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
      name: petitionInputs[0].value, // accesses and saves value of first input
      hometown: petitionInputs[1].value,
      email: petitionInputs[2].value,
    };

  for (let i = 0; i < petitionInputs.length; i++) {
    if (petitionInputs[i].value.length < 3) {
      petitionInputs[i].classList.add('error');
      containsErrors = true;
    }
    else {
      petitionInputs[i].classList.remove('error');
    }
  }

  // Check for .com in email address
  if (!person.email.includes('.com')) {
    email.classList.add('error');
    containsErrors = true;
  } else {
    email.classList.remove('error');
  }


  // if everything is good, add the signature and display the modal!
  if (!containsErrors) {
    // Call addSignature() to add signature to the page
    addSignature(person);
    toggleModal(person);
  
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
    }
    // Reset containsErrors to false
    containsErrors = false;
}

}

signNowButton.addEventListener('click', validateForm);


const toggleModal = (person) => {
  const modal = document.getElementById('thanks-modal');
  const modalContent = document.getElementById('thanks-modal-content');
  modal.style.display = 'flex';
  modalContent.textContent = `Thank you for submitting your petition ${person.name}!`;

  const intervalId = setInterval(scaleImage, 500);
}

setTimeout(() => {
  modal.style.display = "none";
}, 4000);



let scaleFactor = 1;
let modalImage = document.getElementById("modal-img");

const scaleImage = ()  => {
  if (scaleFactor === 1) {
    scaleFactor = 0.8;
  } else {
    scaleFactor = 1;
  }

  modalImage.style.transform = `scale(${scaleFactor})`;
}


const closeModalButton = document.getElementById('close-modal-button');

const hideModal = () => {
  const modal = document.getElementById('thanks-modal');
  modal.style.display = 'none';
};

closeModalButton.addEventListener('click', hideModal);


// animations!
let animation = {
  revealDistance: 150,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
}

// variable to hold all revealable containers
let revealableContainers = document.querySelectorAll('.revealable');

const reveal = () => {
  // Loop through all revealable containers
  for (let i = 0; i < revealableContainers.length; i++) {
    // Get the window height and the top position of the current container
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    
    // Check if the container should be revealed and add or remove the active class accordingly
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

// Hook up the reveal function to the window's scroll event listener
window.addEventListener('scroll', reveal);




// social media buttons
const instagramButton = document.getElementById('instagram-button');
instagramButton.addEventListener('click', () => {
  window.location.href = 'https://www.instagram.com/environmentalracismmatters/?hl=en';
});


const twitterButton = document.getElementById('twitter-button');
twitterButton.addEventListener('click', () => {
  window.location.href = 'https://twitter.com/weact4ej?lang=en';
});


