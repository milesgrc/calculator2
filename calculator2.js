let input = '';
const result = document.querySelector('#result');

function addToInput(value) {
  input += value;
  result.value = input;
}

function calculate() {
  result.value = eval(input);
}