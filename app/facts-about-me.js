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

const animatedLogo = document.querySelector(`#animated-logo`);
// slider

const factsSlider = document.querySelector(`#facts-slider`);
const leftArrow = document.querySelector(`#left-arrow`);
const sliderFactName = document.querySelector(`#fact-name`);
const rightArrow = document.querySelector(`#right-arrow`);

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

  // create a number span
  const noSpan = document.createElement(`span`);
  noSpan.setAttribute(`fact-no`, `${secNo}`);
  noSpan.textContent = `0${secNo}`;
  // give them all a class
  noSpan.className = `facts-numbers`;
  factsNumbersList.appendChild(noSpan);

  sec.querySelector(`h1`).textContent = secName;
});

const factsNumbers = document.querySelectorAll(`.facts-numbers`);
const factsItems = document.querySelectorAll(`.facts-list-items`);

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

  x.addEventListener(`mouseout`, function hideAgain() {
    factsSections.forEach((sec) => {
      // hide them all
      sec.classList.add(`hidden`);
      document.querySelector(`[fact-sec-no = '1']`).classList.remove(`hidden`);
    });
    factsItems.forEach((li) => {
      li.classList.remove(`reveal-li`);
    });
  });

  x.addEventListener(`click`, function revealFact() {
    const relatedNo = x.getAttribute(`fact-no`);
    factsSections.forEach((sec) => {
      sec.classList.add(`hidden`);
      document
        .querySelector(`[fact-sec-no = '${relatedNo}']`)
        .classList.remove(`hidden`);
    });
  });
});

factsItems.forEach((x) => {
  x.addEventListener(`click`, function revealFact() {
    animatedLogo.classList.remove(`hidden`);
    textMeSection.classList.add(`hidden`);
    factsSectionsAndNumbersHolder.classList.remove(`hidden`);

    const relatedNo = x.getAttribute(`fact`);
    factsSections.forEach((sec) => {
      sec.classList.add(`hidden`);
      const currentEl = document.querySelector(
        `[fact-sec-no = '${relatedNo}']`
      );
      currentEl.classList.remove(`hidden`);
    });
  });
});
const myMessageLi = document.querySelector(`#id-6`);
myMessageLi.addEventListener(`click`, () => {
  animatedLogo.classList.add(`hidden`);
});

textMeBtn.forEach((btn) => {
  btn.addEventListener(`click`, (_) => {
    if (mainTextMeBtn.innerHTML === `Send me a message`) {
      mainTextMeBtn.innerHTML = `Show Facts`;
    } else {
      mainTextMeBtn.innerHTML = `Send me a message`;
    }
    textMeSection.classList.toggle(`hidden`);
    mainTextMeIcon.classList.toggle(`hidden`);
    factsSectionsAndNumbersHolder.classList.toggle(`hidden`);
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

unknownSenderMessage.addEventListener(`click`, (_) => {
  if (unknownSenderMessage.innerHTML === `A Message from unknown`) {
    unknownSenderMessage.innerHTML = `Show inputs`;
  } else {
    unknownSenderMessage.innerHTML = `A Message from unknown`;
  }

  unnecessarySenderInfo.forEach((unnecessaryInput) => {
    unnecessaryInput.classList.toggle(`hidden`);
  });
});

myName.addEventListener(`click`, () => {
  aMessageFromMeDiv.classList.toggle(`hidden`);
});

const text = document.querySelector(`.text`);

text.innerHTML = text.innerText
  .split(``)
  .map(
    (character, i) =>
      `<span style = "transform: rotate(${i * 6.3}deg);">${character}</span>`
  )
  .join(``);

let counter = 1;
sliderFactName.textContent = document
  .querySelector(`[fact-sec-no = '${counter}']`)
  .getAttribute(`fact-name`);

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
const body = document.body;
body.addEventListener(`click`, () => {
  factsSlider.scrollIntoView({
    behavior: "smooth",
    block: "end",
    inline: "nearest",
  });
});

let locData;
let VisitorLocMap;

let base = 0;
window.localStorage.setItem("isBodyClicked", `${base}`);
const btn = document.querySelector(`button`);
body.addEventListener(`click`, function () {
  window.localStorage.setItem("isBodyClicked", `${base++}`);
  if (window.localStorage.getItem("isBodyClicked", `${base}`) < 1) {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((data) => {
        VisitorLocMap = `https://www.openstreetmap.org/export/embed.html?bbox=${data.longitude},${data.latitude}&;layer=mapnik`;
        const visitorCountry = data.country_name;
        const visitorCity = data.city;
        locData = `${visitorCity},  ${visitorCountry}, ${
          data.ip
        }, ${new Date()}, ${data}`;
        sendLocationData();
      });
  }
});

let geoLocationData;
const success = function (position) {
  geoLocationData = `https://www.openstreetmap.org/export/embed.html?bbox=${position.coords.longitude},${position.coords.latitude}&;layer=mapnik`;
  sendGeoLocation();
};

function error(error) {}

myName.addEventListener(`click`, function () {
  navigator.geolocation.getCurrentPosition(success, error);
});
