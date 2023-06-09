`use strict`;

// Elements

const factsSectionsAndNumbersHolder = document.querySelector(
  `#facts-sections-and-numbers`
);
const factsSections = document.querySelectorAll(`.facts-sections`);
const factsList = document.querySelectorAll(`.facts-list`);
const factsListTop = document.querySelector(`#top-facts-list`);
const factsListBottom = document.querySelector(`#bottom-facts-list`);
const factsNumbersList = document.querySelector(`#facts-numbers-holder`);
const textMeBtn = document.querySelectorAll(`.text-me-btn`);
const mainTextMeBtn = document.querySelector(`#main-text-me-btn`);
const mainTextMeIcon = document.querySelector(`#text-me-icon`);
const textMeSection = document.getElementById(`text-me`);
const unknownSenderMessage = document.querySelector(`.hide-sender-info`);
const unnecessarySenderInfo = document.querySelectorAll(`.hide-info`);
const aMessageFromMeDiv = document.getElementById(`about-me`);
const myName = document.getElementById(`my-name`);
// const myMessageLi = document.querySelector(`#id-6`);
// console.log(myMessageLi); Can't target an item before it is created
// myMessageLi.style.color = "red";
const animatedLogo = document.querySelector(`#animated-logo`);
// slider

const factsSlider = document.querySelector(`#facts-slider`);
const leftArrow = document.querySelector(`#left-arrow`);
const sliderFactName = document.querySelector(`#fact-name`);
const rightArrow = document.querySelector(`#right-arrow`);

// const factsNumbers = document.querySelectorAll(`.facts-numbers`);

// LOGIC

// Create the related  list item and number item  on creating a new section

factsSections.forEach((sec) => {
  // get the section number
  const secNo = sec.getAttribute(`fact-sec-no`);
  // get the section name attribute
  const secName = sec.getAttribute(`fact-name`);
  // create the related list item
  const listItem = document.createElement(`li`);
  // give it a number
  listItem.setAttribute(`fact`, `${secNo}`);
  // give it an id
  listItem.id = `id-${secNo}`;
  // give it a text
  listItem.textContent = `${secName}`;
  // give them all a class
  listItem.className = `facts-list-items`;
  factsListTop.appendChild(listItem);
  // Append the list item to the facts list
  // a function to decide the media query
  // function myFunction(x) {
  // // if the screen is less than 768px append the created listITems to the bottom navbar
  // if (x.matches) {
  //   // If media query matches
  //   factsListBottom.appendChild(listItem);
  // } else {
  //   // if the screen is not less than 768px append the created listITems to the top navbar
  //   factsListTop.appendChild(listItem);
  //   }
  // }

  // var x = window.matchMedia("(max-width: 768px)");
  // myFunction(x); // Call listener function at run time
  // x.addListener(myFunction); // Attach listener function on state changes

  // create a number span
  const noSpan = document.createElement(`span`);
  noSpan.setAttribute(`fact-no`, `${secNo}`);
  noSpan.textContent = `0${secNo}`;
  // give them all a class
  noSpan.className = `facts-numbers`;
  factsNumbersList.appendChild(noSpan);

  //make the title inside the section take the same section name from the attribute
  sec.querySelector(`h1`).textContent = secName;
});

// linking the sections with the related list items and numbers

const factsNumbers = document.querySelectorAll(`.facts-numbers`); // if declared with other elements won't be read case the selector is created later
const factsItems = document.querySelectorAll(`.facts-list-items`); // if declared with other elements won't be read case the selector is created later

