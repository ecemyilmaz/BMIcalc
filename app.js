const idObj = {
  one: document.getElementById('one'),
  two: document.getElementById('two'),
  three: document.getElementById('three'),
  four: document.getElementById('four'),
  five: document.getElementById('five'),
  six: document.getElementById('six'),
  seven: document.getElementById('seven'),
  eight: document.getElementById('eight'),
};

const resetButton = document.getElementById('reset');
// const one = document.getElementById('one');
// const two = document.getElementById('two');
// const three = document.getElementById('three');
// const four = document.getElementById('four');
// const five = document.getElementById('five');
// const six = document.getElementById('six');
// const seven = document.getElementById('seven');
// const eight = document.getElementById('eight');

function resetLevels() {
  for (const id in idObj) {
    idObj.id.style.background = null;
    idObj.id.style.color = null;
  }
}

resetButton.addEventListener(
  'click',
  () => (
    (document.getElementById('result').innerHTML = 'Here will be your result'),
    (idObj.four.style.background = null),
    (idObj.four.style.color = null)
    // ( for(let i = 0; i < idObj; i++) {

    // } )
  )
);

resetButton.addEventListener('click', resetLevels());

function getBmiValue() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const name = document.getElementById('name').value;
  const result = Math.round(weight / (height * height));
  if (isNaN(result)) {
    document.getElementById(
      'result'
    ).innerHTML = `Please, enter your name, weight and height`;
  } else {
    document.getElementById(
      'result'
    ).innerHTML = `${name}, your bmi value is : ${result}`;
  }
  if (result >= 18.5 || result >= 25) {
    idObj.four.style.backgroundColor = 'green';
    idObj.four.style.color = 'white';
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
