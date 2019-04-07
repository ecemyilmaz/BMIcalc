function getBmiValue() {
  const weight = Number(document.getElementById('weight').value);
  const height = Number(document.getElementById('height').value);
  const result = weight / (height * height);
  document.getElementById('result').innerHTML = `Your bmi value is : ${result}`;
}
