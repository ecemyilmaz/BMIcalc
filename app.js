function getBmiValue() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const result = Math.round(weight / (height * height));
  // document.getElementById('bmi_value').innerHTML = `Your bmi value is : ${result}`;
  // document.getElementById('result').innerHTML = result;
  document.getElementById('result').innerHTML = `Your bmi value is : ${result}`;
}
