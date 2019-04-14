function getBmiValue() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const name = document.getElementById('name').value;
  const result = Math.round(weight / (height * height));
  // document.getElementById('bmi_value').innerHTML = `Your bmi value is : ${result}`;
  // document.getElementById('result').innerHTML = result;
  document.getElementById(
    'result'
  ).innerHTML = `${name}, your bmi value is : ${result}`;
}

function check() {
  const age = document.fform.age.value;
  const bmi = document.fform.bmi.value;
  const sex = parseInt(document.getElementById('male').checked ? 1 : 0);
  let fat;

  if (age <= 15) {
    fat = Math.round((1.51 * bmi - 0.7 * age - 3.6 * sex + 1.4) * 100) / 100;
  } else {
    fat = Math.round((1.2 * bmi + 0.23 * age - 10.8 * sex - 5.4) * 100) / 100;
  }
  document.getElementById('fat').value = fat;
}
