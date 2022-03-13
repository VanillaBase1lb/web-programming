function multiply2() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("result1").innerHTML = num1 * num2;
}

function divide2() {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  document.getElementById("result1").innerHTML = num1 / num2;
}

function celsiusToFahrenheit() {
  let celsius = document.getElementById("temperature").value;
  let fahrenheit = (celsius * 9) / 5 + 32;
  document.getElementById("result2").innerHTML =
    celsius + "\xB0C is " + fahrenheit + "\xB0F";
}

function fahrenheitToCelsius() {
  let fahrenheit = document.getElementById("temperature").value;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("result2").innerHTML =
    fahrenheit + "\xB0F is " + celsius + "\xB0C";
}

function checkOrder() {
  let num1 = document.getElementById("1num").value;
  let num2 = document.getElementById("2num").value;
  let num3 = document.getElementById("3num").value;
  if (num2 > num1 && num3 > num2) {
    document.getElementById("result3").innerHTML = "Strict mode";
  } else if (num3 > num1) {
    document.getElementById("result3").innerHTML = "Soft mode";
  } else {
    document.getElementById("result3").innerHTML = "Not increasing";
  }
}

function digitSum() {
  let n = document.getElementById("num").value;
  if (n === 0) {
    document.getElementById("result4").innerHTML = 0;
  }
  let sum = 0;
  if (n % 9 === 0) {
    sum = 9;
  } else {
    sum = n % 9;
  }
  document.getElementById("result4").innerHTML = sum;
}
