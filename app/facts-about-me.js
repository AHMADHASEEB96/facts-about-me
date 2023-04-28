`use strict`;

// Elements

const factsSectionsAndNumbersHolder = document.querySelector(
  `#facts-sections-and-numbers`
);
const factsSections = document.querySelectorAll(`.facts-sections`);
const factsList = document.querySelector(`#facts-list`);
const factsNumbersList = document.querySelector(`#facts-numbers-holder`);
const textMeBtn = document.querySelectorAll(`.text-me-btn`);
const textMeSection = document.getElementById(`text-me`);
const unknownSenderMessage = document.querySelector(`.hide-sender-info`);
const unnecessarySenderInfo = document.querySelectorAll(`.hide-info`);
const aMessageFromMeDiv = document.getElementById(`about-me`);
const myName = document.getElementById(`my-name`);

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
  // give it a text
  listItem.textContent = `${secName}`;
  // give them all a class
  listItem.className = `facts-list-items`;
  // Append the list item to the facts list
  factsList.appendChild(listItem);
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

// When clicking the text me btn

textMeBtn.forEach((btn) => {
  btn.addEventListener(`click`, (_) => {
    textMeSection.classList.remove(`hidden`);
    factsSectionsAndNumbersHolder.classList.add(`hidden`);
  });
});

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


// at the screen size of the mobile phones convert the list items texts into numbers to fit the screen size
// function myFunction(x) {
//   if (x.matches) {
//     // If media query matches
//     factsItems.forEach((li) => {
//       const liNumber = li.getAttribute(`fact`);
//       li.textContent = `0${liNumber}`;
//     });
//   } else {
//     // get the name of the realted section
//     factsItems.forEach((li) => {
//       const liNumber = li.getAttribute(`fact`);
//       li.textContent = `0${liNumber}`;
//       const currentEl = document.querySelector(`[fact-sec-no = '${liNumber}']`);

//       li.textContent = currentEl.getAttribute(`fact-name`);
//     });
//   }
// }

// var x = window.matchMedia("(max-width: 700px)");
// myFunction(x); // Call listener function at run time
// x.addListener(myFunction); // Attach listener function on state changes