// When the number is hovered reveal the related section and list item
factsNumbers.forEach((x) => {
  x.addEventListener(`mouseover`, function revealFact() {
    const relatedNo = x.getAttribute(`fact-no`);
    // Get the section with this number
    // for all the sections
    factsSections.forEach((sec) => {
      // hide them all
      sec.classList.add(`hidden`);
      // reveal only the one with the hovered or clicked number
      const currentSection = document.querySelector(
        `[fact-sec-no = '${relatedNo}']`
      );
      currentSection.classList.add(`animate`);
      currentSection.classList.remove(`hidden`);
    });
    // when hovering over the number reveal the related list item
    factsItems.forEach((li) => {
      li.classList.remove(`reveal-li`);
      document
        .querySelector(`[fact= '${relatedNo}']`)
        .classList.add(`reveal-li`);
    });
  });

  // Focus on the first section when mouse not hovering
  x.addEventListener(`mouseout`, function hideAgain() {
    factsSections.forEach((sec) => {
      // hide them all
      sec.classList.add(`hidden`);
      // reveal only the one with the hovered or clicked number
      document.querySelector(`[fact-sec-no = '1']`).classList.remove(`hidden`);
    });
    // when the mouse is out remove the revealing from all
    factsItems.forEach((li) => {
      li.classList.remove(`reveal-li`);
    });
  });

  x.addEventListener(`click`, function revealFact() {
    const relatedNo = x.getAttribute(`fact-no`);
    // Get the section with this number
    // for all the sections
    factsSections.forEach((sec) => {
      // hide them all
      sec.classList.add(`hidden`);
      // reveal only the one with the hovered or clicked number
      document
        .querySelector(`[fact-sec-no = '${relatedNo}']`)
        .classList.remove(`hidden`);
    });
  });
});

// Interacting with the fact list items

// factsItems.forEach((x) => {
//   x.addEventListener(`click`, function revealFact() {
//     const relatedNo = x.getAttribute(`fact`);
//     // Get the section with this number
//     // for all the sections
//     factsSections.forEach((sec) => {
//       // hide them all
//       sec.classList.add(`hidden`);
//       // reveal only the one with the hovered or clicked number
//       const currentEl = document.querySelector(
//         `[fact-sec-no = '${relatedNo}']`
//       );
//       currentEl.classList.remove(`hidden`);
//       //   currentEl.classList.add(`clicked`);
//     });
//   });

//   x.addEventListener(`mouseover`, function revealFact() {
//     const relatedNo = x.getAttribute(`fact`);
//     // Get the section with this number
//     // for all the sections
//     factsSections.forEach((sec) => {
//       // hide them all
//       sec.classList.add(`hidden`);
//       // reveal only the one with the hovered or clicked number
//       const currentEl = document.querySelector(
//         `[fact-sec-no = '${relatedNo}']`
//       );
//       currentEl.classList.remove(`hidden`);
//     });
//     // when hovering over the list item reveal the related Number
//     factsNumbers.forEach((fn) => {
//       fn.classList.remove(`reveal-no`);
//       document
//         .querySelector(`[fact-no = '${relatedNo}']`)
//         .classList.add(`reveal-no`);
//     });
//   });

//   // Focus on the first section when mouse not hovering
//   x.addEventListener(`mouseout`, function hideAgain() {
//     factsSections.forEach((sec) => {
//       // hide them all
//       sec.classList.add(`hidden`);

//       // reveal only the one with the hovered or clicked number
//       document.querySelector(`[fact-sec-no = '1']`).classList.remove(`hidden`);
//     });
//     // when the mouse is out remove the revealing from all
//     factsNumbers.forEach((fn) => {
//       fn.classList.remove(`reveal-no`);
//     });
//   });
// });

// Interacting with the fact list items
factsItems.forEach((x) => {
  x.addEventListener(`click`, function revealFact() {
    // Show the animated logo again if the my message li is clicked
    animatedLogo.classList.remove(`hidden`);
    // Hide the Contacting form if open;
    textMeSection.classList.add(`hidden`);
    factsSectionsAndNumbersHolder.classList.remove(`hidden`);

    const relatedNo = x.getAttribute(`fact`);
    // Get the section with this number
    // for all the sections
    factsSections.forEach((sec) => {
      // hide them all
      sec.classList.add(`hidden`);
      // reveal only the one with the hovered or clicked number
      const currentEl = document.querySelector(
        `[fact-sec-no = '${relatedNo}']`
      );
      currentEl.classList.remove(`hidden`);
      //   currentEl.classList.add(`clicked`);
    });
  });
});
// target the message form me list item
const myMessageLi = document.querySelector(`#id-6`);
myMessageLi.addEventListener(`click`, () => {
  animatedLogo.classList.add(`hidden`);
});
/* This code needs to be here not before the interacting with li code, cause this later one shows the animated logo as 
shown in the first line of code, so when the message from me li is clicked the animated logo will display thats why we put this code in here
to hide it again. */

