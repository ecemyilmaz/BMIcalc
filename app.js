const resetButton = document.getElementById('reset');
const SUBMIT = document.getElementById('submit');
const TD = document.getElementsByTagName('td');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');

// resetButton.addEventListener('click', () => (four.style = null));
resetButton.addEventListener('click', function resetColor() {
  for (const el of TD) {
    el.style.backgroundColor = 'white';
    el.style.color = 'black';
  }
});

resetButton.addEventListener(
  'click',
  () =>
    (document.getElementById('result').innerHTML = 'Here will be your result')
);

// resetButton.addEventListener('click', function reset() {
//   document.getElementById('result').innerHTML = 'Here will be your result';
//   // four.style.backgroundColor = null;
//   four.style = null;
// });

function getBmiValue() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const name = document.getElementById('name').value;
  const result = (weight / (height * height)).toFixed(2);
  if (isNaN(result) || result === Infinity) {
    document.getElementById(
      'result'
    ).innerHTML = `Please, enter your name, weight and height`;
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `${name}, your bmi value is : ${result}`;
  }
  // if (result >= 18.5 || result >= 25) {
  //   four.style.backgroundColor = 'green';
  //   four.style.color = 'white';
  // }
  if (result < 16) {
    one.style.backgroundColor = '#000cff';
    one.style.color = 'white';
  } else if (result >= 16 && result < 18.5) {
    two.style.backgroundColor = '#54a4e5';
    two.style.color = 'white';
  } else if (result >= 18.5 && result < 25) {
    three.style.backgroundColor = '#66d2e2';
    three.style.color = 'white';
  } else if (result >= 25 && result < 30) {
    four.style.backgroundColor = '#54e562';
    four.style.color = 'white';
  }
}

function check() {
  const age = document.fform.age.value;
  const bmi = document.fform.bmi.value;
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
