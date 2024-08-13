import { DELAY_TIME } from './constants.js';

const createNewElement = (tagName, className) => {
  const newElement = document.createElement(tagName);
  newElement.classList.add(className);
  return newElement;
};

const isEscapeKey = (evt) => evt.key === 'Escape';

const hasDuplicate = (arr) => {
  const uniqEl = new Set(arr);
  return uniqEl.size !== arr.length;
};

function addStopPropagation (evt) {
}


const shuffleArray = (arr) => {
};

function debounce (callback, timeoutDelay = DELAY_TIME) {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
}

export {
  createNewElement,
  isEscapeKey,
  hasDuplicate,
  addStopPropagation,
  shuffleArray,
  debounce
};