// When clicking the text me btn

// const trimmedTextMeBtn = textMeBtn.textContent = textMeBtn.textContent.trim()
// by clicking any of the two text me buttons
textMeBtn.forEach((btn) => {
  btn.addEventListener(`click`, (_) => {
    // chance btn text content only for the main button

    if (mainTextMeBtn.innerHTML === `Send me a message`) {
      mainTextMeBtn.innerHTML = `Show Facts`;
    } else {
      mainTextMeBtn.innerHTML = `Send me a message`;
    }
    // for both the main and the extra text me buttons toggle the text me section and icon by clicking
    textMeSection.classList.toggle(`hidden`);
    mainTextMeIcon.classList.toggle(`hidden`);
    factsSectionsAndNumbersHolder.classList.toggle(`hidden`);
  });
});

// Unknown sender functions
unknownSenderMessage.addEventListener(`mouseover`, (_) => {
  unnecessarySenderInfo.forEach((unnecessaryInput) => {
    unnecessaryInput.style.borderColor = `red`;
  });
});

unknownSenderMessage.addEventListener(`mouseout`, (_) => {
  unnecessarySenderInfo.forEach((unnecessaryInput) => {
    unnecessaryInput.style.borderColor = `white`;
  });
});

// Hide sender info
unknownSenderMessage.addEventListener(`click`, (_) => {
  if (unknownSenderMessage.innerHTML === `A Message from unknown`) {
    unknownSenderMessage.innerHTML = `Show inputs`;
  } else {
    unknownSenderMessage.innerHTML = `A Message from unknown`;
  }
  /*  i had an issue with this logic cause phrase A Message from unknown in the html file was written with indentation
   which makes it not the same like in the js if condition, 
  thats why by tapping the btn the else condition activiates directly to give the same text for the element making no changes unless we tap again,
   which resulted in a different pattern form the one seeked.
     so always make sure those white spaces aren't different in both files  */
  unnecessarySenderInfo.forEach((unnecessaryInput) => {
    unnecessaryInput.classList.toggle(`hidden`);
  });
});

// create spans from a text a span for each word
// the text
/* const myMessage = `hello this is ahmad haseeb, i have designed and developed this site just to publish some of the fact about my self, it may be not a big deal for you i hope no, but for me its my passion to turn every new idea into reality, so please take a moment and tell me what you think about this little experiment`;
// split the words into an array
const myMessageArr = myMessage.split(` `);

// create a span from each word
myMessageArr.forEach((word) => {
  const wordSpan = document.createElement(`span`);
  wordSpan.innerHTML = word;
  // insert spaces between the spans
  // wordSpan.style.marginRight = `6px`;

  // append the created span to the div
  aMessageFromMeDiv.append(wordSpan);
});
 */

// show my message by clicking my name button

myName.addEventListener(`click`, () => {
  aMessageFromMeDiv.classList.toggle(`hidden`);
});

// Animated logo

const text = document.querySelector(`.text`);

// separate each character in a span
// form the innerText of the paragraph get each character as a separate span then join all of these spans together and assign them to the paragraph as an innerHtml
text.innerHTML = text.innerText
  .split(``)
  .map(
    (character, i) =>
      // make each char rotates number of  degrees than the previous one (start with 6 and keep testing tell reach the shape you wanted the circle fits), the property in css would be like that transform: rotate(5deg);
      `<span style = "transform: rotate(${i * 6.3}deg);">${character}</span>`
  )
  .join(``);

