const randomNumber = function (numberFrom, numberBefore) {
  if (numberBefore <= numberFrom || numberFrom < 0) {
    return 0;
  }

  return Math.floor(Math.random() * (numberBefore - numberFrom + 1) + numberFrom);
};

const getRandomArrayElement = (elements) => {
  return elements[randomNumber(0, elements.length - 1)];
};

export {getRandomArrayElement};
