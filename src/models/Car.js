import Validator from '../utils/Validator';

class Car {
  #name;

  constructor(carName) {
    this.#validate(carName);
    this.#name = carName;
  }

  #validate(carName) {
    Validator.isValidCarNameLengthRange(carName);
    Validator.isValidCarNameRule(carName);
  }

  addNameForDuplicatedCheck(uniqueCarNames) {
    uniqueCarNames.add(this.#name);
  }
}

export default Car;