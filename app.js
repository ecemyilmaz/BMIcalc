const resetButton = document.getElementById('reset');
const SUBMIT = document.getElementById('submit');
const result = document.getElementById('result');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');

function levelOne() {
  one.classList.add('one');
  two.className = '';
  three.className = '';
  four.className = '';
  five.className = '';
  six.className = '';
}

function levelTwo() {
  one.className = '';
  two.classList.add('two');
  three.className = '';
  four.className = '';
  five.className = '';
  six.className = '';
}

function levelThree() {
  one.className = '';
  two.className = '';
  three.classList.add('three');
  four.className = '';
  five.className = '';
  six.className = '';
}

function levelFour() {
  one.className = '';
  two.className = '';
  three.className = '';
  four.classList.add('four');
  five.className = '';
  six.className = '';
}

function levelFive() {
  one.className = '';
  two.className = '';
  three.className = '';
  four.className = '';
  five.classList.add('five');
  six.className = '';
}

function levelSix() {
  one.className = '';
  two.className = '';
  three.className = '';
  four.className = '';
  five.className = '';
  six.classList.add('six');
}

function noStyles() {
  one.className = '';
  two.className = '';
  three.className = '';
  four.className = '';
  five.className = '';
  six.className = '';
}

function getBmiValue() {
  let weight = Number(document.getElementById('weight').value);
  let height = Number(document.getElementById('height').value);
  let name = document.getElementById('name').value;
  let resultBMI = (weight / (height * height)).toFixed(2);

  if (name == "" || isNaN(resultBMI) || resultBMI == Infinity || resultBMI == 0) {
    result.innerHTML = `Please, enter your name, weight and height`;
    noStyles();
  } else {
    result.innerHTML = `${name}, your bmi value is : ${resultBMI}`;
    colorResultBMI();
  }
  function colorResultBMI(){
    if (resultBMI < 16) {
      levelOne();
    } else if (resultBMI >= 16 && resultBMI < 18.5) {
      levelTwo();
    } else if (resultBMI >= 18.5 && resultBMI < 25) {
      levelThree();
    } else if (resultBMI >= 25 && resultBMI < 30) {
      levelFour();
    } else if (resultBMI >= 30 && resultBMI < 35) {
      levelFive();
    } else if (resultBMI >= 35) {
      levelSix();
    }
  }
}

function check() {
  const age = document.fatform.age.value;
  const bmi = document.fatform.bmi.value;
  const gender = parseInt(document.getElementById('male').checked ? 1 : 0);
  let fat;

  if (age <= 15) {
    fat = Math.round((1.51 * bmi - 0.7 * age - 3.6 * gender + 1.4) * 100) / 100;
  } else {
    fat =
      Math.round((1.2 * bmi + 0.23 * age - 10.8 * gender - 5.4) * 100) / 100;
  }
  document.getElementById('fat').value = fat;
}

SUBMIT.addEventListener('click', getBmiValue);

function resetColor() {
  document.fatform.age.value = '';
  document.fatform.bmi.value = '';
  document.getElementById('fat').value = '';
  one.className = '';
  two.className = '';
  three.className = '';
  four.className = '';
  five.className = '';
  six.classList = '';
  result.innerHTML = 'Here will be your result';
}

resetButton.addEventListener('click', resetColor);
