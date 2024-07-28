faultyCalc = () => {
  let input1 = document.getElementById("number1").value;
  let input2 = document.getElementById("number2").value;
  let operator = document.getElementById("operator").value;
  let randomNumber = Math.random();

  if (input1 === "" || input2 === "" || operator === "") {
    alert("Please fill up the form");
    return;
  }
  if (operator === "/" && input2 === "0") {
    alert("Cannot divide by zero");
    return;
  }

  if (randomNumber < 0.1) {
    let res =
      operator === "+"
        ? input1 - input2
        : operator === "-"
        ? input1 / input2
        : operator === "*"
        ? input1 + input2
        : input1 ** input2;

    document.getElementsByTagName("div")[0].innerHTML = res;
  } else {
    let res =
      operator === "+"
        ? input1 + input2
        : operator === "-"
        ? input1 - input2
        : operator === "*"
        ? input1 * input2
        : input1 / input2;

    document.getElementsByTagName("div")[0].innerHTML = res;
  }
};