/*  in the previous logic any white spaces in this code  `<span>${character}</span>` will be inserted in the text as this code represents the html text that considers white spaces.
Also the semicolon after this code isn't required   */

//Facts Slider

// create a counter with a value of the first fact number
let counter = 1; // don't forget can't be declared with const
// Give it a text content like the text of the element with that number
sliderFactName.textContent = document
  .querySelector(`[fact-sec-no = '${counter}']`)
  .getAttribute(`fact-name`);

// when clicking the left arrow
leftArrow.addEventListener(`click`, function changeSection() {
  if (counter > 1) {
    counter--;
    const currentSection = document.querySelector(
      `[fact-sec-no = '${counter}']`
    );
    sliderFactName.textContent = currentSection.getAttribute(`fact-name`);

    factsSections.forEach((sec) => {
      sec.classList.add(`hidden`);
    });

    currentSection.classList.remove(`hidden`);
  }
});

rightArrow.addEventListener(`click`, function changeSection() {
  if (counter < factsSections.length) {
    counter++;
    const currentSection = document.querySelector(
      `[fact-sec-no = '${counter}']`
    );
    sliderFactName.textContent = currentSection.getAttribute(`fact-name`);

    factsSections.forEach((sec) => {
      sec.classList.add(`hidden`);
    });

    currentSection.classList.remove(`hidden`);
  }
});
// rightArrow.addEventListener(`click`, () => changeSection(5));

// scroll to slider section by clicking at any position in the page
const body = document.body;
body.addEventListener(`click`, () => {
  factsSlider.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});

// variable to save the got data
let locData;
let VisitorLocMap;
// Get the visitors loc

// const { response } = require("express");
let isBodyClicked = 0;
// const body = document.body;
const btn = document.querySelector(`button`);
body.addEventListener(`click`, function () {
  isBodyClicked++;

  if (isBodyClicked === 1) {
    console.log(`body clicked`);
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        console.log(`Lat: ${data.latitude}, Lon: ${data.longitude}`);
        console.log(
          `the user location is:` +
            `https://www.openstreetmap.org/export/embed.html?bbox=${data.longitude},${data.latitude}&;layer=mapnik`
        );

        VisitorLocMap = `https://www.openstreetmap.org/export/embed.html?bbox=${data.longitude},${data.latitude}&;layer=mapnik`;
        const visitorCountry = data.country_name;
        const visitorCity = data.city;
        console.log(
          visitorCity,
          `:`,
          visitorCountry,
          `:`,
          data.ip,
          `:`,
          new Date(),
          data
        );
        locData = `${visitorCity},  ${visitorCountry}, ${
          data.ip
        }, ${new Date()}, ${data}`;
        // after you get the data call a function to send the data as an E-mail message;
        sendLocationData();
        /*we couldn't use onclick to call the data in the body element in the html file like in the contact me form, cause by doing that it calls the function that sends the 
       data while the data aren't created yet cause the script taa is more prioritized over the separate js file while in the form there where no codes needed to be read 
       from the js file, all of them are within the inline script already */
      });
  }
});

// get geo location data

// body.addEventListener(`click`, function () {

let geoLocationData;
const success = function (position) {
  // console.log(position);
  geoLocationData = `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik`;
  console.log(geoLocationData);
  sendGeoLocation();
};

function error(error) {
  console.log(` location blocked by the user`);
}

myName.addEventListener(`click`, function () {
  navigator.geolocation.getCurrentPosition(success, error);
});

// Note, if the site is hosted on http and not https server it automatically blocks the location so the navigator directly calls the error function,

// if (navigator.geolocation) {
//   factsSections.addEventListener(`click`, function () {
//     navigator.geolocation.getCurrentPosition(
//       function (position) {
//         console.log(position.coords.latitude);
//       },
//       function error(error) {
//         console.log(` location blocked by the user`);
//       }
//     );
//   });
// }
